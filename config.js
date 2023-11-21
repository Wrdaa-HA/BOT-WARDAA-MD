
// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
//https://api.betabotz.org
//https://api.botcahx.live
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.lann && global.btc
// - Contoh global.btc = 'ngaksk?'//register di https://api.botcahx.live
// - Contoh global.lann = 'Ntahla' //register key di https://api.betabotz.org
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.


// List Key 
// Betabotz = digunakan hampir di semua fitur kecuali linkshort
// Botcahx  = digunakan untuk linkshort saja

global.owner = ['6285939391878']  
global.mods = ['6285939391878'] 
global.prems = ['6285939391878']
global.nameowner = '🔱 DVinz 🔱'
global.numberowner = '6285939391878' 
global.mail = 'wrdaaratu@gmail.com' 
global.dana = '6285939391878'
global.pulsa = '6285939391878'
global.gopay = '6285939391878'
global.namebot = '👑 Queen`s  Wardaa -MD 👑 '
global.gc = 'https://chat.whatsapp.com/G4f1fTpz9zL4EH3FyIcaPR'
global.web = 'https://github.com/Wardaa-HA'
global.instagram = 'https://instagram.com/rull_dvinz'
global.wm = 'Queen`s  Wardaa -MD'
global.watermark = wm
global.wm2 = '⫹⫺ Wardaa Bot'
global.wm3 = '© Rull Own'
global.wm4 = 'made by R.W-MD'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with Queen`s  Wardaa'
global.author = 'Bot WhatsApp R. DVinz'

//---- image thumbnail 
global.thumb = 'https://i.imgur.com/sBekNmH.jpg'

//===> Apikey
global.lann = 'y6eHya54' //isi apikey mu https://api.betabotz.org
global.btc = 'XB3lg4IR'//Isi apikey di https://api.botcahx.live
global.APIs = {   
  lann: 'https://api.betabotz.org',
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.betabotz.org': 'y6eHya54' //isi apikey mu https://api.betabotz.org
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
