import * as utils from './utils.js'

var menu = [
    "Ella Latte",
    "Chocolate Muffins",
    "Express Espresso",
    "Fruit Medley",
]

function loadMenu(){
    var content = document.getElementById('tab-content');

    var menuArticle = document.createElement('article');
    menuArticle.classList.add("block-text");

    menuArticle.appendChild(utils.createArticleHeader('Our Menu'));

    menu.forEach((item) =>{
        let paragraph = utils.createP(item);
        menuArticle.appendChild(paragraph);
    })
    content.appendChild(menuArticle);
}

export default loadMenu;