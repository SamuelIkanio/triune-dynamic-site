import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function WaitList() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("waitlist")
      .insert([{ email }]);

    if (error) {
      setMessage("Something went wrong ❌");
      console.error(error);
    } else {
      setMessage("You're on the list 🚀");
      setEmail("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Join Our Waitlist</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "10px",
            width: "250px",
            marginRight: "10px"
          }}
        />

        <button type="submit">Join</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}