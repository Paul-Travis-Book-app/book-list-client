'use strict';

let errorView = {};
(function (module) {
    module.initErrorPage = (err) => {
        $('.container').hide();
        $('.error-view').show();
        $('#error-message').empty();
        Handlebars.compile($('#error-template').text(err));
    };

    function errorCallback(errorObj) {
        console.log(errorObj);
        module.initErrorPage(errorObj);
    }
})(errorView)
