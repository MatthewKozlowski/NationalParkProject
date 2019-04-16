'use strict';

const apiKey = 'gGH1CiZxsC2auy7GhfhoGQhadcPEfA1ikB8KyV9j'
const searchUrl = 'https://developer.nps.gov/api/v1/parks'
let maxResults = 10;

function displayNationalParks(responseJson){
  console.log(responseJson);
  $('ol').remove();
  $("#results-list").append('<ol></ol>');
  if(maxResults > responseJson.data.length){
    for(let i = 0; i < responseJson.data.length; i++){
      console.log(maxResults);
      $('ol').append(`
      <li>
      <p>Park Name: ${responseJson.data[i].fullName}</p>
      <p>Description: ${responseJson.data[i].description}</p>
      <p>Website: <a href="${responseJson.data[i].url}">${responseJson.data[i].url}</p>
      </li>`);
    }  
  }else {
    for(let i = 0; i < maxResults; i++){
      console.log(maxResults);
      $('ol').append(`
      <li>
      <p>Park Name: ${responseJson.data[i].fullName}</p>
      <p>Description: ${responseJson.data[i].description}</p>
      <p>Website: <a href="${responseJson.data[i].url}">${responseJson.data[1].url}</p>
      </li>`);
    }  
  }
}

function formatQueryParams(params) {
  const queryItems = Object.keys(params)
  .map(key => `${key}=${params[key]}`)
  return queryItems.join('&');
}

function getNationalParks(query, maxResults){
  const params = {
    api_key: apiKey,
    q: query,
    maxResults
  };

  
  const queryString = formatQueryParams(params)
  const url = searchUrl + '?' + queryString;

  fetch(url)
  .then(response => response.json())
  .then(responseJson => displayNationalParks(responseJson))
}

function watchForm1(){
  $('#js-form1').submit(function(event){
    event.preventDefault();
    let searchTerm = $('#js-search-term1').val();
    maxResults = $('#js-max-results1').val();
    console.log(searchTerm+" "+maxResults);
    getNationalParks(searchTerm, maxResults);
  })
}

function watchForm2(){
  $('#js-form2').submit(function(event){
    event.preventDefault();
    let searchTerm = $('#js-search-term2').val();
    maxResults = $('#js-max-results2').val();
    console.log(searchTerm+" "+maxResults);
    getNationalParks(searchTerm, maxResults);
  })
}

$(function(){
  console.log('National Park Search App Loaded! Waiting for user input.');
  watchForm1();
  watchForm2();
})