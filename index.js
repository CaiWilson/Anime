// 导入模块
let cheerio = require("cheerio")
let axios = require("axios")
let mysql = require("mysql")

// 数据库配置
const options = {
    host:"localhost",
    //port:3306,
    user:"root",
    password:"1234",
    database:"anime"
}
// 连接数据库
// const con = mysql.createConnection(options)
// con.connect()

// 获取动漫列表
async function getAnimeList() {
    let res = await axios.get("https://www.ppxdm.com/list/2.html")
    // $(".module-class-items:first-child a").each((i,ele)=>{
    //     let href = $(ele).attr("href")
    //     console.log(href)
    // })

}

//1111  3333

getAnimeList()