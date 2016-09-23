
import {connect, drop} from './mongo.helpers';
import job from './csv_update.helpers'
import csv_dump from './csv.helpers';


function bootstrap(){

	connect();
	drop();
	job.start();
	csv_dump();


}

export default bootstrap;

