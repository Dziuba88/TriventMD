// AJAX Sprite Data
$.get('img/sprite.svg', function(data) {
  var div = document.createElement('div');
  div.hidden = true;
  div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
  document.body.insertBefore(div, document.body.childNodes[0]);
});

// Select UI Change
$('select').selectric();

// quantity input
$('.form__quantity').each(function() {
  let $this = $(this);
  let $input = $this.find('input');
  let $minus = $this.find('.form__quantity__minus');
  let $plus = $this.find('.form__quantity__plus');

  function checkMinValue() {
    if (parseInt($input.val()) <= parseInt($input.attr('min'))) {
      $minus.addClass('disabled');
    } else {
      $minus.removeClass('disabled');
    }
  }
  function checkMaxValue() {
    if (parseInt($input.val()) >= parseInt($input.attr('max'))) {
      $plus.addClass('disabled');
    } else {
      $plus.removeClass('disabled');
    }
  }

  checkMinValue();
  checkMaxValue();

  $minus.click(function() {
    let $val = parseInt($input.val());

    if (parseInt($input.val()) <= parseInt($input.attr('min'))) {
      $minus.addClass('disabled');
      return;
    } else {
      $input.val($val - 1);
      checkMinValue();
      checkMaxValue();
    }
  });

  $plus.click(function() {
    let $val = parseInt($input.val());

    if (parseInt($input.val()) >= parseInt($input.attr('max'))) {
      $plus.addClass('disabled');
      return;
    } else {
      $input.val($val + 1);
      checkMinValue();
      checkMaxValue();
    }
  });
});

// Show / Hide FILTERS
$('[data-toggle=filters]').click(function() {
  let $this = $(this);
  if ($this.hasClass('active')) {
    $this.find('span').html('Показать фильтры');
    $this.removeClass('active');
    $('.catalog__filters').removeClass('show');
  } else {
    $this.find('span').html('Скрыть фильтры');
    $this.addClass('active');
    $('.catalog__filters').addClass('show');
  }
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
if ($('.newlest').length || $('.hotest').length || $('.recommended').length) {
  $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
    newlestSlider.update();
    hotestSlider.update();
    recommendedSlider.update();
  });
}
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

// Item Gallery
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 20,
  slidesPerView: 3,
  loop: true,
  //freeMode: true,
  loopedSlides: 3,
  watchSlidesVisibility: true,
  watchSlidesProgress: true
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 0,
  loop: true,
  loopedSlides: 3,
  effect: 'fade',
  navigation: {
    nextEl: '.gallery-next .link',
    prevEl: '.gallery-prev .link'
  },
  thumbs: {
    swiper: galleryThumbs
  }
});

// FILTERS PRICE SLIDER
if ($('.price__filter__range').length) {
  (function() {
    var priceStepSlider = document.querySelector('.price__filter__range');
    var inputMin = document.querySelector('.price__filter__min');
    var inputMax = document.querySelector('.price__filter__max');
    var inputs = [inputMin, inputMax];
    noUiSlider.create(priceStepSlider, {
      start: [5000, 45000],
      connect: true,
      step: 100,
      range: {
        min: [0],
        max: [50000]
      }
    });

    priceStepSlider.noUiSlider.on('update', function(values, handle) {
      inputs[handle].value = values[handle];
    });

    inputs.forEach(function(input, handle) {
      input.addEventListener('change', function() {
        priceStepSlider.noUiSlider.setHandle(handle, this.value);
      });
    });
  })();
}

// SKU SIZE SLIDER
if ($('[data-skus-resize]').length) {
  var sliderWidth = document.querySelector('.sku-width__range');
  var sliderHeight = document.querySelector('.sku-height__range');
  var widthValue = document.querySelector('.sku-width strong');
  var heightValue = document.querySelector('.sku-height strong');
  var noUiSliderOptions = { connect: [true, false], start: 300, step: 50, range: { min: 100, max: 1000 }, pips: { mode: 'count', values: 5, density: 2, stepped: true } };

  noUiSlider.create(sliderWidth, noUiSliderOptions);
  sliderWidth.noUiSlider.on('update', function(values, handle) {
    widthValue.innerHTML = parseFloat(values[handle]) + 'мм';
  });

  noUiSlider.create(sliderHeight, noUiSliderOptions);
  sliderHeight.noUiSlider.set(600);
  sliderHeight.noUiSlider.on('update', function(values, handle) {
    heightValue.innerHTML = parseFloat(values[handle]) + 'мм';
  });
}

// SIMILAR Products
var similarSlider = new Swiper('.similar', {
  direction: 'vertical',
  slidesPerView: 5,
  spaceBetween: 5,
  loop: true,
  pagination: { el: '.similar__pagination', clickable: true },
  breakpoints: {
    1200: {
      direction: 'horizontal',
      slidesPerView: 4,
      spaceBetween: 30
    },
    1000: {
      direction: 'horizontal',
      slidesPerView: 3,
      spaceBetween: 30
    },
    768: {
      direction: 'horizontal',
      slidesPerView: 2,
      spaceBetween: 30
    },
    480: {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
});
// OPEN MODAL FROM DATA ATTR
$(function() {
  $('[data-modal]').on('click', function() {
    $($(this).data('modal')).modal({
      fadeDuration: 300
    });
    return false;
  });
});
