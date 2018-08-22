function bar1(sale) {
    var canvas = document.getElementById("canv")

    var ctx = canvas.getContext("2d")
    canvas.setAttribute("height",canvas.getAttribute("height"))
    
    ctx.beginPath()
    ctx.moveTo(50,50)
    ctx.lineTo(50,350)
    ctx.lineTo(450,350)
    ctx.stroke();

  
    ctx.moveTo(70,350-sale[0]/3)
    //画折线图
    for(let i = 0; i < sale.length; i++){
        let x = 50 + 20*(i+1)
        let y = 350 - sale[i]/3
        
        ctx.lineTo(x,y)
        ctx.arc(x,y,2,0,Math.PI*2)
        ctx.stroke()
        // ctx.fill()
    }
}

function bar2(sale,j) {
   console.log(j +"...")
    var canvas = document.getElementById("canv")

    var ctx = canvas.getContext("2d")
    //canvas.setAttribute("height",canvas.getAttribute("height"))
    
    ctx.beginPath()
    
    ctx.moveTo(50,50)
    ctx.lineTo(50,350)
    ctx.lineTo(450,350)
    ctx.strokeStyle = "black"
    ctx.stroke();

    ctx.strokeStyle = "rgb("+Math.round(20*j)+","+Math.round(255-20*j)+","+Math.round(255-2*j*j)+")"
    ctx.moveTo(70,350-sale[0]/3)
    //画折线图
    for(let i = 0; i < sale.length; i++){
        let x = 50 + 20*(i+1)
        let y = 350 - sale[i]/3
       
       
        ctx.lineTo(x,y)
        ctx.arc(x,y,2,0,Math.PI*2)
       
        //console.log("rgb("+15*i+","+15*i+","+15*i+")")
        ctx.stroke()
        // ctx.fill()
    }
}