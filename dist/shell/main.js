(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"sidebar\" data-background-color=\"white\" data-active-color=\"danger\">\r\n      <sidebar-cmp></sidebar-cmp>\r\n  </div>\r\n  <div class=\"main-panel\">\r\n      <navbar-cmp></navbar-cmp>\r\n      <div id=\"content\" class=\"content\">\r\n        <!-- Micro Frontends go here -->\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/empty/empty.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/empty/empty.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  empty works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar bar1\"></span>\r\n                <span class=\"icon-bar bar2\"></span>\r\n                <span class=\"icon-bar bar3\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"#\">Flight42</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"ti-panel\"></i>\r\n                        <p>Stats</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                            <i class=\"ti-bell\"></i>\r\n                            <p class=\"notification\">5</p>\r\n                            <p>Notifications</p>\r\n                            <b class=\"caret\"></b>\r\n                      </a>\r\n                      <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\">Notification 1</a></li>\r\n                        <li><a href=\"#\">Notification 2</a></li>\r\n                        <li><a href=\"#\">Notification 3</a></li>\r\n                        <li><a href=\"#\">Notification 4</a></li>\r\n                        <li><a href=\"#\">Another notification</a></li>\r\n                      </ul>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <i class=\"ti-settings\"></i>\r\n                        <p>Settings</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"sidebar-wrapper\">\r\n    <div class=\"logo\">\r\n        <a class=\"simple-text\">\r\n            <div class=\"logo-img\">\r\n                <img src=\"../../assets/img/angular2-logo.png\" alt=\"\">\r\n            </div>\r\n            Flight42\r\n        </a>\r\n    </div>\r\n    <ul class=\"nav\">\r\n        <li>\r\n            <a href=\"#/home\">\r\n                <i class=\"ti-home\"></i>\r\n                <p>Home</p>\r\n            </a>\r\n        </li>\r\n\r\n        <li>\r\n            <!-- href=\"#/client-a/page1\" -->\r\n            <a (click)=\"navigate('/client-a/page1')\">\r\n                <i class=\"ti-arrow-top-right\"></i>\r\n                <p>Flights</p>\r\n            </a>\r\n        </li>\r\n\r\n        <li>\r\n            <a (click)=\"navigate('/client-b/page1')\">\r\n                <i class=\"ti-user\"></i>\r\n                <p>Passengers</p>\r\n            </a>\r\n        </li>\r\n\r\n        <li>\r\n            <a (click)=\"navigate('/client-c')\">\r\n                <i class=\"ti-user\"></i>\r\n                <p>Bookings</p>\r\n            </a>\r\n        </li>\r\n\r\n        <li>\r\n            <a (click)=\"navigate('/client-d/payment')\">\r\n                <i class=\"ti-user\"></i>\r\n                <p>Payment</p>\r\n            </a>\r\n        </li>\r\n\r\n        <!--\r\n            <li routerLinkActive=\"active\">\r\n            <a>\r\n                <i class=\"ti-shopping-cart\"></i>\r\n                <p>Basket</p>\r\n            </a>\r\n            </li>\r\n            <li routerLinkActive=\"active\">\r\n            <a>\r\n                <i class=\"ti-close\"></i>\r\n                <p>Hide Basket</p>\r\n            </a>\r\n            </li>\r\n        -->\r\n        \r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nav {\r\n    color: black;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    border-bottom: 1px black solid;\r\n    margin-bottom: 20px;\r\n}\r\n\r\na, a:visited, a:active {\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n\r\na:hover {\r\n    color: black;\r\n    text-decoration: underline;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBibGFjayBzb2xpZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmEsIGE6dmlzaXRlZCwgYTphY3RpdmUge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shell_shell_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shell/shell.service */ "./src/app/shell/shell.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(shellService) {
        this.shellService = shellService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.shellService.init({
            initialRoute: '/home',
            outletId: 'content',
            preload: true,
            clients: {
                "client-a": {
                    loaded: false,
                    src: 'assets/micro-frontends/client-a/main.js',
                    element: 'client-a',
                    route: '/client-a'
                },
                "client-b": {
                    loaded: false,
                    src: 'assets/micro-frontends/client-b/main.js',
                    element: 'client-b',
                    route: '/client-b'
                },
                "client-c": {
                    loaded: false,
                    src: 'assets/micro-frontends/client-c/main.js',
                    element: 'client-c',
                    route: '/client-c'
                },
                "client-d": {
                    loaded: false,
                    src: [
                        'assets/micro-frontends/client-d/chunk-vendors.js',
                        'assets/micro-frontends/client-d/app.js',
                    ],
                    element: 'client-d',
                    route: '/client-d'
                }
            }
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shell_shell_service__WEBPACK_IMPORTED_MODULE_2__["ShellService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _empty_empty_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empty/empty.component */ "./src/app/empty/empty.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"],
                _empty_empty_component__WEBPACK_IMPORTED_MODULE_6__["EmptyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/empty/empty.component.css":
/*!*******************************************!*\
  !*** ./src/app/empty/empty.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcHR5L2VtcHR5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/empty/empty.component.ts":
/*!******************************************!*\
  !*** ./src/app/empty/empty.component.ts ***!
  \******************************************/
/*! exports provided: EmptyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyComponent", function() { return EmptyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmptyComponent = /** @class */ (function () {
    function EmptyComponent() {
    }
    EmptyComponent.prototype.ngOnInit = function () {
    };
    EmptyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empty',
            template: __webpack_require__(/*! raw-loader!./empty.component.html */ "./node_modules/raw-loader/index.js!./src/app/empty/empty.component.html"),
            styles: [__webpack_require__(/*! ./empty.component.css */ "./src/app/empty/empty.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmptyComponent);
    return EmptyComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.sidebarToggle = function () {
        var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'navbar-cmp',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html")
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shell/shell.service.ts":
/*!****************************************!*\
  !*** ./src/app/shell/shell.service.ts ***!
  \****************************************/
/*! exports provided: ShellService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellService", function() { return ShellService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShellService = /** @class */ (function () {
    function ShellService() {
    }
    ShellService.prototype.init = function (config) {
        var _this = this;
        this.config = config;
        if (!location.hash && config.initialRoute) {
            location.hash = config.initialRoute;
        }
        window.addEventListener("hashchange", function () { return _this.urlChanged(); });
        setTimeout(function () { return _this.urlChanged(); }, 0);
        if (config.preload) {
            this.preloadClients();
        }
    };
    ShellService.prototype.urlChanged = function () {
        for (var client in this.config.clients) {
            var entry = this.config.clients[client];
            var route = '#' + entry.route;
            if (location.hash.startsWith(route)) {
                // Lazy load module if still not loaded
                if (!entry.loaded) {
                    this.load(client);
                }
                else {
                    this.showClient(client);
                }
            }
            else if (entry.loaded) {
                this.hideClient(client);
            }
        }
    };
    ShellService.prototype.showClient = function (clientName) {
        this.setClientVisibility(clientName, true);
    };
    ShellService.prototype.hideClient = function (clientName) {
        this.setClientVisibility(clientName, false);
    };
    ShellService.prototype.setClientVisibility = function (clientName, show) {
        var entry = this.config.clients[clientName];
        if (!entry) {
            throw new Error("Client " + clientName + " is not configured.");
        }
        var elms = document.getElementsByTagName(entry.element);
        if (elms.length === 0) {
            throw new Error("Client " + clientName + " is not loaded.");
        }
        if (elms.length > 1) {
            throw new Error("Client " + clientName + " is loaded several times.");
        }
        var elm = elms[0];
        elm['hidden'] = !show;
    };
    ShellService.prototype.load = function (name) {
        var configItem = this.config.clients[name];
        // Don't load bundle twice
        if (configItem.loaded)
            return;
        configItem.loaded = true;
        var content = document.getElementById(this.config.outletId || 'content');
        // Add tag for micro frontend, e. g. <client-a></client-a>
        var element = document.createElement(configItem.element);
        element['hidden'] = !location.hash.startsWith('#' + configItem.route);
        content.appendChild(element);
        // Add script-tag(s) to load bundle
        var files = typeof configItem.src === 'string' ? [configItem.src] : configItem.src;
        files.forEach(function (src) {
            var script = document.createElement('script');
            script.src = src;
            content.appendChild(script);
        });
    };
    ShellService.prototype.preloadClients = function () {
        for (var client in this.config.clients) {
            this.load(client);
        }
    };
    ShellService.prototype.navigate = function (url) {
        var pos = location.hash.indexOf('?');
        var query = pos !== -1 ? location.hash.substr(pos) : '';
        location.hash = url + query;
    };
    ShellService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShellService);
    return ShellService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shell_shell_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shell/shell.service */ "./src/app/shell/shell.service.ts");



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(shellService) {
        this.shellService = shellService;
    }
    SidebarComponent.prototype.navigate = function (url) {
        this.shellService.navigate(url);
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sidebar-cmp',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shell_shell_service__WEBPACK_IMPORTED_MODULE_2__["ShellService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\BASF-Projects\Learning Projects\Static Web App PoC\angular-microfrontend-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map