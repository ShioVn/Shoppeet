(function() {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  window.scrollTo({ top: 0, behavior: 'auto' });

  let hasScrolled = false;
  let scrolled2 = false; 
  const target = document.querySelector('.container2');
  const topBar = document.getElementById('topBar'); 
    const scrollIndicator = document.querySelector('.scroll-indicator'); 



  function handleFirstScroll() {
    if (!hasScrolled && target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      hasScrolled = true;
      scrolled2 = true;
      window.removeEventListener('scroll', handleFirstScroll);
      if(topBar)
      {
        topBar.style.transform = 'translateY(0)';

      }
    }
  }

  function handleScroll() {
    if (!topBar) return;
    
    if (window.scrollY <= 0 && scrolled2) { 
      topBar.style.transform = 'translateY(-100%)'; 
      window.removeEventListener('scroll', handleFirstScroll);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      hasScrolled=false;
      setTimeout(() => {
        window.addEventListener('scroll', handleFirstScroll, { passive: true });
    }, 700);

      scrollIndicator.style.opacity = '1';


    } else if (hasScrolled) {
      topBar.style.transform = 'translateY(0)'; 
      scrollIndicator.style.opacity = '0';

    }
  }

  window.addEventListener('scroll', handleFirstScroll, { passive: true });
  window.addEventListener('scroll' , handleScroll , {passive : true});
  

  const logoBtn = document.getElementById('logoBtn');
  logoBtn.addEventListener('click',function(){
    window.removeEventListener('scroll', handleFirstScroll);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    topBar.style.transform = 'translateY(-100%)';
    hasScrolled=false;
    setTimeout(() => {
        window.addEventListener('scroll', handleFirstScroll, { passive: true });
    }, 800);
  });



  const Nightmode = document.getElementById('Nightmode');
  const bd = document.getElementById('bd');
  const sgb = document.getElementById('sgb');

  Nightmode.addEventListener('change', function() {

     const allCards = document.querySelectorAll('.card');

  if (this.checked) {
    bd.classList.add('active');
    allCards.forEach(card => {
      card.classList.add('active');
    }
    );
    sgb.classList.add('active');
    console.log('Night mode: ON');
  } else {
    bd.classList.remove('active');
    allCards.forEach(card => {
      card.classList.remove('active');
    });
    sgb.classList.remove('active');
    console.log('Night mode: OFF');
  }
});




  window.addEventListener('load', () => {
    if (typeof sal === 'function') {
      sal({
        threshold: 0.1,
        once: false,
        rootMargin: '0px 0px -10% 0px'
      });
    } else {
      console.error('sal is not available — kiểm tra sal.min.js đã load chưa');
    }
  });
})();

const emailInput = document.getElementById('emailInput');
const subscribeBtn = document.getElementById('subscribeBtn');

subscribeBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    if(email){
        // Lưu vào localStorage
        localStorage.setItem('userEmail', email);
        alert('Email đã lưu!');
    }
});



