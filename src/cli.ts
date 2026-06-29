#!/usr/bin/env node
import { explainCmd } from './commands/explain';
import { scaffoldCmd } from './commands/scaffold';
import { summarizeCmd } from './commands/summarize';

async function main(){
  const args = process.argv.slice(2);
  const cmd = args[0];
  const rest = args.slice(1).join(' ');
  if(cmd==='explain'){
    console.log(await explainCmd(rest));
  } else if(cmd==='scaffold'){
    console.log(await scaffoldCmd(rest));
  } else if(cmd==='summarize'){
    console.log(await summarizeCmd(rest));
  } else {
    console.log('Usage: myai <explain|scaffold|summarize> [args]');
  }
}
main();
