'use strict';

var adminView = {}
    
//(function (module) {
    adminView.initPage = () => {
        $('.container').hide();
        $('#newbookform').show();
        $('#newbookform').empty();
    }

        adminView.createBook = event => {
            event.preventDefault()
            let book = new Book({
                title: $('#title').val(),
                author: $('#author').val(),
                isbn: $('#isbn').val(),
                image_url: $('#image-url').val(),
                description: $('#description').val(),
            })
        }

        book.postOne();

//})(adminView)