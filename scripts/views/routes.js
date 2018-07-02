'use strict';

Book.fetchAll = callback => {
    $.get('https://paul-travis-booklist.herokuapp.com/api/v1/books')
        .then(results => {
            Book.loadAll(results);
            callback();
        })
};


Book.fetchLimited = callback => {
    $.get('https://paul-travis-booklist.herokuapp.com/api/v1/books-limited')
        .then(results => {
            Book.loadLimited(results);
            callback();
        })
};

Book.fetchOne = (id, callback) => {
    $.ajax({
        url: `https://paul-travis-booklist.herokuapp.com/api/v1/books/${id}`,
        method: 'GET',
        data: {
            book_id: 1, 
            }
    })
        .then(results => {
            Book.loadOne(results);
            callback();
        })
};

Book.deleteOne = (id, callback) => {
    $.ajax({
        url: `https://paul-travis-booklist.herokuapp.com/api/v1/books/${id}`,
        method: 'DELETE',
        data: {
            book_id: 1, 
            }
    })
        .then(results => {
            Book.loadOne(results);
            callback();
        })
};




// Book.postOne = (callback) => {
//     console.log(this);
//     $.post('https://paul-travis-booklist.herokuapp.com/api/v1//books', {
//         title: this.title,
//         author: this.author,
//         isbn: this.isbn,
//         image_url: this.image_url,
//         description: this.description
//     })
//     .then(results => {
//         Book.loadLimited(results);
//         callback();
//     })
// };



Book.prototype.postOne = function (callback) {
    console.log(this);
    $.post('https://paul-travis-booklist.herokuapp.com/api/v1/books', {
        title: this.title,
        author: this.author,
        isbn: this.isbn,
        image_url: this.image_url,
        description: this.description
    })
    .then(results => {
        Book.loadLimited(results);
        callback();
    })
};







        
//         url: `https://paul-travis-booklist.herokuapp.com/api/v1//books`,
//         method: 'POST',
//         data: {
            
//         }
//     })
//         .then(console.log)
//         .then(callback);
// };

Book.prototype.putOne = function (callback) {
    console.log(this);
    $.ajax({
        url: `https://paul-travis-booklist.herokuapp.com/api/v1/books/:id`,
        method: 'PUT',
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


//