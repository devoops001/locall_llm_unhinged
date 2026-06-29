export async function summarizeCmd(target:string):Promise<string>{
  if(!target) return 'Please provide path or text to summarize.';
  return `Summary of ${target}`;
}
