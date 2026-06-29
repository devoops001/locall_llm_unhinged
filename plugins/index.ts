export type Plugin = { name:string; init: ()=>void; };
export { loadPlugins } from '../src/plugins/runner';
