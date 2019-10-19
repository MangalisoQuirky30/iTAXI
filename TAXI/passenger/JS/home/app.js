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
        var rankName = e.target.textContent
        user.showTaxisAtRank(ui.selectors , rankName)
    })

   // if(ui.selectors.taxisAtRankListItem != null){
        ui.selectors.taxisAtRankListItem.addEventListener('click' , function(){
            console.log("clicked list item")
            user.showTaxiDetails(ui.selectors)
        })
   // }

    // Initialize the two functions
    ui.init() ;
    user.init()
}

// APP INIT
App(User, UI)