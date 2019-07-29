/*Крестик на специальном предложении*/
let cross = document.getElementById('close');

cross.onclick = function() {
    cross.parentElement.remove();
};
/*----------------------------------*/

/*Главный слайдер*/
$('.main-slider').slick({
    arrows: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    infinite: true,
	dots: true
});
/*----------------*/

/*Слайдер в карточке товара*/
$('.slider-forN').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  responsive: [
    {
      breakpoint: 425,
      settings: {
        arrows: true,
    prevArrow: $(".prevProd"),
    nextArrow: $(".nextProd"),
      }
    }
  ]
});
$('.slider-navN').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-forN',
  focusOnSelect: true,
  vertical: true,
  arrows:false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        vertical:false,
        centerMode: true,
        }
    }
  ]
});
/*------------------------*/


/*Кнопки для прибавления и удаления количества в инпуте в карточке товара*/
$(function() {
  (function quantityProducts() {
    let $quantityArrowMinus = $(".quantity-arrow-minus");
    let $quantityArrowPlus = $(".quantity-arrow-plus");
    let $quantityNum = $(".quantity-num");
 
    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);
 
    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }
 
    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();
});
/*---------------------------------------------------------------------------*/


/* Слайдер отзывов */
$(document).ready(function(){
  $('.your-class').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true
  });
});
/*----------------*/

/*Прижатие хедера к верху при скроле*/
var StickyElement = function(node){
  var doc = $(document), 
      fixed = false,
      anchor = node.find('.sticky-anchor'),
      content = node.find('.sticky-content');
  var onScroll = function(e){
    var docTop = doc.scrollTop(),
        anchorTop = anchor.offset().top;
    if(docTop > anchorTop){
      if(!fixed){
        anchor.height(content.outerHeight());
        content.addClass('fixed');        
        fixed = true;
      }
    }  else   {
      if(fixed){
        anchor.height(0);
        content.removeClass('fixed'); 
        fixed = false;
      }
    }
    console.log(anchorTop);
  };
  
  $(window).on('scroll', onScroll);
};

var demo = new StickyElement($('#sticky'));
/*--------------------------------------------*/

