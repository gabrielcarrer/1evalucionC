document.querySelector('.hero-image').addEventListener('mouseover',function(){
  document.querySelector('.hero-image-content').classList.add('visible');
});

document.querySelector('.hero-image').addEventListener('mouseout',function(){
  document.querySelector('.hero-image-content').classList.remove('visible');
});