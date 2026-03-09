"use client";
import { useState } from "react";

export default function Home() {

const [businessType, setBusinessType] = useState("General Brand");
const [style, setStyle] = useState("Modern");
const [keywords, setKeywords] = useState("");
const [result, setResult] = useState("");

const baseWords = [
"nova","aero","lumo","zen","prime","vibe","flux","orbit",
"pulse","echo","atlas","pixel","forge","rise","core"
];

const endings = [
"labs","co","studio","collective","group","works","brand","supply"
];

function generateName(){

const word = baseWords[Math.floor(Math.random()*baseWords.length)];
const ending = endings[Math.floor(Math.random()*endings.length)];

let keywordPart = keywords ? keywords + " " : "";

let generated = `${keywordPart}${word} ${ending}`;

generated = generated
.replace(/\b\w/g, l => l.toUpperCase());

setResult(generated);

}

return (

<main style={styles.page}>

<header style={styles.header}>
<h1 style={styles.title}>Brand Name Generator</h1>
</header>

<section style={styles.generator}>

<div style={styles.field}>

<label style={styles.label}>Brand Type</label>

<select
style={styles.input}
value={businessType}
onChange={(e)=>setBusinessType(e.target.value)}
>

<option>General Brand</option>
<option>Clothing</option>
<option>Technology</option>
<option>Beauty</option>
<option>Fitness</option>
<option>Food & Beverage</option>
<option>Luxury</option>
<option>Streetwear</option>

</select>

</div>


<div style={styles.field}>

<label style={styles.label}>Name Style</label>

<select
style={styles.input}
value={style}
onChange={(e)=>setStyle(e.target.value)}
>

<option>Modern</option>
<option>Luxury</option>
<option>Minimal</option>
<option>Edgy</option>
<option>Futuristic</option>
<option>Playful</option>

</select>

</div>


<div style={styles.field}>

<label style={styles.label}>Keywords (Optional)</label>

<input
style={styles.input}
type="text"
placeholder="ex: eco, street, glow"
value={keywords}
onChange={(e)=>setKeywords(e.target.value)}
/>

</div>


<button style={styles.button} onClick={generateAIName}>
Generate Name
</button>


{result && (
<div style={styles.result}>
{result}
</div>
)}

</section>

</main>

);
}


const styles = {

page:{
background:"#f5f6f7",
height:"100vh",
fontFamily:"system-ui",
display:"flex",
flexDirection:"column",
alignItems:"center"
},

header:{
marginTop:"80px",
marginBottom:"60px"
},

title:{
fontSize:"42px",
fontWeight:"500",
letterSpacing:"1px",
color:"#111"
},

generator:{
background:"white",
padding:"40px",
borderRadius:"12px",
boxShadow:"0 10px 30px rgba(0,0,0,0.08)",
width:"420px"
},

field:{
display:"flex",
flexDirection:"column",
marginBottom:"20px"
},

label:{
fontSize:"14px",
marginBottom:"6px",
color:"#444"
},

input:{
padding:"12px",
borderRadius:"8px",
border:"1px solid #ddd",
fontSize:"14px"
},

button:{
marginTop:"10px",
padding:"14px",
border:"none",
borderRadius:"8px",
background:"#111",
color:"white",
fontSize:"15px",
cursor:"pointer"
},

result:{
marginTop:"25px",
padding:"16px",
background:"#f2f2f2",
borderRadius:"8px",
fontSize:"20px",
textAlign:"center",
fontWeight:"600"
}

};

async function generateAIName(){

const res = await fetch("/api/generate",{
 method:"POST",
 headers:{
  "Content-Type":"application/json"
 },
 body: JSON.stringify({
  businessType,
  style,
  keywords
 })
});

const data = await res.json();

setResult(data.result);

}