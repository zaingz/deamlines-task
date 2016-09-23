
import express from 'express';
import Airport from '../models/airport.models'
const router = express.Router();


router.get('/all/stats', (req, res) => {


	Airport.aggregate(
	   [
	      {
	         $project: {
	         	_id: 0,
	            name: 1,
	            reviews_count: { $size: "$reviews" }
	         }
	      }
	      ,

	        { "$sort": { "reviews_count": -1 } }
	   ]
	).exec((err, data)=>{

		if (!err)
			res.send({airport_stats: data});

	})






})


router.get('/:airport/stats', (req, res) => {

	Airport.findOne({name: req.params.airport}, (err, data)=>{

		if (data){
			const ariport_name = data.name
			const reviews_count = data.reviews.length

			let average_overall =0, recomendations_count = 0;
		
			for (let review of data.reviews){

				average_overall += (!isNaN(parseInt(review.overall_rating))) ? parseInt(review.overall_rating) : 0
				if (review.recommended==="1")
					recomendations_count++
			}
			
			average_overall = average_overall/reviews_count

			res.send({ariport_name: ariport_name, reviews_count: reviews_count,
			average_overall_rating: average_overall, recomendations_count: recomendations_count})
			
		}else
		res.send({})

	})
		
})

router.get('/:airport/reviews', (req, res) => {
	Airport.findOne({name: req.params.airport}, (err, data)=>{
		const reviews = data.reviews

		reviews.sort((a, b)=>{

			return a.date < b.date
		})


		let data_to_send=[];

		for (let review of reviews){
			data_to_send.push({overall_rating: review.overall_rating,
			recommendedation_date: new Date(review.date).toString(), author_country: review.author_country, content: review.content})
		}



		res.send({reviews: data_to_send})

	})
})



router.get('/:airport/reviews/:ratio', (req, res) => {

	Airport.findOne({name: req.params.airport}, (err, data)=>{
		const reviews = data.reviews


		let filtered_reviews = reviews.filter((r)=>{
			console.log(req.params.ratio)
			return parseInt(r.overall_rating) >= req.params.ratio
		})
		res.send({reviews: filtered_reviews})

	})


})







export default router;