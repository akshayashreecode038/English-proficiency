// AI summary helper.
// - On claude.ai (published as an Artifact) it uses Claude directly.
// - On GitHub Pages or anywhere else, set AI_ENDPOINT to your own backend URL.
//   Your backend should accept POST {"prompt": "..."} and return {"text": "..."}.
//   Keep your API key on that backend, never in this file.
// - If neither is available, askAI returns null and the app shows the built-in summary only.
var AI_ENDPOINT="";

async function askAI(prompt,onText){
if(typeof claude!=="undefined"){
var sm=await claude.use("sample");
if(sm){var r=await sm(prompt,{onText:function(x){onText(x.text)}});return r.text}
}
if(AI_ENDPOINT){
var res=await fetch(AI_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:prompt})});
if(!res.ok)throw {code:"http"};
var d=await res.json();return d.text;
}
return null;
}
