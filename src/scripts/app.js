// AJAX Sprite Data
$.get('img/sprite.svg', function(data) {
  var div = document.createElement('div');
  div.hidden = true;
  div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
  document.body.insertBefore(div, document.body.childNodes[0]);
});

// SHOW / HIDE SEARCH FORM
$('.navbar__search-toogle').on('click', function(e) {
  let $this = $(this);

  if ($this.hasClass('active')) {
    $this.removeClass('active');
    $this.find('use').attr('xlink:href', '#icon-search');
    $(document)
      .find('form.product__search')
      .removeClass('show');
    $(document)
      .find('form.product__search input')
      .val('');
  } else {
    $this.addClass('active');
    $this.find('use').attr('xlink:href', '#icon-cancel');
    $(document)
      .find('form.product__search')
      .addClass('show');
  }
});
// SHOW / HIDE Mobile NAVBAR
$('button.show__navbar').on('click', function() {
  $('html').css({ overflow: 'hidden' });
  $('.navbar__mobile').addClass('show');
});
$('button.close__navbar').on('click', function() {
  $('html').css({ overflow: '' });
  $('.navbar__mobile').removeClass('show');
});

// SALES COUNTDOWN
$('#countdown').countdown('2020/12/10', function(event) {
  let $days = $(this).find('.days strong');
  let $hours = $(this).find('.hours strong');
  let $minutes = $(this).find('.minutes strong');
  let $secconds = $(this).find('.secconds strong');
  $days.html(event.strftime('%D'));
  $hours.html(event.strftime('%H'));
  $minutes.html(event.strftime('%M'));
  $secconds.html(event.strftime('%S'));
});
// Header Slider
var headerSlider = new Swiper('.home__welcome-swiper', {
  loop: true,
  speed: 1500,
  parallax: true,
  effect: 'fade',
  autoplay: {
    delay: 7000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.welcome-next',
    prevEl: '.welcome-prev'
  }
});
// DoubleColumns Slider
let newlestSlider = new Swiper('.newlest', {
  slidesPerView: 4,
  slidesPerColumn: 2,
  spaceBetween: 30,
  breakpoints: {
    1000: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    756: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 15
    }
  },
  navigation: {
    nextEl: '.newlest-next',
    prevEl: '.newlest-prev'
  }
});
let hotestSlider = new Swiper('.hotest', {
  slidesPerView: 4,
  slidesPerColumn: 2,
  spaceBetween: 30,
  breakpoints: {
    1000: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    756: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 15
    }
  },
  navigation: {
    nextEl: '.hotest-next',
    prevEl: '.hotest-prev'
  }
});
let recommendedSlider = new Swiper('.recommended', {
  slidesPerView: 4,
  slidesPerColumn: 2,
  spaceBetween: 30,
  breakpoints: {
    1000: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    756: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 15
    }
  },
  navigation: {
    nextEl: '.recommended-next',
    prevEl: '.recommended-prev'
  }
});
$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
  newlestSlider.update();
  hotestSlider.update();
  recommendedSlider.update();
});
// Popular Slider
let popularSlider = new Swiper('.popular', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  loop: true,
  speed: 1500,
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    1000: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    756: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 15
    }
  }
});
// Reviews SLIDER
var reviewsSlider = new Swiper('.reviews', {
  autoHeight: true,
  speed: 1500,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  effect: 'cube',
  grabCursor: true,
  cubeEffect: { shadow: false },
  pagination: {
    el: '.reviews__dots',
    clickable: true,
    renderBullet: function(index, className) {
      return `
      <div class="${className}">
        <img src="https://placeimg.com/100/100/people/${index}" alt=""/>
      </div>
      `;
      //'<span class="' + className + '">' + (index + 1) + '</span>';
    }
  }
});
// Clients SLIDER
let clientsSlider = new Swiper('.clients-slider', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  loop: true,
  speed: 1500,
  slidesPerView: 5,
  spaceBetween: 15,
  breakpoints: {
    1000: {
      slidesPerView: 5,
      spaceBetween: 30
    },
    756: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 15
    }
  }
});
