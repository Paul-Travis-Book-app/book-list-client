'use strict';

var app = app || {};
(function (module) {
    $(document).ready(function () {
        Book.fetchAll(homeView.initIndexPage);
        homeView.initPage()
    });
})(app)
