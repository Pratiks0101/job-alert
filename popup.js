const jobs = document.getElementById("jobs")
const savebtn = document.getElementById("save-button")
const error = document.getElementById("error")

savebtn.addEventListener("click", ()=> {
    if(jobs.value.trim() === ""){
        console.log(error.innerText="Please write atleast one job title")
        return
    }else{
        console.log(jobs.value.trim())
    }
})