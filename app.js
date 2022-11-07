const username = document.querySelector("#username")
const email = document.querySelector("#email")
const btnParent = document.getElementsByClassName("flex-center")[1]
const successMsg = document.querySelector(".success-msg")
const btn = document.querySelector("#submit");
btn.addEventListener("click", () => {
    clearInput()
    showMsg()
})

function showMsg (){
    successMsg.style.visibility = "visible"
    setTimeout(() => {
        successMsg.style.visibility = "hidden"
    }, 3000);
}

function clearInput() {
    username.value = ""
    email.value = ""
}

function moveBtn () {
    if(btnParent.classList.contains("flex-center")) {
        btnParent.classList = ""
        btnParent.classList.add("flex-start")
    } else if(btnParent.classList.contains("flex-start")) {
        btnParent.classList = ""
        btnParent.classList.add("flex-end")
    } else {
        btnParent.classList = ""
        btnParent.classList.add("flex-center")
    }
}

function checkValidation (value){
    let regex = /(.+)@(.+){2,}\.(.+){2,}/
    if(!regex.test(value) || !username.value){
        moveBtn()
    }

}


btn.addEventListener("mouseenter", () => {
    checkValidation(email.value)
})