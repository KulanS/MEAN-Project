"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../_services/index");
var platform_browser_1 = require("@angular/platform-browser");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, userService, alertService, titleService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.titleService = titleService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        //set title
        this.setTitle('Garage Partner | Register');
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'register.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            index_1.UserService,
            index_1.AlertService,
            platform_browser_1.Title])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map