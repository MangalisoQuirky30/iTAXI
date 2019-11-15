// user model 

function User(){
    this.errors = [] ;
}

User.prototype = {

    init : function(selectors){
        var date = new Date();
        var token = date.getTime() ;
        var exstToken = JSON.parse(localStorage.getItem("dtoken"));
        var date1 =  new Date(Date.now());
        var date2 = new Date(exstToken);
        var newHour = date1.getHours() 
        var newMin = date1.getMinutes()
        var oldHour = date2.getHours()
        var oldMin = date2.getMinutes()

        if(!exstToken){
            window.location.href = "../index.html"
        }

        if ( newHour > oldHour && newMin > oldMin){
            localStorage.removeItem('dtoken')
            window.location.href = "../index.html"
        } 

        //this code prints the logged in users name on the dashboard
       var driEml = window.location.search.substr(1).replace("%40" , "@").split("+")
       selectors.driverEmail.value = driEml[0]
       selectors.name1.innerHTML = driEml[1].replace("%20" , " ")
       selectors.name2.innerHTML = driEml[1].replace("%20" , " ")

       console.log(driEml)
       console.log(driEml)
       console.log(driEml[0])
       console.log(driEml[1])
       //selectors.passName2.innerHTML = passName.replace("%20" , " ").replace("%20" , " ").replace("%20" , " ")

        var allTaxiRanks = JSON.parse(localStorage.getItem('taxi-ranks'))
        for(var i = 0; i < allTaxiRanks.length ; i++){
            selectors.destination.innerHTML += `<option value="${allTaxiRanks[i]}">${allTaxiRanks[i]}</option>`
            selectors.location.innerHTML += `<option value="${allTaxiRanks[i]}">${allTaxiRanks[i]}</option>`
        }


    } ,

    logoutDriver : function(){
        var alert = confirm("Are you sure you want to log out?")
        if(alert){
            localStorage.removeItem('dtoken')
            window.location.href = "../index.html"
        }
    } ,

    showHideMenu : function(selectors){
        if (selectors.menu.style.transform != "translateX(-320px)") {
            selectors.menu.style.transform = "TranslateX(-320PX)"
            selectors.homeNav.style.zIndex = "0"
            selectors.menu.style.display = "none"
            selectors.menuContainer.style.backgroundColor = ""
        } else {
            selectors.homeNav.style.zIndex = "20"
            selectors.menu.style.transform = "TranslateX(0PX)"
            selectors.menu.style.display = "block"
            selectors.menuContainer.style.backgroundColor = "#5a4b0d52"
        }
    } ,

    updateDriverSettings : function(selectors){
        var location = selectors.location.value ;
        var destination = selectors.destination.value ;

        if(location == destination) {
            selectors.price.innerHTML = "Location and destination cannot be the same"
        } else{
            //all taxis FROM cape town
            if (location == "Cape Town" && destination == "Bellville" || destination == "Khayelitsha" || destination == "Mitchell's Plain" || destination == "Nyanga" ){
                selectors.price.innerHTML = 18
            }
            if (location == "Cape Town" && destination == "Langa" ){
                selectors.price.innerHTML = 12
            }
            if (location == "Cape Town" && destination == "Dunoon" || destination == "Wynberg"){
                selectors.price.innerHTML = 15
            }
            //all taxis TO cape town
            if (destination == "Cape Town" && location == "Bellville" || location == "Khayelitsha" || location == "Mitchell's Plain" || location == "Nyanga" ){
                selectors.price.innerHTML = 18
            }
            if (destination == "Cape Town" && location == "Langa" ){
                selectors.price.innerHTML = 12
            }
            if (destination == "Cape Town" && location == "Dunoon" || location == "Wynberg"){
                selectors.price.innerHTML = 15
            }
            //all taxis FROM Langa
            if (location == "Langa" &&  destination == "Khayelitsha" || destination == "Mitchell's Plain" ){
                selectors.price.innerHTML = 16
            }
            if (location == "Langa" && destination == "Bellville" ){
                selectors.price.innerHTML = 14
            }
            if (location == "Langa" && destination == "Dunoon" || destination == "Nyanga"){
                selectors.price.innerHTML = 10
            }
            //all taxis TO Langa
            if (destination == "Langa" &&  location == "Khayelitsha" || location == "Mitchell's Plain" ){
                selectors.price.innerHTML = 16
            }
            if (destination == "Langa" && location == "Bellville" ){
                selectors.price.innerHTML = 14
            }
            if (destination == "Langa" && location == "Dunoon" || location == "Nyanga"){
                selectors.price.innerHTML = 10
            }
            //all taxis FROM Bellville
            if (location == "Bellville" &&  destination == "Khayelitsha" || destination == "Mitchell's Plain" || destination == "Wynberg" ){
                selectors.price.innerHTML = 18
            }
            if (location == "Bellville" && destination == "Nyanga" ){
                selectors.price.innerHTML = 14
            }
            if (location == "Bellville" && destination == "Dunoon"){
                selectors.price.innerHTML = 16
            }
            //all taxis TO Bellville
            if (destination == "Bellville" &&  location == "Khayelitsha" || location == "Mitchell's Plain" || location == "Wynberg" ){
                selectors.price.innerHTML = 18
            }
            if (destination == "Bellville" && location == "Nyanga" ){
                selectors.price.innerHTML = 14
            }
            if (destination == "Bellville" && location == "Dunoon"){
                selectors.price.innerHTML = 16
            }
            //all taxis FROM Khayelitsha
            if (location == "Khayelitsha" &&  destination == "Dunoon" || destination == "Mitchell's Plain" || destination == "Wynberg" ){
                selectors.price.innerHTML = 18
            }
            if (location == "Khayelitsha" && destination == "Nyanga" ){
                selectors.price.innerHTML = 14
            }
            //all taxis TO Khayelitsha
            if (destination == "Khayelitsha" &&  location == "Dunoon" || location == "Mitchell's Plain" || location == "Wynberg" ){
                selectors.price.innerHTML = 18
            }
            if (destination == "Khayelitsha" && location == "Nyanga" ){
                selectors.price.innerHTML = 14
            }
            //all taxis FROM Mitchell's Plain 
            if (location == "Mitchell's Plain" && destination == "Nyanga" ){
                selectors.price.innerHTML = 16
            }
            if (location == "Mitchell's Plain" && destination == "Wynberg" ){
                selectors.price.innerHTML = 18
            }
            if (location == "Mitchell's Plain" && destination == "Dunoon" ){
                selectors.price.innerHTML = 15
            }
            //all taxis TO Mitchell's Plain 
            if (destination == "Mitchell's Plain" && location == "Nyanga" ){
                selectors.price.innerHTML = 16
            }
            if (destination == "Mitchell's Plain" && location == "Wynberg" ){
                selectors.price.innerHTML = 18
            }
            if (destination == "Mitchell's Plain" && location == "Dunoon" ){
                selectors.price.innerHTML = 15
            }

            var time = parseInt(selectors.price.innerHTML) * 1.5;
            var distance = parseInt(selectors.price.innerHTML) * 1.35;


            var drivers = JSON.parse(localStorage.getItem("drivers"))

            drivers.map(function(d ){
                if(d.dEmail === selectors.driverEmail.value){
                    d.price =   selectors.price.innerHTML
                    d.time = time
                    d.distance = distance
                    d.location = location 
                    d.destination = destination
                    localStorage.setItem("drivers" , JSON.stringify(drivers))
                }
            })
            localStorage.setItem('driverUpdates' , JSON.stringify(this.driverUpdates))
        } 
    }
}

