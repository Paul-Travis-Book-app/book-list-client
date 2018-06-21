Book.fetchLimited = callback => {
    $.get('http://localhost:3000/api/v1/books-limited')
        .then(results => {
            Book.loadLimited(results);
            callback();
        })
};

Book.fetchOne = callback => {
    $.get('http://localhost:3000/api/v1/books:id')
        .then(results => {
            Book.loadOne(results);
            callback();
        })
};