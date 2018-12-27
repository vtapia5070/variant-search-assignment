var d3 = require('d3');
var fs = require("fs");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

console.log('d3', d3.tsv);

fs.readFile('data/variants.tsv', 'utf8', function (error, data) {
  data = d3.tsvParse(data);
  console.log(JSON.stringify(data[0]));

/*
{
  "Gene":"CDKL5",
  "Nucleotide Change":"NM_003159.2:c.-162-?_99+?del",
  "Protein Change":"","Other Mappings":"NM_003159.2:c.-162-?_99+?del",
  "Alias":"",
  "Transcripts":"NM_003159.2",
  "Region":"",
  "Reported Classification":"Pathogenic",
  "Inferred Classification":"Pathogenic",
  "Source":"ClinVar",
  "Last Evaluated":"2014-03-13",
  "Last Updated":"2017-09-14",
  "URL":"https://www.ncbi.nlm.nih.gov/clinvar/RCV000170005","Submitter Comment":""
}
*/

});

module.exports = router;
