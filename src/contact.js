import * as utils from './utils.js'

const PHONE = "(123) 456-7890";
const ADDRESS = "123 Somwhere St., Nowhere, 4567";

function loadContact(){
    var content = document.getElementById('tab-content');

    var menuArticle = document.createElement('article');
    menuArticle.classList.add("block-text");

    menuArticle.appendChild(utils.createArticleHeader('Phone Number'));
    menuArticle.appendChild(utils.createP(PHONE));

    menuArticle.appendChild(utils.createArticleHeader('Location'));
    menuArticle.appendChild(utils.createP(ADDRESS));

    content.appendChild(menuArticle);
}

export default loadContact