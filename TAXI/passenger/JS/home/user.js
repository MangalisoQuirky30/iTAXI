// user model 

function User(){
   // this.data = [] ; 
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
                    <img src="/passenger/IMG/icon-location.png" alt="l/i" class="home-page-nearby-taxirank-list-item-icon__img">
                </div>
                <div class="home-page-nearby-taxirank-list-item-text">
                    <a  class="home-page-nearby-taxirank-list-item-text__paragraph">${allTaxiRanks[x]}</a>
                </div>
            </li>`
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
        selectors.taxiRankListItem.forEach(function(l){
            if(l.textContent.indexOf(val) != -1){
                l.style.display = 'flex'
            }else{
                l.style.display = 'none'
            }
        })  
    } ,
    showTaxisAtRank : function(selectors , rankName){
        selectors.homePage.style.display = "none"
        selectors.rankPage.style.display = "block"
        selectors.taxiRankHeading.textContent = rankName

        var taxiRanks = JSON.parse(localStorage.getItem('taxi-ranks'))
        var taxiDrivers = JSON.parse(localStorage.getItem('drivers')) 
        var updates = JSON.parse(localStorage.getItem('updates')) 


        for(var i = 0 ; i < taxiDrivers.length ; i++){
            if(taxiDrivers[i].dTaxiRank == rankName){
                console.log(taxiDrivers[i])


                for(var x = 0; x < updates.length ; x++){
                    if( taxiDrivers[i].dEmail == updates[x].driverEmail) {
                        selectors.taxisAtRankList.innerHTML  += `<li class="rank-page-list-item">
                            <div class="rank-page-details">
                                <div class="rank-page-details-left">
                                    <div class="rank-page-details-left-icon">
                                        <img src="/passenger/IMG/icon-taxi.png" alt="" class="rank-page-details-left-icon__img">
                                    </div>
                                    <div class="rank-page-details-left-text">
                                        <h4 class="rank-page-details-left-text__heading">${updates[x].destination}</h4>
                                        <p class="rank-page-details-left-text__para">${updates[x].sitsLeft} sits left</p>
                                    </div>
                                </div>
                                <div class="rank-page-details-right">
                                    <div class="rank-page-details-right-text">
                                        <h4 class="rank-page-details-right-text__heading">R${updates[x].price}</h4>
                                        <p class="rank-page-details-right-text__para">${updates[x].sitsLeft * 1.5} mins left</p>
                                    </div>
                                </div>
                            </div>
                        </li>`
                    }
                } 
            }
        }

        return rankName.trim()
     } ,

     showTaxiDetails : function(selectors){
         console.log("hellooooooooooooooooooooooooo")
        selectors.taxisAtRankListItem.innerHTML = `
        <div class="rank-page-driver-details">
            <div class="rank-page-driver-details-profile">
                <div class="rank-page-driver-profile-image">
                    <img src="IMG/user.png" alt="driver" class="rank-page-driver-profile-image__img">
                </div>
                <div class="rank-page-driver-profile-name">
                    <h3 class="rank-page-driver-profile-name__text">Gregory Smith</h3> 
                </div>
            </div>
            <div class="rank-page-driver-details-contact">
                <div class="rank-page-driver-details-contact-message">
                    <button class="rank-page-driver-details-contact-message__btn">
                        <img src="IMG/icon-sms.png" alt="sms" class="rank-page-driver-details-contact-message__btn--img">
                    </button>
                </div>
                <div class="rank-page-driver-details-contact-call">
                    <button class="rank-page-driver-details-contact-call__btn">
                        <img src="IMG/icon-call.png" alt="call" class="rank-page-driver-details-contact-call__btn--img">
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
                    <h4 class="rank-page-route-details-location-to__text">Cape Town Taxi Rank, Strand St</h4>
                </div>
            </div>
            <hr id="rank-page-route-details-nagivation__hr1">
            <div class="rank-page-route-details-location">
                <div class="rank-page-route-details-nagivation-from">
                    <img src="IMG/icon-location-from.png" alt="" class="rank-page-route-details-nagivation-from__img">
                </div>
                <div class="rank-page-route-details-location-from">
                    <h4 class="rank-page-route-details-location-from__text">Langa Taxi Rank, Langalibalele Dr.</h4>
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
                        <span class="rank-page-taxi-details__text--value">13km</span>
                    </p>
                </div>
                <div class="rank-page-taxi-details-time">
                    <p class="rank-page-taxi-details__text">
                        <span class="rank-page-taxi-details__text--property">Time</span>
                        <span class="rank-page-taxi-details__text--value">15-20mins</span>
                    </p>
                </div>
                <div class="rank-page-taxi-details-price">
                    <p class="rank-page-taxi-details__text">
                        <span class="rank-page-taxi-details__text--property">Price</span>
                        <span class="rank-page-taxi-details__text--value">R15</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="rank-page-taxi-request-container">
            <div class="rank-page-taxi-request">
                <button class="rank-page-taxi-request__btn">BOOK A SIT</button>
            </div>
        </div>`
     }
}

