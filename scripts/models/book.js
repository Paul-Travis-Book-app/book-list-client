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

        let titleA = a.title.toUpperCase();
        let titleB = b.title.toUpperCase();
        if (titleA < titleB) {
            return -1;
        } if (titleA > titleB) {
            return 1;
        }
        return 0;
    });

    Book.all = rows.map((info) => new Book(info));
    
}


Book.loadLimited = rows => {
    rows.sort(function (a, b) {
        let titleA = a.title.toUpperCase();
        let titleB = b.title.toUpperCase();
        if (titleA < titleB) {
            return -1;
        } if (titleA > titleB) {
            return 1;
        }
        return 0;
    });

    Book.limited = rows.map((info) => new Book(info));
}

Book.loadOne = (info) => {
    Book.one[0] = new Book(info);
    bookView.initIndexPage();
    
}

//