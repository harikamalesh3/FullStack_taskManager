import { useState } from "react";
import API from "../services/api";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/tasks", { title, description });
    window.location.reload();
  };

  return (
    <div className="card shadow p-3 mb-4">
      <h5 className="mb-3 text-primary">Create New Task</h5>

      <form onSubmit={handleSubmit}>
        <div className="row g-2">

          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Task Title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="col-md-2 d-grid">
            <button className="btn btn-success">
              Add
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default TaskForm;