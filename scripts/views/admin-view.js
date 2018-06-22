'use strict';

var adminView = {}



    (function (module) {
        
    module.initPage = () => {
        $('.container').hide();
        $('.admin-view').show();
        $('#newbookform').empty();
    }

    module.createBook = event => {
        event.preventDefault()
        let book = new Book({
            title: $('#title').val(),
            author: $('#author').val(),
            isbn: $('#isbn').val(),
            image_url: $('#image-url').val(),
            description: $('#description').val(),
        })

    //  We need to call the add-book post route here
    }
        

})(adminView)
    