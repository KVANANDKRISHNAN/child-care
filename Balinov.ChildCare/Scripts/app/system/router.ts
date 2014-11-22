﻿import View = require('app/system/view');
//import LoginViewModel = require('app/viewmodels/LoginViewModel');
import OpenLayersMap = require('app/maps/OpenLayersMap');

class Router {
    app;
    constructor(app) {
        this.app = app;
        initRoutes(this);
    }

    getRoute = () => {
        return window.location.hash.replace('#', '');
    }

    getViewModel = (key, type) => {
        var viewModel = this.app.getViewModel(key);
        if (!viewModel) {
            viewModel = new type();
            this.app.setViewModel(key, viewModel);
        }
        return viewModel;
    }

}

export = Router;


function initRoutes(router) {
    //routie('/Home', () => {
    //    if (!router.app.getViewModel('Account').IsAuthenticated()) {
    //        router.route('/Account/Login');
    //        return;
    //    }

    //    View.render(router.getRoute(), $('main'))
    //    .then(() => {
    //        var map = new OpenLayersMap('map');
    //        router.app.setMap(map);
    //    });
    //});

    //routie('/Account/Login', () => {
    //    var main = $("main");
    //    var promise = View.render(router.getRoute(), main);
    //    promise.done(() => {
    //    //var container = main.find('#LoginForm')[0];
    //    //var viewModel = new LoginViewModel();
    //    //ko.applyBindings(viewModel, ko.cleanNode(container));
    //    });
    //});

    //routie('/Account/LogOff', () => {
    //    $http.post('api/account/logout')
    //    .then((isLoggedOff: boolean) => {
    //        if (isLoggedOff) {
    //            router.route("Account/Login");
    //            router.app.getViewModel('Account').IsAuthenticated(false);
    //        }
    //    });
    //});
}
