'use strict';

console.log('js file is connected');

//Global variables
const allImages = [];
let previouslyPickedProducts = [];
let oldResultsList = document.getElementById('oldResultsList');
let imageSectionTag = document.getElementById('all_products');
let rightImgTag = document.getElementById('right_img');
let centerImgTag = document.getElementById('center_img');
let leftImgTag = document.getElementById('left_img');
let chartResults = document.getElementById('myChart');
let resultsList = document.getElementById('resultsList');
let totalClicks = 0;
let leftProductOnPage = null;
let centerProductOnPage = null;
let rightProductOnPage = null;
let oldArray = [];

//Functions
function updateStorage() {
  const arrayString = JSON.stringify(allImages);
  localStorage.setItem('allImagesString', arrayString);
}
function Product(pName, imageSrc) {
  this.pName = pName;
  this.imageSrc = imageSrc;
  this.clicks = 0;
  this.timesShown = 0;
  allImages.push(this);
}
function getOldResults() {
  const data = localStorage.getItem('allImagesString');
  const productData = JSON.parse(data);
  for (let i = 0; i < productData.length; i++) {
    new Product(productData.pName, productData.imageSrc, productData.clicks, productData.timesShown);
    oldArray.push(productData[i]);
  }
  handleOldResultsList();
  console.log('oldarray', oldArray);
}
function handleOldResultsList() {
  let ul = document.getElementById('oldResultsList');
  ul.innerHTML = '';
  for (let i = 0; i < oldArray.length; i++) {
    let current = oldArray[i];
    let li = document.createElement('li');
    li.textContent = current.pName + ' got ' + current.clicks + ' votes and was shown ' + current.timesShown + ' times.';
    ul.appendChild(li);
    oldResultsList.removeEventListener('click', getOldResults);
  }
}
const handleClick = function (event) {
  if (event.target.tagName !== 'IMG') {
    return;
  }
  totalClicks++;
  if (event.target.id === 'left_img') {
    leftProductOnPage.clicks++;
  }
  if (event.target.id === 'center_img') {
    centerProductOnPage.clicks++;
  }
  if (event.target.id === 'right_img') {
    rightProductOnPage.clicks++;
  }
  leftProductOnPage.timesShown++;
  centerProductOnPage.timesShown++;
  rightProductOnPage.timesShown++;
  const tempPickedProducts = [];
  let leftImg;
  do {
    leftImg = Math.floor(Math.random() * allImages.length);
  } while (
    previouslyPickedProducts.includes(allImages[leftImg]) ||
        tempPickedProducts.includes(allImages[leftImg])
  );
  tempPickedProducts.push(allImages[leftImg]);

  let rightImg;
  do {
    rightImg = Math.floor(Math.random() * allImages.length);
  } while (
    previouslyPickedProducts.includes(allImages[rightImg]) ||
        tempPickedProducts.includes(allImages[rightImg])
  );
  tempPickedProducts.push(allImages[rightImg]);
  let centerImg;
  do {
    centerImg = Math.floor(Math.random() * allImages.length);
  } while (
    previouslyPickedProducts.includes(allImages[centerImg]) ||
        tempPickedProducts.includes(allImages[centerImg])
  );
  tempPickedProducts.push(allImages[centerImg]);
  leftProductOnPage = allImages[leftImg];
  centerProductOnPage = allImages[centerImg];
  rightProductOnPage = allImages[rightImg];
  leftImgTag.src = leftProductOnPage.imageSrc;
  centerImgTag.src = centerProductOnPage.imageSrc;
  rightImgTag.src = rightProductOnPage.imageSrc;
  previouslyPickedProducts = [];
  previouslyPickedProducts.push(allImages[leftImg]);
  previouslyPickedProducts.push(allImages[centerImg]);
  previouslyPickedProducts.push(allImages[rightImg]);
  if (totalClicks === 25) {
    updateStorage();
    imageSectionTag.removeEventListener('click', handleClick);
  }
};
function handleResultsList() {
  console.log('results was clicked');
  let ul = document.getElementById('results');
  ul.innerHTML = '';
  for (let i = 0; i < allImages.length; i++) {
    let current = allImages[i];
    let li = document.createElement('li');
    li.textContent = current.pName + ' got ' + current.clicks + ' votes and was shown ' + current.timesShown + ' times.';
    ul.appendChild(li);
  }
}
function handleChartResults() {
  console.log('chartresultswasclicked');
  makeAProductChart();
}
//Event Listener activation
imageSectionTag.addEventListener('click', handleClick);
resultsList.addEventListener('click', handleResultsList);
chartResults.addEventListener('click', handleChartResults);
oldResultsList.addEventListener('click', getOldResults);

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

leftProductOnPage = allImages[0];
centerProductOnPage = allImages[1];
rightProductOnPage = allImages[2];

function makeAProductChart() {
  const productNamesArray = [];
  const productClicksArray = [];
  for (let i = 0; i < allImages.length; i++) {
    const singleProductName = allImages[i].pName;
    productNamesArray.push(singleProductName);
  }
  for (let i = 0; i < allImages.length; i++) {
    const singleProductClicks = allImages[i].clicks;
    productClicksArray.push(singleProductClicks);
  }
  const ctx = document.getElementById('myChart').getContext('2d');
  // eslint-disable-next-line no-undef
  new Chart(ctx, {
    type: 'bar',
    data: {
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
          'rgba(255, 159, 64, 0.2)',
          'rgba(200, 100, 64, 0.2)',
          'rgba(150, 200, 4, 0.2)',
          'rgba(25, 19, 6, 0.2)',
          'rgba(285, 150, 60, 0.2)',
          'rgba(220, 190, 80, 0.2)',
          'rgba(130, 159, 64, 0.2)',
          'rgba(250, 100, 50, 0.2)',
          'rgba(233, 122, 64, 0.2)',
          'rgba(288, 177, 64, 0.2)',
          'rgba(90, 180, 80, 0.2)',
          'rgba(222, 159, 64, 0.2)',
          'rgba(253, 120, 4, 0.2)',
          'rgba(214, 100, 94, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(200, 100, 64, 0.2)',
          'rgba(150, 200, 4, 0.2)',
          'rgba(25, 19, 6, 0.2)',
          'rgba(285, 150, 60, 0.2)',
          'rgba(220, 190, 80, 0.2)',
          'rgba(130, 159, 64, 0.2)',
          'rgba(250, 100, 50, 0.2)',
          'rgba(233, 122, 64, 0.2)',
          'rgba(288, 177, 64, 0.2)',
          'rgba(90, 180, 80, 0.2)',
          'rgba(222, 159, 64, 0.2)',
          'rgba(253, 120, 4, 0.2)',
          'rgba(214, 100, 94, 0.2)'
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
