// UI Controller

function UI(){
    this.selectors = {
        menuBtn : document.querySelector(".home-navigation-content-access__btn") ,
        menu :  document.querySelector(".home-navigation-content-main") ,
        homeNav :  document.querySelector(".home-navigation") ,
        menuCont :  document.querySelector(".home-navigation-content") ,

        passName1 : document.getElementById('pass-name1') ,
        passName2 : document.getElementById('pass-name2') ,

        menuContainer :  document.querySelector(".home-navigation-container") ,
        menuBtnSec :  document.querySelector(".home-navigation-content-access-container") ,
        page : document.getElementById('page') ,

        inputData : document.querySelector('input.home-page-mylocation-search__input'),

        homePage :  document.querySelector('.home-page') , 
        taxiRankHeading :  document.querySelector('.rank-page-heading__heading') ,
        taxiRankList :  document.querySelector('.home-page-nearby-taxirank-list') ,
        taxiRankListItem :  document.querySelector('.home-page-nearby-taxirank-list-item') ,
        rankPage :  document.querySelector('.rank-page') ,
        taxisAtRankList : document.querySelector('.rank-page-list') ,
        taxisAtRankListItem : document.querySelector('.rank-page-list-item') ,
    }
}


UI.prototype = {
    init : function(){
        console.log("hello, this is the home page")
    } 
}

