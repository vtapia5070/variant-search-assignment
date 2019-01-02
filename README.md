# Variant Search Coding Assignment

## Requirements

- Node ^v11.4.0

### Installing Dependencies

For the server, make sure you are in the server directory:

```cd server```

```npm install``` or ```yarn``` (if you have yarn installed globally)


For the Client, make sure you are in the client/ directory:

```cd client```

```npm install``` or ```yarn``` (if you have yarn installed globally)

### Running App locally
Since the data source: `/server/data/variants.tsv` is a large file, I have added it to .gitignore. Before running locally, you will have to unzip `/server/data/variants.tsv.zip`. You can do this by running the following:

```cd server/data```
```unzip variants.tsv.zip```

Start the server:

```cd server```

Unzip the data source:

```unzip data/variants.tsv.zip```

Run start script:

```npm start``` or ```yarn start``` (if you have yarn installed globally)

The server is running on http://localhost:3001/

Start the client:

```cd client```

```npm start``` or ```yarn start``` (if you have yarn installed globally)

The client is running on http://localhost:3000/

## Assignment

Create a web application that allows a user to search for genomic variants by gene name and display the results in a tabular view.

## Features

1. Allow the user to enter a gene name to search for variants in that gene. Display the results in a table that shows various attributes associated with each genomic variant.

2. Provide an auto-suggest feature for entering the gene name.

3. Provide two RESTful endpoints supporting the functionality listed in steps 1 and 2.

## Datasource

A zipped TSV file of variants is available in /data/variants.tsv.zip. Each row in the TSV file represents a genomic variant and contains a Gene column with the gene name. A variant will belong to one and only one gene, but multiple variants may belong to the same gene.

## Implementation

If you are comfortable with Python and/or React, please use these technologies for your app. You may use any additional frameworks, languages, databases, libraries, etc. that you find appropriate.

Our expectation is you will be writing some server code, client code, and applying some basic styling to create a working web application. The application should include unit tests.

Here’s an example of how you might group and display the information:

![variants table example](./example_table.png)

## Submitting Your Solution

Please clone this repository and upload an archive to Greenhouse, or upload your repository to GitHub and send us a link. Update this README to include instructions on how to install, test, and run your application. Bonus: Deploy it and include the URL here.

As part of the review process, we may comment on or ask questions about specific parts of the code.

Please return your solution within 1 week. This is not an expectation of the time required to complete the assignment. Rather, it’s meant to provide buffer for busy schedules.

## Questions

Please ask if any part of the assignment is unclear. Communicate with us as you would with your project team at work.
