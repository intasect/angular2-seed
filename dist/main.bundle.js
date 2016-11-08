var ac_main =
webpackJsonpac__name_([1],{

/***/ "./node_modules/extract-text-webpack-plugin/loader.js?{\"id\":2,\"omit\":0,\"remove\":true}!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./src/app/app.scss":
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ "./node_modules/extract-text-webpack-plugin/loader.js?{\"id\":2,\"omit\":0,\"remove\":true}!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./src/login/login.scss":
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ "./node_modules/extract-text-webpack-plugin/loader.js?{\"id\":2,\"omit\":0,\"remove\":true}!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./src/portal/portal.scss":
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ "./node_modules/rxjs/add/operator/toPromise.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var toPromise_1 = __webpack_require__("./node_modules/rxjs/operator/toPromise.js");
Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
//# sourceMappingURL=toPromise.js.map

/***/ },

/***/ "./src/app/app-component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var AppComponent = (function () {
    function AppComponent(router, titleService) {
        this.router = router;
        this.titleService = titleService;
    }
    AppComponent.prototype.setTitle = function () {
        this.titleService.setTitle('Angular2');
    };
    AppComponent.prototype.ngOnInit = function () {
        this.setTitle();
        this.redirectToLogin();
    };
    AppComponent.prototype.redirectToLogin = function () {
        this.router.navigate(['/login']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: __webpack_require__("./src/app/app.html"),
            styles: [
                __webpack_require__("./src/app/app.scss")
            ],
            providers: [
                platform_browser_1.Title
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof platform_browser_1.Title !== 'undefined' && platform_browser_1.Title) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
exports.AppComponent = AppComponent;


/***/ },

/***/ "./src/app/app-module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var shared_module_1 = __webpack_require__("./src/shared/shared-module.ts");
var login_module_1 = __webpack_require__("./src/login/login-module.ts");
var portal_module_1 = __webpack_require__("./src/portal/portal-module.ts");
var app_component_1 = __webpack_require__("./src/app/app-component.ts");
var routes = [
    {
        path: '',
        component: app_component_1.AppComponent
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes, { useHash: true }),
                shared_module_1.SharedModule,
                login_module_1.LoginModule,
                portal_module_1.PortalModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [
                {
                    provide: common_1.APP_BASE_HREF, useValue: '/'
                }
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ },

/***/ "./src/app/app.html":
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ },

/***/ "./src/app/app.scss":
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/extract-text-webpack-plugin/loader.js?{\"id\":2,\"omit\":0,\"remove\":true}!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./src/app/app.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ "./src/app/environment.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// Angular 2
// rc2 workaround
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function identity(value) { return value; };
if (false) {
    // Production
    platform_browser_1.disableDebugTools();
    core_1.enableProdMode();
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(core_1.ApplicationRef);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        platform_browser_1.enableDebugTools(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
exports.decorateModuleRef = _decorateModuleRef;
exports.ENV_PROVIDERS = PROVIDERS.slice();


/***/ },

/***/ "./src/login/login-component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// Third party library.
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var login_service_1 = __webpack_require__("./src/login/login-service.ts");
var LoginComponent = (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.model = {
            email: '',
            password: ''
        };
    };
    LoginComponent.prototype.loggedOn = function () {
        return true;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.model.email, this.model.password).then(function (data) {
            if (data.result === true) {
                _this.router.navigate(['/portal']);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("./src/login/login.html"),
            styles: [
                __webpack_require__("./src/login/login.scss")
            ],
            providers: [
                login_service_1.LoginService
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof login_service_1.LoginService !== 'undefined' && login_service_1.LoginService) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
exports.LoginComponent = LoginComponent;


/***/ },

/***/ "./src/login/login-module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var shared_module_1 = __webpack_require__("./src/shared/shared-module.ts");
var login_component_1 = __webpack_require__("./src/login/login-component.ts");
var routes = [
    {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
    }
];
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(routes),
                shared_module_1.SharedModule
            ],
            declarations: [
                login_component_1.LoginComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;


/***/ },

/***/ "./src/login/login-service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
var http_service_1 = __webpack_require__("./src/shared/services/http-service.ts");
var LoginService = (function () {
    function LoginService(http, httpService) {
        this.http = http;
        this.httpService = httpService;
    }
    LoginService.prototype.login = function (email, password) {
        return this.http.get('shared/assets/mocks/login/login.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.httpService.handleError);
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, (typeof (_b = typeof http_service_1.HttpService !== 'undefined' && http_service_1.HttpService) === 'function' && _b) || Object])
    ], LoginService);
    return LoginService;
    var _a, _b;
}());
exports.LoginService = LoginService;


/***/ },

/***/ "./src/login/login.html":
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"login\">\r\n        <h1 class=\"text-center login-title\">Sign in to Angular2 seed</h1>\r\n        <div class=\"account-wall\">\r\n            <img class=\"profile-img\" src=\"https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120\"\r\n                alt=\"\">\r\n            <form #loginForm=\"ngForm\" (ngSubmit)=\"login()\" class=\"form-signin\">\r\n                <input type=\"text\" name=\"email\" #email=\"ngModel\" email [(ngModel)]=\"model.email\" class=\"form-control\" placeholder=\"Email\" required autofocus>\r\n                <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"model.password\" class=\"form-control\" placeholder=\"Password\" required>\r\n                <div *ngIf=\"email?.errors?.email\" class=\"alert alert-danger\">\r\n                    Please enter a valid email address.\r\n                </div>\r\n                <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">\r\n                    Please enter a password.\r\n                </div>\r\n                <div class=\"input-group\">\r\n                    <button [disabled]=\"!loginForm.form.valid\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\r\n                </div>\r\n                <div class=\"input-group\">\r\n                    <label class=\"checkbox pull-left\">\r\n                        <input type=\"checkbox\" value=\"remember-me\">\r\n                        Remember me\r\n                </label>\r\n                </div>\r\n                <a href=\"#\" class=\"pull-right need-help\">Need help? </a><span class=\"clearfix\"></span>\r\n            </form>\r\n        </div>\r\n        <a href=\"#\" class=\"text-center new-account\">Create an account </a>\r\n    </div>\r\n</div>"

/***/ },

/***/ "./src/login/login.scss":
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/extract-text-webpack-plugin/loader.js?{\"id\":2,\"omit\":0,\"remove\":true}!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./src/login/login.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ "./src/main.browser.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/*
 * Angular bootstraping
 */
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/index.js");
var environment_1 = __webpack_require__("./src/app/environment.ts");
var hmr_1 = __webpack_require__("./node_modules/@angularclass/hmr/dist/index.js");
/*
 * App Module
 * our top level module that holds all of our components
 */
var app_module_1 = __webpack_require__("./src/app/app-module.ts");
/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(app_module_1.AppModule).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(environment_1.decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
// needed for hmr
// in prod this is replace for document ready
hmr_1.bootloader(main);


/***/ },

/***/ "./src/portal/portal-component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// Third party library.
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
var portal_service_1 = __webpack_require__("./src/portal/portal-service.ts");
var PortalComponent = (function () {
    function PortalComponent(elementRef, sanitizer, portalService) {
        this.elementRef = elementRef;
        this.sanitizer = sanitizer;
        this.portalService = portalService;
    }
    PortalComponent.prototype.ngOnInit = function () {
        this.getHTML();
        JsBarcode('.barcode').init();
        var canvas = document.createElement('canvas');
        var test = document.getElementById('test');
        test.appendChild(canvas);
        JsBarcode(canvas, '1 1 1 6 1 0 4 0 5 8 8 9 0 0', { format: 'CODE39' });
    };
    PortalComponent.prototype.getHTML = function () {
        var _this = this;
        this.portalService.getHTML().then(function (content) {
            var scriptReg = /<script type="text\/javascript">((\n|.)*)<\/script>/g;
            var scriptFound = content.match(scriptReg);
            if (scriptFound) {
                for (var i = 0; i < scriptFound.length; i++) {
                    var source = scriptFound[i].replace(scriptReg, '$1');
                    eval(source);
                }
            }
            var scriptSrcReg = /<script type="text\/javascript" src="(.*)"><\/script>/g;
            var scriptSrcFound = content.match(scriptSrcReg);
            if (scriptSrcFound) {
                for (var i = 0; i < scriptSrcFound.length; i++) {
                    var source = scriptSrcFound[i].replace(scriptSrcReg, '$1');
                    var tag = document.createElement('script');
                    tag.type = 'text/javascript';
                    tag.src = source;
                    console.log(source);
                    console.log(_this.elementRef.nativeElement);
                    _this.elementRef.nativeElement.appendChild(tag);
                }
            }
            content = content.replace(scriptReg, '');
            content = content.replace(scriptSrcReg, '');
            _this.content = _this.sanitizer.bypassSecurityTrustHtml(content);
        });
    };
    PortalComponent.prototype.createPDF = function () {
        this.portalService.getData().then(function (data) {
            pdfMake.fonts = {
                mplus: {
                    normal: 'mplus-1p-regular.ttf',
                    bold: 'mplus-1p-regular.ttf',
                    italics: 'mplus-1p-regular.ttf',
                    bolditalics: 'mplus-1p-regular.ttf'
                }
            };
            var documentDefinition = data;
            var document = pdfMake.createPdf(documentDefinition);
            console.log(document);
            document.open();
        }, function (error) {
            alert(error);
        });
    };
    PortalComponent.prototype.createPDF2 = function () {
        this.portalService.getRawData().then(function (data) {
            pdfMake.fonts = {
                mplus: {
                    normal: 'mplus-1p-regular.ttf',
                    bold: 'mplus-1p-regular.ttf',
                    italics: 'mplus-1p-regular.ttf',
                    bolditalics: 'mplus-1p-regular.ttf'
                }
            };
            var documentDefinition = eval('(function() { var doc = ' + data + '; return doc; }())');
            console.log(documentDefinition);
            var document = pdfMake.createPdf(documentDefinition);
            console.log(document);
            document.open();
        }, function (error) {
            alert(error);
        });
    };
    PortalComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("./src/portal/portal.html"),
            styles: [
                __webpack_require__("./src/portal/portal.scss")
            ],
            providers: [
                portal_service_1.PortalService
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof platform_browser_1.DomSanitizer !== 'undefined' && platform_browser_1.DomSanitizer) === 'function' && _b) || Object, (typeof (_c = typeof portal_service_1.PortalService !== 'undefined' && portal_service_1.PortalService) === 'function' && _c) || Object])
    ], PortalComponent);
    return PortalComponent;
    var _a, _b, _c;
}());
exports.PortalComponent = PortalComponent;


/***/ },

/***/ "./src/portal/portal-module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
var shared_module_1 = __webpack_require__("./src/shared/shared-module.ts");
var portal_component_1 = __webpack_require__("./src/portal/portal-component.ts");
var routes = [
    {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'login'
    },
    {
        path: 'portal',
        component: portal_component_1.PortalComponent,
    }
];
var PortalModule = (function () {
    function PortalModule() {
    }
    PortalModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forChild(routes),
                shared_module_1.SharedModule
            ],
            declarations: [portal_component_1.PortalComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PortalModule);
    return PortalModule;
}());
exports.PortalModule = PortalModule;


/***/ },

/***/ "./src/portal/portal-service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
var http_service_1 = __webpack_require__("./src/shared/services/http-service.ts");
var PortalService = (function () {
    function PortalService(http, httpService) {
        this.http = http;
        this.httpService = httpService;
    }
    PortalService.prototype.getHTML = function () {
        return this.http.get('shared/assets/mocks/portal/news.html')
            .toPromise()
            .then(function (response) { return response.text(); })
            .catch(this.httpService.handleError);
    };
    PortalService.prototype.getData = function () {
        return this.http.get('shared/assets/mocks/portal/pdf.json').toPromise()
            .then(function (response) { return response.json(); });
    };
    PortalService.prototype.getRawData = function () {
        return this.http.get('shared/assets/mocks/portal/pdf.txt').toPromise()
            .then(function (response) { return response.text(); });
    };
    PortalService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, (typeof (_b = typeof http_service_1.HttpService !== 'undefined' && http_service_1.HttpService) === 'function' && _b) || Object])
    ], PortalService);
    return PortalService;
    var _a, _b;
}());
exports.PortalService = PortalService;


/***/ },

/***/ "./src/portal/portal.html":
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"portal\">\r\n        <button (click)=\"createPDF()\">PDF生成</button>\r\n        <br />\r\n        <button (click)=\"createPDF2()\">PDF生成2</button>\r\n        <svg class=\"barcode\"\r\n        jsbarcode-format=\"upc\"\r\n        jsbarcode-value=\"123456789012\"\r\n        jsbarcode-textmargin=\"0\"\r\n        jsbarcode-fontoptions=\"bold\">\r\n        </svg>\r\n        <div id='test'></div>\r\n        <hr />\r\n        <h1 class=\"text-center login-title\">News from yahoo.co.jp</h1>\r\n        <div class=\"content\" [innerHtml]=\"content\">\r\n        </div>\r\n        \r\n    </div>\r\n</div>"

/***/ },

/***/ "./src/portal/portal.scss":
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/extract-text-webpack-plugin/loader.js?{\"id\":2,\"omit\":0,\"remove\":true}!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./src/portal/portal.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ "./src/shared/services/http-service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var HttpService = (function () {
    function HttpService() {
    }
    HttpService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ },

/***/ "./src/shared/services/util-service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var UtilService = (function () {
    function UtilService() {
    }
    UtilService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UtilService);
    return UtilService;
}());
exports.UtilService = UtilService;


/***/ },

/***/ "./src/shared/shared-module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var util_service_1 = __webpack_require__("./src/shared/services/util-service.ts");
exports.UtilService = util_service_1.UtilService;
var http_service_1 = __webpack_require__("./src/shared/services/http-service.ts");
var email_validator_1 = __webpack_require__("./src/shared/validators/email-validator.ts");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            exports: [
                common_1.CommonModule,
                email_validator_1.EmailValidator
            ],
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                email_validator_1.EmailValidator
            ],
            providers: [
                util_service_1.UtilService,
                http_service_1.HttpService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ },

/***/ "./src/shared/validators/email-validator.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.prototype.validate = function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value && control.value !== '' && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return {
                'email': true
            };
        }
        return null;
    };
    EmailValidator = __decorate([
        core_1.Directive({
            selector: '[email][formControlName],[email][formControl],[email][ngModel]',
            providers: [
                {
                    provide: forms_1.NG_VALIDATORS,
                    useExisting: core_1.forwardRef(function () { return EmailValidator; }),
                    multi: true
                }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], EmailValidator);
    return EmailValidator;
}());
exports.EmailValidator = EmailValidator;


/***/ }

},["./src/main.browser.ts"]);
//# sourceMappingURL=main.map