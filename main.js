let s = document.querySelector(".s")
let m = document.querySelector(".m")
let h = document.querySelector(".h")


let Data = new Data()

function clock() {
    let  sec = Data.getSeconds()
    let  min = Data.getMinutes()
    let  hour = Data.getHours()

    s.style.transform = `rotate(${sec}deg)`
    setTimeout(() => {
        clock
    },1000);
}
clock()

