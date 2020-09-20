
$( function () {

    // Seleccionamos el botón del dropdown menu y le asignamos el evento de click

    $(".dropbtn").eq(0).on("click", () => {

        let menu = $(".dropdown-content").eq(0);

        menu.slideToggle(300);
    });

    $(window).on("scroll",()=> {

        let scrollTop = $(window).scrollTop();

        let winHeight = $(window).height();

        let docHeight = $(document).height();

        let percentage = scrollTop/(docHeight-winHeight) * 100;

        if (percentage >= 50) {

            $(up_arrow).fadeIn(1000);
        }

        else {

            $(up_arrow).fadeOut(1000);

        }


    });

    $(up_arrow).on("click", ()=> {

        let currentScroll = $(document).scrollTop();

        var t = setInterval(()=> {

        currentScroll -= 30;

        if (currentScroll <= 0) {

            clearInterval(t);
        }

        $(document).scrollTop(currentScroll);

        }, 10);

    });

});