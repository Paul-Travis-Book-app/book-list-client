var homeView = {};

(function () {
    homeView.initIndexPage = () => {
        $('.container').hide();
        $('.book-view').show();
        $('#home-view').empty();
        Book.all.forEach(a => $('#book-list').append(a.toHtml()));
    }

    homeView.initIndexPage();
})()