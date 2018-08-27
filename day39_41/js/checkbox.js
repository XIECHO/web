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
                drawTable();
                
            }else{
                console.log(cTarget.checked)
                var bool = Array.prototype.slice.apply(one).map(function(x){
                    return x.checked
                })
                var count = bool.filter(function(x){
                    return x == true
                })

                if(count.length == one.length){
                    all.checked = true
                }else if(count.length == 0){
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