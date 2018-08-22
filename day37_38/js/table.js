function drawTable(){
    clearTable()
    var value = getRP()
    var rValue = value[0]
    var pValue = value[1]
    var clearSD = selectValue(rValue, pValue)
    console.log(clearSD)
    //将clearSD变成数组
    var sdArray = []
    clearSD.forEach(function(x,j){
        sdArray[j] = [x.product , x.region]
        for(let i = 0 ; i<x.sale.length; i++){
            sdArray[j].push(x.sale[i])
        }
    })
    //画图
    showTable(sdArray,rValue,pValue)
}

function clearTable(){
    tableWrapper.removeChild(tableWrapper.firstChild);
}
//获得选中的region和product
function getRP(){
    var regionsOne = []
    var productsOne = []
    regions.forEach(function(x){
            if(x.checked == true){
                regionsOne.push(x.parentElement.innerText)
            }
        })
    products.forEach(function(x){
        if(x.checked == true){
            productsOne.push(x.parentElement.innerText)
        }
    }) 
    return [regionsOne,productsOne]   
}
//获得清洗过后的sourceData的值
function selectValue(rValue, pValue){
    var rpValue = rValue +","+ pValue
    
    var clearSD = sourceData.filter(function(x){
        return rpValue.indexOf(x.region) > -1 && rpValue.indexOf(x.product)>-1
    })
    return clearSD
}

function showTable(sdArray,rValue,pValue){
    var table = document.createElement("table")
    table.setAttribute("id","tableRP")
    var tr = document.createElement("tr")
    //var thArray = ["商品","地区","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]
    //地区在前
    if(rValue.length == 1 && pValue.length > 1){
        //画表头
        thArray.forEach(function(x,i){
            var th = document.createElement("th")
            if(i>1){
                th.appendChild(document.createTextNode(x))
                
            }else if(i ==0 ){
                th.innerText = thArray[1]
            }else{
                th.innerHTML = thArray[0]
            }
            tr.appendChild(th)
        })
        table.appendChild(tr)


        //将获得数据商品列和地区列交换
        sdArray.forEach(function(x){
            temp = x[0]
                x[0] = x[1]
                x[1] = temp
            })
        //数据展示
        tableValue(sdArray,pValue,table)

    }else{
        //表头
        thArray.forEach(function(x){
            var th = document.createElement("th")
            th.appendChild(document.createTextNode(x))
            tr.appendChild(th)
        })
        table.appendChild(tr)
        //数据展示
        tableValue(sdArray,rValue,table)   
     }
}

function tableValue(sdArray,rpValue,table){
    var tr;
    var td;
    sdArray.forEach(function(x,i){
            tr = document.createElement("tr")
            td = document.createElement("td")
            if(i % rpValue.length == 0){
                td.innerText = x[0]
                td.setAttribute("rowspan",rpValue.length)
                tr.appendChild(td)
            }else{

            }
            for(let j = 1; j<sdArray[i].length; j++){
 
                td = document.createElement("td")
                td.innerText = x[j]
                if(j>1){
                    td.setAttribute("data-do","do")
                }
                tr.appendChild(td)
            }
            table.appendChild(tr)
    })
    tableWrapper.appendChild(table)
}



