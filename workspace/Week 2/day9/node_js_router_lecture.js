/////
// Example 1: Simple GET request

// In an app.js
app.get(											// Use the .get function of app
	'/myFirstRoute',								// Define the path
	 function(request, response){					// Function with parameters request and response
		response.send(								// Send a response
			'<body><h1>hello everyone!</h1></body>' // Content of the response
			);										// End of content
	}												// End the function
);													// End the app.get function

/////
// Example 2: Simple GET request with query parameters
// You can do this using the request.query function
app.get(											// Use the .get function of app
	'/myFirstRoute',								// Define the path
	 function(request, response){					// Function with parameters request and response
		response.send(								// Send a response with parameters
			request.query							// Content of the response
			);										// End of content
	}												// End the function
);													// End the app.get function