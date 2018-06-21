'use strict';

var app = app || {};

let bookView = {}; // should be in bookView.js in the views folder
let errorView = {}; // should be in errorView.js in the views folder

// (function (module) {
    function Book(bookObj) { // this whole constructror needs to be in book.js in the models folder
        Object.keys(bookObj).forEach(key => this[key] = bookObj[key]);

    }

    Book.prototype.toHtml = function () { // move to book.js or maybe homeView.js
        var template = Handlebars.compile($('#book-list-template').text());
        return template(this);
    }

    Book.all = []; // book.js
    Book.limited = []; // book.js
    Book.one = []; // book.js

    Book.loadAll = rows => { // book.js
        rows.sort(function (a, b) {

            let authorA = a.title.toUpperCase();
            let authorB = b.title.toUpperCase();
            if (authorA < authorB) {
                return -1;
            } if (authorA > authorB) {
                return 1;
            }
            return 0;
        });

        Book.all = rows.map((info) => new Book(info));
    }

    Book.loadLimited = rows => {
        rows.sort(function (a, b) {

            let authorA = a.title.toUpperCase();
            let authorB = b.title.toUpperCase();
            if (authorA < authorB) {
                return -1;
            } if (authorA > authorB) {
                return 1;
            }
            return 0;
        });

        Book.limited = rows.map((info) => new Book(info));
    }

    Book.loadOne = rows => {
        rows.sort(function (a, b) {

            let authorA = a.title.toUpperCase();
            let authorB = b.title.toUpperCase();
            if (authorA < authorB) {
                return -1;
            } if (authorA > authorB) {
                return 1;
            }
            return 0;
        });

        Book.one = rows.map((info) => new Book(info));
    }

    Book.fetchAll = callback => { //book.js
        $.get('http://localhost:3000/api/v1/books')
            .then(results => {
                Book.loadAll(results);
                callback();
            })
    };

    bookView.initIndexPage = () => { //move to home-view
        $('.container').hide();
        $('.book-view').show();
        Book.all.forEach(a => $('#book-list').append(a.toHtml()));
    }


    $(document).ready(function () {
        Book.fetchAll(bookView.initIndexPage);

    });

    errorView.initErrorPage = (err) => { // error-view
        $('.container').hide();
        $('.error-view').show();
        $('#error-message').empty();
        Handlebars.compile($('#error-template').text(err));
    };

    function errorCallback(errorObj) {
        console.log(errorObj);
        errorView.initErrorPage(errorObj);
    }

    Book.fetchLimited = callback => {
        $.get('http://localhost:3000/api/v1/books-limited')
            .then(results => {
                Book.loadLimited(results);
                callback();
            })
    };

    Book.prototype.postOne = function (callback) {
        console.log(this);
        $.ajax({
            url: `http://localhost:3000/api/v1/books`,
            method: 'POST',
            data: {
                book_id: this.book_id,
                title: this.title,
                author: this.author,
                isbn: this.isbn,
                image_url: this.image_url,
                description: this.description
            }
        })
            .then(console.log)
            .then(callback);
    };

    Book.fetchOne = callback => {
        $.get('http://localhost:3000/api/v1/books:id')
            .then(results => {
                Book.loadOne(results);
                callback();
            })
    };


// })(app);
