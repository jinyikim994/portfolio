//텍스트가 천천히 나타남//
$(function(){
var textWrapper = document.querySelector('.text');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.text .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1300,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.text',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 400
  });
});


