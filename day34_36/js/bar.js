//获得数据
function getValue(){
   // 固定只显示华东地区手机12个月的数据
   var eastPhone = sourceData.filter(function(x){
       return x.region == "华东" && x.product == "手机"
   }) 
   var sale = eastPhone[0].sale;
   bar(sale)
}

function bar(sale) {
    // 定义好柱状图绘制区域的高度，宽度，轴的高度，宽度
    // 定义好每一个柱子的宽度及柱子的间隔宽度
    // 定义好柱子颜色，轴的颜色
    var startX = 50
    var startY = 350
    var barWidth = 20
    var space = 10


    var svgStart ='<svg width= "450" height="400"version="1.1" xmlns="http://www.w3.org/2000/svg">'
    var svgEnd = '</svg>'

    // 拿到柱状图中的最大值Max
    // 根据Max和你用来绘制柱状图图像区域的高度，进行一个数据和像素的折算比例
  
    var barHMax = 0
    
    sale.forEach(function(x){
        barHMax = x>barHMax ? x:barHMax
    })
    

    var barHMax 
    var barHArray
    var charts = document.getElementById("t")
    // 绘制横轴及纵轴
    var row = "<line x1="+ startX + " y1=" + startY + " x2=" + 450 + " y2=" + 350 + ' style="stroke:rgb(0,99,99);stroke-width:2"/>'
    var col = "<line x1="+ startX + " y1=" + startY + " x2=" + startX + " y2=" + 50 + ' style="stroke:rgb(0,99,99);stroke-width:2"/>'

    var svgT = svgStart + row + col
    
    
    for(let i = 0; i < sale.length;i++){
        
        let rectStartX = startX + space * (i+1) + barWidth * i
        let rectStartY = startY - sale[i]/3
        
        var bar = "<rect x=" + rectStartX +" y=" +rectStartY + " width=" + barWidth + " height=" + sale[i]/3 +' style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)"/>'
        svgT += bar
    }
    svgT += svgEnd

    charts.innerHTML = svgT 
}

//getValue()