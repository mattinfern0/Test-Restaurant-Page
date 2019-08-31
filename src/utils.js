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

function createArticleHeader(text){
    var articleHeader = document.createElement('header');
    articleHeader.classList.add('header-article');
    var headerTitle = document.createElement('h2');
    headerTitle.innerText = text;
    articleHeader.appendChild(headerTitle);
    return articleHeader;    
}

export {clearChildren, createP, createArticleHeader};