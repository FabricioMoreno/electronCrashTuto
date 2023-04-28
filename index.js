const img = document.getElementById("img")

window.electronAPI.getImage((event,data)=>{
    console.log(data)
    img.src = data
    window.electronAPI.closeCamera()
})
