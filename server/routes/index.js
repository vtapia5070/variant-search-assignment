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

function findMatchingKeys (queryStr) {
  var geneKeys = Object.keys(variantsData);
  var matchedGenes = geneKeys.filter(function (gene) {
    return gene.indexOf(queryStr) === 0;
  });
  
  return matchedGenes;
}

router.get('/genes', function (req, res) {
  var searchQuery = req.query.name.toUpperCase();
  if (!variantsData[searchQuery]) {
    console.log('gene not found!');
    // TODO: throw error
  }
  res.send(JSON.stringify({data: variantsData[searchQuery]}));
});

router.get('/genes/search', function (req, res) {
  var filteredData = [];

  // collect list of keys that match search query
  var searchQuery = req.query.search.toUpperCase();

  // limit potential matches to 20 to prevent FE from
  // holding unneccessary data - there ould be hundreds of matches
  var matchedGenes = findMatchingKeys(searchQuery).slice(0, 20);
  // ['ADA', 'ADAM18', 'ADAM19']
  matchedGenes.forEach(function (keyStr) {
    filteredData.push({
      geneName: keyStr,
      variants: variantsData[keyStr],
    });
  });

  res.send(JSON.stringify({data: filteredData}));
});

module.exports = router;