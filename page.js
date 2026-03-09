"use client";

import { useState } from "react";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [names, setNames] = useState([]);

  const prefixes = ["Neo", "Ultra", "Meta", "Hyper", "Nova", "Prime"];
  const suffixes = ["ify", "io", "ly", "lab", "hub", "works"];

  const generateNames = () => {
    let results = [];

    for (let i = 0; i < 10; i++) {
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

      let base = keyword || "brand";
      base = base.charAt(0).toUpperCase() + base.slice(1);

      results.push(prefix + base + suffix);
    }

    setNames(results);
  };

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>Brand Name Generator</h1>

      <input
        style={styles.input}
        type="text"
        placeholder="Enter a keyword..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <button style={styles.button} onClick={generateNames}>
        Generate Names
      </button>

      <div style={styles.results}>
        {names.map((name, index) => (
          <div key={index} style={styles.nameCard}>
            {name}
          </div>
        ))}
      </div>
    </main>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 20px",
    fontFamily: "Arial",
    background: "#f4f4f4"
  },

  title: {
    fontSize: "36px",
    marginBottom: "30px"
  },

  input: {
    padding: "12px",
    fontSize: "16px",
    width: "260px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },

  button: {
    padding: "12px 20px",
    fontSize: "16px",
    background: "#000",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "30px"
  },

  results: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "12px",
    width: "100%",
    maxWidth: "600px"
  },

  nameCard: {
    background: "white",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center",
    fontWeight: "bold",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  }
};