"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function generateResult() {
    if (!input) return;
    setResult(`Generated result for: ${input}`);
  }

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.title}>Generator</h1>
        <p style={styles.subtitle}>Enter something and generate a result</p>

        <input
          style={styles.input}
          type="text"
          placeholder="Type something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button style={styles.button} onClick={generateResult}>
          Generate
        </button>

        {result && (
          <div style={styles.resultBox}>
            <p>{result}</p>
          </div>
        )}
      </div>
    </main>
  );
}

const styles = {
  main: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f0f0f",
    color: "white",
    fontFamily: "Arial"
  },
  container: {
    textAlign: "center",
    width: "400px"
  },
  title: {
    fontSize: "42px",
    marginBottom: "10px"
  },
  subtitle: {
    marginBottom: "30px",
    color: "#aaa"
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "none"
  },
  button: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "none",
    background: "#ffffff",
    color: "#000",
    cursor: "pointer"
  },
  resultBox: {
    marginTop: "25px",
    padding: "15px",
    background: "#1e1e1e",
    borderRadius: "6px"
  }
};