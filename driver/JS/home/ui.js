// UI Controller

function UI(){
    this.selectors = {
        
        dLogoutBtnMob : document.getElementById("logout-driver-mobile") ,
        dLogoutBtn : document.getElementById("logout-driver") , 

        menuBtn : document.querySelector(".home-navigation-content-access__btn") ,
        menu :  document.querySelector(".home-navigation-content-main") ,
        homeNav :  document.querySelector(".home-navigation") ,
        menuCont :  document.querySelector(".home-navigation-content") , 
        name1 :  document.querySelector(".home-navigation-content-main-details-name__heading") ,
        name2 :  document.querySelector(".home-page-user-name__heading") ,
        
        page : document.getElementById('page') ,
        menuContainer :  document.querySelector(".home-navigation-content") ,

        driverUpdatesForm : document.getElementById("driver-updates") ,
        driverEmail : document.getElementById("driver-email") ,
        location : document.getElementById("location") ,
        destination : document.getElementById("destination") ,
        price : document.getElementById("price") ,
    }
}


UI.prototype = {
    init : function(){
        console.log("hello, this is the home page")
    } ,

    
}

