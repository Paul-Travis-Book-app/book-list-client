Book.all = [];
Book.limited = []; 
Book.one = []; 

function Book(bookObj) {
    Object.keys(bookObj).forEach(key => this[key] = bookObj[key]);
}

Book.prototype.toHtml = function () {
    var template = Handlebars.compile($('#book-list-template').text());
    return template(this);
}

Book.loadAll = rows => { 
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

Book.fetchAll = callback => {
    $.get('http://localhost:3000/api/v1/books')
        .then(results => {
            Book.loadAll(results);
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