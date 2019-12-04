#!/usr/bin/env node

const readstdin = require('readstdin');
const program = require('commander');
const fs = require('fs');
const homedir = require('os').homedir();

program
  .description('find json key')
  .option('-k, --key <key>', 'the key to be found')
  .action(async function(cmd) {
  fs.appendFileSync(`${homedir}/tmp`, `${new Date()}\n`);
  let data = null;
  data = await readstdin(); 
  fs.appendFileSync(`${homedir}/tmp`, `>>>>>>>>>>>>\n${JSON.stringify(data)}`);
  if(!data) {
    console.error('no data was piped to the program!');
    return;
  }
  data = JSON.parse(data);
  let results;
  if(Array.isArray(data)) {
    results = data.reduce((acc, item) => {
      if(item[cmd['key']]) {
        let obj = {};
        obj[cmd['key']] = item[cmd['key']];
        acc.push(obj);
      } 
      return acc;
    }, []);
  } else {
    results = data[cmd['key']];
  }
  console.log(JSON.stringify(results, null, 2));
});

program.parse(process.argv);
