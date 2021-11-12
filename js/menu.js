const menuElem = document.querySelectorAll('#Elem1, #Elem2')
const menuBar = document.querySelector('.menu__bar')
const elem1 = document.querySelector('#menuEl1')
const elem2 = document.querySelector('#menuEl2')

menuBar.addEventListener('mouseover', ()=>{
  elem1.style.transform = `translateX(0%)`
  elem1.style.visibility = "visible"
  elem2.style.transform = `translateX(0%)`
  elem2.style.visibility = "visible"
  for(let i=0; i<menuElem.length; i++){
    menuElem[i].style.backgroundSize="0 0"
  }
})
menuBar.addEventListener('mouseout', ()=>{
  elem1.style.transform = `translateX(100%)`
  elem1.style.visibility = "hidden"
  elem2.style.transform = `translateX(-100%)`
  elem2.style.visibility = "hidden"
  for(let i=0; i<menuElem.length; i++){
    menuElem[i].style.backgroundSize="70% 1.2px"
  }
})
