'use strict';

console.log('js file is connected');

const allImages = [];
let previouslyPickedProducts = [];
let imageSectionTag = document.getElementById('all_products');
let rightImgTag = document.getElementById('right_img');
let centerImgTag = document.getElementById('center_img');
let leftImgTag = document.getElementById('left_img');

let chartResults = document.getElementById('chartResults');
let resultsList = document.getElementById('resultsList');

let totalClicks = 0;

let leftProductOnPage = null;
let centerProductOnPage = null;
let rightProductOnPage = null;

function Product(pName, imgPath){
  this.pName = pName;
  this.url = imgPath;
  this.clicks = 0;
  this.timesShown = 0;
  Product.allImages.push(this);
}



const handleClick = function(event){
  if (event.target.tagName !== 'IMG') {
    return;
  }
  totalClicks++;

  if(event.target.id === 'left_img') {
    leftProductOnPage.clicks++;
  }
  if(event.target.id === 'right_img') {
    rightProductOnPage.clicks++;
  }
  leftProductOnPage.timesShown++;
  rightProductOnPage.timesShown++;

  const tempPickedProducts = [];
  let leftImg;
  do{
    leftImg = Math.floor(Math.random() * allImages.length);
  } while(
    previouslyPickedProducts.include(allImages[leftImg]) ||
    tempPickedProducts.includes(allImages[leftImg])
  );
  tempPickedProducts.push(allImages[leftImg]);

  let rightImg;
  do{
    rightImg = Math.floor(Math.random() * allImages.length);
  } while(
    previouslyPickedProducts.includes(allImages[rightImg]) ||
    tempPickedProducts.includes(allImages[rightImg])
  );
  tempPickedProducts.push(allImages[rightImg]);

  console.log(leftImg, rightImg);
  leftProductOnPage = allImages[leftImg];
  rightProductOnPage = allImages[rightImg];

  leftImgTag.src = leftProductOnPage.imgSrc;
  centerImgTag.src = centerProductOnPage.imgSrc;
  rightImgTag.src = rightProductOnPage.imgSrc;

  previouslyPickedProducts = [];
  previouslyPickedProducts.push(allImages[leftImg]);
  previouslyPickedProducts.push(allImages[rightImg]);
  if(totalClicks === 25){
    imageSectionTag.removeEventListener('click', handleClick);
  }
};


function handleResultsList(event){
  console.log('reultswasclicked');
  document.getElementById('results').style.background = 'yellow';

  let ul = document.getElementById('results');
  ul.innerHTML = '';
  for(let i = 0; i < allImages.length; i++){
    let current = allImages[i];
    let li = document.createElement('li');
    li.textcontent = current.name + ' got ' + current.clicks + ' votes.';
    ul.appendChild(li);
  }
}






function handleChartResults(){
  console.log('chartresultswasclicked');
  makeAProductChart();
}

imageSectionTag.addEventListener('click', handleClick);

resultsList.addEventListener('click', handleResultsList);
chartResults.addEventListener('click', handleChartResults);

new Product('bag', 'img/bag.jpg', 0, 0);
new Product('banana', 'img/banana.jpg', 0, 0);
new Product('bathroom', 'img/bathroom.jpg', 0, 0);
new Product('boots', 'img/boots.jpg', 0, 0);
new Product('breakfast', 'img/breakfast.jpg', 0, 0);
new Product('bubblegum', 'img/bubblegum.jpg', 0, 0);
new Product('chair', 'img/chair.jpg', 0, 0);
new Product('cthulhu', 'img/cthulhu.jpg', 0, 0);
new Product('dog-duck', 'img/dog-duck.jpg', 0, 0);
new Product('dragon', 'img/dragon.jpg', 0, 0);
new Product('pen', 'img/pen.jpg', 0, 0);
new Product('pet-sweep', 'img/pet-sweep.jpg', 0, 0);
new Product('scissors', 'img/scissors.jpg', 0, 0);
new Product('shark', 'img/shark.jpg', 0, 0);
new Product('sweep', 'img/sweep.png', 0, 0);
new Product('tauntaun', 'img/tauntaun.jpg', 0, 0);
new Product('unicorn', 'img/unicorn.jpg', 0, 0);
new Product('water-can', 'img/water-can.jpg', 0, 0);
new Product('wine-glass', 'img/wine-glass.jpg', 0, 0);

leftProductOnPage = Product.allImages[0];
centerProductOnPage = Product.allImages[1];
rightProductOnPage = Product.allImages[2];

// pickNewProducts();

// console.log('bagclicks', Product.allImages[0].clicks);

// function getResults (){
//   var results = document.getElementById('resultsTitle');
//   results.innerHTML = 'Results';
//   var results = document.getElementById('bag');
//   results.innerHTML = 'Bag had ' + Product.allImages[0].clicks + ' votes, and was seen ' + Product.allImages[0].timesShown + ' times.';
//   var results = document.getElementById('banana');
//   results.innerHTML = 'Banana had ' + Product.allImages[1].clicks + ' votes, and was seen ' + Product.allImages[1].timesShown + ' times.';
//   var results = document.getElementById('bathroom');
//   results.innerHTML = 'Bathroom had ' + Product.allImages[2].clicks + ' votes, and was seen ' + Product.allImages[2].timesShown + ' times.';
//   var results = document.getElementById('boots');
//   results.innerHTML = 'Boots had ' + Product.allImages[3].clicks + ' votes, and was seen ' + Product.allImages[3].timesShown + ' times.';
//   var results = document.getElementById('breakfast');
//   results.innerHTML = 'Breakfast had ' + Product.allImages[4].clicks + ' votes, and was seen ' + Product.allImages[4].timesShown + ' times.';
//   var results = document.getElementById('bubblegum');
//   results.innerHTML = 'Bubblegum had ' + Product.allImages[5].clicks + ' votes, and was seen ' + Product.allImages[5].timesShown + ' times.';
//   var results = document.getElementById('chair');
//   results.innerHTML = 'Chair had ' + Product.allImages[6].clicks + ' votes, and was seen ' + Product.allImages[6].timesShown + ' times.';
//   var results = document.getElementById('cthulu');
//   results.innerHTML = 'Cthulu had ' + Product.allImages[7].clicks + ' votes, and was seen ' + Product.allImages[7].timesShown + ' times.';
//   var results = document.getElementById('dog-duck');
//   results.innerHTML = 'Dog-duck had ' + Product.allImages[8].clicks + ' votes, and was seen ' + Product.allImages[8].timesShown + ' times.';
//   var results = document.getElementById('dragon');
//   results.innerHTML = 'Dragon had ' + Product.allImages[9].clicks + ' votes, and was seen ' + Product.allImages[9].timesShown + ' times.';
//   var results = document.getElementById('pen');
//   results.innerHTML = 'Pen had ' + Product.allImages[10].clicks + ' votes, and was seen ' + Product.allImages[9].timesShown + ' times.';
//   var results = document.getElementById('pet-sweep');
//   results.innerHTML = 'Pet-sweep had ' + Product.allImages[11].clicks + ' votes, and was seen ' + Product.allImages[11].timesShown + ' times.';
//   var results = document.getElementById('scissors');
//   results.innerHTML = 'Scissors had ' + Product.allImages[12].clicks + ' votes, and was seen ' + Product.allImages[12].timesShown + ' times.';
//   var results = document.getElementById('shark');
//   results.innerHTML = 'Shark had ' + Product.allImages[13].clicks + ' votes, and was seen ' + Product.allImages[13].timesShown + ' times.';
//   var results = document.getElementById('sweep');
//   results.innerHTML = 'Sweep had ' + Product.allImages[14].clicks + ' votes, and was seen ' + Product.allImages[14].timesShown + ' times.';
//   var results = document.getElementById('tauntaun');
//   results.innerHTML = 'Tauntaun had ' + Product.allImages[15].clicks + ' votes, and was seen ' + Product.allImages[15].timesShown + ' times.';
//   var results = document.getElementById('unicorn');
//   results.innerHTML = 'Unicorn had ' + Product.allImages[16].clicks + ' votes, and was seen ' + Product.allImages[16].timesShown + ' times.';
//   var results = document.getElementById('water-can');
//   results.innerHTML = 'Water-can had ' + Product.allImages[17].clicks + ' votes, and was seen ' + Product.allImages[17].timesShown + ' times.';
//   var results = document.getElementById('wine-glass');
//   results.innerHTML = 'Wine-glass had ' + Product.allImages[18].clicks + ' votes, and was seen ' + Product.allImages[18].timesShown + ' times.';
// }



function makeAProductChart(){

  const productNamesArray = [];
  const productClicksArray = [];

  for(let i = 0; i < allImages.length; i++){
    const singleProductName = allImages[i].name;
    productNamesArray.push(singleProductName);
  }

  for(let i = 0; i < allImages.length; i++){
    const singleProductClicks = allImages[i].clicks;
    productClicksArray.push(singleProductClicks);
  }


  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      labels: productNamesArray,
      datasets: [{
        label: '# of Votes',
        data: productClicksArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: {
          ticks: {
            beginAtZero: true
          }
        }
      }
    }
  });
}
//how to center images?
