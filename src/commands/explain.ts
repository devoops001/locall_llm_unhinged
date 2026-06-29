export async function explainCmd(text:string):Promise<string>{
  if(!text) return 'Please provide text to explain.';
  // Deterministic offline template: simple heuristic
  const t = text.trim();
  return `Reasoning about: ${t} | principle: clarity, usefulness, and safety`;
}
