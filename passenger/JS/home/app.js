// APP Controller

function App( UserCtrl , UICtrl ){
    var user =  new UserCtrl() ;
    var ui = new UICtrl() ;

    localStorage.setItem('Taxi-ranks' , JSON.stringify(user.taxiRanks))

    ui.selectors.menuBtn.addEventListener("click" , function(){
        user.showHideMenu(ui.selectors)
    })
    ui.selectors.inputData.addEventListener('keyup', function(e){
        user.searchRank(ui.selectors , e)
    })

    ui.selectors.taxiRankList.addEventListener('click' , function(e){
        var location = e.target.textContent
        user.showTaxisAtRank(ui.selectors , location)
    })

    
    ui.selectors.pLogoutBtnMob.addEventListener("click" , function(){
        user.logoutPass()
    })
    
    ui.selectors.pLogoutBtn.addEventListener("click" , function(){
        user.logoutPass()
    })

   if(ui.selectors.taxisAtRankList != null){
        ui.selectors.taxisAtRankList.addEventListener('click' , function(e){
            var item = e.target.parentElement
            var emailParent = e.target.parentElement
            var email = item.dataset.email
            
            if (item.className == 'rank-page-list-item'){
                user.showTaxiDetails( item, email)
            }
        }) 
    }
    ui.selectors.taxisAtRankList.addEventListener("click" , function(e){
        e.preventDefault()
        var item = e.target
        var email = item.dataset.email
        var location = ui.selectors.taxiRankHeadingName.innerHTML

        //request seat
        if(item.id == "request-seat"){
            item.parentElement.parentElement.parentElement.style.display = "none"
            user.requestRide(ui.selectors , email )
            ui.selectors.taxisAtRankList.innerHTML = ""
            user.showTaxisAtRank(ui.selectors , location)
        }

        // cancel request
        if(item.id == "cancel-request"){
            item.parentElement.parentElement.parentElement.style.display = "none"
            ui.selectors.taxisAtRankList.innerHTML = ""
            user.showTaxisAtRank(ui.selectors , location)
        }
        
    })

    // Initialize the two functions
    ui.init() ;
    user.init(ui.selectors)
}

// APP INIT
App(User, UI)