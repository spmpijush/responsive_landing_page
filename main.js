
$(document).ready(function () {

    $("#pop_up_btn,#submit_book_free_demo").click(function (e) {
        e.preventDefault();
        $(".side_pop_up_box").css("width", "0");
        $(".side_pop_up_box").hide();
        $("#pop_up_btn").hide();
    });



    function checkWidth() {
        var windowSize = $(window).width();

        if (windowSize <= 479) {
            // console.log("screen width is less than 480");
            $(".side_pop_up_box").hide();
            $("#pop_up_btn").hide();
            $("#form_open_1,#form_open_2").click(function (e) {
                e.preventDefault();
                $(".side_pop_up_box").css("width", "270");
                $("#pop_up_btn").show();
                $(".side_pop_up_box").show();
            });
        }
        else if (windowSize >= 960) {
            // console.log("screen width is greater than or equal to 960");
            $(".side_pop_up_box").hide();
            $("#pop_up_btn").hide();
            $("#form_open_1,#form_open_2").click(function (e) {
                e.preventDefault();
                $(".side_pop_up_box").css("width", "500");
                $("#pop_up_btn").show();
                $(".side_pop_up_box").show();
            });
        }

    }

    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);


    
})