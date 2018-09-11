const container = document.querySelector(".contain")
const banner = document.querySelector(".banner")
const imgs = document.querySelector(".banner").children
const lis = document.getElementById("nav").children
let next = document.getElementById("next")
let prev = document.getElementById("prev")
var  index = 0
let animated = false;



function animate(offset) {
    animated = true

    for(let i = 0; i<lis.length; i++) {
        lis[i].classList.remove("active")
    }
    let newLeft = parseInt(banner.style.left) + offset 
    let time = 300
    let interval = 10
    let speed = offset/(time/interval)

    let go = function (){
        if ( (speed > 0 && parseInt(banner.style.left) < newLeft) || (speed < 0 && parseInt(banner.style.left) > newLeft)) {
            banner.style.left = parseInt(banner.style.left) + speed + 'px'
            console.log(banner.style.left)
            setTimeout(go, interval)
        }
        else {
            if(newLeft > -600) {
                newLeft = "-3000"
                index = 4
            }else if(newLeft < -3000){
                newLeft = "-600"
                index = 0   
            }
            lis[index].classList.add("active")
            banner.style.left = newLeft + "px"
            animated = false
        }
    }
    go()

    // if(newLeft > -600) {
    //     newLeft = "-3000"
    //     index = 4
    // }else if(newLeft < -3000){
    //     newLeft = "-600"
    //     index = 0   
    // }
    // console.log(index)
    // lis[index].classList.add("active")
    // banner.style.left = newLeft + "px"
    // animated = false
}

next.onclick = () => {
    if (animated) {
        return;
    }
    index++;
    animate(-600) 
}

prev.onclick = () => {
    if (animated) {
        return;
    }
    index--;
    animate(600)
  
}

let t = setInterval(next.onclick, 2000)

for(let i = 0; i<lis.length; i++) {
    lis[i].onclick = (event) => {
        if (animated) {
            return;
        }
        clearInterval(t)
        let indexT = event.target.getAttribute("index") - 1
        let offset = -600 * (indexT - index)
        index = indexT
        animate(offset)
    }
}

container.onmouseover = () => {
    clearInterval(t)
}

container.onmouseout = () => {
    t = setInterval(next.onclick, 2000)
}