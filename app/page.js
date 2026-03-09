"use client";
import { useState } from "react";

export default function Home() {
  const [brand, setBrand] = useState("");

  const prefixes = [
    "Neo","Ultra","Nova","Prime","Zen","Alpha","Pixel","Meta",
    "Aero","Flux","Echo","Vibe","Lumo","Orbit"
  ];

  const suffixes = [
    "ify","io","ora","lab","verse","works","sy","core",
    "loop","hub","nova","zone","forge","craft"
  ];

  const endings = [
    "Labs","Studio","Co","Brand","Collective","Group","Works"
  ];

  function generateBrand() {
    const p = prefixes[Math.floor(Math.random() * prefixes.length)];
    const s = suffixes[Math.floor(Math.random() * suffixes.length)];
    const e = endings[Math.floor(Math.random() * endings.length)];

    const style = Math.floor(Math.random()*3);

    if(style === 0) setBrand(`${p}${s}`);
    if(style === 1) setBrand(`${p}${s} ${e}`);
    if(style === 2) setBrand(`${p}${p.slice(-2)}${s}`);
  }

  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <h1 style={styles.title}>Brand Name Generator</h1>

        <p style={styles.subtitle}>
          Generate unique startup or clothing brand names instantly
        </p>

        <button onClick={generateBrand} style={styles.button}>
          Generate Brand
        </button>

        {brand && (
          <div style={styles.result}>
            {brand}
          </div>
        )}

        <p style={styles.footer}>
          Click generate until you find something perfect.
        </p>
      </div>
    </main>
  );
}

const styles = {
  main:{
    height:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background:"linear-gradient(135deg,#0f0f0f,#1a1a1a)",
    color:"white",
    fontFamily:"system-ui"
  },

  card:{
    background:"#1f1f1f",
    padding:"50px",
    borderRadius:"14px",
    textAlign:"center",
    width:"420px",
    boxShadow:"0 10px 40px rgba(0,0,0,0.5)"
  },

  title:{
    fontSize:"36px",
    marginBottom:"10px"
  },

  subtitle:{
    color:"#aaa",
    marginBottom:"30px"
  },

  button:{
    padding:"14px 28px",
    fontSize:"16px",
    border:"none",
    borderRadius:"8px",
    background:"white",
    color:"black",
    cursor:"pointer",
    marginBottom:"30px"
  },

  result:{
    fontSize:"28px",
    fontWeight:"bold",
    padding:"18px",
    background:"#2a2a2a",
    borderRadius:"8px",
    marginTop:"10px"
  },

  footer:{
    marginTop:"25px",
    fontSize:"13px",
    color:"#666"
  }
};