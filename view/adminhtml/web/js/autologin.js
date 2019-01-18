define([
    'jquery'
], function ($) {
    'use strict';

    var params;

    /**
     *
     * @return {Object}
     */
    function getHashParams() {
        var hashParams = {};
        var e,
            a = /\+/g,  // Regex for replacing addition symbol with a space
            r = /([^&;=]+)=?([^&;]*)/g,
            d = function (s) {
                return decodeURIComponent(s.replace(a, " "));
            },
            q = window.location.hash.substring(1);

        while (e = r.exec(q))
           hashParams[d(e[1])] = d(e[2]);

        return hashParams;
    }

    /**
     *
     * @param  {String} username
     * @param  {String} password
     */
    function login (username, password) {
        $('#autologin-message').show();
        $('#username').val(username);
        $('#login').val(password);
        $('.action-login').click();
        $('#login-form').hide();
    }

    if ($('#captcha-reload').length) {

        return;
    }

    params = getHashParams();
    if (params['username'] && params['password']) {
        login(params['username'], params['password']);
    }
});
