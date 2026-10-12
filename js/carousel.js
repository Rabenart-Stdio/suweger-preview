const carousel=document.getElementById('campaign-carousel');

if(carousel){
  const track=carousel.querySelector('.carousel-track');
  const slides=[...carousel.querySelectorAll('.carousel-slide')];
  const dots=[...document.querySelectorAll('.carousel-dots button')];
  const current=document.querySelector('.carousel-current');
  let active=0;
  let timer;
  let isHovering=false;
  let isFocused=false;

  function showSlide(index){
    active=(index+slides.length)%slides.length;
    track.style.transform=`translateX(-${active*100}%)`;
    slides.forEach((slide,i)=>{
      const isActive=i===active;
      slide.setAttribute('aria-hidden',String(!isActive));
      slide.inert=!isActive;
      dots[i].setAttribute('aria-current',String(isActive));
    });
    current.textContent=String(active+1).padStart(2,'0');
  }

  function stopAutoplay(){
    window.clearInterval(timer);
  }

  function startAutoplay(){
    stopAutoplay();
    if(!document.hidden && !isHovering && !isFocused){
      timer=window.setInterval(()=>showSlide(active+1),5000);
    }
  }

  carousel.querySelector('.carousel-prev').addEventListener('click',()=>{
    showSlide(active-1);
    startAutoplay();
  });
  carousel.querySelector('.carousel-next').addEventListener('click',()=>{
    showSlide(active+1);
    startAutoplay();
  });
  dots.forEach((dot,index)=>dot.addEventListener('click',()=>{
    showSlide(index);
    startAutoplay();
  }));
  carousel.addEventListener('mouseenter',()=>{
    isHovering=true;
    stopAutoplay();
  });
  carousel.addEventListener('mouseleave',()=>{
    isHovering=false;
    startAutoplay();
  });
  carousel.addEventListener('focusin',()=>{
    isFocused=true;
    stopAutoplay();
  });
  carousel.addEventListener('focusout',event=>{
    if(!carousel.contains(event.relatedTarget)){
      isFocused=false;
      startAutoplay();
    }
  });
  document.addEventListener('visibilitychange',startAutoplay);
  startAutoplay();
}
