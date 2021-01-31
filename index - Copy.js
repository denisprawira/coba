'user strict'
var arrs = ["denffifdfs","yudfdfda","prawira"];



let hasil  = arrs.map((arr)=>{
	return arr.length==4;
});

window.onload = function(){
    document.getElementById("body").innerHTML =hasil;
}


