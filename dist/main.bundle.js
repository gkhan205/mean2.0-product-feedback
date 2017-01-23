webpackJsonp([0,3],{

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.signup = function (user) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post('/users/register', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json()); });
    };
    AuthService.prototype.signin = function (user) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post('/users/login', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json()); });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=D:/xampp/htdocs/ghazi/Mean/mean-app/src/auth.service.js.map

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FeedbackService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedbackService = (function () {
    function FeedbackService(http) {
        this.http = http;
        this.feedback = [];
    }
    // Get all feeds from the API
    FeedbackService.prototype.getAllPosts = function () {
        return this.http.get('/api/posts')
            .map(function (res) { return res.json(); });
    };
    FeedbackService.prototype.addNewPost = function (feedback) {
        this.feedback.push(feedback);
        var body = JSON.stringify(feedback);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post('/api/posts', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json()); });
    };
    FeedbackService.prototype.getAllUsers = function () {
        return this.http.get('/users')
            .map(function (res) { return res.json(); });
    };
    FeedbackService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], FeedbackService);
    return FeedbackService;
    var _a;
}());
//# sourceMappingURL=D:/xampp/htdocs/ghazi/Mean/mean-app/src/feedback.service.js.map

/***/ },

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return User; });
var User = (function () {
    function User(username, password, name, location, role) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.location = location;
        this.role = role;
        // code...
    }
    return User;
}());
//# sourceMappingURL=D:/xampp/htdocs/ghazi/Mean/mean-app/src/user.model.js.map

/***/ },

/***/ 427:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 427;


/***/ },

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(545);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/xampp/htdocs/ghazi/Mean/mean-app/src/main.js.map

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
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
        this.title = 'Mean Feedback Application';
    }
    AppComponent.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(710),
            styles: [__webpack_require__(706)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/xampp/htdocs/ghazi/Mean/mean-app/src/app.component.js.map

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__feedback_feedback_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__feedback_feedback_input_component__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_login_component__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_logout_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_register_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__feedback_feedback_service__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_auth_service__ = __webpack_require__(170);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













// Define the routes
var ROUTES = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'feedback', component: __WEBPACK_IMPORTED_MODULE_7__feedback_feedback_input_component__["a" /* FeedbackInputComponent */] },
    { path: 'feeds', component: __WEBPACK_IMPORTED_MODULE_6__feedback_feedback_component__["a" /* FeedbackComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__auth_login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_9__auth_logout_component__["a" /* LogoutComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__auth_register_component__["a" /* RegisterComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__feedback_feedback_component__["a" /* FeedbackComponent */],
                __WEBPACK_IMPORTED_MODULE_8__auth_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__auth_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__auth_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__feedback_feedback_input_component__["a" /* FeedbackInputComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(ROUTES)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__feedback_feedback_service__["a" /* FeedbackService */], __WEBPACK_IMPORTED_MODULE_12__auth_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/xampp/htdocs/ghazi/Mean/mean-app/src/app.module.js.map

/***/ },

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_model__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(170);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.onSubmit = function (myForm) {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_3__user_model__["a" /* User */](this.myForm.value.username, this.myForm.value.password);
        this.authService.signin(user)
            .subscribe(function (data) {
            if (data.user.role == 1) {
                _this.router.navigateByUrl('/feedback');
            }
            else if (data.user.role == 2) {
                _this.router.navigateByUrl('/feeds');
            }
            localStorage.setItem('userId', data.user._id);
            localStorage.setItem('userName', data.user.username);
            localStorage.setItem('name', data.user.name);
            localStorage.setItem('token', data.token);
        }, function (error) { return console.error(error); });
        this.myForm.reset();
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required)
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(711),
            styles: [__webpack_require__(707)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/xampp/htdocs/ghazi/Mean/mean-app/src/login.component.js.map

/***/ },

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(170);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = (function () {
    function LogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LogoutComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigateByUrl('/login');
    };
    LogoutComponent.prototype.ngOnInit = function () { };
    LogoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-logout',
            template: "<div class=\"row spacing\">\n  \t\t\t\t<button class=\"btn btn-danger\" (click)=\"onLogout()\">Logout</button>\n  \t\t\t</div>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LogoutComponent);
    return LogoutComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/xampp/htdocs/ghazi/Mean/mean-app/src/logout.component.js.map

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_model__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(170);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.onSubmit = function (myForm) {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_3__user_model__["a" /* User */](this.myForm.value.username, this.myForm.value.password, this.myForm.value.name, this.myForm.value.location, this.myForm.value.role);
        this.authService.signup(user)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigateByUrl('/feeds');
        }, function (error) { return console.log(error); });
        this.myForm.reset();
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required),
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required),
            location: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required),
            role: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required)
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__(712),
            styles: [__webpack_require__(708)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/xampp/htdocs/ghazi/Mean/mean-app/src/register.component.js.map

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback_service__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feedback_model__ = __webpack_require__(551);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FeedbackInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedbackInputComponent = (function () {
    function FeedbackInputComponent(feedbackService) {
        this.feedbackService = feedbackService;
        this.user = localStorage.getItem('userId');
        this.name = localStorage.getItem('name');
    }
    FeedbackInputComponent.prototype.onSubmit = function (myForm) {
        var feedback = new __WEBPACK_IMPORTED_MODULE_3__feedback_model__["a" /* Feedback */](this.myForm.value.res1, this.myForm.value.res2, this.myForm.value.res3, this.myForm.value.res4, this.myForm.value.text, this.user);
        this.feedbackService.addNewPost(feedback)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        this.myForm.reset();
    };
    FeedbackInputComponent.prototype.ngOnInit = function () {
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormGroup */]({
            res1: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required),
            res2: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required),
            res3: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required),
            res4: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required),
            text: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required)
        });
    };
    FeedbackInputComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-feedback',
            template: __webpack_require__(713)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__feedback_service__["a" /* FeedbackService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__feedback_service__["a" /* FeedbackService */]) === 'function' && _a) || Object])
    ], FeedbackInputComponent);
    return FeedbackInputComponent;
    var _a;
}());
//# sourceMappingURL=D:/xampp/htdocs/ghazi/Mean/mean-app/src/feedback-input.component.js.map

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feedback_service__ = __webpack_require__(244);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FeedbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedbackComponent = (function () {
    function FeedbackComponent(feedbackService) {
        this.feedbackService = feedbackService;
        this.feeds = [];
        this.name = localStorage.getItem('name');
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve posts from the API
        this.feedbackService.getAllPosts().subscribe(function (feeds) {
            _this.feeds = feeds;
        });
        this.feedbackService.getAllUsers().subscribe(function (users) {
            _this.users = users;
        });
    };
    FeedbackComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-feedback',
            template: __webpack_require__(714),
            styles: [__webpack_require__(709)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__feedback_service__["a" /* FeedbackService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__feedback_service__["a" /* FeedbackService */]) === 'function' && _a) || Object])
    ], FeedbackComponent);
    return FeedbackComponent;
    var _a;
}());
//# sourceMappingURL=D:/xampp/htdocs/ghazi/Mean/mean-app/src/feedback.component.js.map

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Feedback; });
var Feedback = (function () {
    function Feedback(res1, res2, res3, res4, text, user) {
        this.res1 = res1;
        this.res2 = res2;
        this.res3 = res3;
        this.res4 = res4;
        this.text = text;
        this.user = user;
        // code...
    }
    return Feedback;
}());
//# sourceMappingURL=D:/xampp/htdocs/ghazi/Mean/mean-app/src/feedback.model.js.map

/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/xampp/htdocs/ghazi/Mean/mean-app/src/environment.js.map

/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(978);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=D:/xampp/htdocs/ghazi/Mean/mean-app/src/polyfills.js.map

/***/ },

/***/ 706:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 707:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 708:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 709:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 710:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"/\">Khan Production</a>\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n      \t<li><a *ngIf=\"isLoggedIn()\" [routerLink]=\"['/logout']\">Logout</a></li>\r\n      </ul>\r\n    </div><!-- /.navbar-collapse -->\r\n  </div><!-- /.container-fluid -->\r\n</nav>\r\n\r\n<div class=\"container\">\r\n<!-- \t<h1>\r\n\t  {{title}}\r\n\t</h1> -->\r\n\r\n\t<router-outlet></router-outlet>\r\n</div>"

/***/ },

/***/ 711:
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-4 col-sm-offset-4\"> \r\n  <h2 class=\"lead text-center\">Login to Feedback Panel</h2> \r\n  <form class=\"form-horizontal text-center\" [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Username\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-success\">Login Now!</button>\r\n    </div>\r\n  </form>\r\n  <!-- <div class=\"row spacing\">\r\n    <a [routerLink]=\"['/register']\">Don't have an account? Register Here!</a>\r\n  </div> -->\r\n</div>"

/***/ },

/***/ 712:
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-6 col-sm-offset-3\"> \r\n\t<h2 class=\"lead\">Add New User to provide Feedback</h2> \r\n\t<form class=\"form-horizontal\" [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\r\n\t  <div class=\"form-group\">\r\n\t      <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Name\">\r\n\t  </div>\r\n\t  <div class=\"form-group\">\r\n\t      <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Username\">\r\n\t  </div>\r\n\t  <div class=\"form-group\">\r\n\t      <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\">\r\n\t  </div>\r\n\t    <div class=\"form-group\">\r\n\t      <input type=\"text\" class=\"form-control\" formControlName=\"location\" placeholder=\"Location\">\r\n\t  </div>\r\n\t  <div class=\"form-group\">\r\n\t  \t<label>Select Role for this user</label>\r\n\t     \t<select class=\"form-control\" formControlName=\"role\" required>\r\n\t     \t\t<option value=\"1\">Normal User</option>\r\n\t     \t\t<option value=\"2\">Administrator</option>\r\n\t     \t</select>\r\n\t  </div>\r\n\t  <div class=\"form-group\">\r\n\t      <button type=\"submit\" class=\"btn btn-success\">Register Now!</button>\r\n\t  </div>\r\n\t</form>\r\n\t<div class=\"row spacing\">\r\n    <a [routerLink]=\"['/feeds']\">Go Back</a>\r\n  </div>\r\n</div>"

/***/ },

/***/ 713:
/***/ function(module, exports) {

module.exports = "<h2>Welcome, {{name}}</h2>\r\n\r\n<div class=\"col-md-6\"> \r\n  <h2 class=\"lead\">Provide us your feedback</h2> \r\n  <form class=\"form-horizontal\" [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n    1. How convenient is the product to use?\r\n    <br>\r\n      <select class=\"form-control\" formControlName=\"res1\" required>\r\n        <option>Select out of 5</option>\r\n        <option value=\"1\">1</option>\r\n        <option value=\"2\">2</option>\r\n        <option value=\"3\">3</option>\r\n        <option value=\"4\">4</option>\r\n        <option value=\"5\">5</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n    2. What do you say about the build quality?\r\n     <br>\r\n      <select class=\"form-control\" formControlName=\"res2\" required>\r\n        <option>Select out of 5</option>\r\n        <option value=\"1\">1</option>\r\n        <option value=\"2\">2</option>\r\n        <option value=\"3\">3</option>\r\n        <option value=\"4\">4</option>\r\n        <option value=\"5\">5</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n    3. How was the packaging of the product? \r\n      <br>\r\n      <select class=\"form-control\" formControlName=\"res3\" required>\r\n        <option>Select out of 5</option>\r\n        <option value=\"1\">1</option>\r\n        <option value=\"2\">2</option>\r\n        <option value=\"3\">3</option>\r\n        <option value=\"4\">4</option>\r\n        <option value=\"5\">5</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n    4. What is your overall feedback about the product? \r\n      <br>\r\n      <select class=\"form-control\" formControlName=\"res4\" required>\r\n        <option>Select out of 5</option>\r\n        <option value=\"1\">1</option>\r\n        <option value=\"2\">2</option>\r\n        <option value=\"3\">3</option>\r\n        <option value=\"4\">4</option>\r\n        <option value=\"5\">5</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n       <textarea class=\"form-control\" formControlName=\"text\" rows=\"5\" placeholder=\"Write a short message/feedback\"></textarea>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-success\">Submit Your Feedback!</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ },

/***/ 714:
/***/ function(module, exports) {

module.exports = "<h2>Welcome, {{name}}</h2>\r\n<hr>\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row spacing\">\r\n\t<div class=\"col-md-12\">\r\n\t\t\t<div class=\"table-responsive\">\r\n\t\t\t<button class=\"btn btn-success pull-left\" [routerLink]=\"['/register']\">Add New User</button>\r\n\t\t\t<br><br>\r\n\t\t\t\t<h4>Users List</h4>\r\n\t\t\t\t<table class=\"table table-striped table-bordered\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th>Name</th>\r\n\t\t\t\t\t\t<th>Login Name</th>\r\n\t\t\t\t\t\t<th>Location</th>\r\n\t\t\t\t\t\t<th>Created At</th>\r\n\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr *ngFor=\"let user of users\">\r\n\t\t\t\t\t\t\t<td>{{user.name}}</td>\r\n\t\t\t\t\t\t\t<td>{{user.username}}</td>\r\n\t\t\t\t\t\t\t<td>{{user.location}}</td>\t\r\n\t\t\t\t\t\t\t<th>{{user.created_at | date:'mediumDate'}}</th>\t\t\t\t\t\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Edit</button>\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-danger\">Delete</button>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<div class=\"table-responsive\">\r\n\t\t\t<h4>Feedback List</h4>\r\n\t\t\t\t<table class=\"table table-striped table-bordered\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th>Feedback Text</th>\r\n\t\t\t\t\t\t<th>Q. 1</th>\r\n\t\t\t\t\t\t<th>Q. 2</th>\r\n\t\t\t\t\t\t<th>Q. 3</th>\r\n\t\t\t\t\t\t<th>Q. 4</th>\r\n\t\t\t\t\t\t<th>Posted By</th>\r\n\t\t\t\t\t\t<th>Posted On</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr *ngFor=\"let post of feeds\">\r\n\t\t\t\t\t\t\t<td>{{post.text}}</td>\r\n\t\t\t\t\t\t\t<td>{{post.res1}}</td>\r\n\t\t\t\t\t\t\t<td>{{post.res2}}</td>\r\n\t\t\t\t\t\t\t<td>{{post.res3}}</td>\r\n\t\t\t\t\t\t\t<td>{{post.res4}}</td>\r\n\t\t\t\t\t\t\t<td>{{post.user.name}}</td>\r\n\t\t\t\t\t\t\t<th>{{post.created_at | date:'mediumDate'}}</th>\t\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ },

/***/ 979:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(428);


/***/ }

},[979]);
//# sourceMappingURL=main.bundle.map