import * as utils from './utils.js'

var text = [
    "Today's Menu",
    "Ella Latte",
    "Chocolate Muffins",
    "Express Espresso"
]

function loadMenu(){
    var content = document.getElementById('tab-content');
    utils.clearChildren(content);

    var aSection = document.createElement('section');
    aSection.classList.add("block-text");

    text.forEach((t) =>{
        let p = utils.createP(t);
        aSection.appendChild(p);
    })
    content.appendChild(aSection);
}

export default loadMenu;