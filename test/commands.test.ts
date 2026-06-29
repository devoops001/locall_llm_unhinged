import { describe, it, expect } from 'vitest';
import { explainCmd } from '../src/commands/explain';
import { scaffoldCmd } from '../src/commands/scaffold';
import { summarizeCmd } from '../src/commands/summarize';

describe('commands', ()=>{
  it('explain', async ()=>{
    const r = await explainCmd('hello');
    expect(r).toContain('Reasoning');
  });
  it('scaffold', async ()=>{
    const r = await scaffoldCmd('foo');
    expect(r).toContain('Scaffolded');
  });
  it('summarize', async ()=>{
    const r = await summarizeCmd('bar');
    expect(r).toContain('Summary');
  });
});
