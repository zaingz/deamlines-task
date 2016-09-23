import neat_csv from 'neat-csv';
import fs from 'fs';
import Airport from '../models/airport.models'
import Promise from 'bluebird'; 

Promise.promisifyAll(fs); 
let csv;
let row_itrator = row();

function dumper(data){
	if(!data)
		return;

	 let rev = {
	  	title: data.title,
		author: data.author,
		author_country: data.author_country,
		date: (data.date != null) ? Date.parse(data.date) : "",
		content: data.content,
		experience_airport: data.experience_airport,
		date_visit: (data.date_visit != null) ? Date.parse(data.date_visit) : "",
		type_traveller: data.type_traveller,
		overall_rating: data.overall_rating,
		queuing_rating: data.queuing_rating,
		terminal_cleanliness_rating: data.terminal_cleanliness_rating,
		terminal_seating_rating: data.terminal_seating_rating,
		terminal_signs_rating: data.terminal_signs_rating,
		food_beverages_rating: data.food_beverages_rating,
		airport_shopping_rating: data.airport_shopping_rating,
		wifi_connectivity_rating: data.wifi_connectivity_rating,
		airport_staff_rating: data.airport_staff_rating,
		recommended: data.recommended
	};


	Airport.findOneOrCreate({'name': data.airport_name}, {'name': data.airport_name, 'link': data.link},(err, airport)=> {
		airport.reviews.push(rev)
		airport.save((err, data)=>{
			dumper(row_itrator.next().value)
		})
	})
}


function load_csv_to_db(){

	fs.readFileAsync('airport.csv')
	.then((file)=>{
		neat_csv(file)
		.then((csv_data)=>{
			csv = csv_data
	 		dumper(row_itrator.next().value)
		})
	})
}


function* row () {
	for (let i=0; i<csv.length;i++) yield csv[i]
}

export default load_csv_to_db;
