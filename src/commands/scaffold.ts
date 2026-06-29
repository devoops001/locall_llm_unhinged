export async function scaffoldCmd(name:string):Promise<string>{
  const nm = name || 'project';
  return `Scaffolded starter for ${nm}`;
}
