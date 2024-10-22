import path from 'path';
import { app, BrowserWindow, shell, ipcMain } from 'electron';
import isDev from 'electron-is-dev';

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ 
        width: 1200,
        height: 900,
        titleBarStyle: 'hiddenInset',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        icon: `${__dirname}/dist/assets/icon.png`
    });

    mainWindow.setIcon(`${__dirname}/dist/assets/icon.png`);

    mainWindow.loadURL(
        isDev
        ? "http://localhost:3000"
        : `file://${path.join(__dirname, "../build/index.html")}`
    );
    mainWindow.on("closed", () => (mainWindow = null));
    mainWindow.removeMenu();

    mainWindow.webContents.openDevTools();

}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});