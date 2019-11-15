// APP Controller

function App( UserCtrl , UICtrl ){
    var user =  new UserCtrl() ;
    var ui = new UICtrl() ;

    localStorage.setItem('Taxi-ranks' , JSON.stringify(user.taxiRanks))

    ui.selectors.menuBtn.addEventListener("click" , function(){
        user.showHideMenu(ui.selectors)
    })
    
    ui.selectors.dLogoutBtnMob.addEventListener("click" , function(){
        user.logoutDriver()
    })
    ui.selectors.dLogoutBtn.addEventListener("click" , function(){
        user.logoutDriver()
    })

    ui.selectors.driverUpdatesForm.addEventListener('submit' , function(e){
        e.preventDefault()
        user.updateDriverSettings(ui.selectors)
    })

    // Initialize the two functions
    ui.init() ;
    user.init(ui.selectors)
}

// APP INIT
App(User, UI)

