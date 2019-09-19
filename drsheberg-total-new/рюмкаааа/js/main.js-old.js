
$('[data-fancybox]').fancybox({
    youtube : {
        controls : 0,
        showinfo : 0,
        autoplay : 1
    },
    vimeo : {
        color : 'f00'
    }
});

// функция возвращает cookie с именем name, если есть, если нет, то undefined    
function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
var alertwin = getCookie("alertwin");
if (alertwin != "no") { 
    $(document).mouseleave(function(e){
        if (e.clientY < 0) {
            $(".modal--close").fadeIn("fast");    
            // записываем cookie на 1 день, с которой мы не показываем окно
            var date = new Date;
            date.setDate(date.getDate() + 1);    
            document.cookie = "alertwin=no; path=/; expires=" + date.toUTCString();       
        }    
    });
    $(document).click(function(e) {
        if (($(".modal--close").is(':visible')) && (!$(e.target).closest(".modal--close .modal-content").length)) {
        $(".modal--close").remove();
    }
    });  
}

/*$('.inside__page .inside__container .container .content-block .item .title-block .check').change (function(){
  if ($(this).closest(".item").hasClass("active")) {
      $(this).closest(".item").find("label input").prop('checked', false);
  
  };
  $(this).closest(".item").toggleClass("active");

});*/




$("img.lazy").lazyload({
    effect : "fadeIn"
});

$('.slider-slick').slick({
  lazyLoad: 'ondemand',
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
   slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '40px'
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



 
  // $(".srav-photo").twentytwenty();



$('.slider-one-item').slick({
  dots: false,

  infinite: false,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  onInitialized: function() {
          setTimeout(function() {
            
          }, 500);
          
        }
});

$(window).on('load', function () {
  new WOW().init();
  var flag, flag2 = false;

    wd = $(window).width();
   if (wd < 768) {
     $('.stars').slick({
       centerMode: true,
       adaptiveHeight: true,
    infinite:false,
    arrows: false,
    slidesToScroll: 1,
       variableWidth: true,
    dots: true
    });
   }
    if (wd > 1024) {
  $(function () {
    $('*[id^="scene"]').each(function () {
        var scene = document.getElementById($(this).attr('id'));
        var parallax = new Parallax(scene);
    });
});
    }
  
  
  $('.circle').on('mouseover',function(){
    $(this).parent().siblings('.info').find('.info_text').fadeOut();
    $(this).parent().find('.info_text').fadeIn();
  });
  $('.info_text').on('click',function(){
    $(this).fadeOut();
  });
  $('.scroll').on('click touchstart',function(){
    var destination = $('form').offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1400);
    
  return false;
});
  $('.block1_video_play .btn, .block1_video_play span').mousedown( function(ev) {
    var that = $(this);
    that.parents('.block1_video').addClass('brightness');
    $("#video")[0].src += "&autoplay=1";
    ev.preventDefault();
    
    setTimeout(function(){that.parents('.block1_video').fadeOut(300)},700);
    
    
 
  });
  $('.reviews').slick({
  variableWidth: true,
  centerMode: true,
  dots:true,
  infinite:false,
  slidesToShow: 2,
  
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        adaptiveHeight:true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 481,
      settings: {
        arrows: true,
        adaptiveHeight:true,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
});

 
  

  var bar1 = new ProgressBar.Circle('.circle-1', {
  
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 2300,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#a1db6a', width: 1 },
  to: { color: '#a1db6a', width: 1 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
  var bar2 = new ProgressBar.Circle('.circle-2', {
  
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 2300,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#a1db6a', width: 1 },
  to: { color: '#a1db6a', width: 1 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
  var bar3 = new ProgressBar.Circle('.circle-3', {
  
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 2300,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#a1db6a', width: 1 },
  to: { color: '#a1db6a', width: 1 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});  
  var bar4 = new ProgressBar.Circle('.circle-4', {
  
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 2300,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#a1db6a', width: 1 },
  to: { color: '#a1db6a', width: 1 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
  
  $nav = $(".block9 .prod");
  $h = $nav.offset().top;
  
  $(window).scroll(function(){
     if (($(window).scrollTop() > $h) && ($(window).scrollTop() - 75 < $('.block10').offset().top)) {
        $nav.addClass("fixed");
      $nav.removeClass("fixed2");
    }
    else {
              $nav.removeClass("fixed");
    if ($(window).scrollTop() - 75 > $('.block10').offset().top) {
      $nav.addClass("fixed2");
    }
    }
    
    if($('.circle').hasClass('animated')){
      if(!flag){
        setTimeout(function(){
          bar1.animate(0.82); 
      bar2.animate(0.52);
      bar3.animate(0.21);
      bar4.animate(0.73);

      $('.canvas1').waterbubble({

  // bubble size
  radius: 100,

  // border width
  lineWidth: undefined,

  // data to present
  data: 0.82,

  // color of the water bubble
  waterColor: bubbleColor1,

  // text color
  textColor: '#ff4d57',

  // custom font family
  font: 'bold 90px "Gilroy"',

  // show wave
  wave: true,

  // custom text displayed inside the water bubble
  txt: '82',

  // enable water fill animation
  animation: true
  
});
      $('.canvas2').waterbubble({

  // bubble size
  radius: 100,

  // border width
  lineWidth: undefined,

  // data to present
  data: 0.52,

  // color of the water bubble
  waterColor: bubbleColor1,

  // text color
  textColor: '#ff4d57',

  // custom font family
  font: 'bold 90px "Gilroy"',

  // show wave
  wave: true,

  // custom text displayed inside the water bubble
  txt: '52',

  // enable water fill animation
  animation: true
  
});
      $('.canvas3').waterbubble({

  // bubble size
  radius: 100,

  // border width
  lineWidth: undefined,

  // data to present
  data: 0.21,

  // color of the water bubble
  waterColor: bubbleColor1,

  // text color
  textColor: '#ff4d57',

  // custom font family
  font: 'bold 90px "Gilroy"',

  // show wave
  wave: true,

  // custom text displayed inside the water bubble
  txt: '21',

  // enable water fill animation
  animation: true
  
});
      $('.canvas4').waterbubble({

  // bubble size
  radius: 100,

  // border width
  lineWidth: undefined,

  // data to present
  data: 0.73,

  // color of the water bubble
  waterColor: bubbleColor1,

  // text color
  textColor: '#ff4d57',

  // custom font family
  font: 'bold 90px "Gilroy"',

  // show wave
  wave: true,

  // custom text displayed inside the water bubble
  txt: '73',

  // enable water fill animation
  animation: true
  
});
        },300);
      }
      flag = true;
    } 
  });

});





var bubbleColor1 = "#d8ecf5";
var bubbleColor2 = "#a1db6a";







$('.what_includes .row > .fleft:nth-child(1) .item .buttons-block .btn:first-child,.tov1').click(function(){
  $('#tovar1').arcticmodal();
 });
$('.what_includes .row > .fleft:nth-child(2) .item .buttons-block .btn:first-child,.tov2').click(function(){
  $('#tovar2').arcticmodal();
 });
$('.what_includes .row > .fleft:nth-child(3) .item .buttons-block .btn:first-child,.tov3').click(function(){
  $('#tovar3').arcticmodal();
 });

$('.header .row .right_side .modal-btn,.footer .bottom-block .container .modal-btn').click(function(){
  $('#form-quest').arcticmodal();
 });

$('.modal--form .bottom-block .btn,.block6 .btn2,.what_includes .row > .fleft .item .buttons-block .btn:last-child,.not_put_up .right_side .offer-block .btn2').click(function(){
  $('#form2').arcticmodal();
 });


$('.modal--close .b-modal_close').click(function(){
  $('.modal--close').hide();
 });



 
/*$('form .btn2').click(function(){
  window.location.href = "thanks.html"
})*/



$(document).ready(function(){
  var time = 5;
  var $bar,
      $slick,
      isPause,
      tick,
      percentTime;
  
  $slick = $('.slider-one-item--infinity');
  $slick.slick({
    draggable: true,
    adaptiveHeight: false,
    dots: true,
    mobileFirst: true,
    pauseOnDotsHover: true,
  });
  
  $bar = $('.slider-progress .progress');
  
  $('.slider-wrapper').on({
    mouseenter: function() {
      isPause = true;
    },
    mouseleave: function() {
      isPause = false;
    }
  })
  
  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 10);
  }
  
  function interval() {
    if(isPause === false) {
      percentTime += 1 / (time+0.1);
      $bar.css({
        width: percentTime+"%"
      });
      if(percentTime >= 100)
        {
          $slick.slick('slickNext');
          startProgressbar();
        }
    }
  }
  
  
  function resetProgressbar() {
    $bar.css({
     width: 0+'%' 
    });
    clearTimeout(tick);
  }
  
  startProgressbar();
  
});