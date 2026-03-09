export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "Arial"
    }}>
      <h1>Welcome to My Brand</h1>
      <p>This is the beginning of my clothing brand website.</p>

      <button style={{
        padding: "12px 24px",
        marginTop: "20px",
        fontSize: "16px",
        cursor: "pointer"
      }}>
        Shop Now
      </button>
    </main>
  );
}