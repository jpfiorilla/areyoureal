const rp = require('request-promise');
const guardianKey = require('./guardiankey');
const nytKey = require('./nytkey');

let guardianUSNewsSearch = 'https://content.guardianapis.com/search?section=us-news&api-key=' + guardianKey;
let guardianSectionEndpoint = 'https://content.guardianapis.com/sections?api-key=' + guardianKey;

const guardianUSsearch = function(){
    rp('https://content.guardianapis.com/search?section=world&api-key=' + guardianKey)
    .then(res => {
        res = JSON.parse(res).response.results;
        let articles = [];
        for (var i = 0; i < res.length; i++) articles.push(res[i].webTitle.replace(/\\/g, ''));
        console.log(articles)
        return articles;
    })
}

guardianUSsearch();