(function($){"use strict";jQuery(document).ready(function(){$("#status").fadeOut();$("#preloader").delay(200).fadeOut("slow");$("body").delay(200).css({"overflow":"visible"});new WOW().init()});jQuery(document).ready(()=>{jQuery('.js-video-button').modalVideo({channel:'vimeo'})});$(".range-slider-ui").each(function(){var minRangeValue=$(this).attr('data-min');var maxRangeValue=$(this).attr('data-max');var minName=$(this).attr('data-min-name');var maxName=$(this).attr('data-max-name');var unit=$(this).attr('data-unit');$(this).slider({range:!0,min:minRangeValue,max:maxRangeValue,values:[minRangeValue,maxRangeValue],slide:function(event,ui){event=event;var currentMin=parseInt(ui.values[0],10);var currentMax=parseInt(ui.values[1],10);$(this).children(".min-value").text(currentMin+" "+unit);$(this).children(".max-value").text(currentMax+" "+unit);$(this).children(".current-min").val(currentMin);$(this).children(".current-max").val(currentMax)}})});$(document).on('click','#back-to-top, .back-to-top',()=>{$('html, body').animate({scrollTop:0},'500');return!1});$(window).on('scroll',()=>{if($(window).scrollTop()>500){$('#back-to-top').fadeIn(200)}else{$('#back-to-top').fadeOut(200)}});$('.slider-store').slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1,fade:!0,autoplay:!0,asNavFor:'.slider-thumbs'});$('.slider-thumbs').slick({slidesToShow:5,slidesToScroll:1,asNavFor:'.slider-store',dots:!1,arrows:!0,autoplay:!0,centerMode:!0,focusOnSelect:!0,responsive:[{breakpoint:800,settings:{arrows:!1,}}]});$('.review-slider').slick({infinite:!0,slidesToShow:2,slidesToScroll:1,arrows:!1,dots:!1,rows:0,autoplay:!0,speed:2000,loop:!0,responsive:[{breakpoint:800,settings:{slidesToShow:1}}]});$('.review-slider1').slick({infinite:!0,slidesToShow:2,slidesToScroll:1,arrows:!1,dots:!1,rows:0,autoplay:!0,speed:5000,loop:!0,responsive:[{breakpoint:1100,settings:{slidesToShow:1}}]});$('.about-slider').slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1,autoplay:!0,rows:0,speed:4000,loop:!0,responsive:[{breakpoint:700,settings:{arrows:!1}}]});$('.side-slider').slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,rows:0,dots:!1,autoplay:!0,speed:4000,loop:!0,});$('.attract-slider').slick({infinite:!0,slidesToShow:8,slidesToScroll:1,arrows:!1,dots:!1,speed:2000,rows:0,autoplay:!0,draggable:!1,responsive:[{breakpoint:1000,settings:{slidesToShow:3}},{breakpoint:600,settings:{slidesToShow:2}},{breakpoint:500,settings:{slidesToShow:2}}]});$('.team-slider').slick({infinite:!0,slidesToShow:3,slidesToScroll:1,arrows:!0,dots:!1,autoplay:!0,speed:1000,rows:0,loop:!0,responsive:[{breakpoint:1000,settings:{slidesToShow:2}},{breakpoint:750,settings:{slidesToShow:1}}]});$('.item-slider').slick({infinite:!0,slidesToShow:3,slidesToScroll:1,arrows:!1,dots:!1,autoplay:!0,speed:2000,rows:0,loop:!0,responsive:[{breakpoint:1000,settings:{slidesToShow:2}},{breakpoint:750,settings:{slidesToShow:1}}]});$('.shop-slider').slick({infinite:!0,slidesToShow:4,slidesToScroll:1,arrows:!1,dots:!1,autoplay:!0,speed:8000,rows:0,loop:!0,responsive:[{breakpoint:1000,settings:{slidesToShow:2}},{breakpoint:800,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]});$('.banner-slider').slick({infinite:!0,slidesToShow:4,slidesToScroll:1,arrows:!0,dots:!0,autoplay:!0,speed:2000,rows:0,cursor:!1,loop:!0,responsive:[{breakpoint:1000,settings:{slidesToShow:2}},{breakpoint:800,settings:{slidesToShow:1}}]});$('.sl-testimonial-slider').slick({slidesToShow:1,slidesToScroll:1,vertical:!0,verticalSwiping:!0,autoplay:!0,Speed:8000,rows:0,infinite:!0,arrows:!1,dots:!1,adaptiveHeight:!0});$('.partner-slider').slick({infinite:!0,slidesToShow:5,slidesToScroll:1,arrows:!1,dots:!1,autoplay:!0,speed:2000,rows:0,loop:!0,responsive:[{breakpoint:1000,settings:{slidesToShow:3}},{breakpoint:800,settings:{slidesToShow:2}},{breakpoint:500,settings:{slidesToShow:1}}]});$("#contactform").validate({submitHandler:function(){$.ajax({url:'mail/contact.php',type:'POST',data:{fname:$('input[name="first_name"]').val(),lname:$('input[name="last_name"]').val(),email:$('input[name="email"]').val(),phone:$('input[name="phone"]').val(),comments:$('textarea[name="comments"]').val(),},success:function(result){$('#contactform-error-msg').html(result);$("#contactform")[0].reset()}})}});$('.menu-ham').click(function(){$('.menu').animate({right:'0px'},50)
    $('.header_sidemenu_in .overlay').addClass('show').removeClass('hide')});$('.close-menu').click(function(){$('.menu').animate({right:'-500px'},50)
    $('.header_sidemenu_in .overlay').addClass('hide').removeClass('show')});$('.header_sidemenu_in .overlay').click(function(){$('.header_sidemenu_in .overlay').addClass('hide').removeClass('show');$('.menu').animate({right:'-500px'},50)});var bArray=[];var sArray=[2,4,6,8];for(var i=0;i<$('.bubbles').width();i++){bArray.push(i)}
    function randomValue(arr){return arr[Math.floor(Math.random()*arr.length)]}
    setInterval(function(){var size=randomValue(sArray);$('.bubbles').append('<div class="individual-bubble" style="left: '+randomValue(bArray)+'px; width: '+size+'px; height:'+size+'px;"></div>');$('.individual-bubble').animate({'bottom':'100%','opacity':'-=0.7'},4000,function(){$(this).remove()})},350);$('a[href="#search1"]').on('click',function(event){event.preventDefault();$('#search1').addClass('open');$('#search1 > form > input[type="search"]').focus()});$('#search1, #search1 button.close').on('click keyup',function(event){if(event.target==this||event.target.className=='close'||event.keyCode==27){$(this).removeClass('open')}});$('.set-time').wickedpicker();$('.selector').wickedpicker({now:new Date(),twentyFour:!1,upArrow:'wickedpicker__controls__control-up',downArrow:'wickedpicker__controls__control-down',close:'wickedpicker__close',hoverState:'hover-state',title:'Timepicker'});$(document).ready(()=>{loopcounter('coming-counter')});$('.value').counterUp({delay:50,time:1000});$('.blog-main').masonry({itemSelector:'.mansonry-item',});$('.trend-box1').masonry({itemSelector:'.mansonry-item1',});$('.niceSelect').niceSelect();$('a[href="#search1"]').on('click',function(event){event.preventDefault();$('#search1').addClass('open');$('#search1 > form > input[type="search"]').focus()});$('#search1, #search1 button.close').on('click keyup',function(event){if(event.target==this||event.target.className=='close'||event.keyCode==27){$(this).removeClass('open')}});$('form').submit(function(event){event.preventDefault();return!1})})(jQuery);jQuery(window).on('resize load',()=>{resize_eb_slider()}).resize();function resize_eb_slider(){let bodyheight=jQuery(this).height();if(jQuery(window).width()>1400){bodyheight*=0.90;jQuery('.slider').css('height',`${bodyheight}px`)}}