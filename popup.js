const jobs = document.getElementById("jobs")
const savebtn = document.getElementById("save-button")
const error = document.getElementById("error")

savebtn.addEventListener("click", ()=> {
    const errMsg = error.innerText = "Please write atleast one job title"
    if(jobs.value.trim() === ""){
        console.log(errMsg)
        return
    }else{
        console.log(error.innerText= "")
        localStorage.setItem("job titles", jobs.value.trim())
    }
})