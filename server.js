// TODO: import express and initialize the app

app.use(express.static(__dirname + '/public'));

var products =
    [
        {
            "name": "Womens Watch",
            "image": "http://www.zappos.com/images/z/2/5/7/8/7/6/2578764-t-THUMBNAIL.jpg",
            "price": "44",
            "desc": "really awesome watch",
            "_id" : "11111100000000"

        },
        {
            "name": "Vans Shoes",
            "image": "http://www.zappos.com/images/z/3/2/6/8/2/5/326825-t-THUMBNAIL.jpg",
            "price": "65",
            "desc": "Great shoes for all year around",
            "_id" : "5553211000000001111111"

        },
        {
            "name": "Nixon watch",
            "image": "http://www.zappos.com/images/z/2/5/7/8/4/2/2578426-t-THUMBNAIL.jpg",
            "price": "265",
            "desc": "Awesome watch for guys",
            "_id" : "5435321100008983001111111"

        },
        {
            "name": "Neff",
            "image": "http://a2.zassets.com/images/z/1/7/6/7/9/7/1767977-p-LARGE_SEARCH.jpg",
            "price": "24",
            "desc": "Sweet beanie",
            "_id" : "77435321100000089111111"

        }

    ];



//// Routes need to go here

app.listen(port, function () {
	console.log('Listening on port', port);
});