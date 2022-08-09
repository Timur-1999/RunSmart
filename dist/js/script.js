jQuery(function($){

    //Catalog
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
    $(item).each(function(i){
      $(this).on('click', function (e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })
  }
    
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

    //Modal
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });

  $('.modal__close').on('click', function(){
    $('.overlay, #consultation, #order, #thanks').fadeOut('fast');
  });

  $('.catalog-item__btn').each(function(i){
    $(this).on('click', function(){
      $('#order .modal__descr').text($('.catalog-item__title').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });
    
    // Validate
  function validate(form) {
    $(form).validate({
      rules: {
        userName: {
          required: true,
          minlength: 2
        },
        userPhone: {
          required: true,
        },
        userEmail: {
          required: true,
          email: true
        },
      },
      messages: {
        userName: {
          required: 'Пожалуйста, введите свое имя.',
          minlength: jQuery.validator.format("Введите {0} символа!")
        },
        userPhone: {
          required: 'Пожалуйста, введите свой номер телефона.',
        },
        userEmail: {
          required: 'Пожалуйста, введите свою почту.',
          email: 'Неправильно введен адрес почты'
        }
      }
    });
  };

  validate('#consultation-form');
  validate('#consultation form');
  validate('#order form');

    // Mask
  $('input[name=userPhone]').mask("+7 (999) 999-99-99");

    //ajax
  $('form').submit(function (e) {
    e.preventDefault();

    if(!$(this).valid()){
      return;
    }

    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');
      $('form').trigger('reset');
    });
    return false;
  });

    // Smooth scroll and pageup
  $(window).scroll(function () {
    if($(this).scrollTop() > 1000){
      $('.pageup').fadeIn();
    } else{
      $('.pageup').fadeOut();
    }
  });
});
