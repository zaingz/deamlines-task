
import cron from 'node-cron'
import csv_dump from './csv.helpers';


const job = cron.schedule('* * */30 * *', () =>{
  console.log('running a task');
  csv_dump();
}, true);


export default job;