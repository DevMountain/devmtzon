Day 1

--

## D1) pre reqs

###  Lodash

####

https://lodash.com/docs#findIndex

* lodash is a javascript utility library that makes working with arrays and objects easier.
* Here is a list of lodash methods that we will be using over the next few days

```
 _.findIndex(products, {_id: some value would go here});
 // The first parameter is the array that we are looking at and
 // The second parameter is the property we are looking for, in this example that is _id


 _.assign(products[productIndex], update);
 //The first parameter is the array and the index of the value we need to update and
 // The second parameter is the value we are going to use to update the index

```

### nodemon

####

http://nodemon.io/

* Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.
* Perfect for development
* npm install -g nodemon
* You will be usign this feature all the time it will allow you to run a server that will watch for changes you make in your code



## Setting up the project

### Clone the repo

####

* Clone https://github.com/DevMountain/devmtzon.
* The master branch is the beginning of the project.
* The repo is broken up into steps, each step will have a challenge and a solution for example day-2 branch would be the challenge for that day and day-2-fix is the solution for that day




### Create a package.json file

####

* You need to add a package.json file in the root of the project
* Basic setup - name, author, version, description, main
* Add a scripts object with the property start with the value being node your server file name.  Example "start": "node server.js"
* IMPORTANT in your console run npm install --save express to save express as a dependency in your package.json. By running npm install --save it will either create a dependencies object with the newly added dependency or it will add the dependency to the already created dependencies object

####

This file must be called package.json otherwise npm will not work


```

{
 "Basic Info" : "name", "author", "version", "description"
 "main": "server.js",
 "scripts": {
    Add a start property with the value equal to your server file name
      },
}

```

####


Here is an example of a package.json file after express has been installed via npm install --save express

```
{
  "name": "ecommerce",
  "author": "Your name",
  "license": "MIT",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.13.4",
  }
}

```


###  Server.js

####

* In your server.js file import express using require
* Create an express app,
* Add some express middleware that points express to your static directory "public"
* Have your app listen to a specific port number.  some popular port numbers are  8080, 8000, 8888, 3000, 4500
* Run nodemon and navigate your url to http://localhost:YourPortNumber

####

Partial Example

```
var express = some code,
    app = some code;

app.use(some code.static(__dirname + 'some directory'));


app.listen(some port, function () {
	console.log('Listening on port', some port );

	this will log to your console where your node is being ran NOT to your browser console

});


```

####

 Actual Code

 ```

var express = require('express'),
    app = express(),
    port = 8080;


app.use(express.static(__dirname + '/public'));




app.listen(port, function () {
	console.log('Listening on port', port);
});

 ```
###  Install Dependencies

####

cd into the public directory and run bower-install. This will install all of your front end dependencies.

####

## Importing 3rd Parties

### Import Body parser

####

* npm install --save body-parser. This will add a node module called body-parser to your node_modules folder and also update your package.json file  so body-parser will be listed as a dependency
* After body-parser is installed add it as middleware. You'll need to add both bodyParser.urlencoded and bodyParser.json
* In your server.js file import body-parser using require and apply body-parser to your express application.

####

Partial Example

```

var express = require('express'),
    bodyParser = some code,
    app = express(),
    port = 8080;


app.use(express.static(__dirname + '/public'));

app.use(some code);
app.use(more code);



app.listen(port, function () {
	console.log('Listening on port', port);
});


```
####

 Actual Code

 ```
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 8080;


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.listen(port, function () {
	console.log('Listening on port', port);
});

 ```
### Import lodash

####

* npm install --save lodash. This will add a node module called lodash to your node_modules folder and also update your package.json file  so lodash will be listed as a dependency
* In your server.js file import lodash using require
* We will be using lodash later in the project


####

## Express Routes

### Diagram

####

<h2 style="text-align:center;">Here is a example of what is happening when you make a request to your sever </h2>
<img src="http://i.imgur.com/5HWgDFF.jpg" width="50%" height="100%" style="display:block;margin-left:auto; margin-right:auto;"></img>


####



### GET All Products

####

* Create  GET Request for the route /api/getProductList in your server.js file that responds with the all the products in the products array

####


Partial Example

```

var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 8080;


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


app.get('/api/getProductList', function(req, res) {
 some code here that returns the products
});



app.listen(port, function () {
	console.log('Listening on port', port);
});

```
####

 Actual Code

 ```

var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 8080;


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


app.get('/api/getProductList', function(req, res) {
 res.send(products)

});


app.listen(port, function () {
	console.log('Listening on port', port);
});


 ```

### GET Single Product

####

* Create  GET Request for the route /api/getProduct/:id in your server.js file that responds with a single product from the products array

####


####

* You will need to use req.params to get the id of the product from the request params

####

Partial Example

```

app.get('/api/getProduct/:id', function(req, res) {
    var product = use lodash to find the index of the product
    var item = make a copy of the product object
    res.json(item)

});


```
####


Actual Code

 ```

app.get('/api/getProduct/:id', function(req, res) {
    var product = _.findIndex(products, {_id: req.params.id});
    var item = products.slice(product, product + 1);
    res.json(item)

});


 ```


### POST

####

* Create POST request to /api/getProductList
* Get the product from the post and add it to the products array
* Use postman to make sure it is working

####

####

* To get the product you need to add to the products array you will need to look at the body of the request


####

Partial Example

```

app.post('/api/getProductList', function(req, res) {
    var product =Some code;
    some code to push product to products array
    some code to send back a response
});

```
####

Actual Code


```

app.post('/api/getProductList', function(req, res) {
    var product = req.body;
    products.push(product);
    res.send(product);
});


```

### PUT Day 1 Black Diamond

####

* Create PUT request to ### /api/getProduct/:id
* Get the ID of the product that you need to update.
* Check the product array to make sure you have that product
* If the product is in the products array then update the id to the new id and respond with the result
* If the product IS NOT in the array respond with with a message saying the item could not be found
* Use postman for the PUT request
<img style="display:block; margin: 30px auto 0 auto; width: 80%;" src="http://i.imgur.com/J4e5FCl.png" width="100%" height="100%"></img>

####

####

* You will need to get information from both the body of the request and information from the request params
* Once you have the information from the body and the params you can then check the array and update the product with the new product id

####

Partial Example


```

app.put('/api/getProduct/:id', function(req, res) {
    var update = some code that looks to the body of the request to get the new id,
        productIndex = some code to find the index of the product you need to update;

        //Check to make sure we have a product in our products array that matches the req.params, if we do not then res.send message

        if (!products[get the product index]) {
            res.send('could not find that product');
            // If we find the product we are looking for then assign the new product id and respond with the
        } else {
            var updatedProduct = _.assign(productIndex[productIndex], update);
            res.json(updatedProduct);
        }

});


```

####

Actual Code

```

app.put('/api/getProduct/:id', function(req, res) {
    var update = req.body,
        productIndex = _.findIndex(products, {_id: req.params.id});

        console.log(update);
        console.log(productIndex);

        if (!products[productIndex]) {
            res.send('nothing here');
        } else {
            var updatedProduct = _.assign(productIndex[productIndex], update);
            res.json(updatedProduct);
        }

});


```


### DELETE  Day 1 Black Diamond

####

* Create  DELETE request to ### /api/getProduct/:id
* Get the ID of the product that you need to delete.
* Check the product array to make sure you have that product
* If the product is in the products array then delete the product and return the product you deleted
* If the product IS NOT in the array respond with with a message saying the item could not be found
* Use postman for the DELETE request
<img style="display:block; margin: 30px auto 0 auto; width: 80%;" src="http://i.imgur.com/YAMX51Q.png" width="100%" height="100%"></img>

####

####

* You will need to get information from the request params
* Once you have the information from the params you can then check the array and delete the product
* After you delete the product send it back via res.json()

####

Partial Example


```

app.delete('/api/getProduct/:id', function(req,res) {
    var  productIndex = use lodash to find the index of that product;

    // Check to make sure that we have that product, if we don't then res.send(). If the product is found
    if(!products[productIndex]) {
        res.send('could not find that product to delete')
    } else {
        var deletedProduct = products[productIndex];

          //Write some code that will remove the product from the product array then send the deletedProduct back in the response
    }

});

```

####

Actual Code

```

app.delete('/api/getProduct/:id', function(req,res) {
    var  productIndex = _.findIndex(products, {_id: req.params.id});
    if(!products[productIndex]) {
        res.send('could not find that product to delete')
    } else {
        var deletedProduct = products[productIndex];
            products.splice(productIndex, 1);
            res.json(deletedProduct)
    }

});


```



