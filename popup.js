const jobs = document.getElementById("jobs")
const savebtn = document.getElementById("save-button")
const error = document.getElementById("error")

savebtn.addEventListener("click", ()=> {
    const errMsg = error.innerText = "Please write atleast one job title"

    if(jobs.value.trim() === ""){
        console.log(errMsg)
        return
    }else
        {
        console.log(error.innerText= "")
        const array = jobs.value.split(',')

        const trimmedJobTitle = array.map(job => {
            return job.trim()
        })

        localStorage.setItem("jobTitles", JSON.stringify(trimmedJobTitle))
    }

})


const showSavedJobs = localStorage.getItem("jobTitles")

if (showSavedJobs !== null) {
    const parsedData = JSON.parse(showSavedJobs)
    jobs.value = parsedData.join(", ")
}