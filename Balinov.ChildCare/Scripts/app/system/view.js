﻿define(["require", "exports", 'q', 'app/system/viewcache', 'libs/httprequest', 'app/maps/OpenLayersMap'], function(require, exports, Q, ViewCache, HttpRequest, OpenLayersMap) {
    var path = 'Scripts/app/Views/';

    var View = (function () {
        function View() {
        }
        View.viewCache = new ViewCache(10);

        View.render = function (name, container) {
            if (container.length == 0) {
                console.log('load view: ', name);
                return View.render('Home', $('main')).then(function () {
                    var map = new OpenLayersMap('map');
                    app.setMap(map);
                    container = $('.data-col');
                    success();
                });
            } else {
                return success();
            }

            function success() {
                var promise = null;
                var view = View.viewCache.getView(name);
                if (view) {
                    promise = Q.promise(function (resolve, reject) {
                        resolve(view);
                    });
                } else {
                    var url = path + name + '.html';
                    promise = HttpRequest.getHTML(url);
                    promise.then(function (view) {
                        View.viewCache.addView(name, view);
                    });
                }

                if (container != null) {
                    promise.then(function (view) {
                        container.html(view);
                    });
                }
                return promise;
            }
        };
        return View;
    })();
    
    return View;
});
//# sourceMappingURL=view.js.map