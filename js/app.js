'use strict';

console.log('js file is connected');

let imageSectionTag = document.getElementById('all_products');
let rightImgTag = document.getElementById('right_img');
let centerImgTag = document.getElementById('center_img')
let leftImgTag = document.getElementById('left_img')

let totalClicks = 0;

let leftProductOnPage = null;
let centerProductOnPage = null;
let rightProductOnPage = null;

function Product(pName, imgPath, clicks, timesShown){
    this.pName = pName;
    this.url = imgPath
    this.clicks = 0;
    this.timesShown = 0;
    Product.allImages.push(this);
};

Product.allImages = [];

const renderNewProduct = function(leftImg, centerImg, rightImg){
    leftImgTag.src = Product.allImages[leftImg].url;
    centerImgTag.src = Product.allImages[centerImg].url;
    rightImgTag.src = Product.allImages[rightImg].url;
};

const pickNewProducts = function(){
    const leftImg = Math.floor(Math.random() * Product.allImages.length);
    // console.log('left index for the left image', leftImg);

    let centerImg;
    let rightImg;
    do {
        // leftImg = Math.floor(Math.random() * Product.allImages.length);
        centerImg = Math.floor(Math.random() * Product.allImages.length);
        rightImg = Math.floor(Math.random() * Product.allImages.length);
    } while(centerImg === leftImg || centerImg === rightImg || leftImg === rightImg);
    console.log(Product.allImages[leftImg].pName + ' and ' + Product.allImages[rightImg].pName);

    leftProductOnPage = Product.allImages[leftImg];
    centerProductOnPage = Product.allImages[centerImg];
    rightProductOnPage = Product.allImages[rightImg];

    renderNewProduct(leftImg, centerImg, rightImg);

};

const handleClickOnProduct = function(event){
    // console.log('clicking on the picture', event.target);

    if(totalClicks < 25){
        const thingClickedOn = event.target;
        const id = thingClickedOn.id;

        if(id === 'left_img' || id === 'right_img' || id === 'center_img'){
            if(id === 'left_img'){
                leftProductOnPage.clicks++;
            }
            if(id === 'center_img'){
                centerProductOnPage.clicks++;
            }
            if(id === 'right_img'){
                rightProductOnPage.clicks++;
            }
            leftProductOnPage.timesShown++;
            centerProductOnPage.timesShown++;
            rightProductOnPage.timesShown++;

            pickNewProducts();
        }
    }

    totalClicks++;
    console.log('totalclicks', totalClicks);
    if(totalClicks === 25){
        imageSectionTag.removeEventListener('click', handleClickOnProduct);
    }
};

imageSectionTag.addEventListener('click', handleClickOnProduct);

new Product('bag', 'img/bag.jpg', 0, 0);
new Product('banana', 'img/banana.jpg', 0, 0);
new Product('bathroom', 'img/bathroom.jpg', 0, 0)
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

pickNewProducts();

console.log('bagclicks', Product.allImages[0].clicks)

function getResults (){
    var results = document.getElementById('resultsTitle');
    results.innerHTML = 'Results';
    var results = document.getElementById('bag');
    results.innerHTML = 'Bag had ' + Product.allImages[0].clicks + ' votes, and was seen ' + Product.allImages[0].timesShown + ' times.';
    var results = document.getElementById('banana');
    results.innerHTML = 'Banana had ' + Product.allImages[1].clicks + ' votes, and was seen ' + Product.allImages[1].timesShown + ' times.';
    var results = document.getElementById('bathroom');
    results.innerHTML = 'Bathroom had ' + Product.allImages[2].clicks + ' votes, and was seen ' + Product.allImages[2].timesShown + ' times.';
    var results = document.getElementById('boots');
    results.innerHTML = 'Boots had ' + Product.allImages[3].clicks + ' votes, and was seen ' + Product.allImages[3].timesShown + ' times.';
    var results = document.getElementById('breakfast');
    results.innerHTML = 'Breakfast had ' + Product.allImages[4].clicks + ' votes, and was seen ' + Product.allImages[4].timesShown + ' times.';
    var results = document.getElementById('bubblegum');
    results.innerHTML = 'Bubblegum had ' + Product.allImages[5].clicks + ' votes, and was seen ' + Product.allImages[5].timesShown + ' times.';
    var results = document.getElementById('chair');
    results.innerHTML = 'Chair had ' + Product.allImages[6].clicks + ' votes, and was seen ' + Product.allImages[6].timesShown + ' times.';
    var results = document.getElementById('cthulu');
    results.innerHTML = 'Cthulu had ' + Product.allImages[7].clicks + ' votes, and was seen ' + Product.allImages[7].timesShown + ' times.';
    var results = document.getElementById('dog-duck');
    results.innerHTML = 'Dog-duck had ' + Product.allImages[8].clicks + ' votes, and was seen ' + Product.allImages[8].timesShown + ' times.';
    var results = document.getElementById('dragon');
    results.innerHTML = 'Dragon had ' + Product.allImages[9].clicks + ' votes, and was seen ' + Product.allImages[9].timesShown + ' times.';
    var results = document.getElementById('pen');
    results.innerHTML = 'Pen had ' + Product.allImages[10].clicks + ' votes, and was seen ' + Product.allImages[9].timesShown + ' times.';
    var results = document.getElementById('pet-sweep');
    results.innerHTML = 'Pet-sweep had ' + Product.allImages[11].clicks + ' votes, and was seen ' + Product.allImages[11].timesShown + ' times.';
    var results = document.getElementById('scissors');
    results.innerHTML = 'Scissors had ' + Product.allImages[12].clicks + ' votes, and was seen ' + Product.allImages[12].timesShown + ' times.';
    var results = document.getElementById('shark');
    results.innerHTML = 'Shark had ' + Product.allImages[13].clicks + ' votes, and was seen ' + Product.allImages[13].timesShown + ' times.'  ;
    var results = document.getElementById('sweep');
    results.innerHTML = 'Sweep had ' + Product.allImages[14].clicks + ' votes, and was seen ' + Product.allImages[14].timesShown + ' times.';
    var results = document.getElementById('tauntaun');
    results.innerHTML = 'Tauntaun had ' + Product.allImages[15].clicks + ' votes, and was seen ' + Product.allImages[15].timesShown + ' times.';
    var results = document.getElementById('unicorn');
    results.innerHTML = 'Unicorn had ' + Product.allImages[16].clicks + ' votes, and was seen ' + Product.allImages[16].timesShown + ' times.';
    var results = document.getElementById('water-can');
    results.innerHTML = 'Water-can had ' + Product.allImages[17].clicks + ' votes, and was seen ' + Product.allImages[17].timesShown + ' times.';
    var results = document.getElementById('wine-glass');
    results.innerHTML = 'Wine-glass had ' + Product.allImages[18].clicks + ' votes, and was seen ' + Product.allImages[18].timesShown + ' times.';
}

//faster way to do above(for loop?)?

//how to center images?