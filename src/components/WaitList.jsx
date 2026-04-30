return (
  <section style={{
    padding: "120px 20px",
    textAlign: "center",
    background: "transparent",
    color: "white"
  }}>
    
    <h2 style={{
      fontSize: "3rem",
      fontWeight: "700",
      marginBottom: "10px",
      background: "linear-gradient(90deg, #00c2ff, #7a5cff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }}>
      Join the Future
    </h2>

    <p style={{
      color: "#aaa",
      fontSize: "1.2rem",
      marginBottom: "40px"
    }}>
      Get early access to Triune’s AI ecosystem
    </p>

    <form onSubmit={handleSubmit} style={{
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      flexWrap: "wrap"
    }}>
      
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{
          padding: "16px",
          width: "320px",
          borderRadius: "10px",
          border: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(255,255,255,0.05)",
          color: "white",
          outline: "none",
          backdropFilter: "blur(10px)"
        }}
      />

      <button type="submit" style={{
        padding: "16px 30px",
        background: "linear-gradient(90deg, #00c2ff, #7a5cff)",
        border: "none",
        borderRadius: "10px",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow: "0 0 15px rgba(0,194,255,0.5)"
      }}>
        Join Waitlist
      </button>

    </form>

  </section>
);