// user model 

function User(){
    this.data = [] ; 
    this.errors = [] ;
}

User.prototype = {

    init : function(){
        this.data = JSON.parse(localStorage.getItem('users'))  != null    ?    JSON.parse(localStorage.getItem('users'))     :    [ ]  ;
        console.log(this.data) ; 
    } ,

    driverPassenger : function(){

    } ,



    showForms : function(selectors){
        selectors.formPage.style.display = "block" ;
        selectors.driverBtn.style.display = "none" ;
        selectors.passengerBtn.style.display = "none" ;
        selectors.logoCont.style.width = "300px"
        selectors.logoPage.style.height = "50vh" ;
        selectors.logoPage.style.backgroundImage = "linear-gradient(to top, white 15% , white 15% )" ;
        selectors.logoPageCont.style.paddingTop  = "2.5vh" ;
        selectors.formSection.style.transform  = " translateY(-98px)" ;
    } ,


    showSUform : function(selectors) {
        selectors.formSU.style.display = "block"
        selectors.formSI.style.display = "none"
        selectors.formSUbtn.style.color = "black"
        selectors.formSIbtn.style.color = "grey"
        selectors.formSUhr.style.backgroundColor = "#f5cf37"
        selectors.formSIhr.style.backgroundColor = "#ccc"
        selectors.formSUhr.style.width = "80px"
        selectors.formSIhr.style.width = "40px"

    } ,

    showSIform : function(selectors){
        selectors.formSU.style.display = "none"
        selectors.formSI.style.display = "block"
        selectors.formSUbtn.style.color = "grey"
        selectors.formSIbtn.style.color = "black"
        selectors.formSUhr.style.backgroundColor = "#ccc"
        selectors.formSIhr.style.backgroundColor = "#f5cf37"
        selectors.formSUhr.style.width = "40px"
        selectors.formSIhr.style.width = "80px"
    },

    save : function(user){
            this.data.push(user) ;
            localStorage.setItem( 'users' , JSON.stringify(this.data)) ;
    } ,

    login : function(user , page){
        window.location.href = `${page}/home.html` ;
    } 
}