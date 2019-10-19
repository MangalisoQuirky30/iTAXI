// user model 

function User(){
    this.data = [] ; 
    this.errors = [] ;
    this.taxiRanks = [
        [
            { taxiPlate : "ca324f4" , driver : "chooster" , sitLeft : 5 , from : "Langa" ,  to : "Cape Town" , price : "R15" , timeLeft : 10 },
            { taxiPlate : "ca324f4" , driver : "chooster" , sitLeft : 5 , from : "Langa" ,  to : "Cape Town" , price : "R15" , timeLeft : 10 },
            { taxiPlate : "ca324f4" , driver : "chooster" , sitLeft : 5 , from : "Langa" ,  to : "Cape Town" , price : "R15" , timeLeft : 10 },
            { taxiPlate : "ca324f4" , driver : "chooster" , sitLeft : 5 , from : "Langa" ,  to : "Cape Town" , price : "R15" , timeLeft : 10 },
            { taxiPlate : "ca324f4" , driver : "chooster" , sitLeft : 5 , from : "Langa" ,  to : "Cape Town" , price : "R15" , timeLeft : 10 }
        ],
        [
            { taxiPlate : "ca324f4" , driver : "chooster" , sitLeft : 5 , from : "Langa" ,  to : "Cape Town" , price : "R15" , timeLeft : 10 },
            { taxiPlate : "ca324f4" , driver : "chooster" , sitLeft : 5 , from : "Langa" ,  to : "Cape Town" , price : "R15" , timeLeft : 10 },
            { taxiPlate : "ca324f4" , driver : "chooster" , sitLeft : 5 , from : "Langa" ,  to : "Cape Town" , price : "R15" , timeLeft : 10 },
            { taxiPlate : "ca324f4" , driver : "chooster" , sitLeft : 5 , from : "Langa" ,  to : "Cape Town" , price : "R15" , timeLeft : 10 },
            { taxiPlate : "ca324f4" , driver : "chooster" , sitLeft : 5 , from : "Langa" ,  to : "Cape Town" , price : "R15" , timeLeft : 10 }
        ],
        [
            { taxiPlate : "ca324f4" , driver : "chooster" , sitLeft : 5 , from : "Langa" ,  to : "Cape Town" , price : "R15" , timeLeft : 10 },
            { taxiPlate : "ca324f4" , driver : "chooster" , sitLeft : 5 , from : "Langa" ,  to : "Cape Town" , price : "R15" , timeLeft : 10 },
            { taxiPlate : "ca324f4" , driver : "chooster" , sitLeft : 5 , from : "Langa" ,  to : "Cape Town" , price : "R15" , timeLeft : 10 },
            { taxiPlate : "ca324f4" , driver : "chooster" , sitLeft : 5 , from : "Langa" ,  to : "Cape Town" , price : "R15" , timeLeft : 10 },
            { taxiPlate : "ca324f4" , driver : "chooster" , sitLeft : 5 , from : "Langa" ,  to : "Cape Town" , price : "R15" , timeLeft : 10 }
        ],
        [
            { taxiPlate : "ca324f4" , driver : "chooster" , sitLeft : 5 , from : "Langa" ,  to : "Cape Town" , price : "R15" , timeLeft : 10 },
            { taxiPlate : "ca324f4" , driver : "chooster" , sitLeft : 5 , from : "Langa" ,  to : "Cape Town" , price : "R15" , timeLeft : 10 },
            { taxiPlate : "ca324f4" , driver : "chooster" , sitLeft : 5 , from : "Langa" ,  to : "Cape Town" , price : "R15" , timeLeft : 10 },
            { taxiPlate : "ca324f4" , driver : "chooster" , sitLeft : 5 , from : "Langa" ,  to : "Cape Town" , price : "R15" , timeLeft : 10 },
            { taxiPlate : "ca324f4" , driver : "chooster" , sitLeft : 5 , from : "Langa" ,  to : "Cape Town" , price : "R15" , timeLeft : 10 }
        ],
    
]
}

User.prototype = {

    init : function(){
        this.data = JSON.parse(localStorage.getItem('users'))  != null    ?    JSON.parse(localStorage.getItem('users'))     :    [ ]  ;
        console.log(this.data) ; 
        console.log("saving group id")
        for(var i = 0; i < this.taxiRanks.length; i++) {
             console.log("saving group id")
            for(var x = 0; x < this.taxiRanks[i].length; x++){
                this.taxiRanks[i].push({groupId:i})
         console.log("saving group id")
               // console.log(this.taxiRanks[i][x])

            }
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
        selectors.taxisAtRankList.style.display = "block"
        selectors.taxiRankHeading.textContent = rankName

        var taxiRanks = JSON.parse(localStorage.getItem('Taxi-ranks'))

        if(rankName.trim() == "Langa")
        {
            var rank = taxiRanks[0]
        }
        if(rankName.trim() == "Khayelitsha")
        {
            var rank = taxiRanks[1]
        }
        if(rankName.trim() == "Wynberg")
        {
            var rank = taxiRanks[2]
        }
        if(rankName.trim() == "Claremont")
        {
            var rank = taxiRanks[3]
        }

        console.log(rankName)
        
        for(var i = 0; i < rank.length ; i++){
            selectors.taxisAtRankList.innerHTML  += `<li class="rank-page-list-item">
            <div class="rank-page-details">
                <div class="rank-page-details-left">
                    <div class="rank-page-details-left-icon">
                        <img src="..\..\IMG\icon-taxi.png" alt="" class="rank-page-details-left-icon__img">
                    </div>
                    <div class="rank-page-details-left-text">
                        <h4 class="rank-page-details-left-text__heading">${rank[i].to}</h4>
                        <p class="rank-page-details-left-text__para">${rank[i].sitLeft} sits left</p>
                    </div>
                </div>
                <div class="rank-page-details-right">
                    <div class="rank-page-details-right-text">
                        <h4 class="rank-page-details-right-text__heading">${rank[i].price}</h4>
                        <p class="rank-page-details-right-text__para">${rank[i].timeLeft} mins left</p>
                    </div>
                </div>
            </div>
        </li>`
        }
        return rankName.trim()
     } ,

     showTaxiDetails : function(selectors){
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

