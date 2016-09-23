import mongoose from 'mongoose';
import Airport from '../models/airport.models'

function connect(){
  mongoose.connect('mongodb://localhost/dreamline_database');
  mongoose.Promise = global.Promise;
}

function drop(){
 Airport.remove().exec();
}

export {connect, drop};
