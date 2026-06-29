export async function explainCmd(text:string):Promise<string>{
  if(!text) return 'Please provide text to explain.';
  return `Reasoning: The input describes ${text}`;
}
