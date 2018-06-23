'use strict';

var homeView = {};

(function (module) {
    module.initPage = () => {
        $('.container').hide();
        $('.book-view').show();
        $('.book-view').empty();
        Book.all.forEach(a => $('#book-list').append(a.toHtml()));
    }
})(homeView)