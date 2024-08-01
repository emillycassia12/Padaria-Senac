$(document).ready(function () {
    $(window).scroll(function () {
        // Verifica a posição do scroll
        if ($(this).scrollTop() > 50) { // Se a página foi rolada mais de 50 pixels
            $('.navbar').addClass('scrolled'); // Adiciona a classe 'scrolled'
        } else {
            $('.navbar').removeClass('scrolled'); // Remove a classe 'scrolled'
        }
    });
});