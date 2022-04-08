$(document).ready(function(){

    $('.things').click(function(){
        $('.modal-bg').addClass('active');
    });

    $('.things-m').click(function(){
        $('.modal-bg').addClass('active');
    });

    
    $('#close-icon').click(function(){
        $('.modal-bg').removeClass('active');
    });


    $('#menu-bar').click(function(){
        $('.menu-bg').addClass('active');
    });

    $('#close-icon-menu').click(function(){
        $('.menu-bg').removeClass('active');
    });


    $('.collection-menu-bar li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');


        var result = $(this).attr('data-alt');
        $('.sec1-bottom ul').removeClass('active');
        $('#' + result).addClass('active');
    });

    $('.collection-menu-bar2 li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');


        var result = $(this).attr('data-alt');
        $('.sec1-bottom ul').removeClass('active');
        $('#' + result).addClass('active');
    });



   


    


}); /* end */