#HTTP Requests
We all know what an URL looks like:
http://www.facebook.com/yourname
http://mail.google.com/mail/u/0/#inbox

Let's take a look at what this actually is:
http 	= The protocol indicator, in this case hypertext transfer protocol
:// 		= This indactes that the protocol portion is finished
www			= The subdomain (www for worldwideweb is most commonly used, don't forget it's a subdomain)
facebook	= The main domain (just the registered name)
com			= The top level domain (TLD) (com for commercial)
yourname	= The location of the specific resource

If we take a look at the anatomy you will notice something extra:
<protocol>://<subdomain>.<domain>.<tld>:<portnumber>/resource

The added portion is called portnumber, and most webservices run on port 80. When you type in an url in your browser it assumes that you want the service running at port 80.

There are a number of different types of requests you can send with http, the most common are:
GET		= Get the data at the specified resource
POST	= Post data to the specified resource
DELETE	= Asks the server to delete the specified resource
PUT		= Asks the server to store the data that is being sent