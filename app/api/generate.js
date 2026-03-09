import OpenAI from "openai";

const openai = new OpenAI({
 apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req) {

 const { businessType, style, keywords } = await req.json();

 const prompt = `
Generate 10 unique brand names.

Business type: ${businessType}
Brand style: ${style}
Keywords: ${keywords}

Make them short, memorable, and creative.
Return only the names.
`;

 const response = await openai.chat.completions.create({
   model: "gpt-4o-mini",
   messages: [
     { role: "user", content: prompt }
   ]
 });

 const result = response.choices[0].message.content;

 return Response.json({ result });

}