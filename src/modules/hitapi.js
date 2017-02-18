const rp = require('request-promise');
const rita = require('rita').RiTa;

const guardianKey = require('./guardiankey');
const nytKey = require('./nytkey');
const wordsKey = require('./wordskey');

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

// guardianUSsearch();

const wordsAPI = function(word){
    let options = {
        uri: 'https://wordsapiv1.p.mashape.com/words/' + word + '/similarTo',
        headers: {
            "X-Mashape-Key": wordsKey,
            "Accept": "application/json"
        }
    }
    rp(options)
    .then(res => {
        console.log(res)
    })
}

wordsAPI('conservative');