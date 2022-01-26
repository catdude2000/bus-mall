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
