import { useEffect, useState } from "react";
import API from "../services/api";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    API.get("/tasks").then((res) => setTasks(res.data));
  }, []);

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div className="row">
      {tasks.map((task) => (
        <div key={task._id} className="col-md-6 col-lg-4 mb-3">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column">

              <h5 className="card-title text-dark">{task.title}</h5>
              <p className="card-text text-muted">{task.description}</p>

              <span className={`badge 
                ${task.status === "Completed" ? "bg-success" :
                  task.status === "In Progress" ? "bg-warning text-dark" :
                    "bg-secondary"} mb-3`}>
                {task.status}
              </span>

              <div className="mt-auto d-flex justify-content-between">
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => deleteTask(task._id)}
                >
                  Delete
                </button>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;