

//  var item=document.getElementsByTagName('h1')
//  console.log(item)

//   var item = document.querySelector(".custom-tx")
//  console.log(item)

// for(var i=0 ; i<item.length; i++ )
//     console.log(item)
// var element=document.querySelectorAll(".custom-tx")
// console.log(element)
// for (var i = 0; i < element.length; i++) {
//     element[i].style.color = "beige";
// }
// var h3 =document.querySelector('#h3')
// h3.style.fontSize="25px";

function mouseEnter(element){
    element.classList.add('text-primary')
}
function mouseLeave(element){
    element.classList.remove('text-primary')
}

function handleMouseEvent(element,type){
    (type== 'mouseEnter')? element.classList.add('text-primary'):element.classList.remove('text-primary')
}
