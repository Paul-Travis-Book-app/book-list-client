'use strict';

var app = app || {};
(function (module) {
    $(document).ready(function () {
        Book.fetchAll(homeView.initIndexPage);
        homeView.initPage()
    });
    
})(app)

$("#home").on("click", homeHandler)
$("#new_book").on("click", newBookHandler)
$("#edit_book").on("click", editBookHandler)
$("#submission").on("click", sumbissionHandler(event))


function homeHandler() {
    homeView.initPage()
}

function newBookHandler() {
    $("section").hide()
    $("#newbookform").show()
}

function sumbissionHandler(event) {
    event.preventDefault()
    let book = new Book({
        title: $('#title').val(),
        author: $('#author').val(),
        isbn: $('#isbn').val(),
        image_url: $('#image-url').val(),
        description: $('#description').val(),
    })

    book.postOne()
}

function editBookHandler() {
    alert("Click the book you want to edit.")
    homeView.initPage()

    $("book").on("click", bookWasClicked)
}

function bookWasClicked() {
    console.log('you clicked a fucking book')
}