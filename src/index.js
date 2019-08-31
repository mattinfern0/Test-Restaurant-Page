import loadhome from './home';
import loadMenu from './menu';

class PageController{
    constructor(){
        this.currentTab = null;
        this.prevTab = null;
    }

    handleTabClick(name){
        switch (name){
            case 'Home':
                this.loadTab(name, loadhome);
                break;
            case 'Menu':
                this.loadTab(name, loadMenu);
        }
    }

    loadTab(name, loadFunc){
        // Prevent uncessary loading
        if (this.currentTab != name){
            console.log("Loading tab: ", name);
            loadFunc();
            this.currentTab = name;
        } else {
            console.log(`Tab '${name}' is already loaded!`);
        }
    }
}

function clearSelected(){
    let navList = document.getElementById('nav-list')
    let options = [...navList.children];
    options.forEach((o) => {
        if (o.classList.contains('tab-selected')){
            o.classList.remove('tab-selected');
        }
    })
}

var controller = new PageController();

function setupTabButtons(){
    let navList = document.getElementById('nav-list')
    let options = [...navList.children];
    options.forEach((o) => {
        o.addEventListener('click', (e) => {
            controller.handleTabClick(e.target.innerText);
            clearSelected();
            e.target.classList.add('tab-selected');
            
        });
    })
}

setupTabButtons();
controller.handleTabClick('Home');
document.getElementById('home-tab').classList.add('tab-selected');