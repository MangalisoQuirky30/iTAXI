// user model 

function User(){
    this.passengers = [] ; 
    this.drivers = [] ; 
    this.errors = [] ;
}

User.prototype = {

    init : function(){
        this.passengers = JSON.parse(localStorage.getItem('passengers'))  != null    ?    JSON.parse(localStorage.getItem('passengers'))     :    [ ]  ;
        this.drivers = JSON.parse(localStorage.getItem('drivers'))  != null    ?    JSON.parse(localStorage.getItem('drivers'))     :    [ ]  ;
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

        if(this.errors.length>0){
            for(var i = 0; i<this.errors.length; i++){
                selectors.errorsP.innerHTML += '<li>' + this.errors[i].err  + '</li>'
            }
        }

        if(exstPass.length > 0){
            if( newPassEmail != undefined ){
                console.log('user with that email address already exists. user not registered') ;
                this.errors.push({error : 'user with that email address already exists. user not registered'})
                console.log(this.errors)
            }else {
                if(this.errors== 0){
                    exstPass.push(passDetails) ;
                }
            }
        }else {
            if(this.errors== 0){
                exstPass.push(passDetails) ;
            }
        }
        localStorage.setItem( 'passengers' , JSON.stringify(exstPass)) ;
    } ,

    saveDriver : function(){
        var exstDrivers = JSON.parse(localStorage.getItem("drivers"))


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
                selectors.errorsP.innerHTML += '<li>' + this.errors[i].err  + '</li>'
            }
        }

        exstPass.map(function(pass){
            if(pass.pEmail == passDetails.pLoginEmail && pass.pPass == passDetails.pLoginPass){
                // creater token and save it
                var token;
                localStorage.setItem('token', JSON.stringify(token))
                window.location.href = `passenger/home.html` ;
            }else {
                console.log(this.errors)
                //this.errors.push({err:"Invalid login details"})
                selectors.errorsP.innerHTML = '<li>Invalid login details</li>'
            }
        }) 
    } ,
    
    


}

