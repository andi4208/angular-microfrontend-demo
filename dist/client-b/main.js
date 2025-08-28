(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(route) {
        this.route = route;
        route.queryParams.subscribe(function (params) {
            console.debug('params', params);
        });
        window.addEventListener('client-message', function (e) { return console.debug('client-message event', e); });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'client-b',
            template: "\n  <div id=\"client-b\">\n    <div class=\"card\">\n      <div class=\"content\">\n        <a routerLink=\"client-b/page1\" queryParamsHandling=\"merge\">Passenger Search</a> | <a routerLink=\"client-b/page2\" queryParamsHandling=\"merge\">Details</a>\n      </div>\n    </div>\n    <router-outlet></router-outlet>\n  </div>\n",
            styles: ["\n  #client-b { border: navy dashed 5px; padding: 10px }\n"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page1_page1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page1/page1.component */ "./src/app/page1/page1.component.ts");
/* harmony import */ var _page2_page2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page2/page2.component */ "./src/app/page2/page2.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _empty_empty_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./empty/empty.component */ "./src/app/empty/empty.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                    { path: '', pathMatch: 'full', redirectTo: 'client-b/page1' },
                    { path: 'client-b', children: [
                            { path: 'page1', component: _page1_page1_component__WEBPACK_IMPORTED_MODULE_4__["Page1Component"] },
                            { path: 'page2', component: _page2_page2_component__WEBPACK_IMPORTED_MODULE_5__["Page2Component"] },
                        ] },
                    { path: '**', component: _empty_empty_component__WEBPACK_IMPORTED_MODULE_7__["EmptyComponent"] }
                ], { useHash: true }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _page1_page1_component__WEBPACK_IMPORTED_MODULE_4__["Page1Component"],
                _page2_page2_component__WEBPACK_IMPORTED_MODULE_5__["Page2Component"],
                _empty_empty_component__WEBPACK_IMPORTED_MODULE_7__["EmptyComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: []
        })
    ], AppModule);
    return AppModule;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var EmptyComponent = /** @class */ (function () {
    function EmptyComponent() {
    }
    EmptyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: ''
        })
    ], EmptyComponent);
    return EmptyComponent;
}());



/***/ }),

/***/ "./src/app/page1/page1.component.ts":
/*!******************************************!*\
  !*** ./src/app/page1/page1.component.ts ***!
  \******************************************/
/*! exports provided: Page1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1Component", function() { return Page1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var Page1Component = /** @class */ (function () {
    function Page1Component() {
    }
    Page1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n  <div class=\"card\">\n\n  <div class=\"header\">\n      <h2 class=\"title\">Passenger Search</h2>\n  </div>\n  <div class=\"content\">\n  \n \n      <div class=\"form-group\">\n         <label>Title:</label>\n         <input name=\"to\" value=\"Mag.\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group\">\n          <label>First Name:</label>\n          <input name=\"from\" value=\"Manu\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n          <label>Last Name:</label>\n          <input name=\"to\" value=\"\" class=\"form-control\">\n      </div>\n  \n      <div class=\"form-group\">\n          <button \n              class=\"btn btn-default\">Search</button>\n  \n          </div>\n  \n  </div>\n  </div>\n  "
        })
    ], Page1Component);
    return Page1Component;
}());



/***/ }),

/***/ "./src/app/page2/page2.component.ts":
/*!******************************************!*\
  !*** ./src/app/page2/page2.component.ts ***!
  \******************************************/
/*! exports provided: Page2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Component", function() { return Page2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var Page2Component = /** @class */ (function () {
    function Page2Component() {
    }
    Page2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n  <div class=\"card\">\n\n  <div class=\"header\">\n      <h2 class=\"title\">Details</h2>\n  </div>\n  <div class=\"content\">\n\n      <div class=\"row\">\n          <div class=\"col-md-9\">\n\n              <div class=\"form-group\">\n                  <label>Id:</label>\n                  <input name=\"from\" value=\"0001\" class=\"form-control\">\n              </div>\n\n              <div class=\"form-group\">\n                  <label>Title:</label>\n                  <input name=\"to\" value=\"Mag.\" class=\"form-control\">\n              </div>\n\n              <div class=\"form-group\">\n                  <label>First Name:</label>\n                  <input name=\"from\" value=\"Manu\" class=\"form-control\">\n              </div>\n              <div class=\"form-group\">\n                  <label>Last Name:</label>\n                  <input name=\"to\" value=\"\" class=\"form-control\">\n              </div>\n\n              <div class=\"form-group\">\n                  <button class=\"btn btn-default\">Search</button>\n\n              </div>\n              <client-a-widget></client-a-widget>\n          </div>\n      \n          <div class=\"col-md-3\">\n            <miles-card miles=\"400\"></miles-card>  \n            <p>&nbsp;</p>\n            <flight-basket flights='[{\"id\": 1, \"from\": \"Munich\", \"to\": \"Berlin\", \"date\": \"Today\"}, {\"id\": 1, \"from\": \"Berlin\", \"to\": \"Graz\", \"date\": \"Tomorrow\"}]'></flight-basket>\n          </div>\n      </div>\n    </div>\n  </div>\n    "
        })
    ], Page2Component);
    return Page2Component;
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
    production: false,
    standalone: true
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
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");



if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    // Let the host app decide about prod mode
    // enableProdMode();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\BASF-Projects\Learning Projects\Static Web App PoC\angular-microfrontend-demo\projects\client-b\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map