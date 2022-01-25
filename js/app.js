'use strict';

console.log('js file is connected');

// Create global variables.

let imageElements = document.getElementsByTagName('img');
console.log('image elements', imageElements);

let productIndex1 = 0;
let productIndex2 = 1;
let productIndex3 = 2;
let rounds = 25;
let allProducts = [];

function Product(name, filePath, timesClicked, timesShown){
  this.name = name;
  this.filePath = filePath;
  if(timesClicked) {
    this.timesClicked = timesClicked;
  } else {
    this.timesClicked = 0;
  }
  if(timesShown) {
    this.timesShown = 0;
  }
  allProducts.push(this);
}
console.log('allproducts', allProducts);

new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');

allProducts[0].timesShown = 1;
allProducts[1].timesShown = 1;

let totalClicks = 0;

// Create image Randomizer

function imageWasClicked(event){
  totalClicks++;

  if(event.srcElement.id === '1'){
    allProducts[productIndex1].timesClicked++;
  } else if(event.srcElement.id === '2'){
    allProducts[productIndex2].timesClicked++;
  } else if(event.srcElement.id === '3'){
    allProducts[productIndex3].timesClicked++;
  }

  let nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
  let nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
  let nextProductIndex3 = Math.floor(Math.random() * allProducts.length);

  console.log('next product index one is from random ', nextProductIndex1);

  while(
    (nextProductIndex1 === productIndex1) || (nextProductIndex1 === productIndex2) || (nextProductIndex1 === productIndex3) || (nextProductIndex1 === nextProductIndex2) || (nextProductIndex1 === nextProductIndex3)){
    nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
  }
  while(
    (nextProductIndex2 === productIndex1) || (nextProductIndex2 === productIndex2) || (nextProductIndex2 === productIndex3) || (nextProductIndex2 === nextProductIndex1) || (nextProductIndex2 === nextProductIndex3)){
    nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
  }
  while(
    (nextProductIndex3 === productIndex1) || (nextProductIndex3 === productIndex2) || (nextProductIndex3 === productIndex3) || (nextProductIndex3 === nextProductIndex1) || (nextProductIndex3 === nextProductIndex2)){
    nextProductIndex3 = Math.floor(Math.random() * allProducts.length);
  }

  productIndex1 = nextProductIndex1;
  productIndex2 = nextProductIndex2;
  productIndex3 = nextProductIndex3;
  console.log('now the product Index at 1 after new assignment', productIndex1);

  // Create times shown concanation

  imageElements[0].src = allProducts[productIndex1].imgsrc;
  allProducts[productIndex1].timesShown++;

  imageElements[1].src = allProducts[productIndex2].imgsrc;
  allProducts[productIndex2].timesShown++;

  imageElements[2].src = allProducts[productIndex3].imgsrc;
  allProducts[productIndex3].timesShown++;

  if(totalClicks >= rounds){
    localStorage.setItem('savedVotes', JSON.stringify(allProducts));

    let asideUL = document.getElementById('Picks');

    // Create pick text/data

    for(let i = 0; i < allProducts.length; i ++){
      let picksListItem = document.createElement('li');
      picksListItem.textContent = `${allProducts[i].pname} was clicked on ${allProducts[i].timesClicked} times and was shown ${allProducts[i].timesShown} times `;
      asideUL.appendChild(picksListItem);

      let percentageListItem = document.createElement('li');
      let math;
      if(allProducts[i].timesClicked === 0){
        math = `zero clicks and shown ${allProducts[i].timesShown} times. We'll work on it!.`;
        console.log('math', math);
      } else {
        math = Math.round(((allProducts[i]['timesClicked']/ allProducts[i]['timesShown']).toFixed(2) * 100)) + '%';
      }
      percentageListItem.textContent = `${allProducts[i].pname} percentage of times clicked on vs times shown is ` + math;
      asideUL.appendChild(percentageListItem);
    }

    for(let i = 0; i < imageElements.length; i++){
      imageElements[i].removeEventListener('click', imageWasClicked);
      console.log('Hello there!');
    }

  }
}
