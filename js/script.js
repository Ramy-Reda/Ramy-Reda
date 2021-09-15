$(document).ready(function () {
    $("#sh").click(function (e) { 
        $(this).toggle();
        $(".hi").toggle();
        $("ul").slideToggle(500);
    });

    $(".hi").click(function (e) { 
        e.preventDefault();
        $(this).hide();
        $("#sh").show();
        $("ul").slideToggle(500);
    });
});