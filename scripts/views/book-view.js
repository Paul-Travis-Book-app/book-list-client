let bookView = {};

bookView.initIndexPage = () => {
    $('.container').hide();
    $('.single-book-view').show();
    $('#single-book').empty();
    $('#single-book').append(Book.one[0].toHtml());
}

//