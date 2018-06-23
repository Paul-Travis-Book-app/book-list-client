'use strict';

let bookView = {};

(function (module) {
    module.initPage = () => {
        $('.container').empty();
        $('.single-book-view').show();
        $('#single-book').empty();
        $('#single-book').append(Book.one[0].toHtml());
    }

})(bookView)
