Sensi.Pages['page1'] = {

    description: "This is page one of the site. It doesn't do a lot.",

    init: function () {
        _log("Initialising page 1");
        Sensi.Pages['page1'].extra();
    },

    extra: function () {
        _log("Extra function on page 1");
    }

};
