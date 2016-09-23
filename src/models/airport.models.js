import mongoose from 'mongoose';
import find_one_or_create from 'mongoose-find-one-or-create';


const Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;


const airport_model = new Schema({
	name: String,
	link: String,
	reviews: [Schema.Types.Mixed],
});

airport_model.plugin(find_one_or_create);


export default mongoose.model('Airport', airport_model);