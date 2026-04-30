import { useState } from "react";

export default function WaitList() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You're on the list 🚀");
  };

  return (
    <section style={{
      padding: "80px 20px",
      textAlign: "center",
      background: "#0a0f1c",
      color: "white"
    }}>
      <h2 style={{
        fontSize: "2.5rem",
        marginBottom: "10px"
      }}>
        Join Our Waitlist
      </h2>

      <p style={{
        color: "#aaa",
        marginBottom: "30px"
      }}>
        Be the first to experience the future of intelligent systems.
      </p>

      <form onSubmit={handleSubmit} style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        flexWrap: "wrap"
      }}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "12px",
            width: "280px",
            borderRadius: "6px",
            border: "none",
            outline: "none"
          }}
        />

        <button type="submit" style={{
          padding: "12px 20px",
          background: "#00c2ff",
          color: "black",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold"
        }}>
          Join Now
        </button>
      </form>
    </section>
  );
}