// user model 

function User(){
   // this.data = [] ; 
    this.errors = [] ;
}

User.prototype = {

    init : function(selectors){
        

        var date = new Date();
        var token = date.getTime() ;
        var exstToken = JSON.parse(localStorage.getItem("ptoken"));
        var date1 =  new Date(Date.now());
        var date2 = new Date(exstToken);
        var newHour = date1.getHours() 
        var newMin = date1.getMinutes()
        var oldHour = date2.getHours()
        var oldMin = date2.getMinutes()

        // var driv = JSON.parse(localStorage.getItem('drivers'))
        // console.log(driv)

        // driv.map(function(dr ){
        //     if(i.dSeatsNumber < 1){
        //         console.log("found driver who overloaded.. lets chase jis away")
        //         i.location = "enroute"
        //         dr.push(i)
        //     }
            
        // })

        if(!exstToken){
            window.location.href = "../index.html"
        }

        console.log("0" + newHour + ":" + newMin + "  " + "0" + oldHour + ":" + oldMin)
        
        if ( newHour > oldHour && newMin > oldMin){
            console.log("it has been longer than an hour")
            localStorage.removeItem('ptoken')
            window.location.href = "../index.html"
        } else {
            console.log("it has not been more than an hour yet, user can stay.")
        }

        selectors.rankPage.style.display = "none"
        //this code prints the logged in users name on the dashboard
       var passName = window.location.search.substr(1)
       selectors.passName1.innerHTML = passName.replace("%20" , " ").replace("%20" , " ").replace("%20" , " ")
       selectors.passName2.innerHTML = passName.replace("%20" , " ").replace("%20" , " ").replace("%20" , " ")

       var allTaxiRanks = JSON.parse(localStorage.getItem('taxi-ranks'))

       for(var x = 0; x < allTaxiRanks.length ; x++){
            selectors.taxiRankList.innerHTML += 
            `<li class="home-page-nearby-taxirank-list-item">
                <div class="home-page-nearby-taxirank-list-item-icon">
                    <img src="IMG/icon-taxi.png" alt="taxi" class="home-page-nearby-taxirank-list-item-icon__img">
                </div>
                <div class="home-page-nearby-taxirank-list-item-text">
                    <a  class="home-page-nearby-taxirank-list-item-text__paragraph">${allTaxiRanks[x]}</a>
                </div>
            </li>`
       }  

       

    } ,

    logoutPass : function(){
        var alert = confirm("Are you sure you want to log out?")
        if(alert){
            localStorage.removeItem('ptoken')
            window.location.href = "../index.html"
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

    searchRank : function(selectors ,e){
        var val = e.target.value.charAt(0).toUpperCase();
        console.log(val) 
        console.log(selectors.taxiRankName) 

       // for(var i = 0; )


        // selectors.taxiRankName.forEach(function(l){
        //     if(!val.contains(l)){
        //         console.log("contains")
        //     } else [
        //         console.log("no contins")
        //     ]
        //     // if(l.textContent.indexOf(val) != -1){
        //     //     l.style.display = 'block'
        //     // }else{
        //     //     l.style.display = 'none'
        //     // }
        // })  
    } , 



    showTaxisAtRank : function(selectors , location){
        selectors.homePage.style.display = "none"
        selectors.rankPage.style.display = "block"
        selectors.taxiRankHeadingName.innerHTML = `${location}`       

        var taxiDrivers = JSON.parse(localStorage.getItem('drivers')) 

        for(var i = 0 ; i < taxiDrivers.length ; i++){
            if(taxiDrivers[i].location == location){
                //console.log(taxiDrivers[i])requestDrivEmail
                // selectors.requestDrivEmail.value += taxiDrivers[i].dEmail
                selectors.taxisAtRankList.innerHTML  += 
                `<li class="rank-page-list-item" data-email=${taxiDrivers[i].dEmail}>
                    <div class="rank-page-details">
                        <div class="rank-page-details-left">
                            <div class="rank-page-details-left-icon">
                                <button type="button"  class="view-taxi-details">
                                    <img src="IMG/icon-taxi.png" alt="" class="rank-page-details-left-icon__img" id="taxi-request-btn">
                                    <br>REQUEST  
                                </button>
                            </div>
                            <div class="rank-page-details-left-text">
                                <h4 class="rank-page-details-left-text__heading">${taxiDrivers[i].destination}  </h4>
                                <p class="rank-page-details-left-text__para">${taxiDrivers[i].dSeatsNumber} sits left</p>
                            </div>
                        </div>
                        
                        <div class="rank-page-details-right">
                            <div class="rank-page-details-right-text">
                                <h4 class="rank-page-details-right-text__heading">R${taxiDrivers[i].price}</h4>
                                <p class="rank-page-details-right-text__para">${taxiDrivers[i].dSeatsNumber * 1.5} mins left</p>
                            </div>
                        </div>
                    </div>
                </li>`
            }
            
        } 
        if(selectors.taxisAtRankList.innerHTML.trim() == ""){
            selectors.taxisAtRankList.innerHTML = '<li class="rank-page-list-item" >There are currently no taxis available here</li>'
        }
        //return location.trim()
     } ,




     showTaxiDetails : function(item, email){
        item.style.display = "block"
        var taxiDrivers = JSON.parse(localStorage.getItem('drivers')) 

        for(var i = 0 ; i < taxiDrivers.length ; i++){
            if(taxiDrivers[i].dEmail == email) {
                item.innerHTML = `<div class="rank-page-driver-details" id="taxi-details">
                    <div class="rank-page-driver-details-profile">
                        <div class="rank-page-driver-profile-image">
                            <img src="IMG/user.png" alt="driver" class="rank-page-driver-profile-image__img">
                        </div>
                        <div class="rank-page-driver-profile-name">
                            <h3 class="rank-page-driver-profile-name__text">${taxiDrivers[i].dName} </h3> 
                        </div>
                    </div>
                    <div class="rank-page-driver-details-contact">
                        <div class="rank-page-driver-details-contact-message">
                            <button class="rank-page-driver-details-contact-message__btn">
                                <img src="IMG/icon-sms.png" alt="sms" id="sms" class="rank-page-driver-details-contact-message__btn--img">
                            </button>
                        </div>
                        <div class="rank-page-driver-details-contact-call">
                            <button class="rank-page-driver-details-contact-call__btn">
                                <img src="IMG/icon-call.png" alt="call" id="call" onclick="window.open('tel:${taxiDrivers[i].dPhoneNum}');" class="rank-page-driver-details-contact-call__btn--img">
                            </button>
                        </div>
                    </div>
                </div>
                <div class="rank-page-route-details">
                    <div class="rank-page-route-details-nagivation">
                        <div class="rank-page-route-details-nagivation-to">
                            <img src="IMG/icon-location-to.png" alt="" class="rank-page-route-details-nagivation-to__img">
                        </div>
                        <div class="rank-page-route-details-location-to">
                            <h4 class="rank-page-route-details-location-to__text">${taxiDrivers[i].location}</h4>
                        </div>
                    </div>
                    <div class="rank-page-route-details-location">
                        <div class="rank-page-route-details-nagivation-from">
                            <img src="IMG/icon-location-from.png" alt="" class="rank-page-route-details-nagivation-from__img">
                        </div>
                        <div class="rank-page-route-details-location-from">
                            <h4 class="rank-page-route-details-location-from__text">${taxiDrivers[i].destination}</h4>
                        </div>
                    </div>
                </div>
                <div class="rank-page-taxi-details">
                    <div class="rank-page-taxi-details-container">
                        <div class="rank-page-taxi-details-image">
                            <img src="IMG/icon-taxi.png" alt="Taxi" class="rank-page-taxi-details-image__img">
                        </div>
                        <div class="rank-page-taxi-details-distance">
                            <p class="rank-page-taxi-details__text">
                                <span class="rank-page-taxi-details__text--property">Distance</span>
                                <span class="rank-page-taxi-details__text--value">${taxiDrivers[i].distance}km</span>
                            </p>
                        </div>
                        <div class="rank-page-taxi-details-time">
                            <p class="rank-page-taxi-details__text">
                                <span class="rank-page-taxi-details__text--property">Seats Left</span>
                                <span class="rank-page-taxi-details__text--value">${taxiDrivers[i].dSeatsNumber} seats</span>
                            </p>
                        </div>
                        <div class="rank-page-taxi-details-price">
                            <p class="rank-page-taxi-details__text">
                                <span class="rank-page-taxi-details__text--property">Price</span>
                                <span class="rank-page-taxi-details__text--value">R${taxiDrivers[i].price}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="rank-page-taxi-request-container">
                    <div class="rank-page-taxi-request">
                        <button class="rank-page-taxi-request__btn" data-email="${taxiDrivers[i].dEmail}" id="request-seat">REQUEST A SIT</button>
                        <button class="rank-page-taxi-request__btn" data-email="${taxiDrivers[i].dEmail}" id="cancel-request">CANCEL</button>
                    </div>
                </div>`
            }
        }
     } ,

     requestRide : function(selectors , email){

        var taxiDrivers = JSON.parse(localStorage.getItem('drivers')) 
        var passngrs = JSON.parse(localStorage.getItem('passengers')) 

        taxiDrivers.map(function(d){
            if(d.dEmail == email){
                d.dSeatsNumber = parseInt(d.dSeatsNumber) - 1
                if(d.dSeatsNumber == 0){
                    d.location = "enroute"
                }
                d.dBookings.push(selectors.passName1.textContent)
                localStorage.setItem('drivers' , JSON.stringify(taxiDrivers))
            }
        })

        // if(selectors.taxiDetz){
        //     selectors.taxiDetz.style.display = "none"

        // }

     }
}
