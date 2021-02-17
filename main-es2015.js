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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layout_blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/blank-layout/blank-layout.component */ "./src/app/layout/blank-layout/blank-layout.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _pages_blanks_uzd_organiv_malogo_tazu_uzd_organiv_malogo_tazu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/blanks/uzd-organiv-malogo-tazu/uzd-organiv-malogo-tazu.component */ "./src/app/pages/blanks/uzd-organiv-malogo-tazu/uzd-organiv-malogo-tazu.component.ts");
/* harmony import */ var _layout_print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/print-layout/print-layout.component */ "./src/app/layout/print-layout/print-layout.component.ts");
/* harmony import */ var _pages_blanks_uzd_pregnancy_uzd_pregnancy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/blanks/uzd-pregnancy/uzd-pregnancy.component */ "./src/app/pages/blanks/uzd-pregnancy/uzd-pregnancy.component.ts");
/* harmony import */ var _pages_blanks_uzd_molochnuh_zaloz_uzd_molochnuh_zaloz_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/blanks/uzd-molochnuh-zaloz/uzd-molochnuh-zaloz.component */ "./src/app/pages/blanks/uzd-molochnuh-zaloz/uzd-molochnuh-zaloz.component.ts");
/* harmony import */ var _pages_blanks_uzd_protocol_uzd_protocol_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/blanks/uzd-protocol/uzd-protocol.component */ "./src/app/pages/blanks/uzd-protocol/uzd-protocol.component.ts");
/* harmony import */ var _pages_blanks_uzd_tservikometria_uzd_tservikometria_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/blanks/uzd-tservikometria/uzd-tservikometria.component */ "./src/app/pages/blanks/uzd-tservikometria/uzd-tservikometria.component.ts");
/* harmony import */ var _pages_blanks_uzd_doplerometry_uzd_doplerometry_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/blanks/uzd-doplerometry/uzd-doplerometry.component */ "./src/app/pages/blanks/uzd-doplerometry/uzd-doplerometry.component.ts");
/* harmony import */ var _pages_blanks_uzd_two_three_uz_uzd_two_three_uz_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/blanks/uzd-two-three-uz/uzd-two-three-uz.component */ "./src/app/pages/blanks/uzd-two-three-uz/uzd-two-three-uz.component.ts");
/* harmony import */ var _pages_blanks_uzd_protocol_two_uz_uzd_protocol_two_uz_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/blanks/uzd-protocol-two-uz/uzd-protocol-two-uz.component */ "./src/app/pages/blanks/uzd-protocol-two-uz/uzd-protocol-two-uz.component.ts");
/* harmony import */ var _pages_blanks_uzd_protocol_one_uz_uzd_protocol_one_uz_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/blanks/uzd-protocol-one-uz/uzd-protocol-one-uz.component */ "./src/app/pages/blanks/uzd-protocol-one-uz/uzd-protocol-one-uz.component.ts");

















const routes = [
    {
        path: 'blank',
        component: _layout_blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_2__["BlankLayoutComponent"],
        children: [
            {
                path: 'dashboard',
                component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
            },
            {
                path: 'settings',
                component: _shared_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"]
            },
            {
                path: 'uzd-organiv-malogo-tazu',
                component: _pages_blanks_uzd_organiv_malogo_tazu_uzd_organiv_malogo_tazu_component__WEBPACK_IMPORTED_MODULE_5__["UzdOrganivMalogoTazuComponent"]
            },
            {
                path: 'uzd-pregnancy',
                component: _pages_blanks_uzd_pregnancy_uzd_pregnancy_component__WEBPACK_IMPORTED_MODULE_7__["UzdPregnancyComponent"]
            },
            {
                path: 'uzd-molochnuh-zaloz',
                component: _pages_blanks_uzd_molochnuh_zaloz_uzd_molochnuh_zaloz_component__WEBPACK_IMPORTED_MODULE_8__["UzdMolochnuhZalozComponent"]
            },
            {
                path: 'uzd-protocol',
                component: _pages_blanks_uzd_protocol_uzd_protocol_component__WEBPACK_IMPORTED_MODULE_9__["UzdProtocolComponent"]
            },
            {
                path: 'uzd-tservikometria',
                component: _pages_blanks_uzd_tservikometria_uzd_tservikometria_component__WEBPACK_IMPORTED_MODULE_10__["UzdTservikometriaComponent"]
            },
            {
                path: 'uzd-doplerometry',
                component: _pages_blanks_uzd_doplerometry_uzd_doplerometry_component__WEBPACK_IMPORTED_MODULE_11__["UzdDoplerometryComponent"]
            },
            {
                path: 'uzd-two-three-uz',
                component: _pages_blanks_uzd_two_three_uz_uzd_two_three_uz_component__WEBPACK_IMPORTED_MODULE_12__["UzdTwoThreeUzComponent"]
            },
            {
                path: 'uzd-protocol-two-uz',
                component: _pages_blanks_uzd_protocol_two_uz_uzd_protocol_two_uz_component__WEBPACK_IMPORTED_MODULE_13__["UzdProtocolTwoUzComponent"]
            },
            {
                path: 'uzd-protocol-one-uz',
                component: _pages_blanks_uzd_protocol_one_uz_uzd_protocol_one_uz_component__WEBPACK_IMPORTED_MODULE_14__["UzdProtocolOneUzComponent"]
            }
        ]
    },
    {
        path: 'print',
        component: _layout_print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_6__["PrintLayoutComponent"]
    },
    {
        path: '**',
        redirectTo: 'blank/dashboard',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'galdoc';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _layout_blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/blank-layout/blank-layout.component */ "./src/app/layout/blank-layout/blank-layout.component.ts");
/* harmony import */ var _shared_components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/doctors/doctors.component */ "./src/app/shared/components/doctors/doctors.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _shared_components_blank_base_blank_base_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/components/blank-base/blank-base.component */ "./src/app/shared/components/blank-base/blank-base.component.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/services/print-data.service */ "./src/app/shared/services/print-data.service.ts");
/* harmony import */ var _pages_blanks_uzd_organiv_malogo_tazu_uzd_organiv_malogo_tazu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/blanks/uzd-organiv-malogo-tazu/uzd-organiv-malogo-tazu.component */ "./src/app/pages/blanks/uzd-organiv-malogo-tazu/uzd-organiv-malogo-tazu.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_blank_actions_blank_actions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/components/blank-actions/blank-actions.component */ "./src/app/shared/components/blank-actions/blank-actions.component.ts");
/* harmony import */ var _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/components/logo/logo.component */ "./src/app/shared/components/logo/logo.component.ts");
/* harmony import */ var _shared_components_device_description_device_description_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/components/device-description/device-description.component */ "./src/app/shared/components/device-description/device-description.component.ts");
/* harmony import */ var _shared_components_print_title_print_title_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/components/print-title/print-title.component */ "./src/app/shared/components/print-title/print-title.component.ts");
/* harmony import */ var _shared_components_print_actions_print_actions_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/components/print-actions/print-actions.component */ "./src/app/shared/components/print-actions/print-actions.component.ts");
/* harmony import */ var _layout_print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./layout/print-layout/print-layout.component */ "./src/app/layout/print-layout/print-layout.component.ts");
/* harmony import */ var _shared_components_print_base_print_base_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/components/print-base/print-base.component */ "./src/app/shared/components/print-base/print-base.component.ts");
/* harmony import */ var _pages_print_simple_blank_simple_blank_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/print/simple-blank/simple-blank.component */ "./src/app/pages/print/simple-blank/simple-blank.component.ts");
/* harmony import */ var _shared_services_router_extention_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/services/router-extention.service */ "./src/app/shared/services/router-extention.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_blanks_uzd_pregnancy_uzd_pregnancy_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/blanks/uzd-pregnancy/uzd-pregnancy.component */ "./src/app/pages/blanks/uzd-pregnancy/uzd-pregnancy.component.ts");
/* harmony import */ var _pages_blanks_uzd_molochnuh_zaloz_uzd_molochnuh_zaloz_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/blanks/uzd-molochnuh-zaloz/uzd-molochnuh-zaloz.component */ "./src/app/pages/blanks/uzd-molochnuh-zaloz/uzd-molochnuh-zaloz.component.ts");
/* harmony import */ var _pages_blanks_uzd_protocol_uzd_protocol_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/blanks/uzd-protocol/uzd-protocol.component */ "./src/app/pages/blanks/uzd-protocol/uzd-protocol.component.ts");
/* harmony import */ var _pages_blanks_uzd_tservikometria_uzd_tservikometria_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/blanks/uzd-tservikometria/uzd-tservikometria.component */ "./src/app/pages/blanks/uzd-tservikometria/uzd-tservikometria.component.ts");
/* harmony import */ var _pages_blanks_uzd_doplerometry_uzd_doplerometry_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/blanks/uzd-doplerometry/uzd-doplerometry.component */ "./src/app/pages/blanks/uzd-doplerometry/uzd-doplerometry.component.ts");
/* harmony import */ var _pages_blanks_uzd_two_three_uz_uzd_two_three_uz_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/blanks/uzd-two-three-uz/uzd-two-three-uz.component */ "./src/app/pages/blanks/uzd-two-three-uz/uzd-two-three-uz.component.ts");
/* harmony import */ var _pages_blanks_uzd_protocol_two_uz_uzd_protocol_two_uz_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/blanks/uzd-protocol-two-uz/uzd-protocol-two-uz.component */ "./src/app/pages/blanks/uzd-protocol-two-uz/uzd-protocol-two-uz.component.ts");
/* harmony import */ var _pages_blanks_uzd_protocol_one_uz_uzd_protocol_one_uz_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/blanks/uzd-protocol-one-uz/uzd-protocol-one-uz.component */ "./src/app/pages/blanks/uzd-protocol-one-uz/uzd-protocol-one-uz.component.ts");




































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"],
        _shared_services_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"],
        _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_14__["PrintDataService"],
        _shared_services_router_extention_service__WEBPACK_IMPORTED_MODULE_25__["RouterExtentionService"]
    ], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
        _layout_blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_8__["BlankLayoutComponent"],
        _shared_components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__["DoctorsComponent"],
        _shared_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"],
        _shared_components_blank_base_blank_base_component__WEBPACK_IMPORTED_MODULE_12__["BlankBaseComponent"],
        _pages_blanks_uzd_organiv_malogo_tazu_uzd_organiv_malogo_tazu_component__WEBPACK_IMPORTED_MODULE_15__["UzdOrganivMalogoTazuComponent"],
        _shared_components_blank_actions_blank_actions_component__WEBPACK_IMPORTED_MODULE_17__["BlankActionsComponent"],
        _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_18__["LogoComponent"],
        _shared_components_device_description_device_description_component__WEBPACK_IMPORTED_MODULE_19__["DeviceDescriptionComponent"],
        _shared_components_print_title_print_title_component__WEBPACK_IMPORTED_MODULE_20__["PrintTitleComponent"],
        _shared_components_print_actions_print_actions_component__WEBPACK_IMPORTED_MODULE_21__["PrintActionsComponent"],
        _layout_print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_22__["PrintLayoutComponent"],
        _shared_components_print_base_print_base_component__WEBPACK_IMPORTED_MODULE_23__["PrintBaseComponent"],
        _pages_print_simple_blank_simple_blank_component__WEBPACK_IMPORTED_MODULE_24__["SimpleBlankComponent"],
        _pages_blanks_uzd_pregnancy_uzd_pregnancy_component__WEBPACK_IMPORTED_MODULE_27__["UzdPregnancyComponent"],
        _pages_blanks_uzd_molochnuh_zaloz_uzd_molochnuh_zaloz_component__WEBPACK_IMPORTED_MODULE_28__["UzdMolochnuhZalozComponent"],
        _pages_blanks_uzd_protocol_uzd_protocol_component__WEBPACK_IMPORTED_MODULE_29__["UzdProtocolComponent"],
        _pages_blanks_uzd_tservikometria_uzd_tservikometria_component__WEBPACK_IMPORTED_MODULE_30__["UzdTservikometriaComponent"],
        _pages_blanks_uzd_doplerometry_uzd_doplerometry_component__WEBPACK_IMPORTED_MODULE_31__["UzdDoplerometryComponent"],
        _pages_blanks_uzd_two_three_uz_uzd_two_three_uz_component__WEBPACK_IMPORTED_MODULE_32__["UzdTwoThreeUzComponent"],
        _pages_blanks_uzd_protocol_two_uz_uzd_protocol_two_uz_component__WEBPACK_IMPORTED_MODULE_33__["UzdProtocolTwoUzComponent"],
        _pages_blanks_uzd_protocol_one_uz_uzd_protocol_one_uz_component__WEBPACK_IMPORTED_MODULE_34__["UzdProtocolOneUzComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouterModule"]], exports: [_shared_components_blank_base_blank_base_component__WEBPACK_IMPORTED_MODULE_12__["BlankBaseComponent"],
        _shared_components_print_base_print_base_component__WEBPACK_IMPORTED_MODULE_23__["PrintBaseComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                    _layout_blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_8__["BlankLayoutComponent"],
                    _shared_components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__["DoctorsComponent"],
                    _shared_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"],
                    _shared_components_blank_base_blank_base_component__WEBPACK_IMPORTED_MODULE_12__["BlankBaseComponent"],
                    _pages_blanks_uzd_organiv_malogo_tazu_uzd_organiv_malogo_tazu_component__WEBPACK_IMPORTED_MODULE_15__["UzdOrganivMalogoTazuComponent"],
                    _shared_components_blank_actions_blank_actions_component__WEBPACK_IMPORTED_MODULE_17__["BlankActionsComponent"],
                    _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_18__["LogoComponent"],
                    _shared_components_device_description_device_description_component__WEBPACK_IMPORTED_MODULE_19__["DeviceDescriptionComponent"],
                    _shared_components_print_title_print_title_component__WEBPACK_IMPORTED_MODULE_20__["PrintTitleComponent"],
                    _shared_components_print_actions_print_actions_component__WEBPACK_IMPORTED_MODULE_21__["PrintActionsComponent"],
                    _layout_print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_22__["PrintLayoutComponent"],
                    _shared_components_print_base_print_base_component__WEBPACK_IMPORTED_MODULE_23__["PrintBaseComponent"],
                    _pages_print_simple_blank_simple_blank_component__WEBPACK_IMPORTED_MODULE_24__["SimpleBlankComponent"],
                    _pages_blanks_uzd_pregnancy_uzd_pregnancy_component__WEBPACK_IMPORTED_MODULE_27__["UzdPregnancyComponent"],
                    _pages_blanks_uzd_molochnuh_zaloz_uzd_molochnuh_zaloz_component__WEBPACK_IMPORTED_MODULE_28__["UzdMolochnuhZalozComponent"],
                    _pages_blanks_uzd_protocol_uzd_protocol_component__WEBPACK_IMPORTED_MODULE_29__["UzdProtocolComponent"],
                    _pages_blanks_uzd_tservikometria_uzd_tservikometria_component__WEBPACK_IMPORTED_MODULE_30__["UzdTservikometriaComponent"],
                    _pages_blanks_uzd_doplerometry_uzd_doplerometry_component__WEBPACK_IMPORTED_MODULE_31__["UzdDoplerometryComponent"],
                    _pages_blanks_uzd_two_three_uz_uzd_two_three_uz_component__WEBPACK_IMPORTED_MODULE_32__["UzdTwoThreeUzComponent"],
                    _pages_blanks_uzd_protocol_two_uz_uzd_protocol_two_uz_component__WEBPACK_IMPORTED_MODULE_33__["UzdProtocolTwoUzComponent"],
                    _pages_blanks_uzd_protocol_one_uz_uzd_protocol_one_uz_component__WEBPACK_IMPORTED_MODULE_34__["UzdProtocolOneUzComponent"],
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouterModule"]
                ],
                exports: [
                    _shared_components_blank_base_blank_base_component__WEBPACK_IMPORTED_MODULE_12__["BlankBaseComponent"],
                    _shared_components_print_base_print_base_component__WEBPACK_IMPORTED_MODULE_23__["PrintBaseComponent"]
                ],
                providers: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"],
                    _shared_services_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"],
                    _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_14__["PrintDataService"],
                    _shared_services_router_extention_service__WEBPACK_IMPORTED_MODULE_25__["RouterExtentionService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/blank-layout/blank-layout.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/blank-layout/blank-layout.component.ts ***!
  \***************************************************************/
/*! exports provided: BlankLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankLayoutComponent", function() { return BlankLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class BlankLayoutComponent {
    constructor() {
    }
    ngOnInit() {
        // Make sure that design mode is off
        document.designMode = 'off';
    }
}
BlankLayoutComponent.ɵfac = function BlankLayoutComponent_Factory(t) { return new (t || BlankLayoutComponent)(); };
BlankLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlankLayoutComponent, selectors: [["app-blank-layout"]], decls: 5, vars: 0, consts: [[1, "main-container"], [1, "content-container"], [1, "content-area"]], template: function BlankLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ibGFuay1sYXlvdXQvYmxhbmstbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blank-layout',
                templateUrl: './blank-layout.component.html',
                styleUrls: ['./blank-layout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function HeaderComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r1.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r1.title, " ");
} }
class HeaderComponent {
    constructor() {
        this.links = [
            {
                route: '/blank/uzd-organiv-malogo-tazu',
                title: 'УЗД органів малого тазу'
            },
            {
                route: '/blank/uzd-pregnancy',
                title: 'УЗД вагітності'
            },
            {
                route: '/blank/uzd-molochnuh-zaloz',
                title: 'УЗД молочних залоз'
            },
            {
                route: '/blank/uzd-protocol',
                title: 'УЗД протокол'
            },
            {
                route: '/blank/uzd-tservikometria',
                title: 'Цервікометрія'
            },
            {
                route: '/blank/uzd-doplerometry',
                title: 'Доплерометрія'
            },
            {
                route: '/blank/uzd-two-three-uz',
                title: 'II-III УЗ'
            },
            {
                route: '/blank/uzd-protocol-two-uz',
                title: 'II УЗ (18-21)'
            },
            {
                route: '/blank/uzd-protocol-one-uz',
                title: 'I УЗ (11+1-13+6)'
            }
        ];
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 11, vars: 2, consts: [[1, "header-6"], [1, "branding"], ["routerLink", "/", 1, "nav-link"], ["shape", "dna"], [1, "title"], [1, "header-nav"], ["routerLinkActive", "active", "class", "nav-link", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "header-actions"], ["aria-label", "settings", 1, "nav-link", "nav-icon", 3, "routerLink"], ["shape", "cog"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "nav-text"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "clr-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " GALDOC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_a_7_Template, 3, 2, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "clr-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "settings");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".header-nav[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nhc2hhL0RldmVsb3BtZW50L2dhbGRvYy9zcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbmF2IHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5hIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIiwiLmhlYWRlci1uYXYge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layout/print-layout/print-layout.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/print-layout/print-layout.component.ts ***!
  \***************************************************************/
/*! exports provided: PrintLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintLayoutComponent", function() { return PrintLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_print_base_print_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/print-base/print-base.component */ "./src/app/shared/components/print-base/print-base.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/print-data.service */ "./src/app/shared/services/print-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/logo/logo.component */ "./src/app/shared/components/logo/logo.component.ts");
/* harmony import */ var _shared_components_print_title_print_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/print-title/print-title.component */ "./src/app/shared/components/print-title/print-title.component.ts");
/* harmony import */ var _shared_components_device_description_device_description_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/device-description/device-description.component */ "./src/app/shared/components/device-description/device-description.component.ts");
/* harmony import */ var _pages_print_simple_blank_simple_blank_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/print/simple-blank/simple-blank.component */ "./src/app/pages/print/simple-blank/simple-blank.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_print_actions_print_actions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/print-actions/print-actions.component */ "./src/app/shared/components/print-actions/print-actions.component.ts");













function PrintLayoutComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-print-actions", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("print", function PrintLayoutComponent_div_7_Template_app_print_actions_print_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.printCurrentBlank(); })("backAndAdd", function PrintLayoutComponent_div_7_Template_app_print_actions_backAndAdd_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.navigateBackAndAdd(); })("backAndEdit", function PrintLayoutComponent_div_7_Template_app_print_actions_backAndEdit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.navigateBackAndEdit(); })("optionsUpdate", function PrintLayoutComponent_div_7_Template_app_print_actions_optionsUpdate_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onOptionsUpdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r9.options);
} }
class PrintLayoutComponent extends _shared_components_print_base_print_base_component__WEBPACK_IMPORTED_MODULE_1__["PrintBaseComponent"] {
    constructor(fb, date, data, router) {
        super(fb, date, data, router);
        super.ngOnInit();
    }
    ngOnInit() {
    }
}
PrintLayoutComponent.ɵfac = function PrintLayoutComponent_Factory(t) { return new (t || PrintLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_4__["PrintDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
PrintLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintLayoutComponent, selectors: [["app-print-layout"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 10, consts: [["id", "print-container", 1, "print-layout"], [1, "print-title"], [3, "logoSize"], [3, "title", "titleSize"], [3, "deviceSize"], [1, "print-body"], [3, "fontSize", "lineHeight", "borderValue", "strongTitles", "showEmptyRows"], ["class", "print-actions", 4, "ngIf"], [1, "print-actions"], [3, "options", "print", "backAndAdd", "backAndEdit", "optionsUpdate"]], template: function PrintLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-logo", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-print-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-device-description", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-simple-blank", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PrintLayoutComponent_div_7_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("logoSize", ctx.options.logoSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.options.title)("titleSize", ctx.options.titleSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("deviceSize", ctx.options.deviceSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fontSize", ctx.options.fontSize)("lineHeight", ctx.options.lineHeight)("borderValue", ctx.options.borderInValues)("strongTitles", ctx.options.strongTitles)("showEmptyRows", ctx.options.showEmptyRows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showActions);
    } }, directives: [_shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"], _shared_components_print_title_print_title_component__WEBPACK_IMPORTED_MODULE_7__["PrintTitleComponent"], _shared_components_device_description_device_description_component__WEBPACK_IMPORTED_MODULE_8__["DeviceDescriptionComponent"], _pages_print_simple_blank_simple_blank_component__WEBPACK_IMPORTED_MODULE_9__["SimpleBlankComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _shared_components_print_actions_print_actions_component__WEBPACK_IMPORTED_MODULE_11__["PrintActionsComponent"]], styles: [".print-layout[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.print-layout[_ngcontent-%COMP%]   .print-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nhc2hhL0RldmVsb3BtZW50L2dhbGRvYy9zcmMvYXBwL2xheW91dC9wcmludC1sYXlvdXQvcHJpbnQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcHJpbnQtbGF5b3V0L3ByaW50LWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7QURBRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcHJpbnQtbGF5b3V0L3ByaW50LWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmludC1sYXlvdXQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICAucHJpbnQtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuIiwiLnByaW50LWxheW91dCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ucHJpbnQtbGF5b3V0IC5wcmludC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-print-layout',
                templateUrl: './print-layout.component.html',
                styleUrls: ['./print-layout.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"] }, { type: _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_4__["PrintDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/blanks/uzd-doplerometry/uzd-doplerometry.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/blanks/uzd-doplerometry/uzd-doplerometry.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UzdDoplerometryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UzdDoplerometryComponent", function() { return UzdDoplerometryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_blank_base_blank_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/blank-base/blank-base.component */ "./src/app/shared/components/blank-base/blank-base.component.ts");
/* harmony import */ var _shared_structures_uzd_doplerometry_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/structures/uzd-doplerometry.structure */ "./src/app/shared/structures/uzd-doplerometry.structure.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/print-data.service */ "./src/app/shared/services/print-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _shared_components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/doctors/doctors.component */ "./src/app/shared/components/doctors/doctors.component.ts");
/* harmony import */ var _shared_components_blank_actions_blank_actions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/blank-actions/blank-actions.component */ "./src/app/shared/components/blank-actions/blank-actions.component.ts");












const _c0 = function (a0) { return { "font-size.px": a0 }; };
class UzdDoplerometryComponent extends _shared_components_blank_base_blank_base_component__WEBPACK_IMPORTED_MODULE_1__["BlankBaseComponent"] {
    constructor(fb, date, data, router) {
        super(fb, date, data);
        this.router = router;
        super.ngOnInit();
    }
    ngOnInit() {
        this.options = {
            title: `ПП \"Гал - Діагност \"
ДОПЛЕРОМЕТРІЯ`,
            fontSize: 18,
            showDoctors: true,
            borderInValues: true,
            strongTitles: true,
            showEmptyRows: true
        };
        this.form = this.fb.group({
            dp_date: [this.currentDate],
            dp_pib: [],
            dp_polozennya: [],
            dp_peredlezannya: ['головне'],
            dp_sertse: ['ритмічне'],
            dp_tss: [' уд/хв.'],
            dp_moves: ['активні'],
            dp_art_sd: [''],
            dp_art_ir: [''],
            dp_art_pi: [''],
            dp_art_krovo: ['нормальний'],
            dp_mat_sd: [''],
            dp_mat_ir: [''],
            dp_mat_pi: [''],
            dp_mat_krovo: ['нормальний'],
            dp_liva_ir: [''],
            dp_liva_pi: [''],
            dp_liva_krovo: ['нормальний'],
            dp_prava_ir: [''],
            dp_prava_pi: [''],
            dp_prava_krovo: ['нормальний'],
            doctors: ['']
        });
        this.data.blankData.subscribe(options => {
            if (options && options.data && Object.keys(options.data).length !== 0) {
                this.form.patchValue(options.data);
            }
        });
    }
    printCurrentPage() {
        if (this.form.valid) {
            const value = this.form.value;
            this.data.updateData(Object.assign(Object.assign({}, this.options), { data: value, structure: _shared_structures_uzd_doplerometry_structure__WEBPACK_IMPORTED_MODULE_2__["UzdDoplerometryStructure"], route: 'blank/uzd-doplerometry' }));
            this.router.navigateByUrl('/print');
        }
    }
}
UzdDoplerometryComponent.ɵfac = function UzdDoplerometryComponent_Factory(t) { return new (t || UzdDoplerometryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__["PrintDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
UzdDoplerometryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UzdDoplerometryComponent, selectors: [["app-uzd-doplerometry"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 195, vars: 131, consts: [["id", "uzd-doplerometry", 1, "blank-layout", 3, "ngStyle"], [1, "title"], [3, "formGroup"], [1, "clr-row"], [1, "clr-col-sm-12"], ["clrInput", "", "formControlName", "dp_date", 3, "ngStyle"], [1, "clr-col-sm-12", "full-width-input"], [3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "dp_pib", 3, "ngStyle"], [1, "clr-row", "button-row"], [1, "clr-col-sm-12", "button-left"], [1, "btn", "btn-primary", 3, "click"], ["clrTextarea", "", "name", "description", "formControlName", "dp_polozennya", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "dp_peredlezannya", 3, "ngStyle"], ["value", "\u0433\u043E\u043B\u043E\u0432\u043D\u0435"], ["value", "\u0441\u0456\u0434\u043D\u0438\u0447\u043D\u0435"], ["clrSelect", "", "name", "options", "formControlName", "dp_sertse", 3, "ngStyle"], ["value", "\u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435"], ["value", "\u0430\u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "dp_tss", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "dp_moves", 3, "ngStyle"], ["value", "\u0430\u043A\u0442\u0438\u0432\u043D\u0456"], ["value", "\u0441\u043B\u0430\u0431\u043A\u0456"], [1, "text-center-container", "text-left", "bold-text"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "dp_art_sd", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "dp_art_ir", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "dp_art_pi", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "dp_art_krovo", 3, "ngStyle"], ["value", "\u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0438\u0439"], ["value", "\u0441\u043F\u043E\u0432\u0456\u043B\u044C\u043D\u0435\u043D\u0438\u0439"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "dp_mat_sd", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "dp_mat_ir", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "dp_mat_pi", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "dp_mat_krovo", 3, "ngStyle"], [1, "text-left", "bold-text"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "dp_liva_ir", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "dp_liva_pi", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "dp_liva_krovo", 3, "ngStyle"], [1, "text-small-padding", "text-left", "bold-text"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "dp_prava_ir", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "dp_prava_pi", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "dp_prava_krovo", 3, "ngStyle"], [3, "parentForm", "fontSize"], [1, "print-block"], [3, "font", "print", "fontSize"]], template: function UzdDoplerometryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041F.\u0406.\u0411:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdDoplerometryComponent_Template_button_click_15_listener() { return ctx.copyDataToTextArea(" \u043F\u043E\u0437\u0434\u043E\u0432\u0436\u043D\u0454 ", "dp_polozennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u043F\u043E\u0437\u0434\u043E\u0432\u0436\u043D\u0454 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdDoplerometryComponent_Template_button_click_17_listener() { return ctx.copyDataToTextArea(" \u043F\u043E\u043F\u0435\u0440\u0435\u0447\u043D\u0435 ", "dp_polozennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u043F\u043E\u043F\u0435\u0440\u0435\u0447\u043D\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdDoplerometryComponent_Template_button_click_19_listener() { return ctx.copyDataToTextArea(" \u043A\u043E\u0441\u0435 ", "dp_polozennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u043A\u043E\u0441\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdDoplerometryComponent_Template_button_click_21_listener() { return ctx.copyDataToTextArea(" \u043D\u0435\u0441\u0442\u0456\u0439\u043A\u0435 ", "dp_polozennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u043D\u0435\u0441\u0442\u0456\u0439\u043A\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F \u043F\u043B\u043E\u0434\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u041F\u0435\u0440\u0435\u0434\u043B\u0435\u0436\u0430\u043D\u043D\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0433\u043E\u043B\u043E\u0432\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u0441\u0456\u0434\u043D\u0438\u0447\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u0421\u0435\u0440\u0446\u0435\u0431\u0438\u0442\u0442\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u0430\u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u0427\u0421\u0421:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u0420\u0443\u0445\u0438 \u043F\u043B\u043E\u0434\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u0430\u043A\u0442\u0438\u0432\u043D\u0456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u0441\u043B\u0430\u0431\u043A\u0456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u0414\u043E\u043F\u043B\u0435\u0440\u043E\u043C\u0435\u0442\u0440\u0456\u044F \u0430\u0440\u0442\u0435\u0440\u0456\u0457 \u043F\u0443\u043F\u043E\u0432\u0438\u043D\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "s/d:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "IR:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Pi:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\u041A\u0440\u043E\u0432\u043E\u043F\u043B\u0438\u043D:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\u0441\u043F\u043E\u0432\u0456\u043B\u044C\u043D\u0435\u043D\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\u0414\u043E\u043F\u043B\u0435\u0440\u043E\u043C\u0435\u0442\u0440\u0456\u044F \u0441\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0457 \u043C\u043E\u0437\u043A\u043E\u0432\u043E\u0457 \u0430\u0440\u0442\u0435\u0440\u0456\u0457");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "s/d:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "IR:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Pi:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\u041A\u0440\u043E\u0432\u043E\u043F\u043B\u0438\u043D:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "\u0441\u043F\u043E\u0432\u0456\u043B\u044C\u043D\u0435\u043D\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\u0414\u043E\u043F\u043B\u0435\u0440\u043E\u043C\u0435\u0442\u0440\u0456\u044F \u043C\u0430\u0442\u043A\u043E\u0432\u0438\u0445 \u0430\u0442\u0440\u0435\u0442\u0456\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "\u041B\u0456\u0432\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "IR:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Pi:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "\u041A\u0440\u043E\u0432\u043E\u043F\u043B\u0438\u043D:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "select", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "\u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "\u0441\u043F\u043E\u0432\u0456\u043B\u044C\u043D\u0435\u043D\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "\u041F\u0440\u0430\u0432\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "IR:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Pi:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "\u041A\u0440\u043E\u0432\u043E\u043F\u043B\u0438\u043D:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "select", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "\u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "\u0441\u043F\u043E\u0432\u0456\u043B\u044C\u043D\u0435\u043D\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "app-doctors", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "app-blank-actions", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("print", function UzdDoplerometryComponent_Template_app_blank_actions_print_194_listener() { return ctx.printCurrentPage(); })("fontSize", function UzdDoplerometryComponent_Template_app_blank_actions_fontSize_194_listener($event) { return ctx.updateFontSize($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](47, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.options.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](49, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](51, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](53, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](55, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](57, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](59, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](61, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](63, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](65, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](67, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](69, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](71, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](73, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](75, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](77, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](79, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](81, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](83, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](85, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](87, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](89, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](91, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](93, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](95, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](97, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](99, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](101, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](103, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](105, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](107, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](109, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](111, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](113, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](115, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](117, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](119, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](121, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](123, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](125, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](127, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](129, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentForm", ctx.form)("fontSize", ctx.options.fontSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("font", ctx.options.fontSize);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrLabel"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrTextareaContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrTextarea"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrSelectContainer"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _shared_components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__["DoctorsComponent"], _shared_components_blank_actions_blank_actions_component__WEBPACK_IMPORTED_MODULE_10__["BlankActionsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JsYW5rcy91emQtZG9wbGVyb21ldHJ5L3V6ZC1kb3BsZXJvbWV0cnkuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UzdDoplerometryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-uzd-doplerometry',
                templateUrl: './uzd-doplerometry.component.html',
                styleUrls: ['./uzd-doplerometry.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"] }, { type: _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__["PrintDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/blanks/uzd-molochnuh-zaloz/uzd-molochnuh-zaloz.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/blanks/uzd-molochnuh-zaloz/uzd-molochnuh-zaloz.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UzdMolochnuhZalozComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UzdMolochnuhZalozComponent", function() { return UzdMolochnuhZalozComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_blank_base_blank_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/blank-base/blank-base.component */ "./src/app/shared/components/blank-base/blank-base.component.ts");
/* harmony import */ var _shared_structures_uzd_molochnuh_zaloz_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/structures/uzd-molochnuh-zaloz.structure */ "./src/app/shared/structures/uzd-molochnuh-zaloz.structure.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/print-data.service */ "./src/app/shared/services/print-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _shared_components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/doctors/doctors.component */ "./src/app/shared/components/doctors/doctors.component.ts");
/* harmony import */ var _shared_components_blank_actions_blank_actions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/blank-actions/blank-actions.component */ "./src/app/shared/components/blank-actions/blank-actions.component.ts");












const _c0 = function (a0) { return { "font-size.px": a0 }; };
class UzdMolochnuhZalozComponent extends _shared_components_blank_base_blank_base_component__WEBPACK_IMPORTED_MODULE_1__["BlankBaseComponent"] {
    constructor(fb, date, data, router) {
        super(fb, date, data);
        this.router = router;
        this.defaults = {
            type: 'трансабдомінально',
            polozennya: 'anteflexio',
            shuyka: 'мм',
            vichko: 'замкнуте',
            yaye_exo: 'б/о'
        };
        super.ngOnInit();
    }
    ngOnInit() {
        this.options = {
            title: `ПП \"Гал - Діагност \"
      ультразвукове дослідження
молочних залоз`,
            fontSize: 18,
            showDoctors: true,
            borderInValues: true,
            strongTitles: true,
            showEmptyRows: true
        };
        this.form = this.fb.group({
            mol_date: [this.currentDate],
            mol_pib: [''],
            mol_menstrual_day: [''],
            mol_right_perevazae: [''],
            mol_pvzk_aneho: [''],
            mol_pvzk_gipo: [''],
            mol_pvzk_getero: [''],
            mol_pvvk_aneho: [''],
            mol_pvvk_gipo: [''],
            mol_pvvk_getero: [''],
            mol_pnzk_aneho: [''],
            mol_pnzk_gipo: [''],
            mol_pnzk_getero: [''],
            mol_pnvk_aneho: [''],
            mol_pnvk_gipo: [''],
            mol_pnvk_getero: [''],
            mol_plds_aneho: [''],
            mol_plds_gipo: [''],
            mol_plds_getero: [''],
            mol_plds: ['б/о'],
            mol_plmh: ['не поширені'],
            mol_prlv: ['не візуалізуються'],
            mol_left_perevazae: [''],
            mol_lvzk_aneho: [''],
            mol_lvzk_gipo: [''],
            mol_lvzk_getero: [''],
            mol_lvvk_aneho: [''],
            mol_lvvk_gipo: [''],
            mol_lvvk_getero: [''],
            mol_lnzk_aneho: [''],
            mol_lnzk_gipo: [''],
            mol_lnzk_getero: [''],
            mol_lnvk_aneho: [''],
            mol_lnvk_gipo: [''],
            mol_lnvk_getero: [''],
            mol_llds: ['б/о'],
            mol_llmh: ['не поширені'],
            mol_lrlv: ['не візуалізуються'],
            mol_zakluchennya: [''],
            mol_recomendovano: [''],
            doctors: ['']
        });
        this.data.blankData.subscribe(options => {
            if (options && options.data && Object.keys(options.data).length !== 0) {
                this.form.patchValue(options.data);
            }
        });
    }
    printCurrentPage() {
        if (this.form.valid) {
            const value = this.form.value;
            this.data.updateData(Object.assign(Object.assign({}, this.options), { data: value, structure: _shared_structures_uzd_molochnuh_zaloz_structure__WEBPACK_IMPORTED_MODULE_2__["UzdOrganivMalogoTazuStructure"], route: 'blank/uzd-molochnuh-zaloz' }));
            this.router.navigateByUrl('/print');
        }
    }
}
UzdMolochnuhZalozComponent.ɵfac = function UzdMolochnuhZalozComponent_Factory(t) { return new (t || UzdMolochnuhZalozComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__["PrintDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
UzdMolochnuhZalozComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UzdMolochnuhZalozComponent, selectors: [["app-uzd-molochnuh-zaloz"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 324, vars: 227, consts: [["id", "uzd-molochnuh-zaloz", 1, "blank-layout", 3, "ngStyle"], [1, "title"], [3, "formGroup"], [1, "clr-row"], [1, "clr-col-sm-12", "clr-col-md-6"], ["clrInput", "", "formControlName", "mol_date", 3, "ngStyle"], [1, "clr-col-sm-12", "full-width-input"], [3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_pib", 3, "ngStyle"], ["placeholder", "", "clrInput", "", "formControlName", "mol_menstrual_day", 3, "ngStyle"], [1, "clr-col-sm-6"], [1, "text-center-container", "bold-text", "text-center"], [1, "clr-row", "button-row"], [1, "clr-col-sm-12", "button-left"], [1, "btn", "btn-primary", 3, "click"], ["clrTextarea", "", "name", "description", "formControlName", "mol_right_perevazae", 3, "ngStyle"], [1, "text-left-container", "bold-text"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_pvzk_aneho", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_pvzk_gipo", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_pvzk_getero", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_pvvk_aneho", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_pvvk_gipo", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_pvvk_getero", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_pnzk_aneho", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_pnzk_gipo", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_pnzk_getero", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_pnvk_aneho", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_pnvk_gipo", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_pnvk_getero", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_plds", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "mol_plmh", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "mol_prlv", 3, "ngStyle"], [1, "text-center-container", "text-center", "bold-text"], ["clrTextarea", "", "name", "description", "formControlName", "mol_left_perevazae", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_lvzk_aneho", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_lvzk_gipo", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_lvzk_getero", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_lvvk_aneho", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_lvvk_gipo", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_lvvk_getero", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_lnzk_aneho", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_lnzk_gipo", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_lnzk_getero", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_lnvk_aneho", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_lnvk_gipo", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_lnvk_getero", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "mol_llds", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "mol_llmh", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "mol_lrlv", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "mol_zakluchennya", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "mol_recomendovano", 3, "ngStyle"], [3, "parentForm", "fontSize"], [1, "print-block"], [3, "font", "print", "fontSize"]], template: function UzdMolochnuhZalozComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041F.\u0406.\u0411:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0414\u0435\u043D\u044C \u043C\u0435\u043D\u0441\u0442\u0440\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0446\u0438\u043A\u043B\u0443:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041F\u0440\u0430\u0432\u0430 \u043C\u043E\u043B\u043E\u0447\u043D\u0430 \u0437\u0430\u043B\u043E\u0437\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_26_listener() { return ctx.copyDataToTextArea(" \u0437\u0430\u043B\u043E\u0437\u0438\u0441\u0442\u0430 \u0442\u0430\u043A\u0430\u043D\u0438\u043D\u0430 ", "mol_right_perevazae"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \u0437\u0430\u043B\u043E\u0437\u0438\u0441\u0442\u0430 \u0442\u0430\u043A\u0430\u043D\u0438\u043D\u0430; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_28_listener() { return ctx.copyDataToTextArea(" \u0436\u0438\u0440\u043E\u0432\u0430 \u0442\u043A\u0430\u043D\u0438\u043D\u0430 ", "mol_right_perevazae"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u0436\u0438\u0440\u043E\u0432\u0430 \u0442\u043A\u0430\u043D\u0438\u043D\u0430; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_30_listener() { return ctx.copyDataToTextArea(" \u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0440\u0456\u0432\u043D\u0435 \u0441\u043F\u0456\u0432\u0432\u0456\u0434\u043D\u043E\u0448\u0435\u043D\u043D\u044F \u0437\u0430\u043B\u043E\u0437\u0438\u0441\u0442\u043E\u0457 \u0442\u0430 \u0436\u0438\u0440\u043E\u0432\u043E\u0457 \u0442\u043A\u0430\u043D\u0438\u043D\u0438 ", "mol_right_perevazae"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0440\u0456\u0432\u043D\u0435 \u0441\u043F\u0456\u0432\u0432\u0456\u0434\u043D\u043E\u0448\u0435\u043D\u043D\u044F \u0437\u0430\u043B\u043E\u0437\u0438\u0441\u0442\u043E\u0457 \u0442\u0430 \u0436\u0438\u0440\u043E\u0432\u043E\u0457 \u0442\u043A\u0430\u043D\u0438\u043D\u0438; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_32_listener() { return ctx.copyDataToTextArea(" \u043C\u0456\u0436\u0434\u043E\u043B\u0435\u0432\u0438\u0439 \u0444\u0456\u0431\u0440\u043E\u0437: \u0432\u0438\u0440\u0430\u0436\u0435\u043D\u0438\u0439 ", "mol_right_perevazae"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u043C\u0456\u0436\u0434\u043E\u043B\u0435\u0432\u0438\u0439 \u0444\u0456\u0431\u0440\u043E\u0437: \u0432\u0438\u0440\u0430\u0436\u0435\u043D\u0438\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_34_listener() { return ctx.copyDataToTextArea(" \u043C\u0456\u0436\u0434\u043E\u043B\u0435\u0432\u0438\u0439 \u0444\u0456\u0431\u0440\u043E\u0437: \u043D\u0435\u0432\u0438\u0440\u0430\u0436\u0435\u043D\u0438\u0439 ", "mol_right_perevazae"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u043C\u0456\u0436\u0434\u043E\u043B\u0435\u0432\u0438\u0439 \u0444\u0456\u0431\u0440\u043E\u0437: \u043D\u0435\u0432\u0438\u0440\u0430\u0436\u0435\u043D\u0438\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_36_listener() { return ctx.copyDataToTextArea(" \u043C\u0456\u0436\u0434\u043E\u043B\u0435\u0432\u0438\u0439 \u0444\u0456\u0431\u0440\u043E\u0437: \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0439 ", "mol_right_perevazae"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u043C\u0456\u0436\u0434\u043E\u043B\u0435\u0432\u0438\u0439 \u0444\u0456\u0431\u0440\u043E\u0437: \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u041F\u0435\u0440\u0435\u0432\u0430\u0436\u0430\u0454");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u0412\u0435\u0440\u0445\u043D\u0456\u0439 \u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u0439 \u043A\u0432\u0430\u0434\u0440\u0430\u043D\u0442:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u0430) \u0430\u043D\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0456 \u0432\u043A\u043B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u0431) \u0433\u0456\u043F\u043E\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0456.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u0432) \u0433\u0435\u0442\u0435\u0440\u043E\u0433\u0435\u043D\u043D\u0456 \u0432\u043A\u043B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u0412\u0435\u0440\u0445\u043D\u0456\u0439 \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456\u0439 \u043A\u0432\u0430\u0434\u0440\u0430\u043D\u0442:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u0430) \u0430\u043D\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0456 \u0432\u043A\u043B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u0431) \u0433\u0456\u043F\u043E\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0456.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u0432) \u0433\u0435\u0442\u0435\u0440\u043E\u0433\u0435\u043D\u043D\u0456 \u0432\u043A\u043B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\u041D\u0438\u0436\u043D\u0456\u0439 \u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u0439 \u043A\u0432\u0430\u0434\u0440\u0430\u043D\u0442:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u0430) \u0430\u043D\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0456 \u0432\u043A\u043B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\u0431) \u0433\u0456\u043F\u043E\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0456.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u0432) \u0433\u0435\u0442\u0435\u0440\u043E\u0433\u0435\u043D\u043D\u0456 \u0432\u043A\u043B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\u041D\u0438\u0436\u043D\u0456\u0439 \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456\u0439 \u043A\u0432\u0430\u0434\u0440\u0430\u043D\u0442:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\u0430) \u0430\u043D\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0456 \u0432\u043A\u043B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\u0431) \u0433\u0456\u043F\u043E\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0456.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\u0432) \u0433\u0435\u0442\u0435\u0440\u043E\u0433\u0435\u043D\u043D\u0456 \u0432\u043A\u043B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "\u0414\u0456\u043B\u044F\u043D\u043A\u0430 \u0441\u043E\u0441\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_135_listener() { return ctx.copyDataToTextArea("\u043F\u043E\u0448\u0438\u0440\u0435\u043D\u0456 \u0434\u043E  \u043C\u043C.", "mol_plmh"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " \u043F\u043E\u0448\u0438\u0440\u0435\u043D\u0456 \u0434\u043E \u043C\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_137_listener() { return ctx.copyDataToTextArea("\u043D\u0435 \u043F\u043E\u0448\u0438\u0440\u0435\u043D\u0456", "mol_plmh"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " \u043D\u0435 \u043F\u043E\u0448\u0438\u0440\u0435\u043D\u0456 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "\u041C\u043E\u043B\u043E\u0447\u043D\u0456 \u0445\u043E\u0434\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "textarea", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_146_listener() { return ctx.copyDataToTextArea("\u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u044E\u0442\u044C\u0441\u044F \u0434\u043E  \u043C\u043C.", "mol_prlv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u044E\u0442\u044C\u0441\u044F \u0434\u043E \u043C\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_148_listener() { return ctx.copyDataToTextArea("\u043D\u0435 \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u044E\u0442\u044C\u0441\u044F", "mol_prlv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " \u043D\u0435 \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u044E\u0442\u044C\u0441\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "\u0420\u0435\u0433\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u043B\u0456\u043C\u0444\u043E\u0432\u0443\u0437\u043B\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "\u041B\u0456\u0432\u0430 \u043C\u043E\u043B\u043E\u0447\u043D\u0430 \u0437\u0430\u043B\u043E\u0437\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_161_listener() { return ctx.copyDataToTextArea(" \u0437\u0430\u043B\u043E\u0437\u0438\u0441\u0442\u0430 \u0442\u0430\u043A\u0430\u043D\u0438\u043D\u0430 ", "mol_left_perevazae"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " \u0437\u0430\u043B\u043E\u0437\u0438\u0441\u0442\u0430 \u0442\u0430\u043A\u0430\u043D\u0438\u043D\u0430; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_163_listener() { return ctx.copyDataToTextArea(" \u0436\u0438\u0440\u043E\u0432\u0430 \u0442\u043A\u0430\u043D\u0438\u043D\u0430 ", "mol_left_perevazae"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " \u0436\u0438\u0440\u043E\u0432\u0430 \u0442\u043A\u0430\u043D\u0438\u043D\u0430; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_165_listener() { return ctx.copyDataToTextArea(" \u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0440\u0456\u0432\u043D\u0435 \u0441\u043F\u0456\u0432\u0432\u0456\u0434\u043D\u043E\u0448\u0435\u043D\u043D\u044F \u0437\u0430\u043B\u043E\u0437\u0438\u0441\u0442\u043E\u0457 \u0442\u0430 \u0436\u0438\u0440\u043E\u0432\u043E\u0457 \u0442\u043A\u0430\u043D\u0438\u043D\u0438 ", "mol_left_perevazae"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " \u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0440\u0456\u0432\u043D\u0435 \u0441\u043F\u0456\u0432\u0432\u0456\u0434\u043D\u043E\u0448\u0435\u043D\u043D\u044F \u0437\u0430\u043B\u043E\u0437\u0438\u0441\u0442\u043E\u0457 \u0442\u0430 \u0436\u0438\u0440\u043E\u0432\u043E\u0457 \u0442\u043A\u0430\u043D\u0438\u043D\u0438; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_167_listener() { return ctx.copyDataToTextArea(" \u043C\u0456\u0436\u0434\u043E\u043B\u0435\u0432\u0438\u0439 \u0444\u0456\u0431\u0440\u043E\u0437: \u0432\u0438\u0440\u0430\u0436\u0435\u043D\u0438\u0439 ", "mol_left_perevazae"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " \u043C\u0456\u0436\u0434\u043E\u043B\u0435\u0432\u0438\u0439 \u0444\u0456\u0431\u0440\u043E\u0437: \u0432\u0438\u0440\u0430\u0436\u0435\u043D\u0438\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_169_listener() { return ctx.copyDataToTextArea(" \u043C\u0456\u0436\u0434\u043E\u043B\u0435\u0432\u0438\u0439 \u0444\u0456\u0431\u0440\u043E\u0437: \u043D\u0435\u0432\u0438\u0440\u0430\u0436\u0435\u043D\u0438\u0439 ", "mol_left_perevazae"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " \u043C\u0456\u0436\u0434\u043E\u043B\u0435\u0432\u0438\u0439 \u0444\u0456\u0431\u0440\u043E\u0437: \u043D\u0435\u0432\u0438\u0440\u0430\u0436\u0435\u043D\u0438\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_171_listener() { return ctx.copyDataToTextArea(" \u043C\u0456\u0436\u0434\u043E\u043B\u0435\u0432\u0438\u0439 \u0444\u0456\u0431\u0440\u043E\u0437: \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0439 ", "mol_left_perevazae"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " \u043C\u0456\u0436\u0434\u043E\u043B\u0435\u0432\u0438\u0439 \u0444\u0456\u0431\u0440\u043E\u0437: \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "\u041F\u0435\u0440\u0435\u0432\u0430\u0436\u0430\u0454");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "textarea", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "\u0412\u0435\u0440\u0445\u043D\u0456\u0439 \u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u0439 \u043A\u0432\u0430\u0434\u0440\u0430\u043D\u0442:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "\u0430) \u0430\u043D\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0456 \u0432\u043A\u043B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "\u0431) \u0433\u0456\u043F\u043E\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0456.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "\u0432) \u0433\u0435\u0442\u0435\u0440\u043E\u0433\u0435\u043D\u043D\u0456 \u0432\u043A\u043B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "\u0412\u0435\u0440\u0445\u043D\u0456\u0439 \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456\u0439 \u043A\u0432\u0430\u0434\u0440\u0430\u043D\u0442:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "\u0430) \u0430\u043D\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0456 \u0432\u043A\u043B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "\u0431) \u0433\u0456\u043F\u043E\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0456.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "\u0432) \u0433\u0435\u0442\u0435\u0440\u043E\u0433\u0435\u043D\u043D\u0456 \u0432\u043A\u043B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "\u041D\u0438\u0436\u043D\u0456\u0439 \u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u0439 \u043A\u0432\u0430\u0434\u0440\u0430\u043D\u0442:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "\u0430) \u0430\u043D\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0456 \u0432\u043A\u043B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "\u0431) \u0433\u0456\u043F\u043E\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0456.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "\u0432) \u0433\u0435\u0442\u0435\u0440\u043E\u0433\u0435\u043D\u043D\u0456 \u0432\u043A\u043B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "\u041D\u0438\u0436\u043D\u0456\u0439 \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456\u0439 \u043A\u0432\u0430\u0434\u0440\u0430\u043D\u0442:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "\u0430) \u0430\u043D\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0456 \u0432\u043A\u043B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "\u0431) \u0433\u0456\u043F\u043E\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0456.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "\u0432) \u0433\u0435\u0442\u0435\u0440\u043E\u0433\u0435\u043D\u043D\u0456 \u0432\u043A\u043B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "\u0414\u0456\u043B\u044F\u043D\u043A\u0430 \u0441\u043E\u0441\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_270_listener() { return ctx.copyDataToTextArea("\u043F\u043E\u0448\u0438\u0440\u0435\u043D\u0456 \u0434\u043E  \u043C\u043C.", "mol_llmh"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, " \u043F\u043E\u0448\u0438\u0440\u0435\u043D\u0456 \u0434\u043E \u043C\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_272_listener() { return ctx.copyDataToTextArea("\u043D\u0435 \u043F\u043E\u0448\u0438\u0440\u0435\u043D\u0456", "mol_llmh"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " \u043D\u0435 \u043F\u043E\u0448\u0438\u0440\u0435\u043D\u0456 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "\u041C\u043E\u043B\u043E\u0447\u043D\u0456 \u0445\u043E\u0434\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "textarea", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_281_listener() { return ctx.copyDataToTextArea("\u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u044E\u0442\u044C\u0441\u044F \u0434\u043E  \u043C\u043C.", "mol_lrlv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u044E\u0442\u044C\u0441\u044F \u0434\u043E \u043C\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_283_listener() { return ctx.copyDataToTextArea("\u043D\u0435 \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u044E\u0442\u044C\u0441\u044F", "mol_lrlv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " \u043D\u0435 \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u044E\u0442\u044C\u0441\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "\u0420\u0435\u0433\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u043B\u0456\u043C\u0444\u043E\u0432\u0443\u0437\u043B\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "textarea", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_292_listener() { return ctx.copyDataToTextArea(" \u0424\u0456\u0431\u0440\u043E\u0437\u043D\u043E \u043A\u0438\u0441\u0442\u043E\u0437\u043D\u0430 \u043C\u0430\u0441\u0442\u043E\u043F\u0430\u0442\u0456\u044F ", "mol_zakluchennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, " \u0424\u0456\u0431\u0440\u043E\u0437\u043D\u043E \u043A\u0438\u0441\u0442\u043E\u0437\u043D\u0430 \u043C\u0430\u0441\u0442\u043E\u043F\u0430\u0442\u0456\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_294_listener() { return ctx.copyDataToTextArea(" \u0424\u0456\u0431\u0440\u043E\u0430\u0434\u0435\u043D\u043E\u043C\u0430 ", "mol_zakluchennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, " \u0424\u0456\u0431\u0440\u043E\u0430\u0434\u0435\u043D\u043E\u043C\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_296_listener() { return ctx.copyDataToTextArea(" \u041E\u0431'\u0454\u043C\u043D\u0438\u0445 \u0443\u0442\u0432\u043E\u0440\u0456\u0432 \u043D\u0430 \u043C\u043E\u043C\u0435\u043D\u0442 \u043E\u0433\u043B\u044F\u0434\u0443 \u043D\u0435 \u0432\u0438\u044F\u0432\u043B\u0435\u043D\u043E ", "mol_zakluchennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, " \u041E\u0431'\u0454\u043C\u043D\u0438\u0445 \u0443\u0442\u0432\u043E\u0440\u0456\u0432 \u043D\u0430 \u043C\u043E\u043C\u0435\u043D\u0442 \u043E\u0433\u043B\u044F\u0434\u0443 \u043D\u0435 \u0432\u0438\u044F\u0432\u043B\u0435\u043D\u043E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_298_listener() { return ctx.copyDataToTextArea(" \u0414\u0438\u0444\u0443\u0437\u043D\u0430 \u0444\u0456\u0431\u0440\u043E\u0437\u043D\u0430 \u043C\u0430\u0441\u0442\u043E\u043F\u0430\u0442\u0456\u044F ", "mol_zakluchennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, " \u0414\u0438\u0444\u0443\u0437\u043D\u0430 \u0444\u0456\u0431\u0440\u043E\u0437\u043D\u0430 \u043C\u0430\u0441\u0442\u043E\u043F\u0430\u0442\u0456\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_300_listener() { return ctx.copyDataToTextArea(" \u041B\u0430\u043A\u0442\u043E\u0441\u0442\u0430\u0437 ", "mol_zakluchennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, " \u041B\u0430\u043A\u0442\u043E\u0441\u0442\u0430\u0437 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_302_listener() { return ctx.copyDataToTextArea(" \u0416\u0438\u0440\u043E\u0432\u0430 \u0456\u043D\u0444\u043E\u043B\u044E\u0446\u0456\u044F \u043C\u043E\u043B\u043E\u0447\u043D\u0438\u0445 \u0437\u0430\u043B\u043E\u0437 ", "mol_zakluchennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, " \u0416\u0438\u0440\u043E\u0432\u0430 \u0456\u043D\u0444\u043E\u043B\u044E\u0446\u0456\u044F \u043C\u043E\u043B\u043E\u0447\u043D\u0438\u0445 \u0437\u0430\u043B\u043E\u0437 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "\u0417\u0410\u041A\u041B\u042E\u0427\u0415\u041D\u041D\u042F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "textarea", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdMolochnuhZalozComponent_Template_button_click_311_listener() { return ctx.copyDataToTextArea("\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F \u043C\u0430\u043C\u043E\u043B\u043E\u0433\u0430", "mol_recomendovano"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, " \u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F \u043C\u0430\u043C\u043E\u043B\u043E\u0433\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "\u0420\u0415\u041A\u041E\u041C\u0415\u041D\u0414\u041E\u0412\u0410\u041D\u041E:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "textarea", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "app-doctors", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "app-blank-actions", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("print", function UzdMolochnuhZalozComponent_Template_app_blank_actions_print_323_listener() { return ctx.printCurrentPage(); })("fontSize", function UzdMolochnuhZalozComponent_Template_app_blank_actions_fontSize_323_listener($event) { return ctx.updateFontSize($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](79, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.options.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](81, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](83, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](85, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](87, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](89, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](91, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](93, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](95, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](97, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](99, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](101, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](103, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](105, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](107, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](109, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](111, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](113, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](115, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](117, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](119, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](121, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](123, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](125, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](127, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](129, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](131, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](133, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](135, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](137, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](139, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](141, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](143, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](145, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](147, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](149, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](151, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](153, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](155, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](157, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](159, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](161, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](163, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](165, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](167, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](169, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](171, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](173, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](175, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](177, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](179, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](181, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](183, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](185, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](187, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](189, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](191, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](193, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](195, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](197, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](199, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](201, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](203, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](205, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](207, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](209, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](211, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](213, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](215, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](217, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](219, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](221, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](223, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](225, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentForm", ctx.form)("fontSize", ctx.options.fontSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("font", ctx.options.fontSize);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrLabel"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrTextareaContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrTextarea"], _shared_components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__["DoctorsComponent"], _shared_components_blank_actions_blank_actions_component__WEBPACK_IMPORTED_MODULE_10__["BlankActionsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JsYW5rcy91emQtbW9sb2NobnVoLXphbG96L3V6ZC1tb2xvY2hudWgtemFsb3ouY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UzdMolochnuhZalozComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-uzd-molochnuh-zaloz',
                templateUrl: './uzd-molochnuh-zaloz.component.html',
                styleUrls: ['./uzd-molochnuh-zaloz.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"] }, { type: _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__["PrintDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/blanks/uzd-organiv-malogo-tazu/uzd-organiv-malogo-tazu.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/blanks/uzd-organiv-malogo-tazu/uzd-organiv-malogo-tazu.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: UzdOrganivMalogoTazuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UzdOrganivMalogoTazuComponent", function() { return UzdOrganivMalogoTazuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_blank_base_blank_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/blank-base/blank-base.component */ "./src/app/shared/components/blank-base/blank-base.component.ts");
/* harmony import */ var _shared_structures_uzd_organiv_malogo_tazu_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/structures/uzd-organiv-malogo-tazu.structure */ "./src/app/shared/structures/uzd-organiv-malogo-tazu.structure.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/print-data.service */ "./src/app/shared/services/print-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _shared_components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/doctors/doctors.component */ "./src/app/shared/components/doctors/doctors.component.ts");
/* harmony import */ var _shared_components_blank_actions_blank_actions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/blank-actions/blank-actions.component */ "./src/app/shared/components/blank-actions/blank-actions.component.ts");












const _c0 = function (a0) { return { "font-size.px": a0 }; };
class UzdOrganivMalogoTazuComponent extends _shared_components_blank_base_blank_base_component__WEBPACK_IMPORTED_MODULE_1__["BlankBaseComponent"] {
    constructor(fb, date, data, router) {
        super(fb, date, data);
        this.router = router;
        this.defaults = {
            type: 'трансабдомінально',
            polozennya: 'anteflexio',
            endometrii: ' мм.',
            shuyka: '  x  мм.',
            yayechnyk: 'ехоструктура відповідає віку та фазі циклу',
            rozmir: '  x  x  мм; V=  см3'
        };
        super.ngOnInit();
    }
    ngOnInit() {
        this.options = {
            title: `ПРОТОКОЛ
      ультразвукового дослідження
      органів малого тазу жінки`,
            fontSize: 18,
            showDoctors: true,
            borderInValues: true,
            strongTitles: true,
            showEmptyRows: true
        };
        this.form = this.fb.group({
            omt_date: [this.currentDate],
            omt_type: [this.defaults.type],
            omt_menstrual: [''],
            omt_pib: [''],
            omt_matka: [''],
            omt_polozennya: [this.defaults.polozennya],
            omt_dovzyna: [''],
            omt_tovshuna: [''],
            omt_shuruna: [''],
            omt_v: [''],
            omt_rozmir: [''],
            omt_exostructure: [''],
            omt_perednya_stinka: [''],
            omt_zadnya_stinka: [''],
            omt_dno: [''],
            omt_endometrii: [this.defaults.endometrii],
            omt_poroznyna: [this.defaults.endometrii],
            omt_shuyka: [this.defaults.shuyka],
            omt_tservikalnyy_kanal: [''],
            omt_right_yayechnyk: [this.defaults.yayechnyk],
            omt_right_rozstashuvannya: [''],
            omt_rigth_rozmir: [this.defaults.rozmir],
            omt_rigth_v_structuri: [''],
            omt_right_truba: [''],
            omt_left_yayechnyk: [this.defaults.yayechnyk],
            omt_left_rozstashuvannya: [''],
            omt_left_rozmir: [this.defaults.rozmir],
            omt_left_v_structuri: [''],
            omt_left_truba: [''],
            omt_riduna_v_duglas: [''],
            omt_zakluchennya: [''],
            omt_rekomendatsii: [''],
            doctors: ['']
        });
        this.data.blankData.subscribe(options => {
            if (options && options.data && Object.keys(options.data).length !== 0) {
                this.form.patchValue(options.data);
            }
        });
    }
    printCurrentPage() {
        if (this.form.valid) {
            const value = this.form.value;
            // tslint:disable-next-line:max-line-length
            value.omt_rozmir = `довжина: ${value.omt_dovzyna} мм, товщина: ${value.omt_tovshuna} мм, ширина: ${value.omt_shuruna} мм. V = ${value.omt_v} см3`;
            this.data.updateData(Object.assign(Object.assign({}, this.options), { data: value, structure: _shared_structures_uzd_organiv_malogo_tazu_structure__WEBPACK_IMPORTED_MODULE_2__["UzdOrganivMalogoTazuStructure"], route: 'blank/uzd-organiv-malogo-tazu' }));
            this.router.navigateByUrl('/print');
        }
    }
}
UzdOrganivMalogoTazuComponent.ɵfac = function UzdOrganivMalogoTazuComponent_Factory(t) { return new (t || UzdOrganivMalogoTazuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__["PrintDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
UzdOrganivMalogoTazuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UzdOrganivMalogoTazuComponent, selectors: [["app-uzd-organiv-malogo-tazu"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 362, vars: 193, consts: [["id", "uzd-organiv-malogo-tazu", 1, "blank-layout", 3, "ngStyle"], [1, "title"], [3, "formGroup"], [1, "clr-row"], [1, "clr-col-sm-12", "clr-col-md-6"], ["clrInput", "", "formControlName", "omt_date", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "omt_type", 3, "ngStyle"], ["value", "\u0442\u0440\u0430\u043D\u0441\u0430\u0431\u0434\u043E\u043C\u0456\u043D\u0430\u043B\u044C\u043D\u043E"], ["value", "\u0442\u0440\u0430\u043D\u0441\u0432\u0430\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u043E"], [1, "clr-col-sm-12", "full-width-input"], [3, "ngStyle"], ["placeholder", "", "clrInput", "", "formControlName", "omt_menstrual", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "omt_pib", 3, "ngStyle"], [1, "clr-row", "button-row"], [1, "clr-col-sm-12", "button-left"], [1, "btn", "btn-primary", 3, "click"], ["clrTextarea", "", "name", "description", "formControlName", "omt_matka", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "omt_polozennya", 3, "ngStyle"], ["value", "anteflexio"], ["value", "retroflexio"], [1, "clr-col-sm-2"], [1, "clr-col-sm-2", "width-input"], ["clrInput", "", "formControlName", "omt_dovzyna", 3, "ngStyle"], ["clrInput", "", "formControlName", "omt_tovshuna", 3, "ngStyle"], ["clrInput", "", "formControlName", "omt_shuruna", 3, "ngStyle"], ["clrInput", "", "formControlName", "omt_v", 3, "ngStyle"], [1, "step"], ["clrTextarea", "", "name", "description", "formControlName", "omt_exostructure", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "omt_perednya_stinka", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "omt_zadnya_stinka", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "omt_dno", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "omt_endometrii", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "omt_poroznyna", 3, "ngStyle"], ["placeholder", "", "clrInput", "", "name", "name", "formControlName", "omt_shuyka", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "omt_tservikalnyy_kanal", 3, "ngStyle"], ["placeholder", "", "clrInput", "", "name", "name", "formControlName", "omt_right_yayechnyk", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "omt_right_rozstashuvannya", 3, "ngStyle"], ["placeholder", "", "clrInput", "", "name", "name", "formControlName", "omt_rigth_rozmir", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "omt_rigth_v_structuri", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "omt_right_truba", 3, "ngStyle"], ["placeholder", "", "clrInput", "", "name", "name", "formControlName", "omt_left_yayechnyk", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "omt_left_rozstashuvannya", 3, "ngStyle"], ["placeholder", "", "clrInput", "", "name", "name", "formControlName", "omt_left_rozmir", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "omt_left_v_structuri", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "omt_left_truba", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "omt_riduna_v_duglas", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "omt_zakluchennya", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "omt_rekomendatsii", 3, "ngStyle"], [3, "parentForm", "fontSize"], [1, "print-block"], [3, "font", "print", "fontSize"]], template: function UzdOrganivMalogoTazuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0442\u0440\u0430\u043D\u0441\u0430\u0431\u0434\u043E\u043C\u0456\u043D\u0430\u043B\u044C\u043D\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0442\u0440\u0430\u043D\u0441\u0432\u0430\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0414\u0435\u043D\u044C \u043C\u0435\u043D\u0441\u0442\u0440\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0446\u0438\u043A\u043B\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u041F.\u0406.\u0411");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_28_listener() { return ctx.copyDataToTextArea("\u0434\u0432\u043E\u0440\u043E\u0433\u0430", "omt_matka"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u0434\u0432\u043E\u0440\u043E\u0433\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_30_listener() { return ctx.copyDataToTextArea("\u0441\u0456\u0434\u043B\u043E\u0432\u0438\u0434\u043D\u0430", "omt_matka"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0441\u0456\u0434\u043B\u043E\u0432\u0438\u0434\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u041C\u0430\u0442\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Anteflexio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Retroflexio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u0420\u043E\u0437\u043C\u0456\u0440\u0438 \u0442\u0456\u043B\u0430 \u043C\u0430\u0442\u043A\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u0434\u043E\u0432\u0436\u0438\u043D\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " \u043C\u043C, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u0442\u043E\u0432\u0449\u0438\u043D\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " \u043C\u043C, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u0448\u0438\u0440\u0438\u043D\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " \u043C\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "V = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " \u0441\u043C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_80_listener() { return ctx.copyDataToTextArea("\u043E\u0434\u043D\u043E\u0440\u0456\u0434\u043D\u0430", "omt_exostructure"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " \u043E\u0434\u043D\u043E\u0440\u0456\u0434\u043D\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_82_listener() { return ctx.copyDataToTextArea("\u043D\u0435\u043E\u0434\u043D\u043E\u0440\u0456\u0434\u043D\u0430", "omt_exostructure"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u043D\u0435\u043E\u0434\u043D\u043E\u0440\u0456\u0434\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_84_listener() { return ctx.copyDataToTextArea("\u0437\u0430 \u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0432\u043E\u0433\u043D\u0438\u0449 \u0435\u043D\u0434\u043E\u043C\u0435\u0442\u0440\u0456\u043E\u0437\u0443.", "omt_exostructure"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u0437\u0430 \u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0432\u043E\u0433\u043D\u0438\u0449 \u0435\u043D\u0434\u043E\u043C\u0435\u0442\u0440\u0456\u043E\u0437\u0443.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_86_listener() { return ctx.copyDataToTextArea("\u0437\u0430 \u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0444\u0456\u0431\u0440\u043E\u043C\u0430\u0442\u043E\u0437\u043D\u0438\u0445 \u0432\u0443\u0437\u043B\u0456\u0432.", "omt_exostructure"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\u0437\u0430 \u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0444\u0456\u0431\u0440\u043E\u043C\u0430\u0442\u043E\u0437\u043D\u0438\u0445 \u0432\u0443\u0437\u043B\u0456\u0432.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_88_listener() { return ctx.copyDataToTextArea("\u0437\u0430 \u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0432\u0430\u0440\u0438\u043A\u043E\u0437\u043D\u043E \u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u0438\u0445 \u0432\u0435\u043D.", "omt_exostructure"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\u0437\u0430 \u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0432\u0430\u0440\u0438\u043A\u043E\u0437\u043D\u043E \u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u0438\u0445 \u0432\u0435\u043D.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_90_listener() { return ctx.copyDataToTextArea("\u0437\u0430 \u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0432\u043E\u0433\u043D\u0438\u0449 \u0430\u0434\u0435\u043D\u043E\u043C\u0456\u043E\u0437\u0443.", "omt_exostructure"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\u0437\u0430 \u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0432\u043E\u0433\u043D\u0438\u0449 \u0430\u0434\u0435\u043D\u043E\u043C\u0456\u043E\u0437\u0443.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u0415\u0445\u043E\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_99_listener() { return ctx.copyDataToTextArea("\u0456\u043D\u0442\u0440\u0430\u043C\u0443\u0440\u0430\u043B\u044C\u043D\u0438\u0439 \u0444/\u0432  \u0445  \u043C\u043C, V=  \u0441\u043C3.", "omt_perednya_stinka"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " \u0456\u043D\u0442\u0440\u0430\u043C\u0443\u0440\u0430\u043B\u044C\u043D\u0438\u0439 \u0444/\u0432 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_101_listener() { return ctx.copyDataToTextArea("\u0441\u0443\u0431\u0441\u0435\u0440\u043E\u0437\u043D\u0438\u0439 \u0444/\u0432  \u0445  \u043C\u043C, V=  \u0441\u043C3.", "omt_perednya_stinka"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " \u0441\u0443\u0431\u0441\u0435\u0440\u043E\u0437\u043D\u0438\u0439 \u0444/\u0432 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_103_listener() { return ctx.copyDataToTextArea("\u0456\u043D\u0442\u0440\u0430\u043C\u0443\u0440\u0430\u043B\u044C\u043D\u043E-\u0441\u0443\u0431\u0441\u0435\u0440\u043E\u0437\u043D\u0438\u0439 \u0444/\u0432  \u0445  \u043C\u043C, V=  \u0441\u043C3.", "omt_perednya_stinka"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " \u0456\u043D\u0442\u0440\u0430\u043C\u0443\u0440\u0430\u043B\u044C\u043D\u043E-\u0441\u0443\u0431\u0441\u0435\u0440\u043E\u0437\u043D\u0438\u0439 \u0444/\u0432 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_105_listener() { return ctx.copyDataToTextArea("\u0441\u0443\u0431\u043C\u0443\u043A\u043E\u0437\u043D\u0438\u0439 \u0432\u0443\u0437\u043E\u043B \u0445  \u043C\u043C, V=  \u0441\u043C3.", "omt_perednya_stinka"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " \u0441\u0443\u0431\u043C\u0443\u043A\u043E\u0437\u043D\u0438\u0439 \u0432\u0443\u0437\u043E\u043B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\u041F\u0415\u0420\u0415\u0414\u041D\u042F \u0421\u0422\u0406\u041D\u041A\u0410");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_114_listener() { return ctx.copyDataToTextArea("\u0456\u043D\u0442\u0440\u0430\u043C\u0443\u0440\u0430\u043B\u044C\u043D\u0438\u0439 \u0444/\u0432  \u0445  \u043C\u043C, V=  \u0441\u043C3.", "omt_zadnya_stinka"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " \u0456\u043D\u0442\u0440\u0430\u043C\u0443\u0440\u0430\u043B\u044C\u043D\u0438\u0439 \u0444/\u0432 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_116_listener() { return ctx.copyDataToTextArea("\u0441\u0443\u0431\u0441\u0435\u0440\u043E\u0437\u043D\u0438\u0439 \u0444/\u0432  \u0445  \u043C\u043C, V=  \u0441\u043C3.", "omt_zadnya_stinka"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " \u0441\u0443\u0431\u0441\u0435\u0440\u043E\u0437\u043D\u0438\u0439 \u0444/\u0432 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_118_listener() { return ctx.copyDataToTextArea("\u0456\u043D\u0442\u0440\u0430\u043C\u0443\u0440\u0430\u043B\u044C\u043D\u043E-\u0441\u0443\u0431\u0441\u0435\u0440\u043E\u0437\u043D\u0438\u0439 \u0444/\u0432  \u0445  \u043C\u043C, V=  \u0441\u043C3.", "omt_zadnya_stinka"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " \u0456\u043D\u0442\u0440\u0430\u043C\u0443\u0440\u0430\u043B\u044C\u043D\u043E-\u0441\u0443\u0431\u0441\u0435\u0440\u043E\u0437\u043D\u0438\u0439 \u0444/\u0432 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_120_listener() { return ctx.copyDataToTextArea("\u0441\u0443\u0431\u043C\u0443\u043A\u043E\u0437\u043D\u0438\u0439 \u0432\u0443\u0437\u043E\u043B \u0445  \u043C\u043C, V=  \u0441\u043C3.", "omt_zadnya_stinka"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " \u0441\u0443\u0431\u043C\u0443\u043A\u043E\u0437\u043D\u0438\u0439 \u0432\u0443\u0437\u043E\u043B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\u0417\u0410\u0414\u041D\u042F \u0421\u0422\u0406\u041D\u041A\u0410");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "textarea", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_129_listener() { return ctx.copyDataToTextArea("\u0456\u043D\u0442\u0440\u0430\u043C\u0443\u0440\u0430\u043B\u044C\u043D\u0438\u0439 \u0444/\u0432  \u0445  \u043C\u043C, V=  \u0441\u043C3.", "omt_dno"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " \u0456\u043D\u0442\u0440\u0430\u043C\u0443\u0440\u0430\u043B\u044C\u043D\u0438\u0439 \u0444/\u0432 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_131_listener() { return ctx.copyDataToTextArea("\u0441\u0443\u0431\u0441\u0435\u0440\u043E\u0437\u043D\u0438\u0439 \u0444/\u0432  \u0445  \u043C\u043C, V=  \u0441\u043C3.", "omt_dno"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " \u0441\u0443\u0431\u0441\u0435\u0440\u043E\u0437\u043D\u0438\u0439 \u0444/\u0432 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_133_listener() { return ctx.copyDataToTextArea("\u0456\u043D\u0442\u0440\u0430\u043C\u0443\u0440\u0430\u043B\u044C\u043D\u043E-\u0441\u0443\u0431\u0441\u0435\u0440\u043E\u0437\u043D\u0438\u0439 \u0444/\u0432  \u0445  \u043C\u043C, V=  \u0441\u043C3.", "omt_dno"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " \u0456\u043D\u0442\u0440\u0430\u043C\u0443\u0440\u0430\u043B\u044C\u043D\u043E-\u0441\u0443\u0431\u0441\u0435\u0440\u043E\u0437\u043D\u0438\u0439 \u0444/\u0432 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_135_listener() { return ctx.copyDataToTextArea("\u0441\u0443\u0431\u043C\u0443\u043A\u043E\u0437\u043D\u0438\u0439 \u0432\u0443\u0437\u043E\u043B \u0445  \u043C\u043C, V=  \u0441\u043C3.", "omt_dno"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " \u0441\u0443\u0431\u043C\u0443\u043A\u043E\u0437\u043D\u0438\u0439 \u0432\u0443\u0437\u043E\u043B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\u0414\u041D\u041E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "textarea", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_144_listener() { return ctx.copyDataToTextArea("\u043E\u0434\u043D\u043E\u0440\u0456\u0434\u043D\u0438\u0439", "omt_endometrii"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " \u043E\u0434\u043D\u043E\u0440\u0456\u0434\u043D\u0438\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_146_listener() { return ctx.copyDataToTextArea("\u043D\u0435\u043E\u0434\u043D\u043E\u0440\u0456\u0434\u043D\u0438\u0439", "omt_endometrii"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " \u043D\u0435\u043E\u0434\u043D\u043E\u0440\u0456\u0434\u043D\u0438\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "\u0415\u043D\u0434\u043E\u043C\u0435\u0442\u0440\u0456\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_155_listener() { return ctx.copyDataToTextArea("\u0434\u0435\u0444\u043E\u0440\u043C\u043E\u0432\u0430\u043D\u0430", "omt_poroznyna"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " \u0434\u0435\u0444\u043E\u0440\u043C\u043E\u0432\u0430\u043D\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_157_listener() { return ctx.copyDataToTextArea("\u043D\u0435 \u0434\u0435\u0444\u043E\u0440\u043C\u043E\u0432\u0430\u043D\u0430", "omt_poroznyna"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " \u043D\u0435 \u0434\u0435\u0444\u043E\u0440\u043C\u043E\u0432\u0430\u043D\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_159_listener() { return ctx.copyDataToTextArea("\u043F\u043E\u0448\u0438\u0440\u0435\u043D\u0430", "omt_poroznyna"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " \u043F\u043E\u0448\u0438\u0440\u0435\u043D\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_161_listener() { return ctx.copyDataToTextArea("\u0412\u041C\u0421 \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0430 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E", "omt_poroznyna"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " \u0412\u041C\u0421 \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0430 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "\u041F\u043E\u0440\u043E\u0436\u043D\u0438\u043D\u0430 \u043C\u0430\u0442\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "textarea", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "\u0448\u0438\u0439\u043A\u0430 \u043C\u0430\u0442\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_176_listener() { return ctx.copyDataToTextArea("\u0431\u0435\u0437 \u043E\u0441\u043E\u0431\u043B\u0438\u0432\u043E\u0441\u0442\u0435\u0439", "omt_tservikalnyy_kanal"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " \u0431\u0435\u0437 \u043E\u0441\u043E\u0431\u043B\u0438\u0432\u043E\u0441\u0442\u0435\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_178_listener() { return ctx.copyDataToTextArea("\u043F\u043E\u0448\u0438\u0440\u0435\u043D\u0438\u0439 \u0434\u043E   \u043C\u043C", "omt_tservikalnyy_kanal"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " \u043F\u043E\u0448\u0438\u0440\u0435\u043D\u0438\u0439 \u0434\u043E \u043C\u043C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "\u0426\u0435\u0440\u0432\u0456\u043A\u0430\u043B\u044C\u043D\u0438\u0439 \u043A\u0430\u043D\u0430\u043B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "textarea", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "\u043F\u0440\u0430\u0432\u0438\u0439 \u042F\u0404\u0427\u041D\u0418\u041A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_193_listener() { return ctx.copyDataToTextArea("\u0442\u0438\u043F\u043E\u0432\u043E", "omt_right_rozstashuvannya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " \u0442\u0438\u043F\u043E\u0432\u043E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_195_listener() { return ctx.copyDataToTextArea("\u043F\u043E \u0440\u0435\u0431\u0440\u0443", "omt_right_rozstashuvannya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " \u043F\u043E \u0440\u0435\u0431\u0440\u0443 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_197_listener() { return ctx.copyDataToTextArea("\u0431\u0456\u043B\u044F \u043A\u0443\u0442\u0430", "omt_right_rozstashuvannya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " \u0431\u0456\u043B\u044F \u043A\u0443\u0442\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "\u0420\u043E\u0437\u0442\u0430\u0448\u0443\u0432\u0430\u043D\u043D\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "textarea", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "\u0420\u043E\u0437\u043C\u0456\u0440\u043E\u043C:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_212_listener() { return ctx.copyDataToTextArea("\u0434\u0440\u0456\u0431\u043D\u0456 \u0444\u043E\u043B\u0456\u043A\u0443\u043B\u0438.", "omt_rigth_v_structuri"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " \u0434\u0440\u0456\u0431\u043D\u0456 \u0444\u043E\u043B\u0456\u043A\u0443\u043B\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_214_listener() { return ctx.copyDataToTextArea("\u043C\u043D\u043E\u0436\u0438\u043D\u043D\u0456 \u0430\u0442\u0440\u0435\u0442\u0438\u0447\u043D\u0456 \u0444\u043E\u043B\u0456\u043A\u0443\u043B\u0438.", "omt_rigth_v_structuri"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "\u043C\u043D\u043E\u0436\u0438\u043D\u043D\u0456 \u0430\u0442\u0440\u0435\u0442\u0438\u0447\u043D\u0456 \u0444\u043E\u043B\u0456\u043A\u0443\u043B\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_216_listener() { return ctx.copyDataToTextArea("\u0430\u043D\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0438\u0439 \u0443\u0442\u0432\u0456\u0440 d  \u043C\u043C, V=  \u0441\u043C3.", "omt_rigth_v_structuri"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " \u0430\u043D\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0438\u0439 \u0443\u0442\u0432\u0456\u0440 d \u043C\u043C, V= \u0441\u043C3. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_218_listener() { return ctx.copyDataToTextArea("\u0433\u0456\u043F\u043E\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0438\u0439 \u0443\u0442\u0432\u0456\u0440 d  \u043C\u043C, V=  \u0441\u043C3.", "omt_rigth_v_structuri"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " \u0433\u0456\u043F\u043E\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0438\u0439 \u0443\u0442\u0432\u0456\u0440 d \u043C\u043C, V= \u0441\u043C3. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_220_listener() { return ctx.copyDataToTextArea("\u0433\u0456\u043F\u0435\u0440\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0438\u0439 \u0443\u0442\u0432\u0456\u0440 d  \u043C\u043C, V=  \u0441\u043C3.", "omt_rigth_v_structuri"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " \u0433\u0456\u043F\u0435\u0440\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0438\u0439 \u0443\u0442\u0432\u0456\u0440 d \u043C\u043C, V= \u0441\u043C3. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_222_listener() { return ctx.copyDataToTextArea("\u0433\u0435\u0442\u0435\u0440\u043E\u0433\u0435\u043D\u043D\u0438\u0439 \u0443\u0442\u0432\u0456\u0440 d  \u043C\u043C, V=  \u0441\u043C3.", "omt_rigth_v_structuri"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " \u0433\u0435\u0442\u0435\u0440\u043E\u0433\u0435\u043D\u043D\u0438\u0439 \u0443\u0442\u0432\u0456\u0440 d \u043C\u043C, V= \u0441\u043C3. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_224_listener() { return ctx.copyDataToTextArea("\u0444\u043E\u043B\u0456\u043A\u0443\u043B d=", "omt_rigth_v_structuri"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " \u0444\u043E\u043B\u0456\u043A\u0443\u043B d= ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_226_listener() { return ctx.copyDataToTextArea("\u0436\u043E\u0432\u0442\u0435 \u0442\u0456\u043B\u043E", "omt_rigth_v_structuri"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " \u0436\u043E\u0432\u0442\u0435 \u0442\u0456\u043B\u043E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "\u0432 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0456 \u044F\u0439\u043D\u0438\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "textarea", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_235_listener() { return ctx.copyDataToTextArea("\u043D\u0435 \u043F\u043E\u0448\u0438\u0440\u0435\u043D\u0430", "omt_right_truba"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, " \u043D\u0435 \u043F\u043E\u0448\u0438\u0440\u0435\u043D\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_237_listener() { return ctx.copyDataToTextArea("\u043F\u043E\u0448\u0438\u0440\u0435\u043D\u0430 \u0434\u043E   \u043C\u043C.", "omt_right_truba"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " \u043F\u043E\u0448\u0438\u0440\u0435\u043D\u0430 \u0434\u043E \u043C\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "\u041F\u0440\u0430\u0432\u0430 \u043C\u0430\u0442\u043A\u043E\u0432\u0430 \u0442\u0440\u0443\u0431\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "textarea", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "\u041B\u0456\u0432\u0438\u0439 \u042F\u0404\u0427\u041D\u0418\u041A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_252_listener() { return ctx.copyDataToTextArea("\u0442\u0438\u043F\u043E\u0432\u043E", "omt_left_rozstashuvannya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, " \u0442\u0438\u043F\u043E\u0432\u043E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_254_listener() { return ctx.copyDataToTextArea("\u043F\u043E \u0440\u0435\u0431\u0440\u0443", "omt_left_rozstashuvannya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, " \u043F\u043E \u0440\u0435\u0431\u0440\u0443 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_256_listener() { return ctx.copyDataToTextArea("\u0431\u0456\u043B\u044F \u043A\u0443\u0442\u0430", "omt_left_rozstashuvannya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, " \u0431\u0456\u043B\u044F \u043A\u0443\u0442\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "\u0420\u043E\u0437\u0442\u0430\u0448\u0443\u0432\u0430\u043D\u043D\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "textarea", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "\u0420\u043E\u0437\u043C\u0456\u0440\u043E\u043C:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_271_listener() { return ctx.copyDataToTextArea("\u0434\u0440\u0456\u0431\u043D\u0456 \u0444\u043E\u043B\u0456\u043A\u0443\u043B\u0438.", "omt_left_v_structuri"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " \u0434\u0440\u0456\u0431\u043D\u0456 \u0444\u043E\u043B\u0456\u043A\u0443\u043B\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_273_listener() { return ctx.copyDataToTextArea("\u043C\u043D\u043E\u0436\u0438\u043D\u043D\u0456 \u0430\u0442\u0440\u0435\u0442\u0438\u0447\u043D\u0456 \u0444\u043E\u043B\u0456\u043A\u0443\u043B\u0438.", "omt_left_v_structuri"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "\u043C\u043D\u043E\u0436\u0438\u043D\u043D\u0456 \u0430\u0442\u0440\u0435\u0442\u0438\u0447\u043D\u0456 \u0444\u043E\u043B\u0456\u043A\u0443\u043B\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_275_listener() { return ctx.copyDataToTextArea("\u0430\u043D\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0438\u0439 \u0443\u0442\u0432\u0456\u0440 d  \u043C\u043C, V=  \u0441\u043C3.", "omt_left_v_structuri"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, " \u0430\u043D\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0438\u0439 \u0443\u0442\u0432\u0456\u0440 d \u043C\u043C, V= \u0441\u043C3. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_277_listener() { return ctx.copyDataToTextArea("\u0433\u0456\u043F\u043E\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0438\u0439 \u0443\u0442\u0432\u0456\u0440 d  \u043C\u043C, V=  \u0441\u043C3.", "omt_left_v_structuri"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, " \u0433\u0456\u043F\u043E\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0438\u0439 \u0443\u0442\u0432\u0456\u0440 d \u043C\u043C, V= \u0441\u043C3. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_279_listener() { return ctx.copyDataToTextArea("\u0433\u0456\u043F\u0435\u0440\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0438\u0439 \u0443\u0442\u0432\u0456\u0440 d  \u043C\u043C, V=  \u0441\u043C3.", "omt_left_v_structuri"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " \u0433\u0456\u043F\u0435\u0440\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0438\u0439 \u0443\u0442\u0432\u0456\u0440 d \u043C\u043C, V= \u0441\u043C3. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_281_listener() { return ctx.copyDataToTextArea("\u0433\u0435\u0442\u0435\u0440\u043E\u0433\u0435\u043D\u043D\u0438\u0439 \u0443\u0442\u0432\u0456\u0440 d  \u043C\u043C, V=  \u0441\u043C3.", "omt_left_v_structuri"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " \u0433\u0435\u0442\u0435\u0440\u043E\u0433\u0435\u043D\u043D\u0438\u0439 \u0443\u0442\u0432\u0456\u0440 d \u043C\u043C, V= \u0441\u043C3. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_283_listener() { return ctx.copyDataToTextArea("\u0444\u043E\u043B\u0456\u043A\u0443\u043B d=", "omt_left_v_structuri"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " \u0444\u043E\u043B\u0456\u043A\u0443\u043B d= ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_285_listener() { return ctx.copyDataToTextArea("\u0436\u043E\u0432\u0442\u0435 \u0442\u0456\u043B\u043E", "omt_left_v_structuri"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, " \u0436\u043E\u0432\u0442\u0435 \u0442\u0456\u043B\u043E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "\u0432 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0456 \u044F\u0439\u043D\u0438\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "textarea", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_294_listener() { return ctx.copyDataToTextArea("\u043D\u0435 \u043F\u043E\u0448\u0438\u0440\u0435\u043D\u0430", "omt_left_truba"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, " \u043D\u0435 \u043F\u043E\u0448\u0438\u0440\u0435\u043D\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_296_listener() { return ctx.copyDataToTextArea("\u043F\u043E\u0448\u0438\u0440\u0435\u043D\u0430 \u0434\u043E   \u043C\u043C.", "omt_left_truba"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, " \u043F\u043E\u0448\u0438\u0440\u0435\u043D\u0430 \u0434\u043E \u043C\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "\u041B\u0456\u0432\u0430 \u043C\u0430\u0442\u043A\u043E\u0432\u0430 \u0442\u0440\u0443\u0431\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](302, "textarea", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_305_listener() { return ctx.copyDataToTextArea("\u043D\u0435\u043C\u0430\u0454", "omt_riduna_v_duglas"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, " \u043D\u0435\u043C\u0430\u0454 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_307_listener() { return ctx.copyDataToTextArea(" x \u043C\u043C, V= \u0441\u043C3", "omt_riduna_v_duglas"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, " \u0454 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "\u0420\u0456\u0434\u0438\u043D\u0430 \u0432 \u0434\u0443\u0433\u043B\u0430\u0441\u043E\u0432\u043E\u043C\u0443 \u043F\u0440\u043E\u0441\u0442\u043E\u0440\u0456:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "textarea", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_316_listener() { return ctx.copyDataToTextArea("\u041F\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u0457 \u043D\u0430 \u043C\u043E\u043C\u0435\u043D\u0442 \u043E\u0433\u043B\u044F\u0434\u0443 \u043D\u0435 \u0432\u0438\u044F\u0432\u043B\u0435\u043D\u043E.", "omt_zakluchennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, " \u041F\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u0457 \u043D\u0430 \u043C\u043E\u043C\u0435\u043D\u0442 \u043E\u0433\u043B\u044F\u0434\u0443 \u043D\u0435 \u0432\u0438\u044F\u0432\u043B\u0435\u043D\u043E. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_318_listener() { return ctx.copyDataToTextArea("\u041F\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F \u0448\u0438\u0439\u043A\u0438 \u043C\u0430\u0442\u043A\u0438.", "omt_zakluchennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, " \u041F\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F \u0448\u0438\u0439\u043A\u0438 \u043C\u0430\u0442\u043A\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_320_listener() { return ctx.copyDataToTextArea("\u0412\u0443\u0437\u043B\u043E\u0432\u0430\u0442\u0430 \u043C\u0456\u043E\u043C\u0430 \u0442\u0456\u043B\u0430 \u043C\u0430\u0442\u043A\u0438.", "omt_zakluchennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "\u0412\u0443\u0437\u043B\u043E\u0432\u0430\u0442\u0430 \u043C\u0456\u043E\u043C\u0430 \u0442\u0456\u043B\u0430 \u043C\u0430\u0442\u043A\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_322_listener() { return ctx.copyDataToTextArea("\u0424\u0456\u0431\u0440\u043E\u043C\u0456\u043E\u043C\u0430 \u0442\u0456\u043B\u0430 \u043C\u0430\u0442\u043A\u0438.", "omt_zakluchennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "\u0424\u0456\u0431\u0440\u043E\u043C\u0456\u043E\u043C\u0430 \u0442\u0456\u043B\u0430 \u043C\u0430\u0442\u043A\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_324_listener() { return ctx.copyDataToTextArea("\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0421\u0411 \u0447\u0435\u0440\u0435\u0437 10 \u0434\u043D\u0456\u0432.", "omt_zakluchennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0421\u0411 \u0447\u0435\u0440\u0435\u0437 10 \u0434\u043D\u0456\u0432. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_326_listener() { return ctx.copyDataToTextArea("\u0415\u043D\u0434\u043E\u043C\u0435\u0442\u0440\u0456\u043E\u0437 \u0442\u0456\u043B\u0430 \u043C\u0430\u0442\u043A\u0438.", "omt_zakluchennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "\u0415\u043D\u0434\u043E\u043C\u0435\u0442\u0440\u0456\u043E\u0437 \u0442\u0456\u043B\u0430 \u043C\u0430\u0442\u043A\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_328_listener() { return ctx.copyDataToTextArea("\u041F\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F \u0435\u043D\u0434\u0435\u043C\u0435\u0442\u0440\u0456\u044E.", "omt_zakluchennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "\u041F\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F \u0435\u043D\u0434\u0435\u043C\u0435\u0442\u0440\u0456\u044E. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_330_listener() { return ctx.copyDataToTextArea("\u0422\u0435\u043D\u0434\u0435\u043D\u0446\u0456\u044F \u0434\u043E \u043F\u043E\u043B\u0456\u043A\u0438\u0441\u0442\u043E\u0437\u043D\u043E\u0457 \u0431\u0443\u0434\u043E\u0432\u0438 \u044F\u0439\u043D\u0438\u043A\u0456\u0432.", "omt_zakluchennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "\u0422\u0435\u043D\u0434\u0435\u043D\u0446\u0456\u044F \u0434\u043E \u043F\u043E\u043B\u0456\u043A\u0438\u0441\u0442\u043E\u0437\u043D\u043E\u0457 \u0431\u0443\u0434\u043E\u0432\u0438 \u044F\u0439\u043D\u0438\u043A\u0456\u0432. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_332_listener() { return ctx.copyDataToTextArea("\u0410\u0434\u0433\u0435\u0437\u0438\u0432\u043D\u0438\u0439 \u043F\u0440\u043E\u0446\u0435\u0441.", "omt_zakluchennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "\u0410\u0434\u0433\u0435\u0437\u0438\u0432\u043D\u0438\u0439 \u043F\u0440\u043E\u0446\u0435\u0441. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_334_listener() { return ctx.copyDataToTextArea("\u041F\u0435\u0440\u0441\u0438\u0441\u0442\u0435\u043D\u0446\u0456\u044F \u0444\u043E\u043B\u0456\u043A\u0443\u043B\u0430.", "omt_zakluchennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "\u041F\u0435\u0440\u0441\u0438\u0441\u0442\u0435\u043D\u0446\u0456\u044F \u0444\u043E\u043B\u0456\u043A\u0443\u043B\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "\u0417\u0410\u041A\u041B\u042E\u0427\u0415\u041D\u041D\u042F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "textarea", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_343_listener() { return ctx.copyDataToTextArea("\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0432 \u0434\u0438\u043D\u0430\u043C\u0456\u0446\u0456.", "omt_rekomendatsii"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, " \u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0432 \u0434\u0438\u043D\u0430\u043C\u0456\u0446\u0456. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_345_listener() { return ctx.copyDataToTextArea("\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0435\u043D\u0434\u043E\u043C\u0435\u0442\u0440\u0456\u044E \u043D\u0430 4-5-\u0439 \u0434\u0435\u043D\u044C \u0446\u0438\u043A\u043B\u0443.", "omt_rekomendatsii"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, " \u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0435\u043D\u0434\u043E\u043C\u0435\u0442\u0440\u0456\u044E \u043D\u0430 4-5-\u0439 \u0434\u0435\u043D\u044C \u0446\u0438\u043A\u043B\u0443. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_347_listener() { return ctx.copyDataToTextArea("\u0406 \u0423\u0417\u0421 \u0432 12 \u0442\u0438\u0436\u043D\u0456\u0432.", "omt_rekomendatsii"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, " \u0406 \u0423\u0417\u0421 \u0432 12 \u0442\u0438\u0436\u043D\u0456\u0432. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdOrganivMalogoTazuComponent_Template_button_click_349_listener() { return ctx.copyDataToTextArea("\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0421\u0411 \u0447\u0435\u0440\u0435\u0437 10 \u0434\u043D\u0456\u0432.", "omt_rekomendatsii"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, " \u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0421\u0411 \u0447\u0435\u0440\u0435\u0437 10 \u0434\u043D\u0456\u0432. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "\u0420\u0415\u041A\u041E\u041C\u0415\u041D\u0414\u041E\u0412\u0410\u041D\u041E:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "textarea", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "app-doctors", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "app-blank-actions", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("print", function UzdOrganivMalogoTazuComponent_Template_app_blank_actions_print_361_listener() { return ctx.printCurrentPage(); })("fontSize", function UzdOrganivMalogoTazuComponent_Template_app_blank_actions_fontSize_361_listener($event) { return ctx.updateFontSize($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](69, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.options.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](71, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("clr-float-md-right", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](73, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](75, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](77, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](79, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](81, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](83, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](85, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](87, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](89, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](91, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](93, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](95, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](97, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](99, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](101, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](103, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](105, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](107, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](109, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](111, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](113, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](115, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](117, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](119, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](121, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](123, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](125, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](127, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](129, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](131, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](133, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](135, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](137, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](139, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](141, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](143, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](145, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](147, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](149, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](151, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](153, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](155, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](157, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](159, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](161, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](163, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](165, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](167, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](169, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](171, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](173, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](175, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](177, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](179, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](181, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](183, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](185, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](187, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](189, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](191, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentForm", ctx.form)("fontSize", ctx.options.fontSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("font", ctx.options.fontSize);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrSelectContainer"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrLabel"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrTextareaContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrTextarea"], _shared_components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__["DoctorsComponent"], _shared_components_blank_actions_blank_actions_component__WEBPACK_IMPORTED_MODULE_10__["BlankActionsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JsYW5rcy91emQtb3JnYW5pdi1tYWxvZ28tdGF6dS91emQtb3JnYW5pdi1tYWxvZ28tdGF6dS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UzdOrganivMalogoTazuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-uzd-organiv-malogo-tazu',
                templateUrl: './uzd-organiv-malogo-tazu.component.html',
                styleUrls: ['./uzd-organiv-malogo-tazu.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"] }, { type: _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__["PrintDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/blanks/uzd-pregnancy/uzd-pregnancy.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/blanks/uzd-pregnancy/uzd-pregnancy.component.ts ***!
  \***********************************************************************/
/*! exports provided: UzdPregnancyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UzdPregnancyComponent", function() { return UzdPregnancyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_blank_base_blank_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/blank-base/blank-base.component */ "./src/app/shared/components/blank-base/blank-base.component.ts");
/* harmony import */ var _shared_structures_uzd_pregnancy_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/structures/uzd-pregnancy.structure */ "./src/app/shared/structures/uzd-pregnancy.structure.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/print-data.service */ "./src/app/shared/services/print-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _shared_components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/doctors/doctors.component */ "./src/app/shared/components/doctors/doctors.component.ts");
/* harmony import */ var _shared_components_blank_actions_blank_actions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/blank-actions/blank-actions.component */ "./src/app/shared/components/blank-actions/blank-actions.component.ts");












const _c0 = function (a0) { return { "font-size.px": a0 }; };
class UzdPregnancyComponent extends _shared_components_blank_base_blank_base_component__WEBPACK_IMPORTED_MODULE_1__["BlankBaseComponent"] {
    constructor(fb, date, data, router) {
        super(fb, date, data);
        this.router = router;
        this.defaults = {
            type: 'трансабдомінально',
            polozennya: 'anteflexio',
            shuyka: 'мм',
            vichko: 'замкнуте',
            yaye_exo: 'б/о'
        };
        super.ngOnInit();
    }
    ngOnInit() {
        this.options = {
            title: `ПРОТОКОЛ
      ультразвукового дослідження
вагітності`,
            fontSize: 18,
            showDoctors: true,
            borderInValues: true,
            strongTitles: true,
            showEmptyRows: true
        };
        this.form = this.fb.group({
            p_date: [this.currentDate],
            p_type: [this.defaults.type],
            p_first_day_om: [''],
            p_termin_pologiv: [''],
            p_pib: [''],
            p_matka: [''],
            p_polozennya: [this.defaults.polozennya],
            p_dovzyna: [''],
            p_tovshuna: [''],
            p_shuruna: [''],
            p_v: [''],
            p_rozmir: [''],
            p_exostructure: [''],
            p_plivne: [''],
            p_ktr: [''],
            p_sertse: [''],
            p_zhovtochnyy_mishok: [''],
            p_dilyanku: [''],
            p_tonus: [''],
            p_shuyka: [this.defaults.shuyka],
            p_vichko: [this.defaults.vichko],
            p_p_yaye_exostructure: [this.defaults.yaye_exo],
            p_l_yaye_exostructure: [this.defaults.yaye_exo],
            p_riduna_v_duglas: [''],
            p_po_gastatsii: [''],
            p_zakluchennya: [''],
            doctors: ['']
        });
        this.data.blankData.subscribe(options => {
            if (options && options.data && Object.keys(options.data).length !== 0) {
                this.form.patchValue(options.data);
            }
        });
    }
    printCurrentPage() {
        if (this.form.valid) {
            const value = this.form.value;
            // tslint:disable-next-line:max-line-length
            value.p_rozmir = `довжина: ${value.p_dovzyna} мм, товщина: ${value.p_tovshuna} мм, ширина: ${value.p_shuruna} мм. V = ${value.p_v} см3`;
            this.data.updateData(Object.assign(Object.assign({}, this.options), { data: value, structure: _shared_structures_uzd_pregnancy_structure__WEBPACK_IMPORTED_MODULE_2__["UzdPregnancyStructure"], route: 'blank/uzd-pregnancy' }));
            this.router.navigateByUrl('/print');
        }
    }
}
UzdPregnancyComponent.ɵfac = function UzdPregnancyComponent_Factory(t) { return new (t || UzdPregnancyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__["PrintDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
UzdPregnancyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UzdPregnancyComponent, selectors: [["app-uzd-pregnancy"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 226, vars: 157, consts: [["id", "uzd-pregnancy", 1, "blank-layout", 3, "ngStyle"], [1, "title"], [3, "formGroup"], [1, "clr-row"], [1, "clr-col-sm-12", "clr-col-md-6"], ["clrInput", "", "formControlName", "p_date", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "p_type", 3, "ngStyle"], ["value", "\u0442\u0440\u0430\u043D\u0441\u0430\u0431\u0434\u043E\u043C\u0456\u043D\u0430\u043B\u044C\u043D\u043E"], ["value", "\u0442\u0440\u0430\u043D\u0441\u0432\u0430\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u043E"], [1, "clr-col-sm-12", "full-width-input"], [3, "ngStyle"], ["placeholder", "", "clrInput", "", "formControlName", "p_first_day_om", 3, "ngStyle"], ["placeholder", "", "clrInput", "", "formControlName", "p_termin_pologiv", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "p_pib", 3, "ngStyle"], [1, "clr-row", "button-row"], [1, "clr-col-sm-12", "button-left"], [1, "btn", "btn-primary", 3, "click"], ["clrTextarea", "", "name", "description", "formControlName", "p_matka", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "p_polozennya", 3, "ngStyle"], ["value", "anteflexio"], ["value", "retroflexio"], [1, "clr-col-sm-2"], [1, "clr-col-sm-2", "width-input"], ["clrInput", "", "formControlName", "p_dovzyna", 3, "ngStyle"], ["clrInput", "", "formControlName", "p_tovshuna", 3, "ngStyle"], ["clrInput", "", "formControlName", "p_shuruna", 3, "ngStyle"], ["clrInput", "", "formControlName", "p_v", 3, "ngStyle"], [1, "step"], ["clrTextarea", "", "name", "description", "formControlName", "p_exostructure", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "p_plivne", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "p_ktr", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "p_sertse", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "p_zhovtochnyy_mishok", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "p_dilyanku", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "p_tonus", 3, "ngStyle"], ["placeholder", "", "clrInput", "", "formControlName", "p_shuyka", 3, "ngStyle"], ["placeholder", "", "clrInput", "", "formControlName", "p_vichko", 3, "ngStyle"], ["placeholder", "", "clrInput", "", "formControlName", "p_p_yaye_exostructure", 3, "ngStyle"], ["placeholder", "", "clrInput", "", "formControlName", "p_l_yaye_exostructure", 3, "ngStyle"], ["placeholder", "", "clrInput", "", "formControlName", "p_riduna_v_duglas", 3, "ngStyle"], ["placeholder", "", "clrInput", "", "formControlName", "p_po_gastatsii", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "p_zakluchennya", 3, "ngStyle"], [3, "parentForm", "fontSize"], [1, "print-block"], [3, "font", "print", "fontSize"]], template: function UzdPregnancyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0442\u0440\u0430\u043D\u0441\u0430\u0431\u0434\u043E\u043C\u0456\u043D\u0430\u043B\u044C\u043D\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0442\u0440\u0430\u043D\u0441\u0432\u0430\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041F\u0435\u0440\u0448\u0438\u0439 \u0434\u0435\u043D\u044C \u041E\u041C:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0422\u0435\u0440\u043C\u0456\u043D \u043F\u043E\u043B\u043E\u0433\u0456\u0432:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u041F.\u0406.\u0411:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_34_listener() { return ctx.copyDataToTextArea("\u0434\u0432\u043E\u0440\u043E\u0433\u0430", "p_matka"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u0434\u0432\u043E\u0440\u043E\u0433\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_36_listener() { return ctx.copyDataToTextArea("\u0441\u0456\u0434\u043B\u043E\u0432\u0438\u0434\u043D\u0430", "p_matka"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u0441\u0456\u0434\u043B\u043E\u0432\u0438\u0434\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u041C\u0430\u0442\u043A\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Retroflexio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Anteflexio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u0420\u043E\u0437\u043C\u0456\u0440\u0438 \u0442\u0456\u043B\u0430 \u043C\u0430\u0442\u043A\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u0434\u043E\u0432\u0436\u0438\u043D\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " \u043C\u043C, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u0442\u043E\u0432\u0449\u0438\u043D\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " \u043C\u043C, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u0448\u0438\u0440\u0438\u043D\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " \u043C\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "V = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " \u0441\u043C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_86_listener() { return ctx.copyDataToTextArea("\u043E\u0434\u043D\u043E\u0440\u0456\u0434\u043D\u0430", "p_exostructure"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " \u043E\u0434\u043D\u043E\u0440\u0456\u0434\u043D\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_88_listener() { return ctx.copyDataToTextArea("\u043D\u0435\u043E\u0434\u043D\u043E\u0440\u0456\u0434\u043D\u0430", "p_exostructure"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\u043D\u0435\u043E\u0434\u043D\u043E\u0440\u0456\u0434\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\u0415\u0445\u043E\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_97_listener() { return ctx.copyDataToTextArea("\u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u0454\u0442\u044C\u0441\u044F \u0434\u043E \u043C\u043C", "p_plivne"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u0454\u0442\u044C\u0441\u044F \u0434\u043E \u043C\u043C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_99_listener() { return ctx.copyDataToTextArea("\u043D\u0435 \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u0454\u0442\u044C\u0441\u044F", "p_plivne"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\u043D\u0435 \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u0454\u0442\u044C\u0441\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u0412 \u043F\u043E\u0440\u043E\u0436\u043D\u0438\u043D\u0456 \u043C\u0430\u0442\u043A\u0438 \u043F\u043B\u0456\u0432\u043D\u0435 \u044F\u0439\u0446\u0435:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "textarea", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_108_listener() { return ctx.copyDataToTextArea("\u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u0454\u0442\u044C\u0441\u044F \u0434\u043E \u043C\u043C", "p_ktr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u0454\u0442\u044C\u0441\u044F \u0434\u043E \u043C\u043C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_110_listener() { return ctx.copyDataToTextArea("\u043D\u0435 \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u0454\u0442\u044C\u0441\u044F", "p_ktr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\u043D\u0435 \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u0454\u0442\u044C\u0441\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\u041A\u0443\u043F\u0440\u0438\u043A\u043E-\u0442\u0456\u043C'\u044F\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440 (\u041A\u0422\u0420):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "textarea", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_119_listener() { return ctx.copyDataToTextArea("+", "p_sertse"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_121_listener() { return ctx.copyDataToTextArea("-", "p_sertse"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_123_listener() { return ctx.copyDataToTextArea("\u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435", "p_sertse"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " \u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_125_listener() { return ctx.copyDataToTextArea("\u0430\u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435", "p_sertse"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " \u0430\u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "\u0421\u0435\u0440\u0446\u0435\u0431\u0438\u0442\u0442\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_134_listener() { return ctx.copyDataToTextArea("+", "p_zhovtochnyy_mishok"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_136_listener() { return ctx.copyDataToTextArea("-", "p_zhovtochnyy_mishok"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\u0416\u043E\u0432\u0442\u043E\u0447\u043D\u0438\u0439 \u043C\u0456\u0448\u043E\u043A:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "textarea", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_145_listener() { return ctx.copyDataToTextArea("\u043D\u0435 \u0432\u0438\u0437\u043D\u0430\u0447\u0430\u044E\u0442\u044C\u0441\u044F", "p_dilyanku"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " \u043D\u0435 \u0432\u0438\u0437\u043D\u0430\u0447\u0430\u044E\u0442\u044C\u0441\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_147_listener() { return ctx.copyDataToTextArea("\u0432\u0438\u0437\u043D\u0430\u0447\u0430\u044E\u0442\u044C\u0441\u044F", "p_dilyanku"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " \u0432\u0438\u0437\u043D\u0430\u0447\u0430\u044E\u0442\u044C\u0441\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "\u0414\u0456\u043B\u044F\u043D\u043A\u0438 \u0432\u0456\u0434\u0448\u0430\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043B\u0456\u0434\u043D\u043E\u0433\u043E \u044F\u0439\u0446\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "textarea", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_156_listener() { return ctx.copyDataToTextArea("\u043D\u0435 \u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u0438\u0439", "p_tonus"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " \u043D\u0435 \u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u0438\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_158_listener() { return ctx.copyDataToTextArea("\u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u0438\u0439", "p_tonus"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " \u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u0438\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_160_listener() { return ctx.copyDataToTextArea("\u043F\u043E \u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u0441\u0442\u0456\u043D\u0446\u0456", "p_tonus"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " \u043F\u043E \u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u0441\u0442\u0456\u043D\u0446\u0456 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_162_listener() { return ctx.copyDataToTextArea("\u043F\u043E \u0437\u0430\u0434\u043D\u0456\u0439 \u0441\u0442\u0456\u043D\u0446\u0456", "p_tonus"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " \u043F\u043E \u0437\u0430\u0434\u043D\u0456\u0439 \u0441\u0442\u0456\u043D\u0446\u0456 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "\u0422\u043E\u043D\u0443\u0441 \u043C\u0456\u043E\u043C\u0435\u0442\u0440\u0456\u044E:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "textarea", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "\u0428\u0438\u0439\u043A\u0430 \u043C\u0430\u0442\u043A\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "\u0432\u043D.\u0432\u0456\u0447\u043A\u043E:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "\u041F\u0440\u0430\u0432\u0438\u0439 \u042F\u0404\u0427\u041D\u0418\u041A \u0435\u0445\u043E\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "\u041B\u0456\u0432\u0438\u0439 \u042F\u0404\u0427\u041D\u0418\u041A \u0435\u0445\u043E\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "\u0420\u0456\u0434\u0438\u043D\u0430 \u0432 \u0434\u0443\u0433\u043B\u0430\u0441\u043E\u0432\u043E\u043C\u0443 \u043F\u0440\u043E\u0441\u0442\u043E\u0440\u0456:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "\u041F\u043E \u0433\u0430\u0441\u0442\u0430\u0446\u0456\u0457:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_207_listener() { return ctx.copyDataToTextArea("\u0412\u0430\u0433\u0456\u0442\u043D\u0456\u0441\u0442\u044C", "p_zakluchennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " \u0412\u0430\u0433\u0456\u0442\u043D\u0456\u0441\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_209_listener() { return ctx.copyDataToTextArea("\u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0443\u0454", "p_zakluchennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0443\u0454 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_211_listener() { return ctx.copyDataToTextArea("\u043D\u0435 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0443\u0454", "p_zakluchennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "\u043D\u0435 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0443\u0454 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdPregnancyComponent_Template_button_click_213_listener() { return ctx.copyDataToTextArea("\u0437\u0430\u0432\u043C\u0435\u0440\u043B\u0430", "p_zakluchennya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "\u0437\u0430\u0432\u043C\u0435\u0440\u043B\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "\u0417\u0410\u041A\u041B\u042E\u0427\u0415\u041D\u041D\u042F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "textarea", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "app-doctors", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "app-blank-actions", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("print", function UzdPregnancyComponent_Template_app_blank_actions_print_225_listener() { return ctx.printCurrentPage(); })("fontSize", function UzdPregnancyComponent_Template_app_blank_actions_fontSize_225_listener($event) { return ctx.updateFontSize($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](57, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.options.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](59, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("clr-float-md-right", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](61, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](63, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](65, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](67, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](69, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](71, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](73, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](75, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](77, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](79, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](81, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](83, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](85, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](87, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](89, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](91, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](93, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](95, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](97, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](99, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](101, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](103, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](105, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](107, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](109, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](111, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](113, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](115, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](117, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](119, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](121, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](123, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](125, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](127, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](129, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](131, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](133, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](135, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](137, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](139, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](141, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](143, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](145, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](147, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](149, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](151, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](153, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](155, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentForm", ctx.form)("fontSize", ctx.options.fontSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("font", ctx.options.fontSize);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrSelectContainer"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrLabel"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrTextareaContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrTextarea"], _shared_components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__["DoctorsComponent"], _shared_components_blank_actions_blank_actions_component__WEBPACK_IMPORTED_MODULE_10__["BlankActionsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JsYW5rcy91emQtcHJlZ25hbmN5L3V6ZC1wcmVnbmFuY3kuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UzdPregnancyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-uzd-pregnancy',
                templateUrl: './uzd-pregnancy.component.html',
                styleUrls: ['./uzd-pregnancy.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"] }, { type: _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__["PrintDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/blanks/uzd-protocol-one-uz/uzd-protocol-one-uz.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/blanks/uzd-protocol-one-uz/uzd-protocol-one-uz.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UzdProtocolOneUzComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UzdProtocolOneUzComponent", function() { return UzdProtocolOneUzComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_blank_base_blank_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/blank-base/blank-base.component */ "./src/app/shared/components/blank-base/blank-base.component.ts");
/* harmony import */ var _shared_structures_uzd_protocol_one_uz_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/structures/uzd-protocol-one-uz.structure */ "./src/app/shared/structures/uzd-protocol-one-uz.structure.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/print-data.service */ "./src/app/shared/services/print-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _shared_components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/doctors/doctors.component */ "./src/app/shared/components/doctors/doctors.component.ts");
/* harmony import */ var _shared_components_blank_actions_blank_actions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/blank-actions/blank-actions.component */ "./src/app/shared/components/blank-actions/blank-actions.component.ts");












const _c0 = function (a0) { return { "font-size.px": a0 }; };
class UzdProtocolOneUzComponent extends _shared_components_blank_base_blank_base_component__WEBPACK_IMPORTED_MODULE_1__["BlankBaseComponent"] {
    constructor(fb, date, data, router) {
        super(fb, date, data);
        this.router = router;
        super.ngOnInit();
    }
    ngOnInit() {
        this.options = {
            title: `ПРОТОКОЛ
      ультразвукового дослідження вагітних
      І УЗ-обстеження (11 тиж. + 1 день - 13 тиж. + 6 днів)`,
            fontSize: 18,
            showDoctors: true,
            borderInValues: false,
            strongTitles: true,
            showEmptyRows: true
        };
        this.form = this.fb.group({
            one_date: [this.currentDate],
            one_pib: [''],
            one_om: [''],
            one_gastatsia: [''],
            one_termin: [''],
            one_method: ['трансабдомінальна'],
            one_dovz: [''],
            one_shuruna: [''],
            one_pered_zad: [''],
            one_structura_biomentiyu: ['не змінена'],
            one_tonus: ['не підвищений'],
            one_local_hipertonus: [''],
            one_u_poroz_vizial: ['одне плідне яйце правильної форми'],
            one_diamert_egg: [' мм.'],
            one_kilkist_embrioniv: ['один'],
            one_vidsharuvannya: [''],
            one_kupriko: [' мм'],
            one_biparietal: [' мм'],
            one_skull_bones: ['візуалізуються'],
            one_okruznist: [' мм'],
            one_ser_diametr: [' мм'],
            one_dov_stegna: [' мм'],
            one_komirts_prostir: [' мм'],
            one_nose_kist: [' мм ( візуалізується )'],
            one_hearth: [''],
            one_hearth_bom: ['є'],
            one_chss: [' уд./хв'],
            one_pered_cherevna: ['цілісна'],
            one_ruh_ploda: ['нормальна'],
            one_local_horionu: ['передня'],
            one_tovshuna: [' мм'],
            one_structura: ['б/о'],
            one_shuyka: [' мм'],
            one_tserv_canal: [' мм'],
            one_diam_vnutrishnogo: [' мм'],
            one_stan_prudatkiv: ['б/о'],
            one_osobluvosti: [''],
            one_results: [''],
            doctors: ['']
        });
        this.data.blankData.subscribe(options => {
            if (options && options.data && Object.keys(options.data).length !== 0) {
                this.form.patchValue(options.data);
            }
        });
    }
    printCurrentPage() {
        if (this.form.valid) {
            const value = this.form.value;
            this.data.updateData(Object.assign(Object.assign({}, this.options), { data: value, structure: _shared_structures_uzd_protocol_one_uz_structure__WEBPACK_IMPORTED_MODULE_2__["UzdProtocolOneUzStructure"], route: 'blank/uzd-protocol-one-uz' }));
            this.router.navigateByUrl('/print');
        }
    }
}
UzdProtocolOneUzComponent.ɵfac = function UzdProtocolOneUzComponent_Factory(t) { return new (t || UzdProtocolOneUzComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__["PrintDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
UzdProtocolOneUzComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UzdProtocolOneUzComponent, selectors: [["app-uzd-protocol-one-uz"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 292, vars: 233, consts: [["id", "uzd-protocol", 1, "blank-layout", 3, "ngStyle"], [1, "title"], [3, "formGroup"], [1, "clr-row"], [1, "clr-col-sm-12"], ["clrInput", "", "formControlName", "one_date", 3, "ngStyle"], [1, "clr-col-sm-12", "full-width-input"], [3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_pib", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_om", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_gastatsia", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_termin", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "one_method", 3, "ngStyle"], ["value", "\u0442\u0440\u0430\u043D\u0441\u0430\u0431\u0434\u043E\u043C\u0456\u043D\u0430\u043B\u044C\u043D\u0430"], ["value", "\u0442\u0440\u0430\u043D\u0441\u0432\u0430\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u0430"], [1, "text-center-container", "text-left", "bold-text"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_dovz", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_shuruna", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_pered_zad", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_structura_biomentiyu", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "one_tonus", 3, "ngStyle"], ["value", "\u043D\u0435 \u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u0438\u0439"], ["value", "\u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u0438\u0439 \u043F\u043E \u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u0441\u0442\u0456\u043D\u0446\u0456"], ["value", "\u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u0438\u0439 \u043F\u043E \u0437\u0430\u0434\u043D\u0456\u0439 \u0441\u0442\u0456\u043D\u0446\u0456"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_local_hipertonus", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_u_poroz_vizial", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_diamert_egg", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "one_kilkist_embrioniv", 3, "ngStyle"], ["value", "\u043E\u0434\u0438\u043D"], ["value", "\u0434\u0432\u0430"], ["value", "\u0442\u0440\u0438"], [1, "clr-row", "button-row"], [1, "clr-col-sm-12", "button-left"], [1, "btn", "btn-primary", 3, "click"], ["clrTextarea", "", "name", "description", "formControlName", "one_vidsharuvannya", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_kupriko", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_biparietal", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "one_skull_bones", 3, "ngStyle"], ["value", "\u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u044E\u0442\u044C\u0441\u044F"], ["value", "\u043D\u0435 \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u044E\u0442\u044C\u0441\u044F"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_okruznist", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_ser_diametr", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_dov_stegna", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_komirts_prostir", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_nose_kist", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_hearth", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_hearth_bom", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_chss", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_pered_cherevna", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "one_ruh_ploda", 3, "ngStyle"], ["value", "\u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0430"], ["value", "\u0437\u043D\u0438\u0436\u0435\u043D\u0430"], ["value", "\u0432\u0456\u0434\u0441\u0443\u0442\u043D\u044F"], ["clrTextarea", "", "name", "description", "formControlName", "one_local_horionu", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_tovshuna", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_structura", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_shuyka", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_tserv_canal", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_diam_vnutrishnogo", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_stan_prudatkiv", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "one_osobluvosti", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "one_results", 3, "ngStyle"], [3, "parentForm", "fontSize"], [1, "print-block"], [3, "font", "print", "fontSize"]], template: function UzdProtocolOneUzComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041F.\u0406.\u0411:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "OM:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041F\u043E \u0433\u0435\u0441\u0442\u0430\u0446\u0456\u0457:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0422\u0435\u0440\u043C\u0456\u043D \u043F\u043E\u043B\u043E\u0433\u0456\u0432:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u041C\u0435\u0442\u043E\u0434\u0438\u043A\u0430 \u0441\u043A\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u0442\u0440\u0430\u043D\u0441\u0430\u0431\u0434\u043E\u043C\u0456\u043D\u0430\u043B\u044C\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0442\u0440\u0430\u043D\u0441\u0432\u0430\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u0420\u043E\u0437\u043C\u0456\u0440\u0438 \u043C\u0430\u0442\u043A\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u0434\u043E\u0432\u0436\u0438\u043D\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u0448\u0438\u0440\u0438\u043D\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E-\u0437\u0430\u0434\u043D\u0456\u0439:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0431\u0456\u043E\u043C\u0435\u0442\u0440\u0456\u044E:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u0422\u043E\u043D\u0443\u0441 \u0431\u0456\u043E\u043C\u0435\u0442\u0440\u0456\u044E:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u043D\u0435 \u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u0438\u0439 \u043F\u043E \u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u0441\u0442\u0456\u043D\u0446\u0456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u0438\u0439 \u043F\u043E \u0437\u0430\u0434\u043D\u0456\u0439 \u0441\u0442\u0456\u043D\u0446\u0456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\u043B\u043E\u043A\u0430\u043B\u044C\u043D\u0438\u0439 \u0433\u0456\u043F\u0435\u0440\u0442\u043E\u043D\u0443\u0441:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u0423 \u043F\u043E\u0440\u043E\u0436\u043D\u0438\u043D\u0456 \u043C\u0430\u0442\u043A\u0438 \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u0454\u0442\u044C\u0441\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\u0414\u0456\u0430\u043C\u0435\u0442\u0440 \u043F\u043B\u0456\u0434\u043D\u043E\u0433\u043E \u044F\u0439\u0446\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0435\u043C\u0431\u0440\u0456\u043E\u043D\u0456\u0432:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u043E\u0434\u0438\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\u0434\u0432\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\u0442\u0440\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolOneUzComponent_Template_button_click_114_listener() { return ctx.copyDataToTextArea("\u043D\u0435 \u0432\u0438\u0437\u043D\u0430\u0447\u0430\u044E\u0442\u044C\u0441\u044F", "one_vidsharuvannya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " \u043D\u0435 \u0432\u0438\u0437\u043D\u0430\u0447\u0430\u044E\u0442\u044C\u0441\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolOneUzComponent_Template_button_click_116_listener() { return ctx.copyDataToTextArea("\u0432\u0438\u0437\u043D\u0430\u0447\u0430\u044E\u0442\u044C\u0441\u044F \u0443 \u043E\u0431\u043B\u0430\u0441\u0442\u0456", "one_vidsharuvannya"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " \u0432\u0438\u0437\u043D\u0430\u0447\u0430\u044E\u0442\u044C\u0441\u044F \u0443 \u043E\u0431\u043B\u0430\u0441\u0442\u0456 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\u0414\u0456\u043B\u044F\u043D\u043A\u0438 \u0432\u0456\u0434\u0448\u0430\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043B\u0456\u0434\u043D\u043E\u0433\u043E \u044F\u0439\u0446\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "textarea", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\u0411\u0456\u043E\u043C\u0435\u0442\u0440\u0456\u044F \u043F\u043B\u043E\u0434\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\u041A\u0443\u043F\u0440\u0438\u043A\u043E-\u0442\u0456\u043C'\u044F\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440 (\u041A\u0422\u0420):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "\u0411\u0456\u043F\u0430\u0440\u0456\u0454\u0442\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440(\u0411\u041F\u0420):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "\u041A\u0456\u0441\u0442\u043A\u0438 \u0447\u0435\u0440\u0435\u043F\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "select", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "\u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u044E\u0442\u044C\u0441\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "\u043D\u0435 \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u044E\u0442\u044C\u0441\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "\u041E\u043A\u0440\u0443\u0436\u043D\u0456\u0441\u0442\u044C \u0436\u0438\u0432\u043E\u0442\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "\u0421\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u0434\u0456\u0430\u043C\u0435\u0442\u0440 \u0436\u0438\u0432\u043E\u0442\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "\u0414\u043E\u0432\u0436\u0438\u043D\u0430 \u0441\u0442\u0435\u0433\u043D\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "\u041A\u043E\u043C\u0456\u0440\u0446\u0435\u0432\u0438\u0439 \u043F\u0440\u043E\u0441\u0442\u0456\u0440:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "\u041D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C \u043D\u043E\u0441\u043E\u0432\u043E\u0457 \u043A\u0456\u0441\u0442\u043A\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "\u0421\u0435\u0440\u0446\u0435:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "\u0421\u0435\u0440\u0446\u0435\u0431\u0438\u0442\u0442\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "\u0427\u0421\u0421:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "\u041F\u0435\u0440\u0435\u0434\u043D\u044F \u0447\u0435\u0440\u0435\u0432\u043D\u0430 \u0441\u0442\u0456\u043D\u043A\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "\u0420\u0443\u0445\u043E\u0432\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u0456\u0441\u0442\u044C \u043F\u043B\u043E\u0434\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "select", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "\u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "\u0437\u043D\u0438\u0436\u0435\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "\u0432\u0456\u0434\u0441\u0443\u0442\u043D\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolOneUzComponent_Template_button_click_218_listener() { return ctx.copyDataToTextArea("\u043F\u0435\u0440\u0435\u0434\u043D\u044F", "one_local_horionu"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "\u043F\u0435\u0440\u0435\u0434\u043D\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolOneUzComponent_Template_button_click_220_listener() { return ctx.copyDataToTextArea("\u0437\u0430\u0434\u043D\u044F", "one_local_horionu"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "\u0437\u0430\u0434\u043D\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolOneUzComponent_Template_button_click_222_listener() { return ctx.copyDataToTextArea("\u0434\u043D\u043E", "one_local_horionu"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "\u0434\u043D\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolOneUzComponent_Template_button_click_224_listener() { return ctx.copyDataToTextArea("\u043F\u0440\u0430\u0432\u0430", "one_local_horionu"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "\u043F\u0440\u0430\u0432\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolOneUzComponent_Template_button_click_226_listener() { return ctx.copyDataToTextArea("\u043B\u0456\u0432\u0430", "one_local_horionu"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "\u043B\u0456\u0432\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolOneUzComponent_Template_button_click_228_listener() { return ctx.copyDataToTextArea("\u0431\u043E\u043A\u043E\u0432\u0430", "one_local_horionu"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "\u0431\u043E\u043A\u043E\u0432\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "\u041B\u043E\u043A\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u0445\u043E\u0440\u0456\u043E\u043D\u0443:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "textarea", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "\u0442\u043E\u0432\u0449\u0438\u043D\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "\u0428\u0438\u0439\u043A\u0430 \u043C\u0430\u0442\u043A\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "\u0426\u0435\u0440\u0432\u0456\u043A\u0430\u043B\u044C\u043D\u0438\u0439 \u043A\u0430\u043D\u0430\u043B:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "\u0414\u0456\u0430\u043C\u0435\u0442\u0440 \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u044C\u043E\u0433\u043E \u0432\u0456\u0447\u043A\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "\u0421\u0442\u0430\u043D \u043F\u0440\u0438\u0434\u0430\u0442\u043A\u0456\u0432 \u043C\u0430\u0442\u043A\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "\u041E\u0441\u043E\u0431\u043B\u0438\u0432\u043E\u0441\u0442\u0456:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolOneUzComponent_Template_button_click_279_listener() { return ctx.copyDataToTextArea("\u0412\u0435\u043B\u0438\u0447\u0438\u043D\u0430 \u043F\u043B\u043E\u0434\u0443 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454 \u043D\u0430  \u0442.  \u0434.", "one_results"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "\u0412\u0435\u043B\u0438\u0447\u0438\u043D\u0430 \u043F\u043B\u043E\u0434\u0443 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454 \u043D\u0430 \u0442. \u0434.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "\u0412\u0438\u0441\u043D\u043E\u0432\u043E\u043A \u0423\u0417\u0414:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "textarea", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "app-doctors", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "app-blank-actions", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("print", function UzdProtocolOneUzComponent_Template_app_blank_actions_print_291_listener() { return ctx.printCurrentPage(); })("fontSize", function UzdProtocolOneUzComponent_Template_app_blank_actions_fontSize_291_listener($event) { return ctx.updateFontSize($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](81, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.options.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](83, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](85, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](87, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](89, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](91, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](93, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](95, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](97, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](99, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](101, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](103, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](105, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](107, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](109, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](111, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](113, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](115, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](117, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](119, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](121, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](123, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](125, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](127, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](129, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](131, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](133, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](135, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](137, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](139, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](141, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](143, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](145, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](147, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](149, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](151, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](153, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](155, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](157, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](159, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](161, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](163, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](165, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](167, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](169, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](171, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](173, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](175, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](177, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](179, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](181, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](183, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](185, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](187, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](189, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](191, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](193, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](195, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](197, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](199, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](201, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](203, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](205, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](207, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](209, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](211, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](213, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](215, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](217, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](219, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](221, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](223, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](225, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](227, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](229, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](231, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentForm", ctx.form)("fontSize", ctx.options.fontSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("font", ctx.options.fontSize);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrLabel"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrSelectContainer"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrTextareaContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrTextarea"], _shared_components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__["DoctorsComponent"], _shared_components_blank_actions_blank_actions_component__WEBPACK_IMPORTED_MODULE_10__["BlankActionsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JsYW5rcy91emQtcHJvdG9jb2wtb25lLXV6L3V6ZC1wcm90b2NvbC1vbmUtdXouY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UzdProtocolOneUzComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-uzd-protocol-one-uz',
                templateUrl: './uzd-protocol-one-uz.component.html',
                styleUrls: ['./uzd-protocol-one-uz.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"] }, { type: _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__["PrintDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/blanks/uzd-protocol-two-uz/uzd-protocol-two-uz.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/blanks/uzd-protocol-two-uz/uzd-protocol-two-uz.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UzdProtocolTwoUzComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UzdProtocolTwoUzComponent", function() { return UzdProtocolTwoUzComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_blank_base_blank_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/blank-base/blank-base.component */ "./src/app/shared/components/blank-base/blank-base.component.ts");
/* harmony import */ var _shared_structures_uzd_protocol_two_uz_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/structures/uzd-protocol-two-uz.structure */ "./src/app/shared/structures/uzd-protocol-two-uz.structure.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/print-data.service */ "./src/app/shared/services/print-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _shared_components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/doctors/doctors.component */ "./src/app/shared/components/doctors/doctors.component.ts");
/* harmony import */ var _shared_components_blank_actions_blank_actions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/blank-actions/blank-actions.component */ "./src/app/shared/components/blank-actions/blank-actions.component.ts");












const _c0 = function (a0) { return { "font-size.px": a0 }; };
class UzdProtocolTwoUzComponent extends _shared_components_blank_base_blank_base_component__WEBPACK_IMPORTED_MODULE_1__["BlankBaseComponent"] {
    constructor(fb, date, data, router) {
        super(fb, date, data);
        this.router = router;
        super.ngOnInit();
    }
    ngOnInit() {
        this.options = {
            title: `ПРОТОКОЛ
      ультразвукового дослідження вагітних
      ІІ УЗ-обстеження (18-21 тиждень)`,
            fontSize: 16,
            showDoctors: true,
            borderInValues: false,
            strongTitles: true,
            showEmptyRows: true
        };
        this.form = this.fb.group({
            two_date: [this.currentDate],
            two_pib: [''],
            two_om: [''],
            two_gastatsia: ['т. д.'],
            two_termin: [''],
            two_vaga: [''],
            two_plodiv: ['один'],
            two_poloz: ['поздовжнє'],
            two_pred: ['головне'],
            two_sertse: ['ритмічне'],
            two_chss: ['уд/хв'],
            two_moves: ['+'],
            two_sered_exo: [' мм'],
            two_zadni_roga: [' мм'],
            two_bok_sh_mozku: [' мм'],
            two_big_tsusterna: [' мм'],
            two_diafragma: ['б/о'],
            two_perednya_cherevna: ['цілісна, пупочне -  мм.'],
            two_kushechnuk: ['ехогенність: не підвищена, петлі не розширені'],
            two_stovbur: ['б/о'],
            // tslint:disable-next-line:max-line-length
            two_hearth: ['положення нормальне, 4-камерний зріз серця: візуалізується:  мм, хід магістральних судин серця правильний: легенева артерія -  мм, аорта -  мм.'],
            two_bpr: [''],
            two_lpr: [''],
            two_tsefal_index: [''],
            two_head_okr: [''],
            two_setch_mikhur: [''],
            two_mozochok: [''],
            two_intraokul_rozmir: [''],
            two_sdgk: [''],
            two_diam_zuv: [''],
            two_okr_zuvota: [''],
            two_shlunok: [''],
            two_nurka_right: [''],
            two_nurka_left: [''],
            two_dovz_stegna: [''],
            two_vel_bedr_kist: [''],
            two_dozv_mal_bedr_kist: [''],
            two_stopa: [''],
            two_dovz_plecha: [''],
            two_dovz_likt: [''],
            two_sertse_mm: [''],
            two_dovz_promenevoi: [''],
            two_kust: [''],
            two_luts_rozshilunu: ['не візуалізуються'],
            two_nosova_kistka: [' мм'],
            two_rozmir_skladku: [' мм'],
            two_kilkist_vod: [''],
            two_local_plats: [''],
            two_nuz_platsenty: [' мм від вн. вічка'],
            two_tov_platsenty: [' мм'],
            two_str_platsenty: [''],
            two_revers_krovotok: ['не визначається'],
            two_kilk_sudun: ['3'],
            two_obv_pupovunu: ['ні'],
            two_pered_sudun: ['ні'],
            two_obol_prukrip: ['ні'],
            two_shuyka_matku: [' мм'],
            two_vnut_vichko: ['замкнуте'],
            two_pidozra: [''],
            two_results: [''],
            two_recomends: [''],
            doctors: ['']
        });
        this.data.blankData.subscribe(options => {
            if (options && options.data && Object.keys(options.data).length !== 0) {
                this.form.patchValue(options.data);
            }
        });
    }
    printCurrentPage() {
        if (this.form.valid) {
            const value = this.form.value;
            this.data.updateData(Object.assign(Object.assign({}, this.options), { data: value, structure: _shared_structures_uzd_protocol_two_uz_structure__WEBPACK_IMPORTED_MODULE_2__["UzdProtocolTwoUzStructure"], route: 'blank/uzd-protocol-two-uz' }));
            this.router.navigateByUrl('/print');
        }
    }
}
UzdProtocolTwoUzComponent.ɵfac = function UzdProtocolTwoUzComponent_Factory(t) { return new (t || UzdProtocolTwoUzComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__["PrintDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
UzdProtocolTwoUzComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UzdProtocolTwoUzComponent, selectors: [["app-uzd-protocol-two-uz"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 512, vars: 383, consts: [["id", "uzd-protocol", 1, "blank-layout", 3, "ngStyle"], [1, "title"], [3, "formGroup"], [1, "clr-row"], [1, "clr-col-sm-12"], ["clrInput", "", "formControlName", "two_date", 3, "ngStyle"], [1, "clr-col-sm-12", "full-width-input"], [3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_pib", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_om", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_gastatsia", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_termin", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_vaga", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "two_plodiv", 3, "ngStyle"], ["value", "\u043E\u0434\u0438\u043D"], ["value", "\u0434\u0432\u0430"], ["value", "\u0442\u0440\u0438"], ["clrSelect", "", "name", "options", "formControlName", "two_poloz", 3, "ngStyle"], ["value", "\u043F\u043E\u0437\u0434\u043E\u0432\u0436\u043D\u0454"], ["value", "\u043F\u043E\u043F\u0435\u0440\u0435\u0447\u043D\u0435"], ["value", "\u043A\u043E\u0441\u0435"], ["value", "\u043D\u0435\u0441\u0442\u0456\u0439\u043A\u0435"], ["clrSelect", "", "name", "options", "formControlName", "two_pred", 3, "ngStyle"], ["value", "\u0433\u043E\u043B\u043E\u0432\u043D\u0435"], ["value", "\u0441\u0456\u0434\u043D\u0438\u0447\u043D\u0435"], ["clrSelect", "", "name", "options", "formControlName", "two_sertse", 3, "ngStyle"], ["value", "\u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435"], ["value", "\u0430\u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_chss", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_moves", 3, "ngStyle"], [1, "table"], [1, "left", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_bpr", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_nurka_right", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_lpr", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_nurka_left", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_head_okr", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_setch_mikhur", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_tsefal_index", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_dovz_stegna", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_mozochok", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_vel_bedr_kist", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_intraokul_rozmir", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_dozv_mal_bedr_kist", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_sdgk", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_stopa", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_diam_zuv", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_dovz_plecha", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_okr_zuvota", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_dovz_likt", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_sertse_mm", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_dovz_promenevoi", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_shlunok", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_kust", 3, "ngStyle"], [1, "text-center-container", "text-left", "bold-text"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_sered_exo", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_bok_sh_mozku", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_big_tsusterna", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_zadni_roga", 3, "ngStyle"], [1, "clr-row", "button-row"], [1, "clr-col-sm-12", "button-left"], [1, "btn", "btn-primary", 3, "click"], ["clrTextarea", "", "name", "description", "formControlName", "two_stovbur", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "two_hearth", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "two_diafragma", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "two_kushechnuk", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "two_perednya_cherevna", 3, "ngStyle"], [1, "text-small-padding", "text-left", "bold-text"], ["clrTextarea", "", "name", "description", "formControlName", "two_luts_rozshilunu", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_nosova_kistka", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_rozmir_skladku", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "two_kilkist_vod", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "two_local_plats", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_nuz_platsenty", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_tov_platsenty", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_str_platsenty", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_revers_krovotok", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_kilk_sudun", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "two_obv_pupovunu", 3, "ngStyle"], ["value", "\u0454"], ["value", "\u043D\u0456"], ["clrSelect", "", "name", "options", "formControlName", "two_pered_sudun", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "two_obol_prukrip", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_shuyka_matku", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_vnut_vichko", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "two_pidozra", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "two_results", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "two_recomends", 3, "ngStyle"], [3, "parentForm", "fontSize"], [1, "print-block"], [3, "font", "print", "fontSize"]], template: function UzdProtocolTwoUzComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041F.\u0406.\u0411:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "OM:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041F\u043E \u0433\u0435\u0441\u0442\u0430\u0446\u0456\u0457:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0422\u0435\u0440\u043C\u0456\u043D \u043F\u043E\u043B\u043E\u0433\u0456\u0432:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0412\u0430\u0433\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u043B\u043E\u0434\u0456\u0432:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u043E\u0434\u0438\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u0434\u0432\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u0442\u0440\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F \u043F\u0440\u043E\u0434\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u043F\u043E\u0432\u0437\u0434\u043E\u0432\u0436\u043D\u0454");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u043F\u043E\u043F\u0435\u0440\u0435\u0447\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u043A\u043E\u0441\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u043D\u0435\u0441\u0442\u0456\u0439\u043A\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u041F\u0440\u0435\u0434\u043B\u0435\u0436\u0430\u043D\u043D\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u0433\u043E\u043B\u043E\u0432\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u0441\u0456\u0434\u043D\u0438\u0447\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u0421\u0435\u0440\u0446\u0435\u0431\u0438\u0442\u0442\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\u0430\u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\u0427\u0421\u0421:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\u0420\u0443\u0445\u0438 \u043F\u043B\u043E\u0434\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "table", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "caption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " \u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438 \u043F\u043B\u043E\u0434\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438 \u043F\u043B\u043E\u0434\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\u043C\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438 \u043F\u043B\u043E\u0434\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\u043C\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\u0411\u0456\u043F\u0430\u0440\u0456\u0454\u0442\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440 (\u0411\u041F\u0420)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\u041D\u0438\u0440\u043A\u0430 \u043F\u0440\u0430\u0432\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\u041B\u043E\u0431\u043D\u043E-\u043F\u043E\u0442\u0438\u043B\u0438\u0447\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440 (\u041B\u041F\u0420)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "\u041D\u0438\u0440\u043A\u0430 \u0437\u043B\u0456\u0432\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "\u041E\u043A\u0440\u0443\u0436\u043D\u0456\u0441\u0442\u044C \u0433\u043E\u043B\u043E\u0432\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\u0421\u0435\u0447\u043E\u0432\u0438\u0439 \u043C\u0456\u0445\u0443\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "\u0426\u0435\u0444\u0430\u043B\u0456\u0447\u043D\u0438\u0439 \u0456\u043D\u0434\u0435\u043A\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "\u0414\u043E\u0432\u0436\u0438\u043D\u0438 \u0441\u0442\u0435\u0433\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\u041C\u043E\u0437\u043E\u0447\u043E\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "\u0414\u043E\u0432\u0436\u0438\u043D\u0430 \u0432\u0435\u043B\u0438\u043A\u043E\u0457 \u0431\u0435\u0434\u0440\u043E\u0432\u043E\u0457 \u043A\u0456\u0441\u0442\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "\u0406\u043D\u0442\u0440\u0430\u043E\u043A\u0443\u043B\u044F\u0440\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "\u0414\u043E\u0432\u0436\u0438\u043D\u0430 \u043C\u0430\u043B\u043E\u0457 \u0431\u0435\u0434\u0440\u043E\u0432\u043E\u0457 \u043A\u0456\u0441\u0442\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "\u0414\u0456\u0430\u043C\u0435\u0442\u0440 \u0433\u0440\u0443\u0434\u043D\u043E\u0457 \u043A\u043B\u0456\u0442\u0438\u043D\u0438 (\u0421\u0414\u0413\u041A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "\u0421\u0442\u043E\u043F\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "\u0421\u0435\u0440\u0435\u0434. \u0434\u0456\u0430\u043C\u0435\u0442\u0440 \u0436\u0438\u0432\u043E\u0442\u0430(\u0421\u0414\u0416)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "\u0414\u043E\u0432\u0436\u0438\u043D\u0430 \u043F\u043B\u0435\u0447\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "\u041E\u043A\u0440\u0443\u0436\u043D\u0456\u0441\u0442\u044C \u0436\u0438\u0432\u043E\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "\u0414\u043E\u0432\u0436\u0438\u043D\u0430 \u043B\u0456\u043A\u0442\u044C\u043E\u0432\u043E\u0457 \u043A\u0456\u0441\u0442\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "\u0421\u0435\u0440\u0446\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "\u0414\u043E\u0432\u0436\u0438\u043D\u0430 \u043F\u0440\u043E\u043C\u0435\u043D\u0435\u0432\u043E\u0457 \u043A\u0456\u0441\u0442\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "\u0428\u043B\u0443\u043D\u043E\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "\u041A\u0438\u0441\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043C\u043E\u0437\u043A\u0443:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "\u0421\u0435\u0440\u0435\u0434\u0438\u043D\u043D\u0435 \u041C-\u0435\u0445\u043E:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "\u0411\u043E\u043A\u043E\u0432\u0456 \u0448\u043B\u0443\u043D\u043E\u0447\u043A\u0438 \u043C\u043E\u0437\u043A\u0443:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "\u0412\u0435\u043B\u0438\u043A\u0430 \u0446\u0438\u0441\u0442\u0435\u0440\u043D\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "\u0417\u0430\u0434\u043D\u0456 \u0440\u043E\u0433\u0430 \u0431\u043E\u043A\u043E\u0432\u0438\u0445 \u0448\u043B\u0443\u043D\u043E\u0447\u043A\u0456\u0432:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_263_listener() { return ctx.copyDataToTextArea("\u0431/\u043E", "two_stovbur"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, " \u0431/\u043E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_265_listener() { return ctx.copyDataToTextArea("\u043C\u043C.", "two_stovbur"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " \u043C\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "\u0425\u0440\u0435\u0431\u0442\u043E\u0432\u0438\u0439 \u0441\u0442\u043E\u0432\u0431\u0443\u0440:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "textarea", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_274_listener() { return ctx.copyDataToTextArea("\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F", "two_hearth"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, " \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_276_listener() { return ctx.copyDataToTextArea("\u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0435", "two_hearth"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, " \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_278_listener() { return ctx.copyDataToTextArea("\u0430\u043D\u043E\u043C\u0430\u043B\u044C\u043D\u0435", "two_hearth"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " \u0430\u043D\u043E\u043C\u0430\u043B\u044C\u043D\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_280_listener() { return ctx.copyDataToTextArea(", 4-\u043A\u0430\u043C\u0435\u0440\u043D\u0438\u0439 \u0437\u0440\u0456\u0437 \u0441\u0435\u0440\u0446\u044F:", "two_hearth"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, " 4-\u043A\u0430\u043C\u0435\u0440\u043D\u0438\u0439 \u0437\u0440\u0456\u0437 \u0441\u0435\u0440\u0446\u044F: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_282_listener() { return ctx.copyDataToTextArea("\u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u044E\u0442\u044C\u0441\u044F", "two_hearth"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, " \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u044E\u0442\u044C\u0441\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_284_listener() { return ctx.copyDataToTextArea("\u0447\u0456\u0442\u043A\u043E \u043D\u0435 \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u044E\u0442\u044C\u0441\u044F", "two_hearth"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, " \u0447\u0456\u0442\u043A\u043E \u043D\u0435 \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u044E\u0442\u044C\u0441\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_286_listener() { return ctx.copyDataToTextArea(", \u043A\u043B\u0430\u043F\u0430\u043D\u0438:", "two_hearth"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, " \u043A\u043B\u0430\u043F\u0430\u043D\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_288_listener() { return ctx.copyDataToTextArea("\u043D\u043E\u0440\u043C\u0430", "two_hearth"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, " \u043D\u043E\u0440\u043C\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_290_listener() { return ctx.copyDataToTextArea(", \u043A\u0430\u043C\u0435\u0440\u0438:", "two_hearth"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, " \u043A\u0430\u043C\u0435\u0440\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_292_listener() { return ctx.copyDataToTextArea(", \u0445\u0456\u0434 \u043C\u0430\u0433\u0456\u0441\u0442\u0440\u0430\u043B\u044C\u043D\u0438\u0445 \u0441\u0443\u0434\u0438\u043D \u0441\u0435\u0440\u0446\u044F", "two_hearth"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, " \u0445\u0456\u0434 \u043C\u0430\u0433\u0456\u0441\u0442\u0440\u0430\u043B\u044C\u043D\u0438\u0445 \u0441\u0443\u0434\u0438\u043D \u0441\u0435\u0440\u0446\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_294_listener() { return ctx.copyDataToTextArea("\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439", "two_hearth"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, " \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_296_listener() { return ctx.copyDataToTextArea("\u043D\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439", "two_hearth"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, " \u043D\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_298_listener() { return ctx.copyDataToTextArea("\u043B\u0435\u0433\u0435\u043D\u0435\u0432\u0430 \u0430\u0440\u0442\u0435\u0440\u0456\u044F  \u043C\u043C,", "two_hearth"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, " \u043B\u0435\u0433\u0435\u043D\u0435\u0432\u0430 \u0430\u0440\u0442\u0435\u0440\u0456\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_300_listener() { return ctx.copyDataToTextArea("\u0430\u043E\u0440\u0442\u0430  \u043C\u043C", "two_hearth"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, " \u0430\u043E\u0440\u0442\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "\u0421\u0435\u0440\u0446\u0435:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "textarea", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_309_listener() { return ctx.copyDataToTextArea("\u0431/\u043E", "two_diafragma"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, " \u0431/\u043E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_311_listener() { return ctx.copyDataToTextArea("\u043F\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F", "two_diafragma"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, " \u043F\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_313_listener() { return ctx.copyDataToTextArea("\u043D\u0435 \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u044E\u0442\u044C\u0441\u044F", "two_diafragma"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, " \u043D\u0435 \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u044E\u0442\u044C\u0441\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "\u0414\u0456\u0430\u0444\u0440\u0430\u0433\u043C\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "textarea", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_322_listener() { return ctx.copyDataToTextArea("\u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0456\u0441\u0442\u044C:", "two_kushechnuk"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, " \u0435\u0445\u043E\u0433\u0435\u043D\u043D\u0456\u0441\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_324_listener() { return ctx.copyDataToTextArea("\u043D\u0435 \u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u0430", "two_kushechnuk"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, " \u043D\u0435 \u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_326_listener() { return ctx.copyDataToTextArea("\u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u0430", "two_kushechnuk"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, " \u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_328_listener() { return ctx.copyDataToTextArea(", \u043F\u0435\u0442\u043B\u0456", "two_kushechnuk"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, " \u043F\u0435\u0442\u043B\u0456 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_330_listener() { return ctx.copyDataToTextArea("\u043D\u0435 \u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u0456", "two_kushechnuk"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, " \u043D\u0435 \u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u0456 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_332_listener() { return ctx.copyDataToTextArea("\u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u0456 \u0434\u043E  \u043C\u043C", "two_kushechnuk"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, " \u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u0456 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "\u041A\u0438\u0448\u0435\u0447\u043D\u0438\u043A:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "textarea", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_341_listener() { return ctx.copyDataToTextArea("\u0446\u0456\u043B\u0456\u0441\u043D\u0430", "two_perednya_cherevna"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, " \u0446\u0456\u043B\u0456\u0441\u043D\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "\u041F\u0435\u0440\u0435\u0434\u043D\u044F \u0447\u0435\u0440\u0435\u0432\u043D\u0430 \u0441\u0442\u0456\u043D\u043A\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "textarea", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043E\u0431\u043B\u0438\u0447\u0447\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_355_listener() { return ctx.copyDataToTextArea("\u043D\u0435 \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u044E\u0442\u044C\u0441\u044F", "two_luts_rozshilunu"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, " \u043D\u0435 \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u044E\u0442\u044C\u0441\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_357_listener() { return ctx.copyDataToTextArea("\u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u044E\u0442\u044C\u0441\u044F", "two_luts_rozshilunu"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, " \u0432\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0443\u044E\u0442\u044C\u0441\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "\u041B\u0438\u0446\u044C\u043E\u0432\u0456 \u0440\u043E\u0437\u0449\u0456\u043B\u0438\u043D\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "textarea", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "\u041D\u043E\u0441\u043E\u0432\u0430 \u043A\u0456\u0441\u0442\u043A\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](369, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "\u0420\u043E\u0437\u043C\u0456\u0440 \u0448\u0438\u0439\u043D\u043E\u0457 \u0441\u043A\u043B\u0430\u0434\u043A\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](375, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_378_listener() { return ctx.copyDataToTextArea("\u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0430", "two_kilkist_vod"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, " \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_380_listener() { return ctx.copyDataToTextArea("\u0437\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u0430", "two_kilkist_vod"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, " \u0437\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_382_listener() { return ctx.copyDataToTextArea("\u0437\u043C\u0435\u043D\u0448\u0435\u043D\u0430", "two_kilkist_vod"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, " \u0437\u043C\u0435\u043D\u0448\u0435\u043D\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_384_listener() { return ctx.copyDataToTextArea("\u0410\u0406", "two_kilkist_vod"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, " \u0410\u0406 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043D\u0430\u0432\u043A\u043E\u043B\u043E\u043F\u043B\u0456\u0434\u043D\u0438\u0445 \u0432\u043E\u0434:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](390, "textarea", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_393_listener() { return ctx.copyDataToTextArea("\u043F\u0435\u0440\u0435\u0434\u043D\u044F", "two_local_plats"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, " \u043F\u0435\u0440\u0435\u0434\u043D\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_395_listener() { return ctx.copyDataToTextArea("\u0437\u0430\u0434\u043D\u044F", "two_local_plats"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, " \u0437\u0430\u0434\u043D\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_397_listener() { return ctx.copyDataToTextArea("\u043F\u0440\u0430\u0432\u0430 \u0431\u043E\u043A\u043E\u0432\u0430", "two_local_plats"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, " \u043F\u0440\u0430\u0432\u0430 \u0431\u043E\u043A\u043E\u0432\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_399_listener() { return ctx.copyDataToTextArea("\u043B\u0456\u0432\u0430 \u0431\u043E\u043A\u043E\u0432\u0430 \u0441\u0442\u0456\u043D\u043A\u0438", "two_local_plats"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, " \u043B\u0456\u0432\u0430 \u0431\u043E\u043A\u043E\u0432\u0430 \u0441\u0442\u0456\u043D\u043A\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_401_listener() { return ctx.copyDataToTextArea("\u0434\u043D\u043E \u043C\u0430\u0442\u043A\u0438", "two_local_plats"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, " \u0434\u043D\u043E \u043C\u0430\u0442\u043A\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "\u041B\u043E\u043A\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u043F\u043B\u0430\u0446\u0435\u043D\u0442\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](407, "textarea", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "\u041D\u0438\u0436\u043D\u0456\u0439 \u043A\u0440\u0430\u0439 \u043F\u043B\u0430\u0446\u0435\u043D\u0442\u0438 \u043D\u0430 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](413, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "\u0422\u043E\u0432\u0449\u0438\u043D\u0430 \u043F\u043B\u0430\u0446\u0435\u043D\u0442\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](419, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043F\u043B\u0430\u0446\u0435\u043D\u0442\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](425, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "\u0420\u0435\u0432\u0435\u0440\u0441\u043D\u0438\u0439 \u043A\u0440\u043E\u0432\u043E\u0442\u043E\u043A \u0443 \u0432\u0435\u043D\u043E\u0437\u043D\u0456\u0439 \u043F\u0440\u043E\u0442\u043E\u0446\u0456:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](431, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "\u041F\u0443\u043F\u043E\u0432\u0438\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0441\u0443\u0434\u0438\u043D:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](442, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "\u041E\u0431\u0432\u0438\u0442\u0442\u044F \u043F\u0443\u043F\u043E\u0432\u0438\u043D\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "select", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "option", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "\u0454");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "option", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "\u043D\u0456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, "\u041F\u0435\u0440\u0435\u0434\u043B\u0435\u0436\u0430\u043D\u043D\u044F \u0441\u0443\u0434\u0438\u043D \u043F\u0443\u043F\u043E\u0432\u0438\u043D\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "select", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "option", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "\u0454");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "option", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "\u043D\u0456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "\u041E\u0431\u043E\u043B\u043E\u043D\u043A\u043E\u0432\u0435 \u043F\u0440\u0438\u043A\u0440\u0456\u043F\u043B\u0435\u043D\u043D\u044F \u0441\u0443\u0434\u0438\u043D:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "select", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "option", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "\u0454");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "option", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, "\u043D\u0456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "\u0428\u0438\u0439\u043A\u0430 \u043C\u0430\u0442\u043A\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](478, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "\u0412\u043D.\u0432\u0456\u0447\u043A\u043E:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](484, "input", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, "\u041F\u0456\u0434\u043E\u0437\u0440\u0430 \u0430\u0431\u043E \u043D\u0430\u044F\u0432\u043D\u0456 \u0432\u0430\u0434\u0438 \u0440\u043E\u0437\u0432\u0438\u0442\u043A\u0443 \u043F\u043B\u043E\u0434\u0430 (\u0412\u0412\u0420):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](490, "input", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolTwoUzComponent_Template_button_click_493_listener() { return ctx.copyDataToTextArea("\u0412\u0435\u043B\u0438\u0447\u0438\u043D\u0430 \u043F\u043B\u043E\u0434\u0443 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454 \u043D\u0430  \u0442. \u0434.", "two_results"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, " \u0432\u0435\u043B\u0438\u0447\u0438\u043D\u0430 \u043F\u043B\u043E\u0434\u0443 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454 \u043D\u0430 \u0442. \u0434. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498, "\u0412\u0438\u0441\u043D\u043E\u0432\u043E\u043A \u0423\u0417\u0414:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](499, "textarea", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0456\u0457:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](505, "textarea", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](508, "app-doctors", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](510, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "app-blank-actions", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("print", function UzdProtocolTwoUzComponent_Template_app_blank_actions_print_511_listener() { return ctx.printCurrentPage(); })("fontSize", function UzdProtocolTwoUzComponent_Template_app_blank_actions_fontSize_511_listener($event) { return ctx.updateFontSize($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](131, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.options.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](133, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](135, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](137, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](139, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](141, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](143, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](145, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](147, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](149, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](151, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](153, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](155, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](157, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](159, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](161, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](163, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](165, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](167, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](169, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](171, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](173, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](175, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](177, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](179, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](181, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](183, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](185, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](187, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](189, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](191, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](193, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](195, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](197, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](199, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](201, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](203, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](205, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](207, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](209, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](211, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](213, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](215, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](217, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](219, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](221, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](223, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](225, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](227, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](229, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](231, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](233, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](235, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](237, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](239, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](241, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](243, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](245, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](247, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](249, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](251, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](253, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](255, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](257, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](259, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](261, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](263, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](265, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](267, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](269, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](271, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](273, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](275, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](277, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](279, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](281, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](283, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](285, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](287, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](289, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](291, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](293, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](295, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](297, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](299, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](301, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](303, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](305, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](307, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](309, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](311, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](313, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](315, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](317, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](319, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](321, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](323, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](325, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](327, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](329, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](331, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](333, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](335, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](337, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](339, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](341, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](343, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](345, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](347, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](349, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](351, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](353, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](355, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](357, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](359, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](361, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](363, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](365, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](367, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](369, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](371, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](373, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](375, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](377, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](379, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](381, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentForm", ctx.form)("fontSize", ctx.options.fontSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("font", ctx.options.fontSize);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrLabel"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrSelectContainer"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrTextareaContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrTextarea"], _shared_components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__["DoctorsComponent"], _shared_components_blank_actions_blank_actions_component__WEBPACK_IMPORTED_MODULE_10__["BlankActionsComponent"]], styles: [".table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n.table[_ngcontent-%COMP%]   .clr-form-control[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nhc2hhL0RldmVsb3BtZW50L2dhbGRvYy9zcmMvYXBwL3BhZ2VzL2JsYW5rcy91emQtcHJvdG9jb2wtdHdvLXV6L3V6ZC1wcm90b2NvbC10d28tdXouY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JsYW5rcy91emQtcHJvdG9jb2wtdHdvLXV6L3V6ZC1wcm90b2NvbC10d28tdXouY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0FDQUo7QURFRTtFQUNFLGFBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JsYW5rcy91emQtcHJvdG9jb2wtdHdvLXV6L3V6ZC1wcm90b2NvbC10d28tdXouY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xuICB0ZCB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cbiAgLmNsci1mb3JtLWNvbnRyb2wge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbn1cbiIsIi50YWJsZSB0ZCB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLnRhYmxlIC5jbHItZm9ybS1jb250cm9sIHtcbiAgbWFyZ2luLXRvcDogMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UzdProtocolTwoUzComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-uzd-protocol-two-uz',
                templateUrl: './uzd-protocol-two-uz.component.html',
                styleUrls: ['./uzd-protocol-two-uz.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"] }, { type: _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__["PrintDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/blanks/uzd-protocol/uzd-protocol.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/blanks/uzd-protocol/uzd-protocol.component.ts ***!
  \*********************************************************************/
/*! exports provided: UzdProtocolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UzdProtocolComponent", function() { return UzdProtocolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_blank_base_blank_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/blank-base/blank-base.component */ "./src/app/shared/components/blank-base/blank-base.component.ts");
/* harmony import */ var _shared_structures_uzd_protocol_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/structures/uzd-protocol.structure */ "./src/app/shared/structures/uzd-protocol.structure.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/print-data.service */ "./src/app/shared/services/print-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _shared_components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/doctors/doctors.component */ "./src/app/shared/components/doctors/doctors.component.ts");
/* harmony import */ var _shared_components_blank_actions_blank_actions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/blank-actions/blank-actions.component */ "./src/app/shared/components/blank-actions/blank-actions.component.ts");












const _c0 = function (a0) { return { "font-size.px": a0 }; };
class UzdProtocolComponent extends _shared_components_blank_base_blank_base_component__WEBPACK_IMPORTED_MODULE_1__["BlankBaseComponent"] {
    constructor(fb, date, data, router) {
        super(fb, date, data);
        this.router = router;
        super.ngOnInit();
    }
    ngOnInit() {
        this.options = {
            title: `ПП \"Гал - Діагност \"
      Протокол ультразвукового дослідження`,
            fontSize: 18,
            showDoctors: true,
            borderInValues: true,
            strongTitles: true,
            showEmptyRows: true
        };
        this.form = this.fb.group({
            pro_date: [this.currentDate],
            pro_pib: [''],
            pro_sertse: ['ритмічне'],
            pro_chss: ['+'],
            pro_moves: ['+'],
            pro_dilyanku: [''],
            pro_tonus: [''],
            doctors: ['']
        });
        this.data.blankData.subscribe(options => {
            if (options && options.data && Object.keys(options.data).length !== 0) {
                this.form.patchValue(options.data);
            }
        });
    }
    printCurrentPage() {
        if (this.form.valid) {
            const value = this.form.value;
            this.data.updateData(Object.assign(Object.assign({}, this.options), { data: value, structure: _shared_structures_uzd_protocol_structure__WEBPACK_IMPORTED_MODULE_2__["UzdProtocolStructure"], route: 'blank/uzd-protocol' }));
            this.router.navigateByUrl('/print');
        }
    }
}
UzdProtocolComponent.ɵfac = function UzdProtocolComponent_Factory(t) { return new (t || UzdProtocolComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__["PrintDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
UzdProtocolComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UzdProtocolComponent, selectors: [["app-uzd-protocol"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 67, vars: 47, consts: [["id", "uzd-protocol", 1, "blank-layout", 3, "ngStyle"], [1, "title"], [3, "formGroup"], [1, "clr-row"], [1, "clr-col-sm-12"], ["clrInput", "", "formControlName", "pro_date", 3, "ngStyle"], [1, "clr-col-sm-12", "full-width-input"], [3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "pro_pib", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "pro_sertse", 3, "ngStyle"], ["value", "\u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435"], ["value", "\u0430\u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "pro_chss", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "pro_moves", 3, "ngStyle"], [1, "clr-row", "button-row"], [1, "clr-col-sm-12", "button-left"], [1, "btn", "btn-primary", 3, "click"], ["clrTextarea", "", "name", "description", "formControlName", "pro_dilyanku", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "pro_tonus", 3, "ngStyle"], [3, "parentForm", "fontSize"], [1, "print-block"], [3, "font", "print", "fontSize"]], template: function UzdProtocolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041F.\u0406.\u0411:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0421\u0435\u0440\u0446\u0435\u0431\u0438\u0442\u0442\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0430\u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0427\u0421\u0421:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u0420\u0443\u0445\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolComponent_Template_button_click_37_listener() { return ctx.copyDataToTextArea("\u043D\u0435 \u0432\u0438\u0437\u043D\u0430\u0447\u0430\u044E\u0442\u044C\u0441\u044F", "pro_dilyanku"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u043D\u0435 \u0432\u0438\u0437\u043D\u0430\u0447\u0430\u044E\u0442\u044C\u0441\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolComponent_Template_button_click_39_listener() { return ctx.copyDataToTextArea("\u0432\u0438\u0437\u043D\u0430\u0447\u0430\u044E\u0442\u044C\u0441\u044F", "pro_dilyanku"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u0432\u0438\u0437\u043D\u0430\u0447\u0430\u044E\u0442\u044C\u0441\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u0414\u0456\u043B\u044F\u043D\u043A\u0438 \u0432\u0456\u0434\u0448\u0430\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043B\u0456\u0434\u043D\u043E\u0433\u043E \u044F\u0439\u0446\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolComponent_Template_button_click_48_listener() { return ctx.copyDataToTextArea(" \u043D\u0435 \u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u0438\u0439 ", "pro_tonus"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " \u043D\u0435 \u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u0438\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolComponent_Template_button_click_50_listener() { return ctx.copyDataToTextArea(" \u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u0438\u0439 ", "pro_tonus"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " \u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u0438\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolComponent_Template_button_click_52_listener() { return ctx.copyDataToTextArea(" \u043F\u043E \u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u0441\u0442\u0456\u043D\u0446\u0456 ", "pro_tonus"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " \u043F\u043E \u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u0441\u0442\u0456\u043D\u0446\u0456 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdProtocolComponent_Template_button_click_54_listener() { return ctx.copyDataToTextArea(" \u043F\u043E \u0437\u0430\u0434\u043D\u0456\u0439 \u0441\u0442\u0456\u043D\u0446\u0456 ", "pro_tonus"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " \u043F\u043E \u0437\u0430\u0434\u043D\u0456\u0439 \u0441\u0442\u0456\u043D\u0446\u0456 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u0422\u043E\u043D\u0443\u0441 \u043C\u0456\u043D\u043E\u043C\u0435\u0442\u0440\u0456\u044E:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "app-doctors", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "app-blank-actions", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("print", function UzdProtocolComponent_Template_app_blank_actions_print_66_listener() { return ctx.printCurrentPage(); })("fontSize", function UzdProtocolComponent_Template_app_blank_actions_fontSize_66_listener($event) { return ctx.updateFontSize($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.options.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentForm", ctx.form)("fontSize", ctx.options.fontSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("font", ctx.options.fontSize);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrLabel"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrSelectContainer"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrTextareaContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrTextarea"], _shared_components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__["DoctorsComponent"], _shared_components_blank_actions_blank_actions_component__WEBPACK_IMPORTED_MODULE_10__["BlankActionsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JsYW5rcy91emQtcHJvdG9jb2wvdXpkLXByb3RvY29sLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UzdProtocolComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-uzd-protocol',
                templateUrl: './uzd-protocol.component.html',
                styleUrls: ['./uzd-protocol.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"] }, { type: _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__["PrintDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/blanks/uzd-tservikometria/uzd-tservikometria.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/blanks/uzd-tservikometria/uzd-tservikometria.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UzdTservikometriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UzdTservikometriaComponent", function() { return UzdTservikometriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_blank_base_blank_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/blank-base/blank-base.component */ "./src/app/shared/components/blank-base/blank-base.component.ts");
/* harmony import */ var _shared_structures_uzd_tservikometria_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/structures/uzd-tservikometria.structure */ "./src/app/shared/structures/uzd-tservikometria.structure.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/print-data.service */ "./src/app/shared/services/print-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _shared_components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/doctors/doctors.component */ "./src/app/shared/components/doctors/doctors.component.ts");
/* harmony import */ var _shared_components_blank_actions_blank_actions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/blank-actions/blank-actions.component */ "./src/app/shared/components/blank-actions/blank-actions.component.ts");












const _c0 = function (a0) { return { "font-size.px": a0 }; };
class UzdTservikometriaComponent extends _shared_components_blank_base_blank_base_component__WEBPACK_IMPORTED_MODULE_1__["BlankBaseComponent"] {
    constructor(fb, date, data, router) {
        super(fb, date, data);
        this.router = router;
        super.ngOnInit();
    }
    ngOnInit() {
        this.options = {
            title: `ПП \"Гал - Діагност \"
      ЦЕРВІКОМЕТРІЯ`,
            fontSize: 18,
            showDoctors: true,
            borderInValues: true,
            strongTitles: true,
            showEmptyRows: true
        };
        this.form = this.fb.group({
            ts_date: [this.currentDate],
            ts_pib: [],
            ts_shuyka: [],
            ts_canal: [],
            ts_vichko: ['замкнуте'],
            ts_sertse: ['ритмічне'],
            ts_chss: ['уд/хв'],
            ts_moves: ['+'],
            ts_vusnovok: [''],
            doctors: ['']
        });
        this.data.blankData.subscribe(options => {
            if (options && options.data && Object.keys(options.data).length !== 0) {
                this.form.patchValue(options.data);
            }
        });
    }
    printCurrentPage() {
        if (this.form.valid) {
            const value = this.form.value;
            this.data.updateData(Object.assign(Object.assign({}, this.options), { data: value, structure: _shared_structures_uzd_tservikometria_structure__WEBPACK_IMPORTED_MODULE_2__["UzdTservikometriaStructure"], route: 'blank/uzd-tservikometria' }));
            this.router.navigateByUrl('/print');
        }
    }
}
UzdTservikometriaComponent.ɵfac = function UzdTservikometriaComponent_Factory(t) { return new (t || UzdTservikometriaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__["PrintDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
UzdTservikometriaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UzdTservikometriaComponent, selectors: [["app-uzd-tservikometria"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 73, vars: 59, consts: [["id", "uzd-tservikometria", 1, "blank-layout", 3, "ngStyle"], [1, "title"], [3, "formGroup"], [1, "clr-row"], [1, "clr-col-sm-12"], ["clrInput", "", "formControlName", "ts_date", 3, "ngStyle"], [1, "clr-col-sm-12", "full-width-input"], [3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "ts_pib", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "formControlName", "ts_shuyka", 3, "ngStyle"], [1, "clr-row", "button-row"], [1, "clr-col-sm-12", "button-left"], [1, "btn", "btn-primary", 3, "click"], ["clrTextarea", "", "name", "description", "formControlName", "ts_canal", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "formControlName", "ts_vichko", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "ts_sertse", 3, "ngStyle"], ["value", "\u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435"], ["value", "\u0430\u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "formControlName", "ts_chss", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "formControlName", "ts_moves", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "ts_vusnovok", 3, "ngStyle"], [3, "parentForm", "fontSize"], [1, "print-block"], [3, "font", "print", "fontSize"]], template: function UzdTservikometriaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041F.\u0406.\u0411:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0428\u0438\u0439\u043A\u0430 \u043C\u0430\u0442\u043A\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdTservikometriaComponent_Template_button_click_21_listener() { return ctx.copyDataToTextArea("\u0431/\u043E", "ts_canal"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u0431/\u043E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdTservikometriaComponent_Template_button_click_23_listener() { return ctx.copyDataToTextArea("\u043C\u043C.", "ts_canal"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u043C\u043C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0426\u0435\u0440\u0432\u0456\u043A\u0430\u043B\u044C\u043D\u0438\u0439 \u043A\u0430\u043D\u0430\u043B:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0412\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0454 \u0432\u0456\u0447\u043A\u043E:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0421\u0435\u0440\u0446\u0435\u0431\u0438\u0442\u0442\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u0430\u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u0427\u0421\u0421:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u0420\u0443\u0445\u0438 \u043F\u043B\u043E\u0434\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdTservikometriaComponent_Template_button_click_60_listener() { return ctx.copyDataToTextArea("\u0406\u0426\u041D", "ts_vusnovok"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " \u0406\u0426\u041D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u0412\u0438\u0441\u043D\u043E\u0432\u043E\u043A:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "app-doctors", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "app-blank-actions", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("print", function UzdTservikometriaComponent_Template_app_blank_actions_print_72_listener() { return ctx.printCurrentPage(); })("fontSize", function UzdTservikometriaComponent_Template_app_blank_actions_fontSize_72_listener($event) { return ctx.updateFontSize($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.options.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](47, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](49, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](51, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](53, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](55, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](57, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentForm", ctx.form)("fontSize", ctx.options.fontSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("font", ctx.options.fontSize);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrLabel"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrTextareaContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrTextarea"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrSelectContainer"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _shared_components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__["DoctorsComponent"], _shared_components_blank_actions_blank_actions_component__WEBPACK_IMPORTED_MODULE_10__["BlankActionsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JsYW5rcy91emQtdHNlcnZpa29tZXRyaWEvdXpkLXRzZXJ2aWtvbWV0cmlhLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UzdTservikometriaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-uzd-tservikometria',
                templateUrl: './uzd-tservikometria.component.html',
                styleUrls: ['./uzd-tservikometria.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"] }, { type: _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__["PrintDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/blanks/uzd-two-three-uz/uzd-two-three-uz.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/blanks/uzd-two-three-uz/uzd-two-three-uz.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UzdTwoThreeUzComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UzdTwoThreeUzComponent", function() { return UzdTwoThreeUzComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_blank_base_blank_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/blank-base/blank-base.component */ "./src/app/shared/components/blank-base/blank-base.component.ts");
/* harmony import */ var _shared_structures_uzd_two_three_uz_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/structures/uzd-two-three-uz.structure */ "./src/app/shared/structures/uzd-two-three-uz.structure.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/print-data.service */ "./src/app/shared/services/print-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _shared_components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/doctors/doctors.component */ "./src/app/shared/components/doctors/doctors.component.ts");
/* harmony import */ var _shared_components_blank_actions_blank_actions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/blank-actions/blank-actions.component */ "./src/app/shared/components/blank-actions/blank-actions.component.ts");












const _c0 = function (a0) { return { "font-size.px": a0 }; };
class UzdTwoThreeUzComponent extends _shared_components_blank_base_blank_base_component__WEBPACK_IMPORTED_MODULE_1__["BlankBaseComponent"] {
    constructor(fb, date, data, router) {
        super(fb, date, data);
        this.router = router;
        super.ngOnInit();
    }
    ngOnInit() {
        this.options = {
            title: `ПРИВАТНЕ ПІДПРИЄМСТВО \"ГАЛ-ДІАГНОСТ \"
II-III УЗ - обстеження`,
            fontSize: 18,
            showDoctors: true,
            borderInValues: true,
            strongTitles: true,
            showEmptyRows: true
        };
        this.form = this.fb.group({
            uz_date: [this.currentDate],
            uz_pib: [''],
            uz_plodiv_count: ['один'],
            uz_vaga: [''],
            uz_poloz_ploda: ['поздовжнє'],
            uz_predlezannya: ['головне'],
            uz_sertce: ['ритмічне'],
            uz_chss: ['уд/хв.'],
            uz_ruh_ploda: ['+'],
            uz_bpr: ['  мм.'],
            uz_brain_str: ['б/о'],
            uz_og: [' мм.'],
            uz_noso_triangle: ['б/о'],
            uz_lpr: ['  мм.'],
            uz_bsh: ['  мм.'],
            uz_pot_rog: ['  мм.'],
            uz_chkam: ['  мм.'],
            uz_ao: ['  мм.'],
            uz_leg_art: ['  мм.'],
            uz_zriz_tr: ['  мм.'],
            uz_leg_st: ['зрілі'],
            uz_mozochok: ['  мм.'],
            uz_kistochka: ['  мм.'],
            uz_dc: [''],
            uz_ozh: ['  мм.'],
            uz_sdgk: ['  мм.'],
            uz_kilkist_vod: ['нормальна'],
            uz_index: [''],
            uz_platsenty: ['передня'],
            uz_stupin_zrilosti: ['0'],
            uz_nizniy_kray: ['високо'],
            uz_nizniy_kray_input: ['високо'],
            uz_tovshuna: ['  мм.'],
            uz_patolog_platsenty: [''],
            uz_zrizu_petel: ['ні'],
            uz_zrizu_petel_input: [''],
            uz_pupovyna: ['дві'],
            uz_pupo_kilce: ['  мм.'],
            uz_shuyka: ['  мм.'],
            uz_vnvichko: [''],
            uz_vnvichko_input: ['  мм.'],
            uz_matka_input: [''],
            uz_tservik: [''],
            uz_terminpogest: ['  т  д'],
            uz_termin: [''],
            uz_sd: [''],
            uz_krovoplun: [''],
            uz_cma: [''],
            uz_ir: [''],
            uz_pi: [''],
            uz_result: [''],
            doctors: ['']
        });
        this.data.blankData.subscribe(options => {
            if (options && options.data && Object.keys(options.data).length !== 0) {
                this.form.patchValue(options.data);
            }
        });
    }
    printCurrentPage() {
        if (this.form.valid) {
            const value = this.form.value;
            this.data.updateData(Object.assign(Object.assign({}, this.options), { data: value, structure: _shared_structures_uzd_two_three_uz_structure__WEBPACK_IMPORTED_MODULE_2__["UzdTwoThreeUzStructure"], route: 'blank/uzd-two-three-uz' }));
            this.router.navigateByUrl('/print');
        }
    }
}
UzdTwoThreeUzComponent.ɵfac = function UzdTwoThreeUzComponent_Factory(t) { return new (t || UzdTwoThreeUzComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__["PrintDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
UzdTwoThreeUzComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UzdTwoThreeUzComponent, selectors: [["app-uzd-two-three-uz"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 384, vars: 287, consts: [["id", "uzd-two-three-uz", 1, "blank-layout", 3, "ngStyle"], [1, "title"], [3, "formGroup"], [1, "clr-row"], [1, "clr-col-sm-12"], ["clrInput", "", "formControlName", "uz_date", 3, "ngStyle"], [1, "clr-col-sm-12", "full-width-input"], [3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_pib", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "uz_plodiv_count", 3, "ngStyle"], ["value", "\u043E\u0434\u0438\u043D"], ["value", "\u0434\u0432\u0430"], ["value", "\u0442\u0440\u0438"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_vaga", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "uz_poloz_ploda", 3, "ngStyle"], ["value", "\u043F\u043E\u0437\u0434\u043E\u0432\u0436\u043D\u0454"], ["value", "\u043F\u043E\u043F\u0435\u0440\u0435\u0447\u043D\u0435"], ["value", "\u043A\u043E\u0441\u0435"], ["value", "\u043D\u0435\u0441\u0442\u0456\u0439\u043A\u0435"], ["clrSelect", "", "name", "options", "formControlName", "uz_predlezannya", 3, "ngStyle"], ["value", "\u0433\u043E\u043B\u043E\u0432\u043D\u0435"], ["value", "\u0441\u0456\u0434\u043D\u0438\u0447\u043D\u0435"], ["clrSelect", "", "name", "options", "formControlName", "uz_sertce", 3, "ngStyle"], ["value", "\u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435"], ["value", "\u0430\u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_chss", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_ruh_ploda", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_bpr", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "uz_brain_str", 3, "ngStyle"], ["value", "\u0431/\u043E"], ["value", "\u043E\u0433\u043B\u044F\u0434 \u0437\u0430\u0442\u0440\u0443\u0434\u043D\u0435\u043D\u043E"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_og", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "uz_noso_triangle", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_lpr", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_bsh", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_pot_rog", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_chkam", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_leg_art", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_ao", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_zriz_tr", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "uz_leg_st", 3, "ngStyle"], ["value", "\u0437\u0440\u0456\u043B\u0456"], ["value", "\u0406 \u0441\u0442."], ["value", "\u0406\u0406 \u0441\u0442."], ["value", "\u0406\u0406\u0406 \u0441\u0442."], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_mozochok", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_kistochka", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_dc", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_sdgk", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_ozh", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "uz_kilkist_vod", 3, "ngStyle"], ["value", "\u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0430"], ["value", "\u0437\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u0430"], ["value", "\u0437\u043C\u0435\u043D\u0448\u0435\u043D\u0430"], ["value", "\u043C\u0456\u043B\u043A\u043E\u0434\u0438\u0441\u043F\u0435\u0440\u0441\u043D\u0456"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_index", 3, "ngStyle"], [1, "clr-row", "button-row"], [1, "clr-col-sm-12", "button-left"], [1, "btn", "btn-primary", 3, "click"], ["clrTextarea", "", "name", "description", "formControlName", "uz_platsenty", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "uz_stupin_zrilosti", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "uz_nizniy_kray", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_tovshuna", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "uz_patolog_platsenty", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "uz_zrizu_petel", 3, "ngStyle"], ["clrSelect", "", "name", "options", "formControlName", "uz_pupovyna", 3, "ngStyle"], ["value", "\u0434\u0432\u0456"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_pupo_kilce", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_shuyka", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_vnvichko", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_tservik", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_terminpogest", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_termin", 3, "ngStyle"], [1, "text-center-container", "text-center", "bold-text"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_sd", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_krovoplun", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_cma", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_ir", 3, "ngStyle"], ["autocomplete", "off", "placeholder", "", "clrInput", "", "name", "name", "formControlName", "uz_pi", 3, "ngStyle"], ["clrTextarea", "", "name", "description", "formControlName", "uz_result", 3, "ngStyle"], [3, "parentForm", "fontSize"], [1, "print-block"], [3, "font", "print", "fontSize"]], template: function UzdTwoThreeUzComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041F.\u0406.\u0411:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u043B\u043E\u0434\u0456\u0432:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u043E\u0434\u0438\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0434\u0432\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0442\u0440\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0412\u0430\u0433\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F \u043F\u043B\u043E\u0434\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u043F\u043E\u0437\u0434\u043E\u0432\u0436\u043D\u0454");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u043F\u043E\u043F\u0435\u0440\u0435\u0447\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u043A\u043E\u0441\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u043D\u0435\u0441\u0442\u0456\u0439\u043A\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u041F\u0435\u0440\u0435\u0434\u043B\u0435\u0436\u0430\u043D\u043D\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u0433\u043E\u043B\u043E\u0432\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u0441\u0456\u0434\u043D\u0438\u0447\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u0421\u0435\u0440\u0446\u0435\u0431\u0438\u0442\u0442\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u0430\u0440\u0438\u0442\u043C\u0456\u0447\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u0427\u0421\u0421:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u0420\u0443\u0445\u0438 \u043F\u043B\u043E\u0434\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u0411\u0456\u043F\u0430\u0440\u0456\u0454\u0442\u0440\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440 (\u0411\u041F\u0420):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043C\u043E\u0437\u043A\u0443:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\u0431/\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u043E\u0433\u043B\u044F\u0434 \u0437\u0430\u0442\u0440\u0443\u0434\u043D\u0435\u043D\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u041E\u043A\u0440\u0443\u0436\u043D\u0456\u0441\u0442\u044C \u0433\u043E\u043B\u043E\u0432\u0438 (\u041E\u0413):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\u041D\u043E\u0441\u043E\u0433\u0443\u0431\u043D\u0438\u0439 \u0442\u0440\u0438\u043A\u0443\u0442\u043D\u0438\u043A:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\u0431/\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\u043E\u0433\u043B\u044F\u0434 \u0437\u0430\u0442\u0440\u0443\u0434\u043D\u0435\u043D\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\u041B\u043E\u0431\u043D\u043E-\u043F\u043E\u0442\u0438\u043B\u0438\u0447\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440 (\u041B\u041F\u0420):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\u0411\u043E\u043A\u043E\u0432\u0456 \u0448\u043B\u0443\u043D\u043E\u0447\u043A\u0438 (\u0411\u0428):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\u041F\u043E\u0442\u0438\u043B\u0438\u0447\u043D\u0456 \u0440\u043E\u0433\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "4-\u0445 \u043A\u0430\u043C\u0435\u0440\u043D\u0438\u0439 \u0440\u043E\u0437\u0442\u0438\u043D \u0441\u0435\u0440\u0446\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\u041B\u0435\u0433\u0435\u043D\u0435\u0432\u0430 \u0430\u0440\u0442\u0435\u0440\u0456\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "\u0410\u043E:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "\u0417\u0440\u0456\u0437 \u043D\u0430 \u0442\u0440\u044C\u043E\u0445 \u0441\u0443\u0434\u0438\u043D\u0430\u0445:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "\u041B\u0435\u0433\u0435\u043D\u0456 (\u0441\u0442\u0443\u043F\u0456\u043D\u044C \u0437\u0440\u0456\u043B\u043E\u0441\u0442\u0456):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "select", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "\u0437\u0440\u0456\u043B\u0456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "\u0406 \u0441\u0442.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "\u0406\u0406 \u0441\u0442.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\u0406\u0406\u0406 \u0441\u0442.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "\u041C\u043E\u0437\u043E\u0447\u043E\u043A:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "\u041A\u0456\u0441\u0442\u043E\u0447\u043A\u0430 \u043F\u0435\u0440\u0435\u043D\u0456\u0441\u0441\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "\u0414\u043E\u0432\u0436\u0438\u043D\u0430 \u0441\u0442\u0435\u0433\u043D\u0430 (\u0414\u0421):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "\u0421\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u0434\u0456\u0430\u043C\u0435\u0442\u0440 \u0433\u0440\u0443\u0434\u043D\u043E\u0457 \u043A\u043B\u0456\u0442\u0438\u043D\u0438 (\u0421\u0414\u0413\u041A):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "\u041E\u043A\u0440\u0443\u0436\u043D\u0456\u0441\u0442\u044C \u0436\u0438\u0432\u043E\u0442\u0430 (\u041E\u0416):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "\u041A-\u0441\u0442\u044C \u043D\u0430\u0432\u043A\u043E\u043B\u043E\u043F\u043B\u0456\u0434\u043D\u0438\u0445 \u0432\u043E\u0434:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "select", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "\u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "\u0437\u0431\u0456\u043B\u044C\u0448\u0435\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "\u0437\u043C\u0435\u043D\u0448\u0435\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "\u043C\u0456\u043B\u043A\u043E\u0434\u0438\u0441\u043F\u0435\u0440\u0441\u043D\u0456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "\u0410\u043C\u043D\u0456\u043E\u0442\u0438\u0447\u043D\u0438\u0439 \u0456\u043D\u0434\u0435\u043A\u0441:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdTwoThreeUzComponent_Template_button_click_217_listener() { return ctx.copyDataToTextArea(" \u043F\u0435\u0440\u0435\u0434\u043D\u044F ", "uz_platsenty"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " \u043F\u0435\u0440\u0435\u0434\u043D\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdTwoThreeUzComponent_Template_button_click_219_listener() { return ctx.copyDataToTextArea(" \u0437\u0430\u0434\u043D\u044F ", "uz_platsenty"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " \u0437\u0430\u0434\u043D\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdTwoThreeUzComponent_Template_button_click_221_listener() { return ctx.copyDataToTextArea(" \u043F\u0440\u0430\u0432\u0430 \u0431\u043E\u043A\u043E\u0432\u0430 \u0441\u0442. ", "uz_platsenty"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " \u043F\u0440\u0430\u0432\u0430 \u0431\u043E\u043A\u043E\u0432\u0430 \u0441\u0442. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdTwoThreeUzComponent_Template_button_click_223_listener() { return ctx.copyDataToTextArea(" \u043B\u0456\u0432\u0430 \u0431\u043E\u043A\u043E\u0432\u0430 \u0441\u0442. ", "uz_platsenty"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " \u043B\u0456\u0432\u0430 \u0431\u043E\u043A\u043E\u0432\u0430 \u0441\u0442. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdTwoThreeUzComponent_Template_button_click_225_listener() { return ctx.copyDataToTextArea(" \u0434\u043D\u043E \u043C\u0430\u0442\u043A\u0438 ", "uz_platsenty"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " \u0434\u043D\u043E \u043C\u0430\u0442\u043A\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "\u041B\u043E\u043A\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u043F\u043B\u0430\u0446\u0435\u043D\u0442\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "textarea", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdTwoThreeUzComponent_Template_button_click_234_listener() { return ctx.copyDataToTextArea(" 0 ", "uz_stupin_zrilosti"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, " 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdTwoThreeUzComponent_Template_button_click_236_listener() { return ctx.copyDataToTextArea(" I ", "uz_stupin_zrilosti"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, " I ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdTwoThreeUzComponent_Template_button_click_238_listener() { return ctx.copyDataToTextArea(" II ", "uz_stupin_zrilosti"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, " II ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdTwoThreeUzComponent_Template_button_click_240_listener() { return ctx.copyDataToTextArea(" III ", "uz_stupin_zrilosti"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, " III ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "\u0421\u0442\u0443\u043F\u0456\u043D\u044C \u0437\u0440\u0456\u043B\u043E\u0441\u0442\u0456:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "textarea", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdTwoThreeUzComponent_Template_button_click_249_listener() { return ctx.copyDataToTextArea(" \u0432\u0438\u0441\u043E\u043A\u043E ", "uz_nizniy_kray"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, " \u0432\u0438\u0441\u043E\u043A\u043E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdTwoThreeUzComponent_Template_button_click_251_listener() { return ctx.copyDataToTextArea(" \u043D\u0430 \u043C\u043C \u0432\u0456\u0434 ", "uz_nizniy_kray"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " \u043D\u0430 \u043C\u043C \u0432\u0456\u0434 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "\u041D\u0438\u0436\u043D\u0456\u0439 \u043A\u0440\u0430\u0439 \u043F\u043B\u0430\u0446\u0435\u043D\u0442\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "textarea", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "\u0422\u043E\u0432\u0449\u0438\u043D\u0430 \u043F\u043B\u0430\u0446\u0435\u043D\u0442\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdTwoThreeUzComponent_Template_button_click_266_listener() { return ctx.copyDataToTextArea(" \u043B\u0430\u043A\u0443\u043D\u0438 ", "uz_patolog_platsenty"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, " \u043B\u0430\u043A\u0443\u043D\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdTwoThreeUzComponent_Template_button_click_268_listener() { return ctx.copyDataToTextArea(" \u043F\u0435\u0442\u0440\u0438\u0444\u0456\u043A\u0430\u0442\u0438 ", "uz_patolog_platsenty"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, " \u043F\u0435\u0442\u0440\u0438\u0444\u0456\u043A\u0430\u0442\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdTwoThreeUzComponent_Template_button_click_270_listener() { return ctx.copyDataToTextArea(" \u043A\u0430\u043B\u044C\u0446\u0438\u043D\u0430\u0442\u0438 ", "uz_patolog_platsenty"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, " \u043A\u0430\u043B\u044C\u0446\u0438\u043D\u0430\u0442\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "\u041F\u0430\u0442\u043E\u043B\u043E\u0433\u0456\u0447\u043D\u0456 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F \u043F\u043B\u0430\u0446\u0435\u043D\u0442\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "textarea", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdTwoThreeUzComponent_Template_button_click_279_listener() { return ctx.copyDataToTextArea(" \u0442\u0430\u043A ", "uz_zrizu_petel"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " \u0442\u0430\u043A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdTwoThreeUzComponent_Template_button_click_281_listener() { return ctx.copyDataToTextArea(" \u043D\u0456 ", "uz_zrizu_petel"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " \u043D\u0456 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "\u0417\u0440\u0456\u0437\u0438 \u043F\u0435\u0442\u0435\u043B\u044C \u043F\u0443\u043F\u043E\u0432\u0438\u043D\u0438 \u0432 \u0448\u0438\u0439\u043D\u043E\u043C\u0443\u043C \u0442\u0440\u0438\u043A\u0443\u0442\u043D\u0438\u043A\u0443:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "textarea", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "\u041F\u0443\u043F\u043E\u0432\u0438\u043D\u0430: \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0441\u0443\u0434\u0438\u043D:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "select", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "option", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "\u0434\u0432\u0456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "\u0442\u0440\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "\u041F\u0443\u043F\u043E\u0447\u043D\u0435 \u043A\u0456\u043B\u044C\u043A\u0435:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "\u0428\u0438\u0439\u043A\u0430 \u043C\u0430\u0442\u043A\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "\u0432\u043D/\u0432\u0456\u0447\u043A\u043E:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "\u0426\u0435\u0440\u0432\u0456\u043A\u0430\u043B\u044C\u043D\u0438\u0439 \u043A\u0430\u043D\u0430\u043B:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "\u0422\u0435\u0440\u043C\u0456\u043D \u043F\u043E \u0433\u0435\u0441\u0442\u0430\u0446\u0456\u0457:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "\u0422\u0435\u0440\u043C\u0456\u043D \u043F\u043E\u043B\u043E\u0433\u0456\u0432:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "\u0414\u041E\u041F\u041B\u0415\u0420\u041E\u041C\u0415\u0422\u0420\u0406\u042F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "S/D:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](342, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "\u041A\u0440\u043E\u0432\u043E\u043F\u043B\u0438\u043D \u0441\u0443\u0434\u0438\u043D:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "CMA:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "IR:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Pi:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](366, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdTwoThreeUzComponent_Template_button_click_369_listener() { return ctx.copyDataToTextArea(" \u0412\u0435\u043B\u0438\u0447\u0438\u043D\u0430 \u043F\u043B\u043E\u0434\u0430 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454 ", "uz_result"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, " \u0412\u0435\u043B\u0438\u0447\u0438\u043D\u0430 \u043F\u043B\u043E\u0434\u0430 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UzdTwoThreeUzComponent_Template_button_click_371_listener() { return ctx.copyDataToTextArea(" \u0442\u0438\u0436\u043D\u044F\u043C \u0432\u0430\u0433\u0456\u0442\u043D\u043E\u0441\u0442\u0456 ", "uz_result"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, " \u0442\u0438\u0436\u043D\u044F\u043C \u0432\u0430\u0433\u0456\u0442\u043D\u043E\u0441\u0442\u0456 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "clr-textarea-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "\u0412\u0438\u0441\u043D\u043E\u0432\u043E\u043A \u0423\u0417\u0414:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](377, "textarea", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "app-doctors", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "app-blank-actions", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("print", function UzdTwoThreeUzComponent_Template_app_blank_actions_print_383_listener() { return ctx.printCurrentPage(); })("fontSize", function UzdTwoThreeUzComponent_Template_app_blank_actions_fontSize_383_listener($event) { return ctx.updateFontSize($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](99, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.options.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](101, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](103, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](105, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](107, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](109, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](111, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](113, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](115, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](117, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](119, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](121, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](123, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](125, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](127, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](129, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](131, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](133, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](135, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](137, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](139, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](141, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](143, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](145, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](147, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](149, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](151, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](153, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](155, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](157, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](159, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](161, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](163, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](165, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](167, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](169, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](171, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](173, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](175, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](177, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](179, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](181, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](183, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](185, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](187, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](189, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](191, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](193, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](195, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](197, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](199, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](201, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](203, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](205, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](207, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](209, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](211, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](213, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](215, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](217, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](219, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](221, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](223, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](225, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](227, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](229, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](231, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](233, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](235, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](237, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](239, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](241, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](243, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](245, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](247, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](249, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](251, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](253, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](255, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](257, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](259, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](261, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](263, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](265, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](267, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](269, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](271, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](273, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](275, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](277, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](279, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](281, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](283, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](285, _c0, ctx.options.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentForm", ctx.form)("fontSize", ctx.options.fontSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("font", ctx.options.fontSize);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrLabel"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrSelectContainer"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrTextareaContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClrTextarea"], _shared_components_doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__["DoctorsComponent"], _shared_components_blank_actions_blank_actions_component__WEBPACK_IMPORTED_MODULE_10__["BlankActionsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JsYW5rcy91emQtdHdvLXRocmVlLXV6L3V6ZC10d28tdGhyZWUtdXouY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UzdTwoThreeUzComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-uzd-two-three-uz',
                templateUrl: './uzd-two-three-uz.component.html',
                styleUrls: ['./uzd-two-three-uz.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"] }, { type: _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__["PrintDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function DashboardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r3.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r3.title, " ");
} }
class DashboardComponent extends _layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"] {
    constructor() {
        super();
    }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 1, consts: [[1, "clr-row"], ["class", "clr-col-lg-4 clr-col-12", 4, "ngFor", "ngForOf"], [1, "clr-col-lg-4", "clr-col-12"], [1, "card", "clickable", 3, "routerLink"], [1, "card-block"], [1, "card-text"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_1_Template, 5, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/print/simple-blank/simple-blank.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/print/simple-blank/simple-blank.component.ts ***!
  \********************************************************************/
/*! exports provided: SimpleBlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleBlankComponent", function() { return SimpleBlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_print_base_print_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/print-base/print-base.component */ "./src/app/shared/components/print-base/print-base.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/print-data.service */ "./src/app/shared/services/print-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function SimpleBlankComponent_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r62 = ctx.$implicit;
    const field_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show-empty", ctx_r61.showEmptyRow(ctx_r61.options.data[item_r62 == null ? null : item_r62.field]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (item_r62 == null ? null : item_r62.class) || (field_r57 == null ? null : field_r57.align));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("strong-titles", ctx_r61.strongTitles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r62 == null ? null : item_r62.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bottom-border", ctx_r61.borderValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r61.options.data[item_r62 == null ? null : item_r62.field], " ");
} }
const _c0 = function (a0, a1) { return { "font-size.px": a0, "line-height": a1 }; };
function SimpleBlankComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SimpleBlankComponent_div_1_div_1_div_1_Template, 5, 9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r58.fontSize, ctx_r58.lineHeight))("ngClass", field_r57.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", field_r57 == null ? null : field_r57.items);
} }
function SimpleBlankComponent_div_1_div_2_strong_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r66 == null ? null : item_r66.title);
} }
function SimpleBlankComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SimpleBlankComponent_div_1_div_2_strong_1_Template, 2, 1, "strong", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", field_r57 == null ? null : field_r57.items);
} }
function SimpleBlankComponent_div_1_table_3_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", header_r70 == null ? null : header_r70.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", header_r70.title, " ");
} }
function SimpleBlankComponent_div_1_table_3_tr_5_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cols_r73 = ctx.$implicit;
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", cols_r73 == null ? null : cols_r73.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (cols_r73 == null ? null : cols_r73.title) ? cols_r73 == null ? null : cols_r73.title : ctx_r72.options.data[cols_r73 == null ? null : cols_r73.field], " ");
} }
function SimpleBlankComponent_div_1_table_3_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SimpleBlankComponent_div_1_table_3_tr_5_td_1_Template, 2, 2, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rows_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", rows_r71);
} }
function SimpleBlankComponent_div_1_table_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SimpleBlankComponent_div_1_table_3_th_3_Template, 2, 2, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SimpleBlankComponent_div_1_table_3_tr_5_Template, 2, 1, "tr", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", field_r57 == null ? null : field_r57.table_headers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", field_r57.table_rows);
} }
function SimpleBlankComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SimpleBlankComponent_div_1_div_1_Template, 2, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SimpleBlankComponent_div_1_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SimpleBlankComponent_div_1_table_3_Template, 6, 2, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", field_r57.type !== "full-table" && field_r57.type !== "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", field_r57.type === "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", field_r57.type === "full-table");
} }
class SimpleBlankComponent extends _shared_components_print_base_print_base_component__WEBPACK_IMPORTED_MODULE_1__["PrintBaseComponent"] {
    constructor(fb, date, data, router) {
        super(fb, date, data, router);
        super.ngOnInit();
    }
    ngOnInit() {
    }
    showEmptyRow(field) {
        if (this.showEmptyRows) {
            return true;
        }
        if (!field) {
            return false;
        }
        return !Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(field);
    }
}
SimpleBlankComponent.ɵfac = function SimpleBlankComponent_Factory(t) { return new (t || SimpleBlankComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__["PrintDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
SimpleBlankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SimpleBlankComponent, selectors: [["app-simple-blank"]], inputs: { fontSize: "fontSize", lineHeight: "lineHeight", borderValue: "borderValue", strongTitles: "strongTitles", showEmptyRows: "showEmptyRows" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 1, consts: [[1, "blank-container"], [4, "ngFor", "ngForOf"], ["class", "blank-item", 3, "ngStyle", "ngClass", 4, "ngIf"], ["class", "center-title text-center", 4, "ngIf"], ["class", "table table-compact", 4, "ngIf"], [1, "blank-item", 3, "ngStyle", "ngClass"], ["class", "item-container", 3, "show-empty", "ngClass", 4, "ngFor", "ngForOf"], [1, "item-container", 3, "ngClass"], [1, "title"], [1, "value"], [1, "center-title", "text-center"], [1, "table", "table-compact"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"]], template: function SimpleBlankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SimpleBlankComponent_div_1_Template, 4, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options == null ? null : ctx.options.structure);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], styles: [".blank-container[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.blank-container[_ngcontent-%COMP%]   .center-title[_ngcontent-%COMP%] {\n  margin: 1.2em 0;\n}\n.blank-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  margin: 1.2em 0;\n}\n.blank-container[_ngcontent-%COMP%]   .double[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.blank-container[_ngcontent-%COMP%]   .triple[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.blank-container[_ngcontent-%COMP%]   .blank-item[_ngcontent-%COMP%] {\n  display: flex;\n}\n.blank-container[_ngcontent-%COMP%]   .blank-item[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: none;\n}\n.blank-container[_ngcontent-%COMP%]   .blank-item[_ngcontent-%COMP%]   .show-empty[_ngcontent-%COMP%] {\n  display: flex;\n}\n.blank-container[_ngcontent-%COMP%]   .blank-item[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.blank-container[_ngcontent-%COMP%]   .blank-item[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.blank-container[_ngcontent-%COMP%]   .blank-item[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.blank-container[_ngcontent-%COMP%]   .blank-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.blank-container[_ngcontent-%COMP%]   .blank-item[_ngcontent-%COMP%]   .strong-titles[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.blank-container[_ngcontent-%COMP%]   .blank-item[_ngcontent-%COMP%]   .bottom-border[_ngcontent-%COMP%] {\n  border-bottom: 1px solid black;\n}\n.blank-container[_ngcontent-%COMP%]   .blank-item[_ngcontent-%COMP%]   .margin-10[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nhc2hhL0RldmVsb3BtZW50L2dhbGRvYy9zcmMvYXBwL3BhZ2VzL3ByaW50L3NpbXBsZS1ibGFuay9zaW1wbGUtYmxhbmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ByaW50L3NpbXBsZS1ibGFuay9zaW1wbGUtYmxhbmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7QURBRTtFQUNFLGVBQUE7QUNFSjtBREFFO0VBQ0UsZUFBQTtBQ0VKO0FEQUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNFSjtBREFFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDRUo7QURBRTtFQUNFLGFBQUE7QUNFSjtBRERJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNHTjtBRERJO0VBQ0UsYUFBQTtBQ0dOO0FEREk7RUFDRSwyQkFBQTtBQ0dOO0FEREk7RUFDRSx5QkFBQTtBQ0dOO0FEREk7RUFDRSx1QkFBQTtBQ0dOO0FEREk7RUFDRSxnQkFBQTtBQ0dOO0FEREk7RUFDRSxpQkFBQTtBQ0dOO0FEREk7RUFDRSw4QkFBQTtBQ0dOO0FEREk7RUFDRSxjQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmludC9zaW1wbGUtYmxhbmsvc2ltcGxlLWJsYW5rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsYW5rLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIC5jZW50ZXItdGl0bGUge1xuICAgIG1hcmdpbjogMS4yZW0gMDtcbiAgfVxuICAudGFibGUge1xuICAgIG1hcmdpbjogMS4yZW0gMDtcbiAgfVxuICAuZG91YmxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAudHJpcGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAuYmxhbmstaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAuaXRlbS1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuc2hvdy1lbXB0eSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAubGVmdCB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICAgIC5yaWdodCB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIH1cbiAgICAuY2VudGVyIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAudmFsdWUge1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gICAgLnN0cm9uZy10aXRsZXMge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5ib3R0b20tYm9yZGVyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICB9XG4gICAgLm1hcmdpbi0xMCB7XG4gICAgICBtYXJnaW46IDEwcHggMDtcbiAgICB9XG4gIH1cblxufVxuIiwiLmJsYW5rLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uYmxhbmstY29udGFpbmVyIC5jZW50ZXItdGl0bGUge1xuICBtYXJnaW46IDEuMmVtIDA7XG59XG4uYmxhbmstY29udGFpbmVyIC50YWJsZSB7XG4gIG1hcmdpbjogMS4yZW0gMDtcbn1cbi5ibGFuay1jb250YWluZXIgLmRvdWJsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5ibGFuay1jb250YWluZXIgLnRyaXBsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5ibGFuay1jb250YWluZXIgLmJsYW5rLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJsYW5rLWNvbnRhaW5lciAuYmxhbmstaXRlbSAuaXRlbS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5ibGFuay1jb250YWluZXIgLmJsYW5rLWl0ZW0gLnNob3ctZW1wdHkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJsYW5rLWNvbnRhaW5lciAuYmxhbmstaXRlbSAubGVmdCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5ibGFuay1jb250YWluZXIgLmJsYW5rLWl0ZW0gLnJpZ2h0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5ibGFuay1jb250YWluZXIgLmJsYW5rLWl0ZW0gLmNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJsYW5rLWNvbnRhaW5lciAuYmxhbmstaXRlbSAudmFsdWUge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmJsYW5rLWNvbnRhaW5lciAuYmxhbmstaXRlbSAuc3Ryb25nLXRpdGxlcyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJsYW5rLWNvbnRhaW5lciAuYmxhbmstaXRlbSAuYm90dG9tLWJvcmRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cbi5ibGFuay1jb250YWluZXIgLmJsYW5rLWl0ZW0gLm1hcmdpbi0xMCB7XG4gIG1hcmdpbjogMTBweCAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleBlankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-simple-blank',
                templateUrl: './simple-blank.component.html',
                styleUrls: ['./simple-blank.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"] }, { type: _shared_services_print_data_service__WEBPACK_IMPORTED_MODULE_5__["PrintDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { fontSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lineHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], borderValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], strongTitles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showEmptyRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/blank-actions/blank-actions.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/blank-actions/blank-actions.component.ts ***!
  \****************************************************************************/
/*! exports provided: BlankActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankActionsComponent", function() { return BlankActionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");



class BlankActionsComponent {
    constructor() {
        this.fontSize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.print = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    increaseFontSize() {
        if (this.font !== 24) {
            this.font++;
            this.fontSize.emit(this.font);
        }
    }
    decreaseFontSize() {
        if (this.font !== 12) {
            this.font--;
            this.fontSize.emit(this.font);
        }
    }
    printPage() {
        this.print.emit();
    }
}
BlankActionsComponent.ɵfac = function BlankActionsComponent_Factory(t) { return new (t || BlankActionsComponent)(); };
BlankActionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlankActionsComponent, selectors: [["app-blank-actions"]], inputs: { font: "font" }, outputs: { fontSize: "fontSize", print: "print" }, decls: 15, vars: 0, consts: [[1, "blank-actions"], [1, "print-actions"], [1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "click"], ["shape", "file-settings"], [1, "layout-actions"], [1, "btn", "btn-success", 3, "click"], ["shape", "plus"], [1, "btn", "btn-warning", 3, "click"], ["shape", "minus"], ["role", "tooltip", "aria-haspopup", "true", 1, "tooltip", "tooltip-lg", "tooltip-top-left"], ["shape", "info-circle", "size", "24"], [1, "tooltip-content"]], template: function BlankActionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlankActionsComponent_Template_button_click_2_listener() { return ctx.printPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "clr-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0428\u0440\u0438\u0444\u0442 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlankActionsComponent_Template_button_click_7_listener() { return ctx.increaseFontSize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "clr-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlankActionsComponent_Template_button_click_9_listener() { return ctx.decreaseFontSize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "clr-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "clr-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u0420\u043E\u0437\u043C\u0456\u0440 \u0448\u0440\u0438\u0444\u0442\u0443 \u0431\u0443\u0434\u0435 \u0437\u043C\u0456\u043D\u0435\u043D\u0438\u0439 \u0442\u0456\u043B\u044C\u043A\u0438 \u043D\u0430 \u0446\u0456\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456. \u0414\u043B\u044F \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 \u0434\u0440\u0443\u043A\u0443 \u0431\u0443\u0434\u0435 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u0437\u043C\u0456\u043D\u0438 \u0448\u0440\u0438\u0444\u0442\u0443 \u0434\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u043E. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrIconCustomTag"]], styles: [".blank-actions[_ngcontent-%COMP%] {\n  height: 50px;\n  background: #00364d;\n  display: flex;\n  justify-content: space-around;\n  width: 500px;\n  right: 25px;\n  position: fixed;\n  bottom: 25px;\n  border-radius: 10px;\n  z-index: 666;\n}\n.blank-actions[_ngcontent-%COMP%]   .layout-actions[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.blank-actions[_ngcontent-%COMP%]   .layout-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nhc2hhL0RldmVsb3BtZW50L2dhbGRvYy9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2JsYW5rLWFjdGlvbnMvYmxhbmstYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsIi9ob21lL3Nhc2hhL0RldmVsb3BtZW50L2dhbGRvYy9zcmMvYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2JsYW5rLWFjdGlvbnMvYmxhbmstYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxtQkNGYTtFREdiLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUVERjtBRklJO0VBQ0UsV0FBQTtBRUZOO0FGS0k7RUFDRSxhQUFBO0FFSE4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9ibGFuay1hY3Rpb25zL2JsYW5rLWFjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+c3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcyc7XG5cbi5ibGFuay1hY3Rpb25zIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAkZGVmYXVsdF9ibHVlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDUwMHB4O1xuICByaWdodDogMjVweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHotaW5kZXg6IDY2NjtcblxuICAubGF5b3V0LWFjdGlvbnMge1xuICAgIHN0cm9uZyB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAuYnRuIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICB9XG59XG4iLCIvLyBWYXJpYWJsZXMgZm9yIGEgcHJvamVjdFxuXG4kZGVmYXVsdF9ibHVlOiAjMDAzNjRkO1xuJGRlZmF1bHRfYmx1ZV9idXR0b246ICMwMDcyYTM7XG4iLCIuYmxhbmstYWN0aW9ucyB7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogIzAwMzY0ZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiA1MDBweDtcbiAgcmlnaHQ6IDI1cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB6LWluZGV4OiA2NjY7XG59XG4uYmxhbmstYWN0aW9ucyAubGF5b3V0LWFjdGlvbnMgc3Ryb25nIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYmxhbmstYWN0aW9ucyAubGF5b3V0LWFjdGlvbnMgLmJ0biB7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankActionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blank-actions',
                templateUrl: './blank-actions.component.html',
                styleUrls: ['./blank-actions.component.scss']
            }]
    }], function () { return []; }, { font: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fontSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], print: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/blank-base/blank-base.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/blank-base/blank-base.component.ts ***!
  \**********************************************************************/
/*! exports provided: BlankBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankBaseComponent", function() { return BlankBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _services_print_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/print-data.service */ "./src/app/shared/services/print-data.service.ts");





class BlankBaseComponent {
    constructor(fb, date, data) {
        this.fb = fb;
        this.date = date;
        this.data = data;
    }
    ngOnInit() {
        this.currentDate = this.date.getCurrentUaDate();
    }
    copyDataToTextArea(text, controls) {
        const currentValue = this.form.controls[controls].value;
        this.form.patchValue({
            [controls]: currentValue ? `${currentValue}\n${text}` : text
        });
    }
    updateFontSize(size) {
        this.options.fontSize = size;
    }
    ngOnDestroy() {
    }
}
BlankBaseComponent.ɵfac = function BlankBaseComponent_Factory(t) { return new (t || BlankBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_2__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_print_data_service__WEBPACK_IMPORTED_MODULE_3__["PrintDataService"])); };
BlankBaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlankBaseComponent, selectors: [["app-blank-base"]], decls: 0, vars: 0, template: function BlankBaseComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankBaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: '',
                selector: 'app-blank-base'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_date_service__WEBPACK_IMPORTED_MODULE_2__["DateService"] }, { type: _services_print_data_service__WEBPACK_IMPORTED_MODULE_3__["PrintDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/device-description/device-description.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/device-description/device-description.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DeviceDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceDescriptionComponent", function() { return DeviceDescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "font-size.px": a0 }; };
class DeviceDescriptionComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
DeviceDescriptionComponent.ɵfac = function DeviceDescriptionComponent_Factory(t) { return new (t || DeviceDescriptionComponent)(); };
DeviceDescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeviceDescriptionComponent, selectors: [["app-device-description"]], inputs: { deviceSize: "deviceSize" }, decls: 5, vars: 3, consts: [[1, "device", 3, "ngStyle"]], template: function DeviceDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0410\u043F\u0430\u0440\u0430\u0442 \u0435\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u043E\u0433\u043E \u043A\u043B\u0430\u0441\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SIEMENS ACUSON S2000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.deviceSize));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".device[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  line-height: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nhc2hhL0RldmVsb3BtZW50L2dhbGRvYy9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RldmljZS1kZXNjcmlwdGlvbi9kZXZpY2UtZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RldmljZS1kZXNjcmlwdGlvbi9kZXZpY2UtZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RldmljZS1kZXNjcmlwdGlvbi9kZXZpY2UtZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV2aWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbiIsIi5kZXZpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeviceDescriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-device-description',
                templateUrl: './device-description.component.html',
                styleUrls: ['./device-description.component.scss']
            }]
    }], function () { return []; }, { deviceSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/doctors/doctors.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/doctors/doctors.component.ts ***!
  \****************************************************************/
/*! exports provided: DoctorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsComponent", function() { return DoctorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function DoctorsComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doctor_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", doctor_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](doctor_r16);
} }
const _c0 = function (a0) { return { "font-size.px": a0 }; };
class DoctorsComponent {
    constructor() {
        this.initList = ['Іванова Ю.В', 'Боднар М.П'];
    }
    ngOnInit() {
        const store = localStorage.getItem('doctors');
        if (store && !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(store)) {
            this.doctors = store.split('|') || this.initList;
        }
        else {
            this.doctors = this.initList;
            localStorage.setItem('doctors', this.initList.join('|'));
        }
    }
}
DoctorsComponent.ɵfac = function DoctorsComponent_Factory(t) { return new (t || DoctorsComponent)(); };
DoctorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DoctorsComponent, selectors: [["app-doctors"]], inputs: { parentForm: "parentForm", fontSize: "fontSize" }, decls: 6, vars: 9, consts: [[3, "formGroup"], [3, "ngStyle"], ["clrSelect", "", "name", "options", 3, "ngStyle", "formControlName"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function DoctorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-select-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041B\u0456\u043A\u0430\u0440:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DoctorsComponent_option_5_Template, 2, 2, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.parentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.fontSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.fontSize))("formControlName", "doctors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.doctors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrSelectContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RvY3RvcnMvZG9jdG9ycy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-doctors',
                templateUrl: './doctors.component.html',
                styleUrls: ['./doctors.component.scss']
            }]
    }], null, { parentForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fontSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/logo/logo.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/logo/logo.component.ts ***!
  \**********************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "width.px": a0 }; };
class LogoComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo"]], inputs: { logoSize: "logoSize" }, decls: 2, vars: 3, consts: [[1, "logo"], ["src", "assets/images/logo.jpg", "alt", "Logo", 3, "ngStyle"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.logoSize));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvZ28vbG9nby5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.scss']
            }]
    }], function () { return []; }, { logoSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/print-actions/print-actions.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/print-actions/print-actions.component.ts ***!
  \****************************************************************************/
/*! exports provided: PrintActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintActionsComponent", function() { return PrintActionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");




function PrintActionsComponent_div_0_clr_icon_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "clr-icon", 15);
} }
function PrintActionsComponent_div_0_clr_icon_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "clr-icon", 16);
} }
const _c0 = function (a0, a1) { return { "btn-danger": a0, "btn-primary": a1 }; };
function PrintActionsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintActionsComponent_div_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.printPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "clr-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintActionsComponent_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.doBackAndEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041D\u0410\u0417\u0410\u0414 \u0406 \u0420\u0415\u0414\u0410\u0413\u0423\u0412\u0410\u0422\u0418");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintActionsComponent_div_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.doBackAndAdd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041D\u041E\u0412\u0418\u0419 \u041F\u0410\u0426\u0406\u0404\u041D\u0422");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintActionsComponent_div_0_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.toggleDesignMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PrintActionsComponent_div_0_clr_icon_12_Template, 1, 0, "clr-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PrintActionsComponent_div_0_clr_icon_13_Template, 1, 0, "clr-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintActionsComponent_div_0_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.toggleSettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "clr-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r17.inDesignMode, !ctx_r17.inDesignMode));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.inDesignMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.inDesignMode);
} }
function PrintActionsComponent_div_1_button_51_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintActionsComponent_div_1_button_51_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.updateOptions("toggle-strong-titles"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0422\u0430\u043A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrintActionsComponent_div_1_button_52_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintActionsComponent_div_1_button_52_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.updateOptions("toggle-strong-titles"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u0456 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrintActionsComponent_div_1_button_58_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintActionsComponent_div_1_button_58_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.updateOptions("toggle-border-in-value"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0422\u0430\u043A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrintActionsComponent_div_1_button_59_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintActionsComponent_div_1_button_59_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.updateOptions("toggle-border-in-value"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u0456 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrintActionsComponent_div_1_button_65_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintActionsComponent_div_1_button_65_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.updateOptions("toggle-empty-rows"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0422\u0430\u043A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrintActionsComponent_div_1_button_66_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintActionsComponent_div_1_button_66_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.updateOptions("toggle-empty-rows"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u0456 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrintActionsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintActionsComponent_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.updateOptions("increase-logo-size"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintActionsComponent_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.updateOptions("decrease-logo-size"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintActionsComponent_div_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.updateOptions("increase-title-size"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintActionsComponent_div_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.updateOptions("decrease-title-size"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintActionsComponent_div_1_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.updateOptions("increase-device-size"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintActionsComponent_div_1_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.updateOptions("decrease-device-size"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintActionsComponent_div_1_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.updateOptions("increase-font-size"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintActionsComponent_div_1_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.updateOptions("decrease-font-size"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintActionsComponent_div_1_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.updateOptions("increase-line-height"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintActionsComponent_div_1_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.updateOptions("decrease-line-height"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " \u0412\u0438\u0434\u0456\u043B\u044F\u0442\u0438 \u0442\u0438\u0442\u0443\u043B: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, PrintActionsComponent_div_1_button_51_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, PrintActionsComponent_div_1_button_52_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " \u041F\u0456\u0434\u043A\u0440\u0435\u0441\u043B\u044E\u0432\u0430\u0442\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, PrintActionsComponent_div_1_button_58_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, PrintActionsComponent_div_1_button_59_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " \u041F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u043F\u0443\u0441\u0442\u0456 \u043F\u043E\u043B\u044F: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, PrintActionsComponent_div_1_button_65_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, PrintActionsComponent_div_1_button_66_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0420\u043E\u0437\u043C\u0456\u0440 \u043B\u043E\u0433\u043E (", ctx_r18.options.logoSize, "px) : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0420\u043E\u0437\u043C\u0456\u0440 \u0442\u0438\u0442\u0443\u043B\u0443 (", ctx_r18.options.titleSize, "px): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0420\u043E\u0437\u043C\u0456\u0440 \u043E\u043F\u0438\u0441\u0443 \u0430\u043F\u0430\u0440\u0430\u0442\u0430 (", ctx_r18.options.deviceSize, "px): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0420\u043E\u0437\u043C\u0456\u0440 \u0442\u0435\u043A\u0441\u0442\u0443 (", ctx_r18.options.fontSize, "px): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0412\u0456\u0434\u0441\u0442\u0443\u043F (", ctx_r18.options.lineHeight, "): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r18.options.strongTitles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.options.strongTitles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r18.options.borderInValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.options.borderInValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r18.options.showEmptyRows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.options.showEmptyRows);
} }
class PrintActionsComponent {
    constructor() {
        this.showPrintActions = true;
        this.showSettings = false;
        this.inDesignMode = false;
        this.print = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.backAndEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.backAndAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.optionsUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    printPage() {
        this.print.emit();
    }
    doBackAndEdit() {
        this.backAndEdit.emit();
    }
    doBackAndAdd() {
        this.backAndAdd.emit();
    }
    updateOptions(type) {
        switch (type) {
            case 'increase-logo-size':
                this.options.logoSize += 10;
                this.optionsUpdate.emit(this.options);
                break;
            case 'decrease-logo-size':
                this.options.logoSize -= 10;
                this.optionsUpdate.emit(this.options);
                break;
            case 'increase-title-size':
                this.options.titleSize++;
                this.optionsUpdate.emit(this.options);
                break;
            case 'decrease-title-size':
                this.options.titleSize--;
                this.optionsUpdate.emit(this.options);
                break;
            case 'increase-device-size':
                this.options.deviceSize++;
                this.optionsUpdate.emit(this.options);
                break;
            case 'decrease-device-size':
                this.options.deviceSize--;
                this.optionsUpdate.emit(this.options);
                break;
            case 'increase-font-size':
                this.options.fontSize++;
                this.optionsUpdate.emit(this.options);
                break;
            case 'decrease-font-size':
                this.options.fontSize--;
                this.optionsUpdate.emit(this.options);
                break;
            case 'increase-line-height':
                this.options.lineHeight += 0.1;
                this.optionsUpdate.emit(this.options);
                break;
            case 'decrease-line-height':
                this.options.lineHeight -= 0.1;
                this.optionsUpdate.emit(this.options);
                break;
            case 'toggle-strong-titles':
                this.options.strongTitles = !this.options.strongTitles;
                this.optionsUpdate.emit(this.options);
                break;
            case 'toggle-border-in-value':
                this.options.borderInValues = !this.options.borderInValues;
                this.optionsUpdate.emit(this.options);
                break;
            case 'toggle-empty-rows':
                this.options.showEmptyRows = !this.options.showEmptyRows;
                this.optionsUpdate.emit(this.options);
                break;
            default:
                break;
        }
    }
    toggleDesignMode() {
        const currentMode = document.designMode;
        if (currentMode === 'off') {
            document.designMode = 'on';
            this.inDesignMode = true;
        }
        else {
            document.designMode = 'off';
            this.inDesignMode = false;
        }
    }
    toggleSettings() {
        this.showSettings = !this.showSettings;
    }
}
PrintActionsComponent.ɵfac = function PrintActionsComponent_Factory(t) { return new (t || PrintActionsComponent)(); };
PrintActionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintActionsComponent, selectors: [["app-print-actions"]], inputs: { options: "options" }, outputs: { print: "print", backAndEdit: "backAndEdit", backAndAdd: "backAndAdd", optionsUpdate: "optionsUpdate" }, decls: 2, vars: 2, consts: [["class", "print-actions", 4, "ngIf"], ["class", "control-actions", 4, "ngIf"], [1, "print-actions"], [1, "print-buttons"], [1, "btn", "btn-primary", "btn-lg", 3, "click"], ["shape", "printer"], [1, "back-buttons"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-success", 3, "click"], [1, "control-buttons"], [1, "btn", "btn-primary", 3, "ngClass", "click"], ["shape", "pencil", 4, "ngIf"], ["shape", "times", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], ["shape", "cog"], ["shape", "pencil"], ["shape", "times"], [1, "control-actions"], [1, "control-item", "logo-control"], [1, "title"], [1, "buttons"], [1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "btn", "btn-warning", "btn-sm", 3, "click"], [1, "control-item", "title-control"], [1, "control-item", "device-control"], [1, "control-item", "text-control"], ["class", "btn btn-success btn-sm", 3, "click", 4, "ngIf"], ["class", "btn btn-warning btn-sm", 3, "click", 4, "ngIf"], [1, "control-item", "border-control"]], template: function PrintActionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PrintActionsComponent_div_0_Template, 16, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrintActionsComponent_div_1_Template, 67, 11, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPrintActions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSettings);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".print-actions[_ngcontent-%COMP%] {\n  height: 50px;\n  background: #00364d;\n  display: flex;\n  justify-content: space-around;\n  position: fixed;\n  bottom: 25px;\n  right: 25px;\n  padding: 0 10px;\n  border-radius: 10px;\n  z-index: 666;\n}\n\n.control-actions[_ngcontent-%COMP%] {\n  height: auto;\n  background: #00364d;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 500px;\n  position: fixed;\n  bottom: 85px;\n  right: 25px;\n  z-index: 666;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.control-actions[_ngcontent-%COMP%]   .control-item[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.control-actions[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.control-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  outline: none;\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nhc2hhL0RldmVsb3BtZW50L2dhbGRvYy9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3ByaW50LWFjdGlvbnMvcHJpbnQtYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJpbnQtYWN0aW9ucy9wcmludC1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtBQ0FKOztBREdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcmludC1hY3Rpb25zL3ByaW50LWFjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbnQtYWN0aW9ucyB7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogIzAwMzY0ZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyNXB4O1xuICByaWdodDogMjVweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB6LWluZGV4OiA2NjY7XG59XG5cbi5jb250cm9sLWFjdGlvbnMge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6ICMwMDM2NGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogNTAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA4NXB4O1xuICByaWdodDogMjVweDtcbiAgei1pbmRleDogNjY2O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gIC5jb250cm9sLWl0ZW0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgc3Ryb25nIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5idG4ge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxufVxuIiwiLnByaW50LWFjdGlvbnMge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDM2NGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjVweDtcbiAgcmlnaHQ6IDI1cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgei1pbmRleDogNjY2O1xufVxuXG4uY29udHJvbC1hY3Rpb25zIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjMDAzNjRkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDUwMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogODVweDtcbiAgcmlnaHQ6IDI1cHg7XG4gIHotaW5kZXg6IDY2NjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5jb250cm9sLWFjdGlvbnMgLmNvbnRyb2wtaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY29udHJvbC1hY3Rpb25zIHN0cm9uZyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNvbnRyb2wtYWN0aW9ucyAuYnRuIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintActionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-print-actions',
                templateUrl: './print-actions.component.html',
                styleUrls: ['./print-actions.component.scss']
            }]
    }], function () { return []; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], print: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], backAndEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], backAndAdd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], optionsUpdate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/print-base/print-base.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/print-base/print-base.component.ts ***!
  \**********************************************************************/
/*! exports provided: PrintBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintBaseComponent", function() { return PrintBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _services_print_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/print-data.service */ "./src/app/shared/services/print-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class PrintBaseComponent {
    constructor(fb, date, data, router) {
        this.fb = fb;
        this.date = date;
        this.data = data;
        this.router = router;
        this.showActions = true;
    }
    ngOnInit() {
        this.options = {
            logoSize: 75,
            titleSize: 16,
            deviceSize: 11,
            fontSize: 12,
            lineHeight: 1.1
        };
        this.data.blankData.subscribe(values => {
            if (values && !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(values.data)) {
                this.options = Object.assign(Object.assign({}, this.options), values);
            }
            else {
                this.router.navigateByUrl('/');
            }
        });
    }
    printCurrentBlank() {
        this.showActions = false;
        this.windowPrint();
    }
    navigateBackAndEdit() {
        const route = this.options.route ? this.options.route : './';
        this.router.navigateByUrl(route);
    }
    navigateBackAndAdd() {
        const route = this.options.route ? this.options.route : './';
        this.router.navigateByUrl(route);
        this.data.updateData({});
    }
    onOptionsUpdate(options) {
        this.fontSizeValue = options.fontSize;
    }
    windowPrint() {
        setTimeout(() => {
            window.print();
            this.showActions = true;
        }, 0);
    }
    ngOnDestroy() {
    }
}
PrintBaseComponent.ɵfac = function PrintBaseComponent_Factory(t) { return new (t || PrintBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_print_data_service__WEBPACK_IMPORTED_MODULE_4__["PrintDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
PrintBaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintBaseComponent, selectors: [["app-blank-base"]], decls: 0, vars: 0, template: function PrintBaseComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintBaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: '',
                selector: 'app-blank-base'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _services_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"] }, { type: _services_print_data_service__WEBPACK_IMPORTED_MODULE_4__["PrintDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/print-title/print-title.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/print-title/print-title.component.ts ***!
  \************************************************************************/
/*! exports provided: PrintTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintTitleComponent", function() { return PrintTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "font-size.px": a0 }; };
class PrintTitleComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PrintTitleComponent.ɵfac = function PrintTitleComponent_Factory(t) { return new (t || PrintTitleComponent)(); };
PrintTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintTitleComponent, selectors: [["app-print-title"]], inputs: { titleSize: "titleSize", title: "title" }, decls: 2, vars: 4, consts: [[1, "title", 3, "ngStyle"]], template: function PrintTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.titleSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, "\n");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".title[_ngcontent-%COMP%] {\n  white-space: pre;\n  text-align: center;\n  line-height: 1;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nhc2hhL0RldmVsb3BtZW50L2dhbGRvYy9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3ByaW50LXRpdGxlL3ByaW50LXRpdGxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcmludC10aXRsZS9wcmludC10aXRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3ByaW50LXRpdGxlL3ByaW50LXRpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiIsIi50aXRsZSB7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-print-title',
                templateUrl: './print-title.component.html',
                styleUrls: ['./print-title.component.scss']
            }]
    }], function () { return []; }, { titleSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/settings/settings.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/settings/settings.component.ts ***!
  \******************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");





function SettingsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_12_Template_clr_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r6 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.removeDoctor(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doctor_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", doctor_r5, " ");
} }
class SettingsComponent {
    constructor(fb) {
        this.fb = fb;
        this.doctors = ['Іванова Ю.В', 'Боднар М.П'];
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.form = this.fb.group({
            name: ['']
        });
        const localStorageItem = localStorage.getItem('doctors');
        if (localStorageItem) {
            this.doctors = localStorageItem.split('|');
        }
        else {
            localStorage.setItem('doctors', this.doctors.join('|'));
        }
    }
    submit() {
        const values = this.form.value;
        if (values.name) {
            this.doctors.push(values.name);
        }
        localStorage.setItem('doctors', this.doctors.join('|'));
        this.form.reset();
    }
    removeDoctor(i) {
        this.doctors.splice(i, 1);
        localStorage.setItem('doctors', this.doctors.join('|'));
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 24, vars: 2, consts: [[1, "clr-container", "settings-container"], [1, "clr-row"], [1, "clr-col-sm-12"], [1, "card"], [1, "card-header"], [1, "clr-col-sm-12", "clr-col-md-6"], [1, "card-block"], [1, "card-text"], [4, "ngFor", "ngForOf"], ["clrForm", "", 3, "formGroup"], ["placeholder", "\u041F\u0406\u0411", "clrInput", "", "name", "name", "formControlName", "name", "required", ""], [1, "card-bottom"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["shape", "times", 1, "icon", 3, "click"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u041B\u0456\u043A\u0430\u0440\u0456 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SettingsComponent_div_12_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "clr-input-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u041D\u043E\u0432\u0438\u0439 \u043B\u0456\u043A\u0430\u0440:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "clr-control-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "This field is required!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_22_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0414\u043E\u0434\u0430\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.doctors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrControlError"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"]], styles: [".settings-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: red;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Nhc2hhL0RldmVsb3BtZW50L2dhbGRvYy9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR0aW5ncy1jb250YWluZXIge1xuICAuaWNvbiB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbiIsIi5zZXR0aW5ncy1jb250YWluZXIgLmljb24ge1xuICBjb2xvcjogcmVkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/date.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/date.service.ts ***!
  \*************************************************/
/*! exports provided: DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return DateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class DateService {
    constructor(date) {
        this.date = date;
        this.uaDateMatch = {
            '01': 'січня',
            '02': 'лютого',
            '03': 'березня',
            '04': 'квітня',
            '05': 'травня',
            '06': 'червня',
            '07': 'липня',
            '08': 'серпня',
            '09': 'вересня',
            10: 'жовтня',
            11: 'листопада',
            12: 'грудня'
        };
        this.currentDate = new Date();
        this.day = this.date.transform(this.currentDate, 'dd');
        this.month = this.date.transform(this.currentDate, 'MM');
        this.year = this.date.transform(this.currentDate, 'yyyy');
    }
    getFullDate() {
        return this.currentDate;
    }
    getCurrentDay() {
        return this.day;
    }
    getCurrentMonth() {
        return this.month;
    }
    getCurrentYear() {
        return this.year;
    }
    getCurrentMonthLocale() {
        return this.uaDateMatch[this.month];
    }
    getCurrentUaDate() {
        return `« ${this.day} » ${this.month} ${this.year}р.`;
    }
}
DateService.ɵfac = function DateService_Factory(t) { return new (t || DateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"])); };
DateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DateService, factory: DateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/print-data.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/print-data.service.ts ***!
  \*******************************************************/
/*! exports provided: PrintDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintDataService", function() { return PrintDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class PrintDataService {
    constructor() {
        this.initState = {
            data: {},
            options: {},
            structure: [{}]
        };
        this.blankDataBehaviour = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.initState);
        this.blankData = this.blankDataBehaviour.asObservable();
    }
    updateData(data) {
        this.blankDataBehaviour.next(data);
    }
}
PrintDataService.ɵfac = function PrintDataService_Factory(t) { return new (t || PrintDataService)(); };
PrintDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PrintDataService, factory: PrintDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/router-extention.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/router-extention.service.ts ***!
  \*************************************************************/
/*! exports provided: RouterExtentionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterExtentionService", function() { return RouterExtentionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




/** A router wrapper, adding extra functions. */
class RouterExtentionService {
    constructor(router) {
        this.router = router;
        this.previousUrl = undefined;
        this.currentUrl = undefined;
        this.currentUrl = this.router.url;
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.previousUrl = this.currentUrl;
                this.currentUrl = event.url;
            }
        });
    }
    getPreviousUrl() {
        return this.previousUrl;
    }
}
RouterExtentionService.ɵfac = function RouterExtentionService_Factory(t) { return new (t || RouterExtentionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
RouterExtentionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RouterExtentionService, factory: RouterExtentionService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouterExtentionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/structures/uzd-doplerometry.structure.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/structures/uzd-doplerometry.structure.ts ***!
  \*****************************************************************/
/*! exports provided: UzdDoplerometryStructure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UzdDoplerometryStructure", function() { return UzdDoplerometryStructure; });
const UzdDoplerometryStructure = [
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: '',
                field: 'dp_date'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'П.І.Б:',
                field: 'dp_pib'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Положення плода:',
                field: 'dp_polozennya'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Передлежання:',
                field: 'dp_peredlezannya'
            }
        ]
    },
    {
        type: 'double',
        align: 'left',
        items: [
            {
                title: 'Серцебиття:',
                field: 'dp_sertse'
            },
            {
                title: 'ЧСС:',
                field: 'dp_tss'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Рухи плода:',
                field: 'dp_moves'
            }
        ]
    },
    {
        type: 'single',
        align: 'left text-bold',
        items: [
            {
                title: 'Доплерометрія артерії пуповини',
                field: ''
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 's/d:',
                field: 'dp_art_sd'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'IR:',
                field: 'dp_art_ir'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Pi:',
                field: 'dp_art_pi'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Кровоплин:',
                field: 'dp_art_krovo'
            }
        ]
    },
    {
        type: 'single',
        align: 'left text-bold',
        items: [
            {
                title: 'Доплерометрія середньої мозкової артерії',
                field: ''
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 's/d:',
                field: 'dp_mat_sd'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'IR:',
                field: 'dp_mat_ir'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Pi:',
                field: 'dp_mat_pi'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Кровоплин:',
                field: 'dp_mat_krovo'
            }
        ]
    },
    {
        type: 'single',
        align: 'left text-bold',
        items: [
            {
                title: 'Доплерометрія маткових атретій',
                field: ''
            }
        ]
    },
    {
        type: 'single',
        align: 'left text-bold',
        items: [
            {
                title: 'Ліва',
                field: ''
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'IR:',
                field: 'dp_liva_ir'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Pi:',
                field: 'dp_liva_pi'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Кровоплин:',
                field: 'dp_liva_krovo'
            }
        ]
    },
    {
        type: 'single',
        align: 'left text-bold',
        items: [
            {
                title: 'Права',
                field: ''
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'IR:',
                field: 'dp_prava_ir'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Pi:',
                field: 'dp_prava_pi'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Кровоплин:',
                field: 'dp_prava_krovo'
            }
        ]
    },
    {
        type: 'single',
        align: 'right',
        items: [
            {
                title: 'Лікар:',
                field: 'doctors'
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/shared/structures/uzd-molochnuh-zaloz.structure.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/structures/uzd-molochnuh-zaloz.structure.ts ***!
  \********************************************************************/
/*! exports provided: UzdOrganivMalogoTazuStructure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UzdOrganivMalogoTazuStructure", function() { return UzdOrganivMalogoTazuStructure; });
const UzdOrganivMalogoTazuStructure = [
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: '',
                field: 'mol_date'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'П.І.Б',
                field: 'mol_pib'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'День менструального циклу',
                field: 'mol_menstrual_day'
            }
        ]
    },
    {
        type: 'single',
        align: 'center text-bold',
        items: [
            {
                title: 'Права молочна залоза',
                field: ''
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Переважає:',
                field: 'mol_right_perevazae'
            }
        ]
    },
    {
        type: 'single',
        align: 'left text-bold',
        items: [
            {
                title: 'Верхній зовнішній квадрант',
                field: ''
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'а) анехогенні вкл.:',
                field: 'mol_pvzk_aneho'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'б) гіпоехогенні:',
                field: 'mol_pvzk_gipo'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'в) гетерогенні вкл.:',
                field: 'mol_pvvk_aneho'
            }
        ]
    },
    {
        type: 'single',
        align: 'left text-bold',
        items: [
            {
                title: 'Верхній внутрішній квадрант',
                field: ''
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'а) анехогенні вкл.:',
                field: 'mol_pvvk_aneho'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'б) гіпоехогенні:',
                field: 'mol_pvvk_gipo'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'в) гетерогенні вкл.:',
                field: 'mol_pvvk_getero'
            }
        ]
    },
    {
        type: 'single',
        align: 'left text-bold',
        items: [
            {
                title: 'Нижній зовнішній квадрант',
                field: ''
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'а) анехогенні вкл.:',
                field: 'mol_pnzk_aneho'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'б) гіпоехогенні:',
                field: 'mol_pnzk_gipo'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'в) гетерогенні вкл.:',
                field: 'mol_pnzk_getero'
            }
        ]
    },
    {
        type: 'single',
        align: 'left text-bold',
        items: [
            {
                title: 'Нижній внутрішній квадрант',
                field: ''
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'а) анехогенні вкл.:',
                field: 'mol_pnvk_aneho'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'б) гіпоехогенні:',
                field: 'mol_pnvk_gipo'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'в) гетерогенні вкл.:',
                field: 'mol_pnvk_getero'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Ділянка соска:',
                field: 'mol_plds'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Молочні ходи:',
                field: 'mol_plmh'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Регіональні лімфовузли:',
                field: 'mol_prlv'
            }
        ]
    },
    {
        type: 'single',
        align: 'center text-bold',
        items: [
            {
                title: 'Ліва молочна залоза',
                field: ''
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Переважає:',
                field: 'mol_left_perevazae'
            }
        ]
    },
    {
        type: 'single',
        align: 'left text-bold',
        items: [
            {
                title: 'Верхній зовнішній квадрант',
                field: ''
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'а) анехогенні вкл.:',
                field: 'mol_lvzk_aneho'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'б) гіпоехогенні:',
                field: 'mol_lvzk_gipo'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'в) гетерогенні вкл.:',
                field: 'mol_lvzk_getero'
            }
        ]
    },
    {
        type: 'single',
        align: 'left text-bold',
        items: [
            {
                title: 'Верхній внутрішній квадрант',
                field: ''
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'а) анехогенні вкл.:',
                field: 'mol_lvvk_aneho'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'б) гіпоехогенні:',
                field: 'mol_lvvk_gipo'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'в) гетерогенні вкл.:',
                field: 'mol_lvvk_getero'
            }
        ]
    },
    {
        type: 'single',
        align: 'left text-bold',
        items: [
            {
                title: 'Нижній зовнішній квадрант',
                field: ''
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'а) анехогенні вкл.:',
                field: 'mol_lnzk_aneho'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'б) гіпоехогенні:',
                field: 'mol_lnzk_gipo'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'в) гетерогенні вкл.:',
                field: 'mol_lnzk_getero'
            }
        ]
    },
    {
        type: 'single',
        align: 'left text-bold',
        items: [
            {
                title: 'Нижній внутрішній квадрант',
                field: ''
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'а) анехогенні вкл.:',
                field: 'mol_lnvk_aneho'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'б) гіпоехогенні:',
                field: 'mol_lnvk_gipo'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'в) гетерогенні вкл.:',
                field: 'mol_lnvk_getero'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Ділянка соска:',
                field: 'mol_llds'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Молочні ходи:',
                field: 'mol_llmh'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Регіональні лімфовузли:',
                field: 'mol_lrlv'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'ЗАКЛЮЧЕННЯ:',
                field: 'mol_zakluchennya'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'РЕКОМЕНДОВАНО:',
                field: 'mol_recomendovano'
            }
        ]
    },
    {
        type: 'single',
        align: 'right',
        items: [
            {
                title: 'Лікар:',
                field: 'doctors'
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/shared/structures/uzd-organiv-malogo-tazu.structure.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/structures/uzd-organiv-malogo-tazu.structure.ts ***!
  \************************************************************************/
/*! exports provided: UzdOrganivMalogoTazuStructure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UzdOrganivMalogoTazuStructure", function() { return UzdOrganivMalogoTazuStructure; });
const UzdOrganivMalogoTazuStructure = [
    {
        type: 'double',
        items: [
            {
                title: '',
                field: 'omt_date'
            },
            {
                title: '',
                field: 'omt_type'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'День менструального циклу:',
                field: 'omt_menstrual'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'П.І.Б',
                field: 'omt_pib'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'МАТКА:',
                field: 'omt_matka'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Положення:',
                field: 'omt_polozennya'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Розміри тіла матки:',
                field: 'omt_rozmir'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Ехоструктура:',
                field: 'omt_exostructure'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Передня стінка:',
                field: 'omt_perednya_stinka'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Задня стінка:',
                field: 'omt_zadnya_stinka'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Дно:',
                field: 'omt_dno'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'ендометрій:',
                field: 'omt_endometrii'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'порожнина матки:',
                field: 'omt_poroznyna'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'шийка матки:',
                field: 'omt_shuyka'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'цервікальний канал:',
                field: 'omt_tservikalnyy_kanal'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'правий ЯЄЧНИК:',
                field: 'omt_right_yayechnyk'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Розташування:',
                field: 'omt_right_rozstashuvannya'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'розміром:',
                field: 'omt_rigth_rozmir'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'в структурі яйника:',
                field: 'omt_rigth_v_structuri'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'права маткова труба:',
                field: 'omt_right_truba'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'лівий ЯЄЧНИК:',
                field: 'omt_left_yayechnyk'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Розташування:',
                field: 'omt_left_rozstashuvannya'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'розміром:',
                field: 'omt_left_rozmir'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'в структурі яйника:',
                field: 'omt_left_v_structuri'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'ліва маткова труба:',
                field: 'omt_left_truba'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Рідина в дугласовому просторі:',
                field: 'omt_riduna_v_duglas'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'ЗАКЛЮЧЕННЯ:',
                field: 'omt_zakluchennya'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'РЕКОМЕНДОВАНО:',
                field: 'omt_rekomendatsii'
            }
        ]
    },
    {
        type: 'single',
        align: 'center',
        items: [
            {
                title: 'Лікар:',
                field: 'doctors'
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/shared/structures/uzd-pregnancy.structure.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/structures/uzd-pregnancy.structure.ts ***!
  \**************************************************************/
/*! exports provided: UzdPregnancyStructure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UzdPregnancyStructure", function() { return UzdPregnancyStructure; });
const UzdPregnancyStructure = [
    {
        type: 'double',
        items: [
            {
                title: '',
                field: 'p_date'
            },
            {
                title: '',
                field: 'p_type'
            }
        ]
    },
    {
        type: 'double',
        items: [
            {
                title: 'Перший день ОМ:',
                field: 'p_first_day_om'
            },
            {
                title: 'Термін пологів:',
                field: 'p_termin_pologiv'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'П.І.Б',
                field: 'p_pib'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'МАТКА',
                field: 'p_matka'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Положення:',
                field: 'p_polozennya'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Розміри тіла матки:',
                field: 'p_rozmir'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Ехоструктура:',
                field: 'p_exostructure'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'В порожнині матки плівне яйце:',
                field: 'p_plivne'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Куприко-тім\'яний розмір (КТР):',
                field: 'p_ktr'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Серцебиття:',
                field: 'p_sertse'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Жовточний мішок:',
                field: 'p_zhovtochnyy_mishok'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Ділянки відшарування плідного яйця:',
                field: 'p_dilyanku'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Тонус міометрію:',
                field: 'p_tonus'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Шийка матки:',
                field: 'p_shuyka'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'вн.вічко:',
                field: 'p_vichko'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Правий ЯЄЧНИК ехоструктура:',
                field: 'p_p_yaye_exostructure'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Лівий ЯЄЧНИК ехоструктура:',
                field: 'p_l_yaye_exostructure'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Рідина в дугласовому просторі:',
                field: 'p_riduna_v_duglas'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'По гестації:',
                field: 'p_po_gastatsii'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'ЗАКЛЮЧЕННЯ:',
                field: 'p_zakluchennya'
            }
        ]
    },
    {
        type: 'single',
        align: 'center',
        items: [
            {
                title: 'Лікар:',
                field: 'doctors'
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/shared/structures/uzd-protocol-one-uz.structure.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/structures/uzd-protocol-one-uz.structure.ts ***!
  \********************************************************************/
/*! exports provided: UzdProtocolOneUzStructure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UzdProtocolOneUzStructure", function() { return UzdProtocolOneUzStructure; });
const UzdProtocolOneUzStructure = [
    {
        type: 'double',
        align: 'left',
        items: [
            {
                title: '',
                field: 'one_date'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'П.І.Б:',
                field: 'one_pib'
            }
        ]
    },
    {
        type: 'triple',
        align: 'left',
        items: [
            {
                title: 'ОМ:',
                field: 'one_om'
            },
            {
                title: 'По гестації:',
                field: 'one_gastatsia'
            },
            {
                title: 'Термін пологів:',
                field: 'one_termin'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Методика сканування:',
                field: 'one_method'
            }
        ]
    },
    {
        type: 'triple',
        align: 'left',
        items: [
            {
                title: 'Розміри матки: довжина',
                field: 'one_dovz'
            },
            {
                title: 'ширина:',
                field: 'one_shuruna'
            },
            {
                title: 'передньо-задній',
                field: 'one_pered_zad'
            }
        ]
    },
    {
        type: 'double',
        align: 'left',
        items: [
            {
                title: 'Структура біометрію:',
                field: 'one_structura_biomentiyu'
            },
            {
                title: 'Тонус біометрію:',
                field: 'one_tonus'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'локальний гіпертонус:',
                field: 'one_local_hipertonus'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'У порожнині матки візуалізується:',
                field: 'one_u_poroz_vizial'
            }
        ]
    },
    {
        type: 'double',
        align: 'left',
        items: [
            {
                title: 'Діаметр плідного яйця:',
                field: 'one_diamert_egg'
            },
            {
                title: 'Кількість ембріонів:',
                field: 'one_kilkist_embrioniv'
            },
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Ділянки відшарування плідного яйця:',
                field: 'one_vidsharuvannya'
            }
        ]
    },
    {
        type: 'title',
        align: 'center',
        items: [
            {
                title: 'БІОМЕТРІЯ ПЛОДУ'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Куприко-тім\'яний розмір (КТР):',
                field: 'one_kupriko'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Біпарієтальний розмір(БПР):',
                field: 'one_biparietal'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Кістки черепа:',
                field: 'one_skull_bones'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Окружність живота:',
                field: 'one_okruznist'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Середній діаметр живота:',
                field: 'one_ser_diametr'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Довжина стегна:',
                field: 'one_dov_stegna'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Комірцевий простір:',
                field: 'one_komirts_prostir'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Наявність носової кістки:',
                field: 'one_nose_kist'
            }
        ]
    },
    {
        type: 'triple',
        align: 'left',
        items: [
            {
                title: 'Серце:',
                field: 'one_hearth'
            },
            {
                title: 'Серцебиття:',
                field: 'one_hearth_bom'
            },
            {
                title: 'ЧСС:',
                field: 'one_chss'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Передня черевна стінка:',
                field: 'one_pered_cherevna'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Рухова активність плода:',
                field: 'one_ruh_ploda'
            }
        ]
    },
    {
        type: 'triple',
        align: 'left',
        items: [
            {
                title: 'Локалізація хоріону:',
                field: 'one_local_horionu'
            },
            {
                title: 'товщина:',
                field: 'one_tovshuna'
            },
            {
                title: 'структура:',
                field: 'one_structura'
            }
        ]
    },
    {
        type: 'triple',
        align: 'left',
        items: [
            {
                title: 'Шийка матки:',
                field: 'one_shuyka'
            },
            {
                title: 'Цервікальний канал:',
                field: 'one_tserv_canal'
            },
            {
                title: 'Діаметр внутрішнього вічка:',
                field: 'one_diam_vnutrishnogo'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Стан придатків матки:',
                field: 'one_stan_prudatkiv'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Особливості:',
                field: 'one_osobluvosti'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Висновок УЗД:',
                field: 'one_results'
            }
        ]
    },
    {
        type: 'single',
        align: 'right',
        items: [
            {
                title: 'Лікар:',
                field: 'doctors'
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/shared/structures/uzd-protocol-two-uz.structure.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/structures/uzd-protocol-two-uz.structure.ts ***!
  \********************************************************************/
/*! exports provided: UzdProtocolTwoUzStructure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UzdProtocolTwoUzStructure", function() { return UzdProtocolTwoUzStructure; });
const UzdProtocolTwoUzStructure = [
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: '',
                field: 'two_date'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'П.І.Б:',
                field: 'two_pib'
            }
        ]
    },
    {
        type: 'triple',
        align: 'left',
        items: [
            {
                title: 'OM:',
                field: 'two_om'
            },
            {
                title: 'По гестації:',
                field: 'two_gastatsia'
            },
            {
                title: 'Термін пологів:',
                field: 'two_termin'
            },
            {
                title: 'Вага:',
                field: 'two_vaga'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Кількість плодів:',
                field: 'two_plodiv'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Положення плода:',
                field: 'two_poloz'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Передлежання:',
                field: 'two_pred'
            }
        ]
    },
    {
        type: 'triple',
        align: 'left',
        items: [
            {
                title: 'Серцебиття:',
                field: 'two_sertse'
            },
            {
                title: 'ЧСС:',
                field: 'two_chss'
            },
            {
                title: 'Рухи плода:',
                field: 'two_moves'
            }
        ]
    },
    {
        type: 'full-table',
        align: 'left',
        table_headers: [
            {
                title: 'Параметри плода',
                class: 'left'
            },
            {
                title: 'мм',
                class: 'left'
            },
            {
                title: 'Параметри плода',
                class: 'left'
            },
            {
                title: 'мм',
                class: 'left'
            }
        ],
        table_rows: [
            [
                {
                    title: 'Біпарієтальний розмір(БПР)',
                    class: 'left'
                },
                {
                    field: 'two_bpr'
                },
                {
                    title: 'Нирка права',
                    class: 'left'
                },
                {
                    field: 'two_nurka_right'
                }
            ],
            [
                {
                    title: 'Лобно потиличний розмір(ЛПР)',
                    class: 'left'
                },
                {
                    field: 'two_lpr'
                },
                {
                    title: 'Нирка зліва',
                    class: 'left'
                },
                {
                    field: 'two_nurka_left'
                }
            ],
            [
                {
                    title: 'Окружність голови',
                    class: 'left'
                },
                {
                    field: 'two_head_okr'
                },
                {
                    title: 'Сечовий міхур',
                    class: 'left'
                },
                {
                    field: 'two_setch_mikhur'
                }
            ],
            [
                {
                    title: 'Цефалічний індекс',
                    class: 'left'
                },
                {
                    field: 'two_tsefal_index'
                },
                {
                    title: 'Довжини стегна',
                    class: 'left'
                },
                {
                    field: 'two_dovz_stegna'
                }
            ],
            [
                {
                    title: 'Мозочок',
                    class: 'left'
                },
                {
                    field: 'two_mozochok'
                },
                {
                    title: 'Довжина великої бедрової кістки',
                    class: 'left'
                },
                {
                    field: 'two_vel_bedr_kist'
                }
            ],
            [
                {
                    title: 'Інтраокулярний розмір',
                    class: 'left'
                },
                {
                    field: 'two_intraokul_rozmir'
                },
                {
                    title: 'Довжина малої бедрової кістки',
                    class: 'left'
                },
                {
                    field: 'two_dozv_mal_bedr_kist'
                }
            ],
            [
                {
                    title: 'Діаметр грудної клітини (СДГК)',
                    class: 'left'
                },
                {
                    field: 'two_sdgk'
                },
                {
                    title: 'Стопа',
                    class: 'left'
                },
                {
                    field: 'two_stopa'
                }
            ],
            [
                {
                    title: 'Серед. діаметр живота(СДЖ)',
                    class: 'left'
                },
                {
                    field: 'two_diam_zuv'
                },
                {
                    title: 'Довжина плеча',
                    class: 'left'
                },
                {
                    field: 'two_dovz_plecha'
                }
            ],
            [
                {
                    title: 'Окружність живота',
                    class: 'left'
                },
                {
                    field: 'two_okr_zuvota'
                },
                {
                    title: 'Довжина ліктьової кістки',
                    class: 'left'
                },
                {
                    field: 'two_dovz_likt'
                }
            ],
            [
                {
                    title: 'Серце',
                    class: 'left'
                },
                {
                    field: 'two_sertse_mm'
                },
                {
                    title: 'Довжина променевої кістки',
                    class: 'left'
                },
                {
                    field: 'two_dovz_promenevoi'
                }
            ],
            [
                {
                    title: 'Шлунок',
                    class: 'left'
                },
                {
                    field: 'two_shlunok'
                },
                {
                    title: 'Кисть',
                    class: 'left'
                },
                {
                    field: 'two_kust'
                }
            ]
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Структура мозку',
                field: ''
            }
        ]
    },
    {
        type: 'triple',
        align: 'left',
        items: [
            {
                title: 'Серединне М-ехо:',
                field: 'two_sered_exo'
            },
            {
                title: ',бокові шлуночки мозку:',
                field: 'two_bok_sh_mozku'
            },
            {
                title: ',велика цистерна:',
                field: 'two_big_tsusterna'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Задні рога бокових шлуночків:',
                field: 'two_zadni_roga'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Хребтовий стовбур:',
                field: 'two_stovbur'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Серце:',
                field: 'two_hearth'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Діафрагма:',
                field: 'two_diafragma'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Кишечник:',
                field: 'two_kushechnuk'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Передня черевна стінка:',
                field: 'two_perednya_cherevna'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Структури обличчя. Лицьові розщілини:',
                field: 'two_luts_rozshilunu'
            }
        ]
    },
    {
        type: 'double',
        align: 'left',
        items: [
            {
                title: 'Носова кістка:',
                field: 'two_nosova_kistka'
            },
            {
                title: 'Розмір шийної складки:',
                field: 'two_rozmir_skladku'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Кількість навколоплідних вод:',
                field: 'two_kilkist_vod'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Локалізація плаценти:',
                field: 'two_local_plats'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Нижній край плаценти на',
                field: 'two_nuz_platsenty'
            }
        ]
    },
    {
        type: 'double',
        align: 'left',
        items: [
            {
                title: 'Товщина плаценти:',
                field: 'two_tov_platsenty'
            },
            {
                title: 'Структура плаценти:',
                field: 'two_str_platsenty'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Реверсний кровоток у венозній протоці',
                field: 'two_revers_krovotok'
            }
        ]
    },
    {
        type: 'double',
        align: 'left',
        items: [
            {
                title: 'Пуповина. Кількість судин:',
                field: 'two_kilk_sudun'
            },
            {
                title: 'Обвиття пуповини:',
                field: 'two_obv_pupovunu'
            }
        ]
    },
    {
        type: 'double',
        align: 'left',
        items: [
            {
                title: 'Передлежання судин пуповини:',
                field: 'two_pered_sudun'
            },
            {
                title: 'Оболонкове прикріплення судин:',
                field: 'two_obol_prukrip'
            }
        ]
    },
    {
        type: 'double',
        align: 'left',
        items: [
            {
                title: 'Шийка матки:',
                field: 'two_shuyka_matku'
            },
            {
                title: 'Вн.вічко:',
                field: 'two_vnut_vichko'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Підозра або наявні вади розвитку плода (ВВР):',
                field: 'two_pidozra'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Висновок УЗД:',
                field: 'two_results'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Рекомендації:',
                field: 'two_recomends'
            }
        ]
    },
    {
        type: 'single',
        align: 'right',
        items: [
            {
                title: 'Лікар:',
                field: 'doctors'
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/shared/structures/uzd-protocol.structure.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/structures/uzd-protocol.structure.ts ***!
  \*************************************************************/
/*! exports provided: UzdProtocolStructure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UzdProtocolStructure", function() { return UzdProtocolStructure; });
const UzdProtocolStructure = [
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: '',
                field: 'pro_date'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'П.І.Б:',
                field: 'pro_pib'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Серцебиття:',
                field: 'pro_sertse'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'ЧСС:',
                field: 'pro_chss'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Рухи:',
                field: 'pro_moves'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Ділянки відшарування плідного яйця:',
                field: 'pro_dilyanku'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Тонус мінометрію:',
                field: 'pro_tonus'
            }
        ]
    },
    {
        type: 'single',
        align: 'right',
        items: [
            {
                title: 'Лікар:',
                field: 'doctors'
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/shared/structures/uzd-tservikometria.structure.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/structures/uzd-tservikometria.structure.ts ***!
  \*******************************************************************/
/*! exports provided: UzdTservikometriaStructure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UzdTservikometriaStructure", function() { return UzdTservikometriaStructure; });
const UzdTservikometriaStructure = [
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: '',
                field: 'ts_date'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'П.І.Б:',
                field: 'ts_pib'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Шийка матки:',
                field: 'ts_shuyka'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Цервікальний канал:',
                field: 'ts_canal'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Внутрішнє вічко:',
                field: 'ts_vichko'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Серцебиття:',
                field: 'ts_sertse'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'ЧСС:',
                field: 'ts_chss'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Рухи плода:',
                field: 'ts_moves'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Висновок:',
                field: 'ts_vusnovok'
            }
        ]
    },
    {
        type: 'single',
        align: 'right',
        items: [
            {
                title: 'Лікар:',
                field: 'doctors'
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/shared/structures/uzd-two-three-uz.structure.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/structures/uzd-two-three-uz.structure.ts ***!
  \*****************************************************************/
/*! exports provided: UzdTwoThreeUzStructure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UzdTwoThreeUzStructure", function() { return UzdTwoThreeUzStructure; });
const UzdTwoThreeUzStructure = [
    {
        type: 'single',
        align: 'center',
        items: [
            {
                title: '',
                field: 'uz_date'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'П.І.Б:',
                field: 'uz_pib'
            }
        ]
    },
    {
        type: 'double',
        align: 'left',
        items: [
            {
                title: 'Кількість плодів:',
                field: 'uz_plodiv_count'
            },
            {
                title: 'Вага:',
                field: 'uz_vaga'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Положення плода:',
                field: 'uz_poloz_ploda'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Передлежання:',
                field: 'uz_predlezannya'
            }
        ]
    },
    {
        type: 'double',
        align: 'left',
        items: [
            {
                title: 'Серцебиття:',
                field: 'uz_sertce'
            },
            {
                title: 'ЧСС:',
                field: 'uz_chss'
            },
            {
                title: 'Рухи плода:',
                field: 'uz_ruh_ploda'
            }
        ]
    },
    {
        type: 'double',
        align: 'left',
        items: [
            {
                title: 'Біпарієтральний розмір (БПР):',
                field: 'uz_bpr'
            },
            {
                title: 'Структура мозку:',
                field: 'uz_brain_str'
            }
        ]
    },
    {
        type: 'double',
        align: 'left',
        items: [
            {
                title: 'Окружність голови (ОГ):',
                field: 'uz_og'
            },
            {
                title: 'Потиличні роги:',
                field: 'uz_pot_rog'
            }
        ]
    },
    {
        type: 'double',
        align: 'left',
        items: [
            {
                title: 'Лобно-потиличний розмір (ЛПР):',
                field: 'uz_lpr'
            },
            {
                title: 'Бокові шлуночки (БШ):',
                field: 'uz_bsh'
            }
        ]
    },
    {
        type: 'double',
        align: 'left',
        items: [
            {
                title: 'Окружність живота (ОЖ):',
                field: 'uz_ozh'
            },
            {
                title: '4-х камерний розтин серця:',
                field: 'uz_chkam'
            }
        ]
    },
    {
        type: 'double',
        align: 'left',
        items: [
            {
                title: 'Довжина стегна (ДС):',
                field: 'uz_dc'
            },
            {
                title: 'Зріз на трьох судинах:',
                field: 'uz_zriz_tr'
            }
        ]
    },
    {
        type: 'double',
        align: 'left',
        items: [
            {
                title: 'Легенева артерія:',
                field: 'uz_leg_art'
            },
            {
                title: 'Ао:',
                field: 'uz_ao'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Середній діаметр грудної клітини (СДГК):',
                field: 'uz_sdgk'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Носогубний трикутник:',
                field: 'uz_noso_triangle'
            }
        ]
    },
    {
        type: 'double',
        align: 'left',
        items: [
            {
                title: 'Легені (ступінь зрілості):',
                field: 'uz_leg_st'
            },
            {
                title: 'Мозочок:',
                field: 'uz_mozochok'
            }
        ]
    },
    {
        type: 'double',
        align: 'left',
        items: [
            {
                title: 'Кісточка перенісся:',
                field: 'uz_kistochka'
            },
            {
                title: 'К-сть навколоплідних вод:',
                field: 'uz_kilkist_vod'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Амніотичний індекс:',
                field: 'uz_index'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Локалізація плаценти:',
                field: 'uz_platsenty'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Ступінь зрілості:',
                field: 'uz_stupin_zrilosti'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Нижній край плаценти:',
                field: 'uz_nizniy_kray'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Товщина плаценти:',
                field: 'uz_tovshuna'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Патологічні включення плаценти:',
                field: 'uz_patolog_platsenty'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Зрізи петель пуповини в шийномум трикутнику:',
                field: 'uz_zrizu_petel'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Пуповина: кількість судин:',
                field: 'uz_pupovyna'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Пупочне кільке:',
                field: 'uz_pupo_kilce'
            }
        ]
    },
    {
        type: 'double',
        align: 'left',
        items: [
            {
                title: 'Шийка матки:',
                field: 'uz_shuyka'
            },
            {
                title: 'вн/вічко:',
                field: 'uz_vnvichko'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Цервікальний канал:',
                field: 'uz_tservik'
            }
        ]
    },
    {
        type: 'double',
        align: 'left',
        items: [
            {
                title: 'Термін по гестації:',
                field: 'uz_terminpogest'
            },
            {
                title: 'Термін пологів:',
                field: 'uz_termin'
            }
        ]
    },
    {
        type: 'single',
        align: 'center text-bold margin-10',
        items: [
            {
                title: 'ДОПЛЕРОМЕТРІЯ',
                field: ''
            }
        ]
    },
    {
        type: 'double',
        align: 'left',
        items: [
            {
                title: 'S/D:',
                field: 'uz_sd'
            },
            {
                title: 'Кровоплин судин:',
                field: 'uz_krovoplun'
            }
        ]
    },
    {
        type: 'double',
        align: 'left',
        items: [
            {
                title: 'CMA:',
                field: 'uz_cma'
            },
            {
                title: 'IR:',
                field: 'uz_ir'
            },
            {
                title: 'Pi:',
                field: 'uz_pi'
            }
        ]
    },
    {
        type: 'single',
        align: 'left',
        items: [
            {
                title: 'Висновок УЗД:',
                field: 'uz_result'
            }
        ]
    },
    {
        type: 'single',
        align: 'right margin-10',
        items: [
            {
                title: 'Лікар:',
                field: 'doctors'
            }
        ]
    }
];


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sasha/Development/galdoc/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map