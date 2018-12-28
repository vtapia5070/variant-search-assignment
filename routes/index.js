var d3 = require('d3');
var fs = require('fs');
var express = require('express');
var router = express.Router();
var _ = require('underscore');

var variantsData = {};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Read Data from tsv file
// sort and group by Gene
fs.readFile('data/variants.tsv', 'utf8', function (error, data) {
  data = d3.tsvParse(data);

  var sortedSubset = data;

  sortedSubset.sort(function (geneA, geneB) {
    if (geneA.Gene > geneB.Gene) {
      return 1;
    } else {
      return -1;
    }
  });

  var groupedData = _.groupBy(sortedSubset, function (variant) {
    return variant.Gene;
  });

  variantsData = groupedData;
});

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
After groupBy
  ZNF526:
   [ { Gene: 'ZNF526',
       'Nucleotide Change': 'NM_133444.2:c.-2C>T',
       'Protein Change': '',
       'Other Mappings':
        'NM_133444.2:c.-2C>T,NG_053183.1:g.9132C>T,NC_000019.10:g.42224402C>T,NC_000019.9:g.42728554C>T,NM_133444.1:c.-2C>T',
       Alias: '',
       Transcripts:
        'NM_133444.2,NG_053183.1,NC_000019.10,NC_000019.9,NM_133444.1',
       Region: '',
       'Reported Classification': 'Uncertain significance',
       'Inferred Classification': 'Variant of uncertain significance',
       Source: 'ClinVar',
       'Last Evaluated': '2015-08-18',
       'Last Updated': '2017-09-14',
       URL: 'https://www.ncbi.nlm.nih.gov/clinvar/RCV000502132',
       'Submitter Comment': '',
       Assembly: 'GRCh37',
       Chr: '19',
       'Genomic Start': '42728553',
       'Genomic Stop': '42728554',
       Ref: 'C',
       Alt: 'T',
       Accession: 'NC_000019.9',
       'Reported Ref': 'C',
       'Reported Alt': 'T' },
     { Gene: 'ZNF526',
       'Nucleotide Change': 'NM_133444.2:c.566C>T',
       'Protein Change': 'p.Pro189Leu',
       'Other Mappings':
        'NM_133444.2:c.566C>T,NC_000019.10:g.42224969C>T,NC_000019.9:g.42729121C>T,NM_133444.1:c.566C>T,NP_597701.1:p.Pro189Leu',
       Alias: '',
       Transcripts:
        'NM_133444.2,NC_000019.10,NC_000019.9,NM_133444.1,NP_597701.1',
       Region: '',
       'Reported Classification': 'Benign',
       'Inferred Classification': 'Benign',
       Source: 'ClinVar',
       'Last Evaluated': '2014-03-18',
       'Last Updated': '2017-09-14',
       URL: 'https://www.ncbi.nlm.nih.gov/clinvar/RCV000118954',
       'Submitter Comment': '',
       Assembly: 'GRCh37',
       Chr: '19',
       'Genomic Start': '42729120',
       'Genomic Stop': '42729121',
       Ref: 'C',
       Alt: 'T',
       Accession: 'NC_000019.9',
       'Reported Ref': 'C',
       'Reported Alt': 'T' } ],
*/

function findMatchingKeys (queryStr) {
  var geneKeys = Object.keys(variantsData);
  console.log('geneKeys', geneKeys);
  var matchedGenes = geneKeys.filter(function (gene) {
    return gene.indexOf(queryStr) === 0;
  });
  
  return matchedGenes;
}

router.get('/genes', function (req, res) {
  var filteredData = [];

  // collect list of keys that match search query
  var searchQuery = req.query.search.toUpperCase();
  var matchedGenes = findMatchingKeys(searchQuery);
  matchedGenes.forEach(function (keyStr) {
    filteredData.push(variantsData[keyStr]);
  });

  res.send(JSON.stringify({data: filteredData}));
});

module.exports = router;