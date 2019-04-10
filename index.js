'use strict';

const apiKey = 'gGH1CiZxsC2auy7GhfhoGQhadcPEfA1ikB8KyV9j'
const searchUrl = 'https://developer.nps.gov/api/v1/parks'

function getNationalParks(query, maxResults){
  const params = {
    key: apiKey,
    q: query,
    
  }
}

function watchForm(){
  $('form').submit(function(event){
    event.preventDefault();
    let searchTerm = $('#js-search-term').val();
    let maxResults = $('#js-max-results').val();
    console.log(searchTerm+" "+maxResults);
    getNationalParks(searchTerm, maxResults);
  })
}

$(function(){
  console.log('National Park Search App Loaded! Waiting for user input.');
  watchForm();
})