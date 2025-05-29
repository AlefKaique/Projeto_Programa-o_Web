document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');
    const cookieName = 'cookiesAceitos';

    function checkCookie() {
        return document.cookie.split('; ').some(item => item.startsWith(cookieName + '='));
    }

    function setCookie() {
        document.cookie = cookieName + '=true; max-age=' + (365 * 24 * 60 * 60) + '; path=/'; // Validade de 1 ano
        cookieBanner.style.display = 'none';
    }

    if (!checkCookie()) {
        cookieBanner.style.display = 'block';
    }

    acceptCookiesButton.addEventListener('click', setCookie);
});