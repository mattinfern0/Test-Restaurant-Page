import * as utils from './utils.js';

function loadHome(){

    var content = document.getElementById('tab-content');
    var mainImage = document.createElement('img');
    mainImage.src = "images/cofee.jpg"
    content.appendChild(mainImage);

    var aSection = document.createElement('section');
    aSection.classList.add("block-text");
    var p1 = utils.createP("Welcome to the home of our famous Ella Latte!");
    aSection.appendChild(p1);
    content.appendChild(aSection);
}

export default loadHome;