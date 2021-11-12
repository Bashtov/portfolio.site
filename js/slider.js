const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('img').length
const container = document.querySelector('.slider')

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 90}vh`

setInterval(changeSlide, 5000)

function changeSlide() {
    activeSlideIndex++
    if (activeSlideIndex === slidesCount){
      activeSlideIndex = 0
    }
  const height = container.clientHeight
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
