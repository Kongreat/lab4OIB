// registration inputs
let regUsername = document.getElementById("regUsername")
let regEmail = document.getElementById("regEmail")
let regPass = document.getElementById("regPass")
let regConfirm = document.getElementById("regConfirm")
let regButton = document.getElementById("regButton")

//reset password
let reset = document.getElementById("reset")
let changeForm = document.getElementById("changeForm")
let newPassButton = document.getElementById("newPassButt")

//login
let loginButton = document.getElementById("loginButton")
let loginFlag = false

//other vars
let incorrectCounter = 0

var objPeople = [
    {
        username: "kostya",
        password: "123",
        email: "kongreat13@gmail.com",
        banned: false
    },

]

function validatePasswords(pass, confirm){
    if(pass.value == confirm.value){
        return true
    }
    else{
        window.alert("Passwords different")
        return false
    }
}

function validateLogin(login){
    for(let i = 0; i<objPeople.length; i++){
        if(login == objPeople[i].username){
            window.alert("Select another username")
            return false
        }
        else{return true}
    }
}

loginButton.addEventListener("click", function(){
    let logUsername = document.getElementById("logUsername").value
    let logPass = document.getElementById("logPass").value
    let form = document.getElementById("form")

    if(loginFlag === false){
        for(let i = 0; i<objPeople.length; i++){
        if(logUsername == objPeople[i].username && logPass == objPeople[i].password && objPeople[i].banned == false){
            console.log(logUsername + " is logged in")
            window.alert(logUsername + " is logged in")
            loginFlag = true
            console.log(loginFlag)
            return 
            }
        }
    }

    else{window.alert("You already logged in")}
    
    if(loginFlag == false && incorrectCounter<3){
        incorrectCounter++
        console.log("incorrect username or password " + incorrectCounter)
        window.alert(3-incorrectCounter + " attempts left")
    }

    if(incorrectCounter >= 3){
        for(let i = 0; i<objPeople.length; i++){
            if(logUsername == objPeople[i].username && objPeople[i].banned == false){
                window.alert("User is blocked. To unlock contact kongreat13@gmail.com")
                objPeople[i].banned = true
                console.log(logUsername + " banned")
                console.log(objPeople[i])
                incorrectCounter = 0
                return 
            }
        }
    }
})

regButton.addEventListener("click", function(){
    if(validatePasswords(regPass, regConfirm) == true){
        if(validateLogin(regUsername.value) == true){
            var newUser = {
                username: regUsername.value,
                password: regPass.value,
                email: regEmail.value,
                banned: false
            }
            objPeople.push(newUser)
            console.log(objPeople)
            window.alert("User registered")
            regUsername.value = ""
            regPass.value = ""
            regConfirm.value = ""
            regEmail.value = ""

            setTimeout(() => {
                window.alert("You must change your password")
                form.style.display = "none"
                changeForm.style.display = "block"
            }, 2000);
        }
    }  
})

reset.addEventListener("click", function(){
    changeForm.style.display = "block"
})

newPassButton.addEventListener("click", function(){
    var resUsername = document.getElementById("resetUsername").value
    var resEmail = document.getElementById("resetEmail").value
    var resAnswer = document.getElementById("answer").value
    var newPassword = document.getElementById("newPass").value

    for(let i = 0; i<objPeople.length; i++){
        if(resUsername == objPeople[i].username && resEmail == objPeople[i].email && resAnswer == "4"){
            objPeople[i].password = newPassword
            objPeople[i].banned = false
            console.log(objPeople)
            window.alert("Password changed")
            changeForm.style.display = "none"
            form.style.display = "block"
        }

    }
})


function openLoginPage() {
    document.querySelector(".reg").classList.remove("show-page");
    document.querySelector(".login").classList.add("show-page");
    document.getElementById("login-action").classList.add("show");
    document.getElementById("reg-action").classList.remove("show");
  }
  function openRegPage() {
    document.querySelector(".reg").classList.add("show-page");
    document.querySelector(".login").classList.remove("show-page");
    document.getElementById("reg-action").classList.add("show");
    document.getElementById("login-action").classList.remove("show");
  }