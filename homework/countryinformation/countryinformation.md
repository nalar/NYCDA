Country Information App

Create a Node.js application that does the following:
- Takes in one parameter from the command line, the name of a country. Note: command line arguments can be read from the global array `process.argv`
- Reads and parses the `countries.json` file.
- Outputs information about that specific country. Must be in the following format:
Country: <country name>
Top Level Domain: <tld>
- For the purposes of this exercise, you must create a separate module contains a function that takes in a filename and returns a JS object containing the parsed contents of that file. Name this module "json-file-reader".

- Note: if you wish to read in a different set of JSON data instead, feel free to do so.