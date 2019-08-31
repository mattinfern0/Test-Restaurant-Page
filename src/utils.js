function clearChildren(element){
    while (element.firstChild){
        element.removeChild(element.firstChild);
    }
}

function createP(text){
    var result = document.createElement('p');
    result.innerText = text;
    return result;
}

export {clearChildren, createP};