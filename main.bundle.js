webpackJsonp([1,4],{

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.aboutMe = ["I am self-taught developer, who is always trying to learn more in order \n            write cleaner and more efficient code. I place high emphasis on knowing about the\n            why behind the how.",
            "I started learning how to program games at first, but migrated over to web design.\n             I find the UI / UX portion of web development to be the most challenging, but am working on improving my skills\n             every day. I find most joy in the creation and programming of websites."];
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__(670),
            styles: [__webpack_require__(664)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=/Users/mszauer/Desktop/myWebsite/src/about.component.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__(671),
            styles: [__webpack_require__(665)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
//# sourceMappingURL=/Users/mszauer/Desktop/myWebsite/src/contact.component.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmploymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmploymentComponent = (function () {
    function EmploymentComponent() {
        this.employers = [{
                name: "Toolwire Inc",
                position: 'Quality Assurance Tester',
                role: "insert job roles here",
                start: 'Aug 2016',
                end: 'Present'
            },
            {
                name: "University of South Florida, Campus Recreation",
                position: 'Fitness Supervisor',
                role: 'insert job summary here',
                start: 'Aug 2014',
                end: 'Jul 2016'
            }];
    }
    EmploymentComponent.prototype.ngOnInit = function () {
    };
    EmploymentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-employment',
            template: __webpack_require__(672),
            styles: [__webpack_require__(666)]
        }), 
        __metadata('design:paramtypes', [])
    ], EmploymentComponent);
    return EmploymentComponent;
}());
//# sourceMappingURL=/Users/mszauer/Desktop/myWebsite/src/employment.component.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = (function () {
    function PortfolioComponent() {
        this.websites = [
            {
                title: 'ngMessenger',
                target: "https://bit.ly/ngmessenger",
                image: "/assets/screencaps/ngmessenger.png",
                skills: "M.E.A.N (Mongoose,Express,Angular,NodeJs) Stack SPA ",
                description: "Full-stack project created using the MEAN stack. Custom backend with route protection and custom error handling.\n                    Uses custom MongoDB to store users and messages, and their relations. Uses lazy loading for registration and AOT compiling.\n                    Authorization for each message tied to user authentication."
            }, {
                title: 'ngProject',
                target: "https://mszauer.github.io/ngProject/",
                image: "/assets/screencaps/ngproject.png",
                skills: "Angular (Angular2) Front-End, ES6",
                description: "SPA Built using the latest Angular(2) build and features. Mimicks backend server calls with API calls. \n                    Uses RESTful routing and is similar to blog website. Built using re-usable components and uses Observables to handle asynchrony."
            },
            {
                title: 'YelpCamp',
                target: "https://www.bit.ly/yelpcamp",
                image: "/assets/screencaps/yelpcamp.png",
                skills: "MongooseDB, Express, EJS, NodeJS, Passport, ES6",
                description: "Full-stack project that implements RESTful routing and is like Yelp but for campsites. Registered users can\n                    add, rate, and review campsites. "
            }];
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-portfolio',
            template: __webpack_require__(674),
            styles: [__webpack_require__(668)]
        }), 
        __metadata('design:paramtypes', [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());
//# sourceMappingURL=/Users/mszauer/Desktop/myWebsite/src/portfolio.component.js.map

/***/ }),

/***/ 385:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 385;


/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(506);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/mszauer/Desktop/myWebsite/src/main.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-root',
            template: "\n    <app-sidebar></app-sidebar>\n    \n    <router-outlet></router-outlet>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/mszauer/Desktop/myWebsite/src/app.component.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__employment_employment_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__portfolio_portfolio_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__portfolio_piece_portfolio_piece_component__ = __webpack_require__(508);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__employment_employment_component__["a" /* EmploymentComponent */],
                __WEBPACK_IMPORTED_MODULE_9__portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_9__portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_11__portfolio_piece_portfolio_piece_component__["a" /* PortfolioPieceComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/mszauer/Desktop/myWebsite/src/app.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employment_employment_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__portfolio_portfolio_component__ = __webpack_require__(332);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });





var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot([
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__about_about_component__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_2__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'employment', component: __WEBPACK_IMPORTED_MODULE_3__employment_employment_component__["a" /* EmploymentComponent */] },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_4__portfolio_portfolio_component__["a" /* PortfolioComponent */] }
]);
//# sourceMappingURL=/Users/mszauer/Desktop/myWebsite/src/app.routing.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioPieceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioPieceComponent = (function () {
    function PortfolioPieceComponent() {
    }
    PortfolioPieceComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', Object)
    ], PortfolioPieceComponent.prototype, "portfolioPiece", void 0);
    PortfolioPieceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-portfolio-piece',
            template: __webpack_require__(673),
            styles: [__webpack_require__(667)]
        }), 
        __metadata('design:paramtypes', [])
    ], PortfolioPieceComponent);
    return PortfolioPieceComponent;
}());
//# sourceMappingURL=/Users/mszauer/Desktop/myWebsite/src/portfolio-piece.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__(675),
            styles: [__webpack_require__(669)]
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
//# sourceMappingURL=/Users/mszauer/Desktop/myWebsite/src/sidebar.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/mszauer/Desktop/myWebsite/src/environment.js.map

/***/ }),

/***/ 664:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = "\r\n.start{\r\n    padding: 2px 15px;\r\n    background-color: #87CEFA;\r\n}\r\n.end{\r\n    padding: 2px 15px;\r\n    background-color: #375a7f;\r\n}\r\n.panel{\r\n    width: 70%;\r\n    margin-left: 21.5%;\r\n    height: 200px;\r\n}\r\nul{\r\n    list-style-type: none;\r\n}\r\nul:nth-child(odd){\r\n    width: 100%;\r\n    background-color: #464545;\r\n}\r\n.dates{\r\n    max-width: 100px;\r\n}\r\nli{\r\n    height: 50px;\r\n}\r\n.company{\r\n    padding-left: 1em;\r\n}\r\n.position{\r\n    margin-left: 101px;\r\n    margin-bottom: 5px;\r\n}"

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = "img{\n    max-width:300px;\n}\n.media-description{\n    padding-left: 1em;\n}"

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = "ul{\r\n    list-style-type: none;\r\n}\r\nli{\r\n    padding-bottom: 0.5em;\r\n    margin-bottom: 1em;\r\n    border-bottom: 1px solid grey;\r\n    background-color: #303030;\r\n}\r\na:link,\r\na:visited,\r\na:active,\r\na:hover {\r\n  font-family:Arial; \r\n  color:#fffff0; \r\n  text-decoration:none\r\n}\r\nimg{\r\n  max-width: 300px;\r\n  max-height: 350px;\r\n}\r\n\r\n"

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = ".navlinks li:first-child{\r\n    border-top: 1px solid grey;\r\n}\r\n.navlinks li{\r\n    border-bottom: 1px solid grey;\r\n    background-color: #303030;\r\n}\r\n.portrait{\r\n    width: 75%;\r\n    border-radius: 20%;\r\n    padding: 15px 0px;\r\n    margin-left: 10%;\r\n}\r\n.external-links{\r\n    padding: 0 10px;\r\n}\r\n.column{\r\n    height: 100vh;\r\n}\r\n"

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-8 col-xs-offset-1\">\n  <div class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n      <h2 class=\"panel-title\">Szauer Martin,</h2>\n    </div>\n    <div class=\"panel-body\">\n        <p>{{ aboutMe[0] }}</p>\n        <p>{{ aboutMe[1] }}</p>\n        <hr>\n        <div class='pull-right'>\n          <blockquote cite='Steve Jobs'>\n              <p>Stay Hungry.\n              Stay Foolish.</p>\n          </blockquote>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-8 col-xs-offset-1\">\n  <div class=\"panel panel-info\">\n    <div class=\"panel-heading text-center\">\n        <h4 class='panel-title'>Contact Me</h4>\n      </div>\n      <div class=\"panel-body \">\n        <form method='post' action='mailto:dev@martinszauer.com'>\n          <fieldset>\n            <div class=\"form-group\">\n              <label>Name: </label>\n              <input type=\"text\" class='form-control' placeholder='jane doe'>\n            </div>\n          </fieldset>\n          <fieldset>\n            <div class=\"form-group\">\n              <label>Message</label>\n              <textarea rows='3' cols='50' class='form-control'></textarea>\n            </div>\n          </fieldset>\n          <input class='form-group' type=\"submit\" value='Send'>\n        </form>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-8 col-xs-offset-1\">\n  <div class=\"panel panel-info\">\n    <div class=\"panel-heading text-center\">\n      <h4 class='panel-title'>Employment</h4>\n    </div>\n    <div class=\"panel-body \">\n      <ul *ngFor='let employer of employers'>\n        <li>\n          <div class=\"dates pull-left text-center\">\n            <div class=\"end\">{{ employer.end }}</div>\n            <div class=\"start\">{{ employer.start }}</div>\n          </div>\n          <div class=\"content\">\n            <p class='position'><strong>{{ employer.position }}</strong></p>\n            <span class='company'><em>{{ employer.name }}</em></span>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "<div class=\"media\">\n  <div class=\"media-left media-middle\">\n    <a href=\"{{ portfolioPiece.target }}\">\n      <img class=\"d-flex align-self-center mr-3\" \n            src=\"{{ portfolioPiece.image }}\" \n          alt=\"Generic placeholder image\">\n    </a>\n  </div>\n  <div class=\"media-body\">\n    <h4 class=\"media-heading\">{{ portfolioPiece.title }}</h4>\n    <div class=\"media-description\">\n      <h6><em>{{ portfolioPiece.skills }}</em></h6>\n    </div>\n    <p>{{ portfolioPiece.description }}</p>\n  </div>\n</div>"

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-8 col-xs-offset-1\">\n  <div class=\"panel panel-info\">\n    <div class=\"panel-heading text-center\">\n      <h4 class='panel-title'>Portfolio</h4>\n    </div>\n    <div class=\"panel-body \">\n        <ul>\n          <li *ngFor=\"let website of websites\">\n            <app-portfolio-piece [portfolioPiece]=\"website\"></app-portfolio-piece>\n          </li>\n        </ul>    \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid col-xs-2 column sidebar\">\n  <div class=\"media\">\n    <img src=\"https://avatars0.githubusercontent.com/u/9440289?v=3&s=460\" \n          class='portrait' alt=\"A picture of Szauer, Martin\">\n    <div class=\"media-body text-center\">\n      <h4>Martin Szauer</h4>\n    </div>\n  </div>\n  <div class=\"row\">\n  <ul class = \"nav nav-pills nav-stacked navlinks\">    \n      <li><a routerLink='' routerLinkActive='active'><i class=\"fa fa-id-card\" aria-hidden=\"true\"></i>  About</a></li>\n      <li><a routerLink='portfolio' routerLinkActive='active'><i class=\"fa fa-code\" aria-hidden=\"true\"></i> Portfolio</a></li>\n      <li><a routerLink='employment' routerLinkActive='active'><i class=\"fa fa-address-book-o\" aria-hidden=\"true\"></i> Employment</a></li>\n      <li><a href='../../assets/MartinSzauerResume.pdf'><i class=\"fa fa-file-text\" aria-hidden=\"true\"></i>   Resume</a></li>\n      <li><a routerLink='contact' routerLinkActive='active'><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> Contact</a></li>\n    </ul>\n  </div>\n    <ul class=\"nav nav-tabs nav-justified external-links\">\n      <li><a href='http://github.com/mszauer'><i class=\"fa fa-github\"></i></a></li>\n      <li><a href='http://linkedin.com/in/mszauer'><i class=\"fa fa-linkedin\"></i></a></li>\n    </ul>\n</div>\n"

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(386);


/***/ })

},[693]);
//# sourceMappingURL=main.bundle.map