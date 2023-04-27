const {app, BrowserWindow, Menu, shell} = require("electron")
const path = require("path")

const template = [
    {
        label:"Menu",
        submenu:[
            {
                label:"About"
            }
        ]
    },
    {
        label:"File",
        submenu:[
            {
                label:"Open camera",
                click:()=>{
                    const win2 = new BrowserWindow({
                        width:600,
                        height:600,
                        // backgroundColor: '#2e2c29' ,
                        show:false
                    })

                    win2.webContents.openDevTools()
                    win2.loadFile("camera.html")
                    // win2.loadURL("https://www.youtube.com/watch?v=kBtYon8KmdU&t=30s")

                    win2.once("ready-to-show",()=>{
                        win2.show()
                    })
                }
            },
            {type:"separator"},
            {
                label:"Exit",
                click: async()=>{
                    app.quit()
                }
            }
        ]
    },
    {
        label:"Window",
        submenu:[
            {
                role:"minimize"
            },
            {
                role:"close"
            }
        ]
    }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)


const createWindow = ()=>{
    const win = new BrowserWindow({
        height:500,
        width:500,
        webPreferences:{
            preload: path.join(__dirname,"preload.js")
        }
    })


    win.loadFile("index.html")
}


app.whenReady().then(()=>{
    createWindow()

    app.on("activate",()=>{
        if(BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})