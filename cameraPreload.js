const{ipcRenderer,contextBridge} = require("electron")
console.log("hereee")
contextBridge.exposeInMainWorld("electronAPI",{
    setImage:(img)=>ipcRenderer.send("set-img",img)
})