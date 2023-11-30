const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("923152363247,")
global.mongodb = process.env.MONGODB_URI || "mongodb://uwrr2obvrb4kbwnrvimy:rbgieh8nfk7EylXCh2D@byg4ii8uzy5rro8bcdfu-mongodb.services.clever-cloud.com:2008/byg4ii8uzy5rro8bcdfu"
global.port= process.env.PORT || 5000
global.email = 'mrkashihackz@gmail.com'
global.github = 'https://github.com/vajirabot1/KING-VAJIRA-MD'
global.location = 'bahawalpur punjab'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '923152363247'
global.devs = '923152363247';
global.website = 'https://github.com/vajirabot1/KING-VAJIRA-MD' //wa.me/+25000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/09ab24679fb3a297a8905.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'kashi 𝐁𝐨𝐭' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'mrkashi' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ?VAJIRA;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0d5ZzR1bVlZUHdjekRNQ3lndWw2MjFCNFZxTm84b0dadHQ0UU01VDRuND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkRoc2x1cHdHSVhMTWpIY2U5dVRQWGVTK2pxdERGRWdHem9xUnRNWVloTT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlT0lxMHJWdnJvOTFrNW0wMUdCdkVWdCs4Y09OWlpiS2lOZkl5Q1I4ekZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJleTBpWTZ3ZTRmTUlaQzZkcDZmV25BbG9DWWp3cXJGNjY1WTZUYzZvK0hRPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFBYjcvUFZJTlNwM0cvUjcyRjI4OGNZM2RzRG9zb2c5dE9ML09YMitqV289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVzU1ZvK1dISDl4MXh2ZWhvWjlEVUVuUEhWUXEybVZVUmdYWHNUNll4eUU9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6Y043NEVrTTkrMGdnWjJpbWJYWldpZ2RxQWpZMVRVaXZDUGdVQ1pCUXRQUDFXRUU1Zk5XbHJBUzJHeHY3MDAyNVExVWRYaHgvbVVrVUtCMy8yZjRCdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjgsImFkdlNlY3JldEtleSI6Ik5EaytYZVFEQ1M1TTVzcVdnZDNCMjF4MVhsS1JQSHRKOHdwZE5mSlI5WkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InBfUk4wMUhtU0FhaGYzNzJBZW1sVVEiLCJwaG9uZUlkIjoiMzhhMDY5MjItMzRkYS00OGZjLWE0YzUtOTI1MjAxNDc0MDg5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNYWmhGRm9POVZMV3ppM29uWkpvT2JjaGhkZz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlNUZVNUdkVqZENYL2U2K2tSSUh1Z3J2ZjlJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSURjd0tVREVOR2hvYXNHR0FZPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJZK2lRd2dEbDRoVlFMV201T3NHaTB3ZndOa241MjZVKzF6Y2tNaFVCQ2s4PSIsImFjY291bnRTaWduYXR1cmUiOiJGUEdpRW9ZMm5tNXZCN2R0QW12MEhMQ2hGU2d5SHBEeTAvZk1CQkJrQzVHamFLR2k3TEVDOWtpWE5XeFNyVGI2dklZck5WelRlZm9kVGpORzJMTUdEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiL0oxVWtHdVhNaE1rZ1FGV2d0aVpGQ295YWpyMUFkS1BQZnZZVjB2dCsxYkFzNHkvVkVJZnpWa004d1hoUzY0WUdnTExQelF3eEViUVZtSFdpczVuQXc9PSJ9LCJtZSI6eyJpZCI6IjkyMzE1MjM2MzI0Nzo3QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE1MjM2MzI0Nzo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldQb2tNSUE1ZUlWVUMxcHVUckJvdE1IOERaSitkdWxQdGMzSkRJVkFRcFAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDEzMzUyNTR9  : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'vajira' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'VAJIRA-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true: process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '92' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'im alive now' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'VAJIRA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
