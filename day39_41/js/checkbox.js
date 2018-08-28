function resolve() {
    if(!location.hash) location.hash = "10001000"
    return location.hash
}

function render(){
    var key = resolve()
    //根据key画图
}

window.onhashchange = render

render()

function checkBox(wrapper){
    var wrap = document.getElementById(wrapper);
    var one = document.querySelectorAll("#" + wrapper + " input[checkbox-type=one]")
    var all = document.querySelector("#" + wrapper + " input[checkbox-type=all] ")

    wrap.addEventListener("click",function(event){
        var cTarget = event.target;
        
        if(cTarget.type == "checkbox"){
            var cbType = cTarget.attributes["checkbox-type"].nodeValue;
            if(cbType == "all"){
                one.forEach(function(x){
                    if(x.checked == false){
                        x.checked = true;
                    } 
                })
                
                if(wrapper == "region-radio-wrapper"){
                    location.hash = "1111" + location.hash.slice(4)
                }else{
                    location.hash = location.hash.slice(0,4) + "1111"
                }
               drawTable();
                
            }else{
                var hashTemp = []
                console.log(cTarget.checked)
                var bool = Array.prototype.slice.apply(one).map(function(x){
                    hashTemp.push(Number(x.checked))
                    return x.checked
                })
                var count = bool.filter(function(x){
                    return x == true
                })

                //选一个就全选了
                if(count.length == one.length){
                    all.checked = true
                    // if(wrapper == "region-radio-wrapper"){
                    //     location.hash = "1111" + location.hash.slice(4)
                    // }else{
                    //     location.hash = location.hash.slice(0,4) + "1111"
                    // }
                }else if(count.length == 0){
                    //没了
                    cTarget.checked = true
                }else{
                    all.checked = false
                }
                drawTable();
            }
        }
    })
}

checkBox("region-radio-wrapper")
checkBox("product-radio-wrapper")