import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You joined the waitlist: " + email);
    setEmail("");
  };

  return (
    <div style={{ marginTop: "40px", textAlign: "center" }}>
      <h2>Join Our Waitlist</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Join</button>
      </form>
    </div>
  );
}