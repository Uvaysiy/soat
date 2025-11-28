let s = document.querySelector(".s")
let m = document.querySelector(".m")
let h = document.querySelector(".h")
let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')

function clock() {
    let data = new Date()

    let sec = data.getSeconds()
    let min = data.getMinutes()
    let hour = data.getHours()


    s.style.transform = `rotate(${sec * 6}deg)`
    m.style.transform = `rotate(${min * 6}deg)`
    h.style.transform = `rotate(${hour * 30}deg)`

    setTimeout(() => {
        clock()
    }, 1000);

    hours.innerHTML = data.getHours() < 10 ? '0'+data.getHours() : data.getHours()
    minutes.innerHTML = data.getMinutes() < 10 ? '0'+data.getMinutes() : data.getMinutes()
}

clock()

let tabsItem = document.querySelectorAll('.tabsItem')
let tabsContentItem = document.querySelectorAll('.tabsContentItem')

for (let i = 0; i < tabsItem.length ; i++) {
    
    tabsItem[i].addEventListener('click' , function () {

       for (let k =0 ; k < tabsItem.length ; k++) {

        tabsItem[k].classList.remove('active')
        tabsContentItem[k].classList.remove('active')
        
       }

       tabsItem[i].classList.add('active')
       tabsContentItem[i].classList.add('active')
        
    })    
}

let btn = document.querySelector('.stopwatch__btn')
let stopwatchSecond = document.querySelector('.stopwatch__seconds')
let  stopwatchMinute = document.querySelector('.stopwatch__minutes')
let stopwatchHour = document.querySelector('.stopwatch__hours')
let lamp = document.querySelector('.tabsLink__span')
let foo
function sec(){
    stopwatchSecond.innerHTML++
 
      if ( stopwatchSecond.innerHTML > 59 ){
     stopwatchSecond.innerHTML = 0
    stopwatchMinute.innerHTML++

  } else if(stopwatchMinute.innerHTML > 59) {
    stopwatchMinute.innerHTML = 0
    stopwatchHour.innerHTML++
  } else if (stopwatchHour.innerHTML > 24){
    stopwatchHour.innerHTML = 0
  }
  foo = setTimeout(() => {
       sec()
  }, 1000);
}






btn.addEventListener('click', () => {

        if (btn.innerText == 'START') {
            stopwatchSecond.innerText++
            btn.innerText = 'STOP'
            lamp.classList.add('active')
            sec()
        } else if (btn.innerText == 'STOP') {
            btn.innerText = 'CLEAR'
            lamp.classList.remove('active') 
            lamp.classList.add('active_clear')
            clearInterval(foo)
        } else{
            btn.innerText = 'START'
            lamp.classList.remove('active_clear')
            stopwatchSecond.innerHTML = 0
            stopwatchMinute.innerHTML = 0
            stopwatchHour.innerHTML = 0
        }
    })
