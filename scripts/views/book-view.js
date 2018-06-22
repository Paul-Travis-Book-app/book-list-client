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


Book.one[0] = {title: 'fear and trembling', author: 'kirkegaard', description: 'depressed Danish fellow muses on the yet to be discovered philosphy of existentialism', img: "http://cdn2-www.dogtime.com/assets/uploads/2010/12/puppies.jpg" }