(function (window) {
    let App = window.App || {};
    let Validation = {
        isCompanyEmail: function (email) {
            return /.+@ran\.com$/.test(email);
        }
    };
    App.Validation = Validation;
    window.App = App;
})(window);