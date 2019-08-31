import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import {clearChildren} from './utils';

class PageController{
    constructor(){
        this.currentTab = null;
        this.prevTab = null;
    }

    handleTabClick(name){
        switch (name){
            case 'home':
                this.loadTab(name, loadHome);
                break;
            case 'menu':
                this.loadTab(name, loadMenu);
            case 'contact':
                this.loadTab(name, loadContact);
        }
    }

    loadTab(name, loadFunc){
        // Prevent uncessary loading
        if (this.currentTab != name){
            clearChildren(document.getElementById('tab-content'));
            loadFunc();
            this.currentTab = name;
        } else {
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

class Tab{
    constructor(name, dataname){
        this.name = name;
        this.dataname = dataname;
    }
}

var tabs = [
    new Tab('Home', 'home'),
    new Tab('Menu', 'menu'),
    new Tab('Contact Us', 'contact')
]

function createNavTabs(){
    var navList = document.getElementById('nav-list');
    tabs.forEach((tab) => {
        let newTab = document.createElement('li');
        newTab.innerText = tab.name;
        newTab.dataset.tabname = tab.dataname;

        let tabWidth = ((100 / tabs.length).toString() + '%')
        newTab.style.width = tabWidth;

        if (tab.dataname === 'home'){
            newTab.id = 'home-tab';
        }

        navList.appendChild(newTab);
    })
}

function setupTabButtons(){
    let navList = document.getElementById('nav-list')
    let options = [...navList.children];
    options.forEach((o) => {
        o.addEventListener('click', (e) => {
            let tab = e.target;
            controller.handleTabClick(tab.dataset.tabname);
            clearSelected();
            tab.classList.add('tab-selected');
            
        });
    })
}

function setup(){
    createNavTabs();
    setupTabButtons();
    var homeTab = document.getElementById('home-tab');
    controller.handleTabClick(homeTab.dataset.tabname);
    homeTab.classList.add('tab-selected');
}

setup();