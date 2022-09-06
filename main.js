var arr = [0, 1, 2]
var r = Math.floor((Math.random())*256);
var g = Math.floor((Math.random())*256);
var b = Math.floor((Math.random())*256);


document.getElementById('colorName').innerText = "( "+r+", "+g+", "+b+")"

var index = Math.floor((Math.random())*3);
document.getElementById(index).style.backgroundColor = "rgb( "+r+", "+g+", "+b+")"

arr.splice(index, 1)
var r1 = Math.floor((Math.random())*256);
var g1 = Math.floor((Math.random())*256);
var b1 = Math.floor((Math.random())*256);

document.getElementById(arr[0]).style.backgroundColor = "rgb( "+r1+", "+g1+", "+b1+")"

var r2 = Math.floor((Math.random())*256);
var g2 = Math.floor((Math.random())*256);
var b2 = Math.floor((Math.random())*256);

document.getElementById(arr[1]).style.backgroundColor = "rgb( "+r2+", "+g2+", "+b2+")"

function guess () {
    if(document.activeElement.id == index) {
        document.getElementById('colorName').innerText = "COOOORRECT !!!"
        document.getElementById('colorName').style.color = "blue"
        document.getElementById('title').style.color = "blue"
        document.getElementById('replay').style.backgroundColor = "blue"

    }
    else {
        document.getElementById('colorName').innerText = "WROOONG !!!"
        document.getElementById('colorName').style.color = "crimson"
        document.getElementById('title').style.color = "brown"
        document.getElementById('replay').style.backgroundColor = "crimson"
    }
    document.getElementsByClassName('btn')[0].removeAttribute('onlick');
    document.getElementsByClassName('btn')[1].removeAttribute('onlick');
    document.getElementsByClassName('btn')[2].removeAttribute('onlick');
}
function replay () {
    window.location.reload();
}