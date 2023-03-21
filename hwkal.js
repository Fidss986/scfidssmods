// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Hw Mods wa : Copyan Dari Base Dika


const fs = require('fs')
const chalk = require('chalk')

global.wlcm = []
global.ntnsfw = []
global.ntnsfww = []

//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/c/@daffaaaxd' // ubah aia
global.ig = '-' // ubah aja
global.email = 'ccoc93957@gmail.com'
global.region = 'indonesia'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'ꪶ 𝐅𝐈𝐃𝐒𝐒 𝐌𝚯𝐃𝐙 ꫂ' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'ꪶ 𝐅𝐈𝐃𝐒𝐒 𝐌𝚯𝐃𝐙 ꫂ' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'ꪶ 𝐅𝐈𝐃𝐒𝐒 𝐌𝚯𝐃𝐙 ꫂ' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
// Other
global.owner = ['6285710080374','6281375160568'] // ubah aja pake nomor lu
global.premium = ['6285710080374'] // ubah aja pake nomor lu
global.packname = 'ꪶ 𝐅𝐈𝐃𝐒𝐒 𝐌𝚯𝐃𝐙 ꫂ' // ubah aja
global.ownerr = ['ꪶ 𝐅𝐈𝐃𝐒𝐒 𝐌𝚯𝐃𝐙 ꫂ'] // ubaha aja
global.author = 'ꪶ 𝐅𝐈𝐃𝐒𝐒 𝐌𝚯𝐃𝐙 ꫂ' //ubah aja
global.sessionName = './sessionye/Daffaaa XD' //Gausaj Di Ubah
global.prefa = ['','!','.',',','🐤','🗿'] // Gausah Mendingan 
global.sp = '⭔' // Gausah Juga

// Terserah
global.mess = {
    nsfw: '*Fitur NSFW tidak diaktifkan, chat admin grup supaya diaktifkan*_',
    wait: '*Sabar Wibu*_',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',    
}
//=================================================//
//Gausah Di Apa2 in
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
//=================================================//
global.limitawal = {
    premium: "Infinity",
    free: 999999999
}
//=================================================//
//Terserah Kalau Paham 
global.thumb = fs.readFileSync("./baseikal/image/hw.jpg")
global.log0 = fs.readFileSync("./baseikal/image/haikal.jpg")
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})