$(document).ready(function () {
    $('body > div.container_1 > div.header > div.nav > div > li:nth-child(1)').click(() => {
        $('body').animate(
            {
                scrollTop: $('.container_2').offset().top,
            },
            500
        );
    });
    $('body > div.container_1 > div.header > div.nav > div > li:nth-child(2)').click(() => {
        $('body').animate(
            {
                scrollTop: $('.container_3').offset().top,
            },
            500
        );
    });
    $('body > div.container_1 > div.header > div.nav > div > li:nth-child(3)').click(() => {
        $('body').animate(
            {
                scrollTop: $('.container_4').offset().top,
            },
            500
        );
    });
});
