(()=>{"use strict";var n={n:e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},d:(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},o:(n,e)=>Object.prototype.hasOwnProperty.call(n,e)};const e=require("path");var t=n.n(e);const o=require("electron");if("string"==typeof o)throw new TypeError("Not running in an Electron environment!");const{env:r}=process,a="ELECTRON_IS_DEV"in r,i=1===Number.parseInt(r.ELECTRON_IS_DEV,10),c=a?i:!o.app.isPackaged;var s,l="src\\main";function p(){(s=new o.BrowserWindow({width:1200,height:900,titleBarStyle:"hiddenInset",webPreferences:{nodeIntegration:!0,contextIsolation:!1},icon:"".concat(l,"/dist/assets/icon.png")})).setIcon("".concat(l,"/dist/assets/icon.png")),s.loadURL(c?"http://localhost:3000":"file://".concat(t().join(l,"../build/index.html"))),s.on("closed",(function(){return s=null})),s.removeMenu(),s.webContents.openDevTools()}o.app.on("ready",p),o.app.on("window-all-closed",(function(){"darwin"!==process.platform&&o.app.quit()})),o.app.on("activate",(function(){null===s&&p()}))})();