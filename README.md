Dreamlines Task
===================


This is nodejs api for dreamlines [task](https://www.dropbox.com/s/493xo7lz18ce7b8/Dreamlines%20Task%20Node.pdf?dl=0)

Installation
-------------

This Project is developed using nodejs (v5.0.0). `npm` and `mongodb` should be installed on the machine in order to run it.

> **Steps:**

> - $`npm install`
> - $`npm start`
> - Visit `http://localhost:3000`
> 


######This project uses `babel` as ES6 transpiler 
----------


API Endpoints
-------------------

The routes are defined in the routes directory by using express `router` object.

 

#### **[GET]:api/all/stats**
returns a collection of all airports stats, collection is sorted by the ordered by the count of reviews.

*Example: http://localhost:3000/api/all/stats*

    {
			airport_stats: [
				{
				name: "abu-dhabi-airport",
				reviews_count: 128
				},
				{
				name: "aberdeen-airport",
				reviews_count: 43
				},
				{
				name: "addis-ababa-airport",
				reviews_count: 37
				},
				{
				name: "accra-kotoka-airport",
				reviews_count: 24
				},
				{
				name: "aalborg-airport",
				reviews_count: 10
				},
				{
				name: "abuja-airport",
				reviews_count: 6
				},
				{
				name: "abidjan-airport",
				reviews_count: 4
				},
				{
				name: "adana-airport",
				reviews_count: 2
				},
				{
				name: "aarhus-airport",
				reviews_count: 1
				}
		]
	}




#### **[GET]:api/[airport]/stats**
returns a specific airports stats

*Example: http://localhost:3000/api/aalborg-airport/stats*

	{
		ariport_name: "aalborg-airport",
		reviews_count: 10,
		average_overall_rating: 4.6,
		recomendations_count: 3
	}


#### **[GET]:api/[airport]/reviews**
returns a collection of reviews for the given airport. The collection is be ordered by “date”, so the latest review is returned as first element

*Example: http://localhost:3000/api/aalborg-airport/reviews*

	{
		reviews: [
			{
			overall_rating: "9.0",
			recommendedation_date: "Tue Feb 11 2014 05:00:00 GMT+0500 (PKT)",
			author_country: "Denmark",
			content: "A small very effective airport with few flights. Check-in is notorious quick and staff friendly arrival very quick and busses to Aalborg frequent. Usually no problems getting taxis as well. There used to be a cafeteria but nowadays just a kiosk - but good cafeteria with reasonable prizes inside terminal. Security check quick and friendly as well. There is a nice viewing pavilion at one end of the airport. Outside note the famous "kiss and goodbye signs". Restrooms outside terminal however few."
			},
			{
			overall_rating: "9.0",
			recommendedation_date: "Wed Feb 13 2013 05:00:00 GMT+0500 (PKT)",
			author_country: "Netherlands",
			content: "This is a nice and modern airport at the moment they are expanding the airport so there is a lot of building going on but in the departure area you will not notice this very much. The Airport has got free Wifi and a small restaurant with shop on the land side. Airside you will find a small shop with pre-packed sandwiches and hot dogs and other small stuff a small duty free shop is also around but not very cheap. There is no Lounge to be found at the moment but after the expansion is completed there will be one available (around May 2013). Check-in procedures are fast and the waiting area after check-in is fine with a view on the tarmac. All in all a nice modern but small airport with expensive restaurants and shop."
			},
			{
			overall_rating: "9.0",
			recommendedation_date: "Tue Aug 07 2012 05:00:00 GMT+0500 (PKT)",
			author_country: "Denmark",
			content: "A very nice airy terminal - that seems modern enough. Free WIFI and free parking. Everything within walking distance. Most people travel domestic to Copenhagen but a rising number of international routes e.g. AAL-AMS makes for a lot of possibilities. Check-in is very quick and so is Security. All in all a nice experience."
			},
			{
			overall_rating: "5.0",
			recommendedation_date: "Sun May 22 2011 05:00:00 GMT+0500 (PKT)",
			author_country: "France",
			content: "AMS-AAL and quite satisfied with this regional airport. Only a few flights per day so baggage reclaim understandably very quick. Bus line 2 connects with downtown Aalborg every 15 minutes weekdays but only hourly during the weekend - travel time is 15 mins and costs 18DKK. Check-in efficient and hassle-free using self-service kiosks. Free Internet computers are available landside - a nice touch. Security staff very friendly. Boarding area is rather cramped with limited seating - do not go airside too early."
			},
			{
			overall_rating: "4.0",
			recommendedation_date: "Wed Aug 04 2010 05:00:00 GMT+0500 (PKT)",
			author_country: "",
			content: "Very quick check-inn and security screening. Nice and airy. Free parking! No need to show up at the airport very early as is the case in CPH. Only drawback is that after security you will be standing and waiting for the gate to open. There is is very little space here and no where to sit down."
			},
			{
			overall_rating: "5.0",
			recommendedation_date: "Thu Mar 26 2009 05:00:00 GMT+0500 (PKT)",
			author_country: "",
			content: "Aalborg Lufthavn (AAL) is a smallish airport near the city of Aalborg. There is not usually a lot of people leaving or arriving at any one time so there is hardly ever any time wasted standing in line for check-in or security checks - brilliant! A very friendly and inviting atmosphere overall."
			},
			{
			overall_rating: "4.0",
			recommendedation_date: "Thu Jun 12 2008 06:00:00 GMT+0600 (PKST)",
			author_country: "",
			content: "Nice big cafe on first floor with great view Overall very bright free access to computers for checking mails etc while waiting. Easy access to city centre of Aalborg via taxi or even a local bus direct from airport to city centre."
			},
			{
			overall_rating: "1.0",
			recommendedation_date: "Tue Jun 10 2008 06:00:00 GMT+0600 (PKST)",
			author_country: "",
			content: "It's a depressing airport in a depressing town! SAS and Maersk are the only operators using it besides a few private owners and charter airlines. Use it only if you have to! If there's no taxi waiting outside it is difficult to go to the city centre. The only reason this airport exists is to serve passengers who fly abroad especially via CPH."
			},
			{
			overall_rating: "",
			recommendedation_date: "Sun Aug 28 2005 05:00:00 GMT+0500 (PKT)",
			author_country: "",
			content: "Amazed to find that this little place gets reviews! I staged through here in April 05 enroute to LHR via CPH. Very bright clean and well designed airport. Good little cafe with interesting local food. All very efficient when I went through."
			},
			{
			overall_rating: "",
			recommendedation_date: "Tue Feb 17 2004 05:00:00 GMT+0500 (PKT)",
			author_country: "",
			content: "I've been travelling through this airport every week for more than two years. Very easy access (12 min. from downtown Aalborg) right up to main entrance. SAS is really the only game in town once you get in and be prepared for delays on flights to/from Copenhagen (a 35-min. flight). Extremely clean as is the Danish way. Ground staff and crews are helpful enough but to any seasoned traveller this is a backwater airport. Again the SAS AAL-CPH-AAL leg is notorious for delays each week so if you have connecting flights out of CPH plan accordingly. Also upon arrival at AAL there are not always enough taxis waiting outside and you might have to wait a few minutes. Buses run into town on a regular basis but everthing at this small airport - taxis buses kiosk opening hours etc. - are all timed to coincide with arrivals and departures of flights from CPH."
			}
		]
	}


#### **[GET]:api/[airport]/reviews/[ratio]**
returns a collection of reviews for the given airport. The collection is be filter by “overall-rating”,  specified in the route

*Example: http://localhost:3000/api/aalborg-airport/reviews/10*

	{
		reviews: [ ]
	}







> **Note:** A general **index** and **404** routes are also defined in app routes

----------


Update Job
-------------

A **Cron** job is created when the app runs for first time. This will update the databse with the **new csv** file. The job run after every **30 days**


----------


#####Written by Zain Bin Zafar <zaing.143@gmail.com>, Sep 2016
