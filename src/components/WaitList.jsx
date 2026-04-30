import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function WaitList() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase
      .from("waitlist")
      .insert([{ email }]);

   if (error) {
  if (
    error.code === "23505" ||
    error.message?.toLowerCase().includes("duplicate")
  ) {
    setMessage("You're already on the list ✅");
  } else {
    setMessage("Something went wrong ❌");
  }

  console.error(error);
} else {
      setMessage("You're on the list 🚀");
      setEmail("");
    }
setTimeout(() => {
        setMessage("");
      }, 3000);
    setLoading(false);
  };

  return (
    <section
      style={{
        margin: "90px auto 80px",
        maxWidth: "760px",
        textAlign: "center",
        fontFamily: "inherit",
      }}
    >
      <div
        style={{
          padding: "34px 28px",
          border: "1px solid rgba(0, 220, 255, 0.25)",
          borderRadius: "22px",
          background: "rgba(255, 255, 255, 0.04)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 0 30px rgba(0, 194, 255, 0.08)",
        }}
      >
        <p
          style={{
            marginBottom: "10px",
            fontSize: "0.78rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#56e6ff",
            fontWeight: 700,
          }}
        >
          Early Access
        </p>

        <h2
          style={{
            marginBottom: "14px",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#ffffff",
          }}
        >
          Join Our Waitlist
        </h2>

        <p
          style={{
            margin: "0 auto 28px",
            maxWidth: "520px",
            color: "rgba(255,255,255,0.72)",
            fontSize: "1rem",
            lineHeight: 1.6,
          }}
        >
          Be first to receive updates on Triune Dynamic’s intelligent product ecosystem.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "min(100%, 360px)",
              padding: "15px 18px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.22)",
              background: "rgba(0,0,0,0.28)",
              color: "#ffffff",
              fontSize: "1rem",
              fontFamily: "inherit",
              outline: "none",
            }}
          />

          <button
  type="submit"
  disabled={loading}
  style={{
    padding: "15px 32px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(90deg, #00c2ff, #5fffb1)",
    color: "#06111f",
    fontWeight: 800,
    fontFamily: "inherit",
    cursor: loading ? "not-allowed" : "pointer",
    opacity: loading ? 0.7 : 1,
    transition: "all 0.25s ease",
    boxShadow: "0 0 22px rgba(0, 220, 255, 0.25)",
    position: "relative",
    zIndex: 10,
  }}
>
  {loading ? "Joining..." : "Join"}
</button>
        </form>

        {message && (
  <p
    style={{
      marginTop: "18px",
      color: message.includes("wrong") ? "#ff6b6b" : "#5fffb1",
      fontWeight: 800,
      transition: "all 0.3s ease",
    }}
  >
    {message}
  </p>
)}
      </div>
    </section>
  );
}