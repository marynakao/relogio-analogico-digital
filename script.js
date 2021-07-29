let digitalElement = document.querySelector('.digital')
let secondElement = document.querySelector('.p_s')
let minuteElement = document.querySelector('.p_m')
let hourElement = document.querySelector('.p_h')

function updateClock(){
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()

    // Relogio digital
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`

    // Relogio analógico
    // Ponteiro do segundo
    let sDeg = ((360/60) * second) - 90
    secondElement.style.transform = `rotate(${sDeg}deg)`

    // Ponteiro do minuto
    let mDeg = ((360/60) * minute) - 90
    minuteElement.style.transform = `rotate(${mDeg}deg)`

    // Ponteiro da hora
    let hDeg = ((360/12) * hour) - 90
    hourElement.style.transform = `rotate(${hDeg}deg)`
}

// Zero antes de horario menor que 10
function fixZero(time){
    if(time <10){
        return '0'+time
    }else{
        return time
    }
    // +curto: return time < 10 ? `0${time}` : time 
}
// Intervalo dos segundos
setInterval(updateClock, 1000)
updateClock()