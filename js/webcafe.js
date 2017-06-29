$(function() {
    $(".main-menu > li").hover(
        function() {
            $(this).children("ul").css("display", "block");
        },
        function() {
            $(this).children("ul").css("display", "none");


        });

    $(".main-menu span").focusin(
        function() {
            $(this).siblings("ul").css("display", "block");
        }
    );


    $(".main-menu ul li:last-child a").focusout(
        function() {

            $(this).parent().parent().css("display", "none");

        }

    );
});