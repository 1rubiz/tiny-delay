import delay from './index.js';

async function go() {
  console.log('Start');
  await delay(1500);
  console.log('1.5s later!');
}
go();
