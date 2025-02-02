import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({ name: "", status: "unplaced" });
  const [cards, setCards] = useState([]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setCards([...cards, { ...formData, id: Date.now() }]);
    setFormData({ name: "", status: "unplaced" });
  };

  // Handle card deletion
  const handleDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  // Count placed and unplaced statuses
  const placedCount = cards.filter((card) => card.status === "placed").length;
  const unplacedCount = cards.length - placedCount;

  return (
    <div
      style={{
        padding: "1.5rem",
        fontFamily: "Arial, sans-serif",
        backgroundImage: "url('/assets/background.jpg')", // Replace with your actual file path
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Dynamic Cards App</h1>
      
      {/* Form Section */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#f9f9f9",
            backgroundImage: "url('/assets/input-bg.png')", // Replace with your actual file path
            backgroundSize: "contain",
          }}
          required
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#f9f9f9",
            backgroundImage: "url('/assets/select-bg.png')", // Replace with your actual file path
            backgroundSize: "contain",
          }}
        >
          <option value="unplaced">Unplaced</option>
          <option value="placed">Placed</option>
        </select>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.5rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            backgroundImage: "url('/assets/button-bg.png')", // Replace with your actual file path
            backgroundSize: "cover",
          }}
        >
          Add Card
        </button>
      </form>

      {/* Summary Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.9rem",
          marginBottom: "1rem",
          color: "#333",
          backgroundImage: "url('/assets/summary-bg.png')", // Replace with your actual file path
          backgroundSize: "cover",
          padding: "0.5rem",
        }}
      >
        <p>Placed: {placedCount}</p>
        <p>Unplaced: {unplacedCount}</p>
      </div>

      {/* Cards Section */}
      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              backgroundColor: "white",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              backgroundImage: "url('/assets/card-bg.png')", // Replace with your actual file path
              backgroundSize: "cover",
            }}
          >
            <img
              src="/assets/card-icon.png" // Replace with your actual file path
              alt="Card Icon"
              style={{ width: "50px", height: "50px", marginBottom: "0.5rem" }}
            />
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
                color: "#333",
              }}
            >
              {card.name}
            </h2>
            <p>Status: {card.status}</p>
            <button
              onClick={() => handleDelete(card.id)}
              style={{
                marginTop: "0.5rem",
                padding: "0.5rem",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                backgroundImage: "url('/assets/delete-button-bg.png')", // Replace with your actual file path
                backgroundSize: "cover",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
