export type Plugin = { name:string; init: ()=>void; };
export function loadPlugins(){
  // Placeholder for future dynamic loading
  return [] as Plugin[];
}
