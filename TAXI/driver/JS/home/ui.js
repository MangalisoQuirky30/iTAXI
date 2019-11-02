// UI Controller

function UI(){
    this.selectors = {
        menuBtn : document.querySelector(".home-navigation-content-access__btn") ,
        menu :  document.querySelector(".home-navigation-content-main") ,
        homeNav :  document.querySelector(".home-navigation") ,
        menuCont :  document.querySelector(".home-navigation-content") ,

        driverUpdatesForm : document.getElementById("driver-updates") ,
        driverEmail : document.getElementById("driver-email") ,
        destination : document.getElementById("destination") ,
        currentLocation : document.getElementById("current-location") ,
        price : document.getElementById("price") ,
        sitsLeft : document.getElementById("sits-left") ,
    }
}


UI.prototype = {
    init : function(){
        console.log("hello, this is the home page")
    } ,

    driverUpdatesHandler : function(){
        var updates = {
            driverEmail : this.selectors.driverEmail.value,
            destination : this.selectors.destination.value ,
            currentLocation : this.selectors.currentLocation.value ,
            price : this.selectors.price.value ,
            sitsLeft : this.selectors.sitsLeft.value ,
        }
        return updates
    }
}

