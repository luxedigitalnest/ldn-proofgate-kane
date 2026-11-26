import {test} from 'node:test';import assert from 'node:assert/strict';import {objectives,commandArgs,classify,parseRunEnd} from './kane-plan.mjs';
test('three original synthetic-only objectives',()=>{assert.equal(objectives.length,3);assert(objectives.every(o=>typeof o==='string'&&o.length>80))});
test('argument boundaries and documented flags',()=>{const x=commandArgs(objectives[0],'http://127.0.0.1:8080/');assert.equal(x[0],'run');assert.equal(x[1],objectives[0]);assert(x.includes('--agent'));assert(x.includes('--headless'));assert(x.includes('--timeout'))});
test('reject external URL, credentials and unexpected routes',()=>{for(const url of ['https://example.com/','http://user:pass@127.0.0.1/','http://127.0.0.1:8080/admin','http://127.0.0.1:8080/?x=1'])assert.throws(()=>commandArgs(objectives[0],url))});
// Synthetic NDJSON fixtures only; no real CLI runs or credentials.
const stream=(...events)=>events.map(event=>JSON.stringify(event)).join('\n');
const start={type:'stream_start',surface:'run',cli_version:'fixture'};
const passed={type:'run_end',status:'passed',summary:'Synthetic fixture'};
const failed={type:'run_end',status:'failed',summary:'Synthetic fixture'};
test('consistent terminal result and exit classify correctly',()=>{
  assert.equal(classify(0,null,stream(start,{step:1,status:'done'},passed)),'pass');
  assert.equal(classify(1,null,stream(start,failed)),'fail');
  assert.equal(classify(2,null,stream(start)),'error');
  assert.equal(classify(null,'SIGTERM',stream(start,passed)),'error');
});
test('missing or truncated terminal evidence fails closed',()=>{
  for(const stdout of ['',undefined,'not json',stream(start,{step:1,status:'done'}),stream(start)+'\n{"type":"run_end"'])assert.equal(classify(0,null,stdout),'error');
});
test('contradictory exit code and terminal status fail closed',()=>{
  assert.equal(classify(0,null,stream(start,failed)),'error');
  assert.equal(classify(1,null,stream(start,passed)),'error');
  assert.equal(classify(2,null,stream(start,passed)),'error');
});
test('duplicate, nonterminal and unsupported terminal events fail closed',()=>{
  for(const stdout of [stream(start,passed,passed),stream(start,passed,{step:2,status:'done'}),stream(start,{type:'run_end',status:'complete'})])assert.equal(classify(0,null,stdout),'error');
});
test('non-JSON diagnostics do not replace structured terminal result',()=>{
  const stdout='diagnostic text\n'+stream(start,passed)+'\n';
  assert.deepEqual(parseRunEnd(stdout),passed);
  assert.equal(classify(0,null,stdout),'pass');
});
