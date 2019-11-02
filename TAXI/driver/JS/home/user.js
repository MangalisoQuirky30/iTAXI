// user model 

function User(){
    this.updates = null ; 
    this.errors = [] ;
}

User.prototype = {

    init : function(selectors){

        var checkToken = JSON.parse(localStorage.getItem('token'))
        console.log(checkToken)
        var dtNow = new Date() ;
        var timeNow = dtNow.getHours()
        console.log(timeNow)
        if(timeNow > checkToken){
            window.location.href = "/index.html"
        }
        if(timeNow == checkToken){
            window.location.href = "/driver/home.html"
        }



        this.updates = JSON.parse(localStorage.getItem('updates')) != null ? JSON.parse(localStorage.getItem('updates')) : []
        //this code prints the logged in users name on the dashboard
        var driEml = window.location.search.substr(1)
        selectors.driverEmail.value = driEml.replace("%40" , "@")

        var allTaxiRanks = JSON.parse(localStorage.getItem('taxi-ranks'))
        
        for(var i = 0; i < allTaxiRanks.length ; i++){
            selectors.destination.innerHTML += `<option value="${allTaxiRanks[i]}">${allTaxiRanks[i]}</option>`
        }

    } ,

    showHideMenu : function(selectors){
        if (selectors.menu.style.transform != "translateX(-320px)") {
            selectors.menu.style.transform = "TranslateX(-320PX)"
            selectors.homeNav.style.zIndex = "0"
            selectors.menu.style.display = "none"
            selectors.page.style.display = "block"
            selectors.menuContainer.style.backgroundColor = ""
        } else {
            selectors.homeNav.style.zIndex = "20"
            selectors.menu.style.transform = "TranslateX(0PX)"
            selectors.menu.style.display = "block"
            selectors.page.style.display = "none"
            selectors.menuContainer.style.backgroundColor = "rgba(0,0,0,.5"
        }
    } ,

    updateDriverSettings : function(driverUpdates){
        console.log(this.updates)
        // var updatedData = this.updates.push(driverUpdates)
        // console.log("data" + updatedData)


        //localStorage.setItem('updates' , JSON.stringify(updatedData))

    }

   
}

