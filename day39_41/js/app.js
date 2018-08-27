var tableWrapper = document.getElementById("table-wrapper")
//表头
var thArray = ["商品","地区","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]
var regions = document.querySelectorAll("#" + "region-radio-wrapper" + " input[checkbox-type=one] ")
var products = document.querySelectorAll("#" + "product-radio-wrapper" + " input[checkbox-type=one] ")

// //数据源
// sourceData = JSON.parse(localStorage['table']) || sourceData




// function save(dataModel) {
//     var value = dataModel.serialize()
//     window.localStorage['DataModel'] = value
//     window.localStorage['DataCount'] = dataModel.size()
//     console.log(dataModel.size() + 'datas are saved')
//     return value
// }

// function restore(dataModel) {
//     var value = window.localStorage['DataModel']
//     if(value) {
//         dataModel.deserialize(value)
//         console.log(window.localStorage['DataCount'] + ' datas are restored')
//         return value
//     }
//     return ''
// }

// function clear() {
//     console.log(window.localStorage['DataCount'] + ' datas are cleared')
//     delete window.localStorage['DataModel']
//     delete window.localStorage['DataCount']
// }