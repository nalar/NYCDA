#cURL
cURL lets you send direct requests to a webserver

A sample GET request would be:
curl -v example.com

A POST request gets a bit more complicated:
curl -v --data "ParameterYouSend=IsThis&SecondParameter&IsThisOne" example.com/resource.cgi

If you want to specify headers for your GET request you can add the --header parameter:
curl -v example.com --header "Content-Type:application/json"

You can also use the -X parameter to specify a http commmand like GET or POST:
curl -X GET example.com
Note that this is essenitally the same as:
curl example.com