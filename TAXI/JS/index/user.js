// user model 

function User(){
    this.passengers = [] ; 
    this.drivers = [] ; 
    this.errors = [] ;
    this.tRanks = [ "Cape Town" ,  "Langa" ,  "Bellville" ,  "Khayelitsha" ,  "Mitchell's Plain" ,  "Retreat" ,  "Wynberg" ,  "Nyanga" ,  "Dunoon" ]
}

User.prototype = {

    init : function(selectors){

        
                    
        




        this.passengers = JSON.parse(localStorage.getItem('passengers'))  != null    ?    JSON.parse(localStorage.getItem('passengers'))     :    [ ]  ;
        this.drivers = JSON.parse(localStorage.getItem('drivers'))  != null    ?    JSON.parse(localStorage.getItem('drivers'))     :    [ ]  ;

        localStorage.setItem('taxi-ranks' , JSON.stringify(this.tRanks))

        for(var i = 0; i < this.tRanks.length ; i++){
            selectors.taxiRanks.innerHTML += `<option value="${this.tRanks[i]}">${this.tRanks[i]}</option>`
        }
        
    } ,

    showPassengerForms : function(selectors){
        selectors.passFormPage.style.display = "block" ;
        selectors.driverBtn.style.display = "none" ;
        selectors.passengerBtn.style.display = "none" ;
        selectors.logoCont.style.width = "300px"
        selectors.logoPage.style.height = "50vh" ;
        selectors.logoPage.style.backgroundImage = "linear-gradient(to top, white 15% , white 15% )" ;
        selectors.logoPageCont.style.paddingTop  = "2.5vh" ;
        selectors.driverOrPass.innerHTML = "PASSENGER"
        selectors.formSection.style.transform  = " translateY(-98px)" ;
    } ,

    showDriverForms : function(selectors){
        selectors.driverFormPage.style.display = "block" ;
        selectors.driverBtn.style.display = "none" ;
        selectors.passengerBtn.style.display = "none" ;
        selectors.logoCont.style.width = "300px"
        selectors.logoPage.style.height = "50vh" ;
        selectors.logoPage.style.backgroundImage = "linear-gradient(to top, white 15% , white 15% )" ;
        selectors.logoPageCont.style.paddingTop  = "2.5vh" ;
        selectors.formSection.style.transform  = " translateY(-98px)" ;
        selectors.driverOrPassD.innerHTML = "DRIVER"
        selectors.driverOrPass.style.textAlign = "center"

    } ,

    showPassengerSUform : function(selectors) {
        selectors.passFormSU.style.display = "block"
        selectors.passFormSI.style.display = "none"
        selectors.driverFormSU.style.display = "none" ;
        selectors.passFormSUbtn.style.color = "black"
        selectors.passFormSIbtn.style.color = "grey"
        selectors.passFormSUhr.style.backgroundColor = "#F5cF37"
        selectors.passFormSIhr.style.backgroundColor = "#ccc"
        selectors.passFormSUhr.style.width = "80px"
        selectors.passFormSIhr.style.width = "40px"
        selectors.driverOrPass.style.textAlign = "center"

    } ,

    showPassengerSIform : function(selectors){
        selectors.passFormSU.style.display = "none"
        selectors.passFormSI.style.display = "block"
        selectors.passFormSUbtn.style.color = "grey"
        selectors.passFormSIbtn.style.color = "black"
        selectors.passFormSUhr.style.backgroundColor = "#ccc"
        selectors.passFormSIhr.style.backgroundColor = "#F5cF37"
        selectors.passFormSUhr.style.width = "40px"
        selectors.passFormSIhr.style.width = "80px"
    },

    showDriverSUform : function(selectors) {
        selectors.driverFormSU.style.display = "block"
        selectors.driverFormSI.style.display = "none"
        selectors.driverFormSU.style.display = "none" ;
        selectors.driverFormSUbtn.style.color = "black"
        selectors.driverFormSIbtn.style.color = "grey"
        selectors.driverFormSUhr.style.backgroundColor = "#F5cF37"
        selectors.driverFormSIhr.style.backgroundColor = "#ccc"
        selectors.driverFormSUhr.style.width = "80px"
        selectors.driverFormSIhr.style.width = "40px"
        selectors.driverOrPass.style.textAlign = "center"

    } ,

    showDriverSIform : function(selectors){
        selectors.driverFormSU.style.display = "none"
        selectors.driverFormSI.style.display = "block"
        selectors.driverFormSUbtn.style.color = "grey"
        selectors.driverFormSIbtn.style.color = "black"
        selectors.driverFormSUhr.style.backgroundColor = "#ccc"
        selectors.driverFormSIhr.style.backgroundColor = "#F5cF37"
        selectors.driverFormSUhr.style.width = "40px"
        selectors.driverFormSIhr.style.width = "80px"
    },

    savePassenger : function(passDetails, selectors){
        
        var exstPass = this.passengers ; 
        var newPassEmail = exstPass.find(function(pass){
                            return pass.pEmail === passDetails.pEmail
                            })

        if(passDetails.pEmail == ""){
            this.errors.push({err : "Email address is required"})
        }
        if(passDetails.pName == ""){
            this.errors.push({err : "Name is required"})
        }
        if(passDetails.pPass == ""){
            this.errors.push({err : "Password is required"})
        }
        if(passDetails.pPass != selectors.pCpass.value){
            this.errors.push({err : "Passwords do not match, please try again."})
        }
        if( newPassEmail != undefined ){
            this.errors.push({error : 'A user with that email address already exists'})
        }

        

        if(this.errors.length > 0){
            selectors.errorsPSU.innerHTML = ""

            for(var i = 0; i < this.errors.length; i++){
                selectors.errorsPSU.innerHTML += '<li>' + this.errors[i].err  + '</li>'
            }
        }

        if(this.errors.length == 0){
            console.log(exstPass)
            exstPass.push(passDetails) ;
            console.log(exstPass)
            localStorage.setItem( 'passengers' , JSON.stringify(exstPass))
            selectors.successP.innerHTML = "You have been successfully registered. <b>Sign in</b> to access your account" 
        } 
    } ,

    saveDriver : function(driverDetails, selectors){
        var exstDrivers = this.drivers ;
        var newDriverEmail = exstDrivers.find(function(driver){
                            return driver.dEmail === driverDetails.dEmail
                            })
        var newDriverIdNum = exstDrivers.find(function(driver){
                            return driver.dIdNumber === driverDetails.dIdNumber
                            })
        var newDriverPhoneNum = exstDrivers.find(function(driver){
                            return driver.dPhoneNum === driverDetails.dPhoneNum
                            })
        
        if(driverDetails.dIdNumber == ""){
            this.errors.push({err : "ID number is required"})
        }
        if(driverDetails.dNumberPlate == ""){
            this.errors.push({err : "Number plate is required"})
        }
        if(driverDetails.dPhoneNum == ""){
            this.errors.push({err : "Phone number is required"})
        }
        if(driverDetails.dEmail == ""){
            this.errors.push({err : "Email address is required"})
        }
        if(driverDetails.dName == ""){
            this.errors.push({err : "Name is required"})
        }
        if(driverDetails.dTaxiRank == ""){
            this.errors.push({err : "Taxi Rank is required"})
        }
        if(driverDetails.dPass == ""){
            this.errors.push({err : "Password is required"})
        }
        if(driverDetails.dPass != selectors.dCpass.value){
            this.errors.push({err : "Passwords do not match, please try again."})
        }
        if( newDriverEmail != undefined && newDriverIdNum != undefined && newDriverPhoneNum != undefined ){
            this.errors.push({error : 'user with that email address already exists. user not registered'})
        }

        if(this.errors.length>0){
            for(var i = 0; i<this.errors.length; i++){
                selectors.errorsDSU.innerHTML += '<li>' + this.errors[i].err  + '</li>'
            }
        }

        if(this.errors== 0){
            if(exstDrivers.length > 0){
            }
        }

        if(exstDrivers.length > 0){
            if( newDriverEmail != undefined && newDriverIdNum != undefined && newDriverPhoneNum != undefined ){
                this.errors.push({error : 'user with that email address already exists. user not registered'})
                selectors.errorsDSU.innerHTML += '<li>user with that email address already exists. user not registered</li>'
            }else {
                if(this.errors == 0){
                    console.log(exstDrivers)
                    exstDrivers.push(driverDetails) ;
                    console.log(exstDrivers)
                    localStorage.setItem( 'drivers' , JSON.stringify(exstDrivers))
                    selectors.successD.innerHTML = "You have been successfully registered. <b>Sign in</b> to access your account" 
                }
            }
        }else {
            if(this.errors== 0){
                console.log(exstDrivers)
                exstDrivers.push(driverDetails) ;
                console.log(exstDrivers)
                localStorage.setItem( 'drivers' , JSON.stringify(exstDrivers))
                selectors.successD.innerHTML = "You have been successfully registered. <b>Sign in</b> to access your account" 
            }
        }
                    

    } ,








    loginPassenger : function(passDetails , selectors){
        var exstPass = JSON.parse(localStorage.getItem('passengers')) ; 

        if(passDetails.pLoginEmail == ""){
            this.errors.push({err : "Email address is required"})
        }
        if(passDetails.pLoginPass == ""){
            this.errors.push({err : "Password is required"})
        }

        if(this.errors.length>0){
            for(var i = 0; i<this.errors.length; i++){
                selectors.errorsPSI.innerHTML += '<li>' + this.errors[i].err  + '</li>'
            }
        }

        if(exstPass != null){
            exstPass.map(function(pass){
                if(pass.pEmail == passDetails.pLoginEmail && pass.pPass == passDetails.pLoginPass){
                    // creater time token and save it
                    var dt = new Date() ;
                    var currentHour = dt.getHours()
                    localStorage.setItem('token', JSON.stringify(currentHour))

                    var uri = encodeURIComponent(pass.pName)
                    window.location.href = `passenger/home.html` + "?" + uri ;
                }else {
                    console.log(this.errors)
                    selectors.errorsPSI.innerHTML = '<li>Invalid login details</li>'
                }
            }) 
        } else {
            selectors.errorsPSI.innerHTML = '<li>Invalid login details</li>'
        }
    } ,


    loginDriver : function( driverDetails , selectors ){
        var exstDrivers = JSON.parse(localStorage.getItem("drivers")) ;
        console.log(exstDrivers)

        if (driverDetails.dLoginEmail == ""){
            this.errors.push({err : "Email address is required"})
        }

        if (driverDetails.dLoginPass == ""){
            this.errors.push({err : "Password is required"})
        }

        if(this.errors.length>0){
            for(var i = 0; i<this.errors.length; i++){
                selectors.errorsDSI.innerHTML += '<li>' + this.errors[i].err  + '</li>'
            }
        }

        if(this.errors.length == 0){
            if(exstDrivers != null){
                exstDrivers.map(function(driv){
                    if(driv.dEmail == driverDetails.dLoginEmail && driv.dPass == driverDetails.dLoginPass){
                        var dt = new Date() ;
                        var currentHour = dt.getHours()
                        localStorage.setItem('token', JSON.stringify(currentHour)) 
                        var uri = encodeURIComponent(driv.dEmail)
                        window.location.href = `driver/home.html` + "?" + uri ;
                    } else {
                        selectors.errorsDSI.innerHTML = '<li>Invalid login details</li>'
                    }
                })
            }else {
                selectors.errorsDSI.innerHTML = '<li>No users available, Please sign up</li>'
            }
        }

        
    }   
    
    


}

