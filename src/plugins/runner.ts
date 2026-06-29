export type Plugin = { name: string; init: ()=>void };

export async function loadPlugins(){
  // Discover JS/TS modules in plugins/ and require/import them dynamically.
  // For MVP, return a static placeholder if no plugins yet.
  const path = await import('path');
  const fs = await import('fs');
  const pluginsDir = path.resolve(process.cwd(), 'plugins');
  let plugins: Plugin[] = [];
  if(fs.existsSync(pluginsDir)){
    for(const f of fs.readdirSync(pluginsDir)){
      if(f.endsWith('.js') || f.endsWith('.ts')){
        try{
          const mod = await import(path.resolve(pluginsDir, f));
          if(mod?.default?.name && typeof mod.default?.init === 'function'){
            plugins.push({ name: mod.default.name, init: mod.default.init });
            mod.default.init();
          }
        }catch(e){ /* ignore bad plugin */ }
      }
    }
  }
  return plugins;
}
