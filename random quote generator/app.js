const containerElement = document.querySelector(".container")
const titleElement = document.querySelector(".title")
const quoteElement = document.querySelector(".random-quote")
const authorElement = document.querySelector(".author")
const bodyElement= document.querySelector("body")

const randomQuote = {}
const randomImage = {}

getRandomQuote()
getRandomImage()

//Random image api
 function getRandomImage(){
 let apiImg = `https://random.imagecdn.app/v1/image?width=1920&height=1080&format=json`
 console.log(apiImg)
 fetch(apiImg)
 .then(function(response){
    let data = response.json()
    return data
}).then(function(data){
    randomImage.content = data.url
    console.log(randomImage)
}).then(function(){
    displayRandomQuote()
})
}

 //Random quote api
  function getRandomQuote(){
  let api = 'https://api.quotable.io/random'
console.log(api)
fetch(api)
.then(function(response){
    let data = response.json()
    return data
}).then(function(data){
    randomQuote.quote = data.content
    randomQuote.author = data.author
}).then(function(){
    displayRandomQuote()
})
}

 function displayRandomQuote(){
quoteElement.innerHTML = `${randomQuote.quote}`
authorElement.innerHTML = `By: <span>${randomQuote.author}</span>`
document.body.style.backgroundImage = "url('" + randomImage.content + "')" 
//Changes the link of background-image property in styles.css so that it contains a random image url every time
}