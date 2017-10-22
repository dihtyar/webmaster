$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};


/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});


    $("a[rel='m_PageScroll2id']").mPageScroll2id({
        offset: 70
    });

    $('.check-main input').iCheck({
        checkboxClass: 'icheckbox_square',
        radioClass: 'iradio_square',
        increaseArea: '20%' // optional
    });


    $('.sel-main select').select2({
        dropdownCssClass:"sel-drop",
    }).on('select2:open', function(e){
        $('.select2-results__options').scrollbar().parent().addClass('scrollbar-inner');
    });

    // mobile menu

    var pull 		= $('.mob');
    menu 		= $('.menu ul');
    menuHeight	= menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
        $(pull).toggleClass("active")
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });


    // form
    var inputs =$('.form-control'),
        inp_desc = $('.pl_h');
    function textForm() {

        if(inputs.val()!=='') {
            $('.pl_h').show();
        }else{
            $('.pl_h').hide();
        }

        inp_desc.on('click', function () {
            $(this).parent().find(inputs).focus();
        });

        if(inputs.val()!=='') {
            $(this).parent().find('.pl_h').show();
        }

        inputs.bind('blur', function () {
            if(inputs.val()!==''){
                $(this).parent().find('.pl_h').show();
            }else{
                $(this).parent().find('.pl_h').hide();
            }
        }).bind('focus', function () {
            $(this).parent().find('.pl_h').show();
        });
    }

    textForm();

    // range

    $(".range-example-single-1").asRange({
        range: false
    });


});





