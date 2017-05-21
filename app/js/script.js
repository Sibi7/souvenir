$(document).ready(function () {

    $("#accordion").accordion({
        active: 2,
        collapsible: true,
        icons: {"header": "ui-icon-caret-1-w", "activeHeader": "ui-icon-minus"}
    });

    $("#accordion1").accordion({
        active: 2,
        collapsible: true
    });

    /*sidebar sub-menu*/
    $('#accordion1 h3').on('click', function () {
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
            element.find('.triangle').css({transform: 'rotate(-90deg)'})
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
            element.find('.triangle').css({transform: 'rotate(0deg)'})
        }
    });
    /*close sidebar sub-menu*/


    $(document).on('click', '.plus', function () {
        event.preventDefault();
        var count = $('.product__content--counter').find('.number'),
            val = parseInt($('.product__content--counter').find('.number').val());
        if (val == 999) {
            return false;
        } else {
            count.val(val + 1);
            $('.js-single-addtocart').attr('data-quantity', count.val());
            $('.js-single-favorites').attr('data-quantity', count.val());
        }
        return false;
    });

    $(document).on('click', '.minus', function () {
        event.preventDefault();
        var count = $('.product__content--counter').find('.number');
        var counter = parseInt(count.val()) - 1;
        counter = counter < 1 ? 1 : counter;
        count.val(counter);
        count.change();
        $('.js-single-addtocart').attr('data-quantity', counter);
        $('.js-single-favorites').attr('data-quantity', counter);
        return false;
    });

    jQuery(function ($) {
        $("#phone").mask("+7 (999) 999-9999");
    });

    $("#scroll").on("click", "a", function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1000);
    });
});

/*Код плагина*/
(function ($) {
    $.fn.liHarmonica = function (params) {
        var p = $.extend({
            currentClass: 'cur', //Класс для выделенного пункта меню
            onlyOne: true, //true - открытым может быть только один пункт,
            //false - число открытых одновременно пунктов не ограничено
            speed: 500 //Скорость анимации
        }, params);
        return this.each(function () {
            var
                el = $(this).addClass('harmonica'),
                linkItem = $('ul', el).prev('a');
            el.children(':last').addClass('last');
            $('ul', el).each(function () {
                $(this).children(':last').addClass('last');
            });
            $('ul', el).prev('a').addClass('harFull');
            el.find('.' + p.currentClass).parents('ul').show().prev('a').addClass(p.currentClass).addClass('harOpen');
            linkItem.on('click', function () {
                if ($(this).next('ul').is(':hidden')) {
                    $(this).addClass('harOpen');
                } else {
                    $(this).removeClass('harOpen');
                }
                if (p.onlyOne) {
                    $(this).closest('ul').closest('ul').find('ul').not($(this).next('ul')).slideUp(p.speed).prev('a').removeClass('harOpen');
                    $(this).next('ul').slideToggle(p.speed);
                } else {
                    $(this).next('ul').stop(true).slideToggle(p.speed);
                }
                return false;
            });
        });
    };
})(jQuery);

/*Инициализация плагина*/
$(function () {
    $('.anyClass').liHarmonica({
        onlyOne: false,
        speed: 500
    });
    $('.anyClass2').liHarmonica({
        onlyOne: true,
        speed: 400
    });
});
$(document).ready(function () {
    var link = $('.menu-link');
    var link_active = $('.menu-link_active');

    link.click(function () {
        link.toggleClass('menu-link_active');
    })
});
$(document).ready(function () {

    $(".menu-link").click(function () {
        $(".head-menu").css("borderBottomWidth", "3px");
        $(".head-menu").slideToggle(300, function () {
            $(".head-menu").css("borderBottomWidth", "1px");
        });
    });
});
$(function () {
    $('#sidebar').mmenu();
});