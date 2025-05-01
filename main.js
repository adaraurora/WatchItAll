const swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 800, 
    autoplay: {
      delay: 6000, 
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".popular-next",
        prevEl: ".popular-prev",
    }      
  });

  document.addEventListener('DOMContentLoaded', () => {
    const prev = document.querySelector('.bx-left-arrow-alt');
    const next = document.querySelector('.bx-right-arrow-alt');
    const cardList = document.querySelector('.card-list');
  
    const scrollAmount = 800;
  
    prev.addEventListener('click', () => {
      if (cardList.scrollLeft === 0) {
        cardList.scrollTo({ left: cardList.scrollWidth, behavior: 'smooth' });
      } else {
        cardList.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    });
  
    next.addEventListener('click', () => {
      const maxScrollLeft = cardList.scrollWidth - cardList.clientWidth;
      if (Math.ceil(cardList.scrollLeft) >= maxScrollLeft) {
        cardList.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        cardList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    });
  });
  
  
  