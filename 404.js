(self["webpackChunkdaily_girl_v2"] = self["webpackChunkdaily_girl_v2"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _components_start_start_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/start/start.component */ 727);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 619);
/* harmony import */ var _models_destinations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/destinations */ 3709);
/* harmony import */ var _handlers_authentication_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/authentication.guard */ 5515);
/* harmony import */ var _components_manager_manager_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/manager/manager.component */ 5209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 9580);








const routes = [
    { path: _models_destinations__WEBPACK_IMPORTED_MODULE_2__.Destinations.EMPTY, redirectTo: _models_destinations__WEBPACK_IMPORTED_MODULE_2__.Destinations.START, pathMatch: 'full' },
    { path: _models_destinations__WEBPACK_IMPORTED_MODULE_2__.Destinations.START, component: _components_start_start_component__WEBPACK_IMPORTED_MODULE_0__.StartComponent },
    { path: _models_destinations__WEBPACK_IMPORTED_MODULE_2__.Destinations.DASHBOARD, component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, canActivate: [_handlers_authentication_guard__WEBPACK_IMPORTED_MODULE_3__.AuthenticationGuard] },
    { path: _models_destinations__WEBPACK_IMPORTED_MODULE_2__.Destinations.MANAGER, component: _components_manager_manager_component__WEBPACK_IMPORTED_MODULE_4__.ManagerComponent, canActivate: [_handlers_authentication_guard__WEBPACK_IMPORTED_MODULE_3__.AuthenticationGuard] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class AppComponent {
    constructor() {
        this.title = 'Daily Girl';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "mat-app-background"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.module */ 3806);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ 567);
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ 9166);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/flex-layout */ 582);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _components_start_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/start/start.component */ 727);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ 7431);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 619);
/* harmony import */ var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/upload/upload.component */ 9424);
/* harmony import */ var _directives_drag_and_drop_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/drag-and-drop/drag-and-drop.directive */ 1501);
/* harmony import */ var _repositories_image_repository__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./repositories/image.repository */ 1781);
/* harmony import */ var _services_fire_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/fire-storage.service */ 8931);
/* harmony import */ var _services_fire_store_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/fire-store.service */ 7442);
/* harmony import */ var _components_manager_manager_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/manager/manager.component */ 5209);
/* harmony import */ var _components_dashboard_element_dashboard_element_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dashboard-element/dashboard-element.component */ 5637);
/* harmony import */ var _components_manager_sent_element_manager_sent_element_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/manager-sent-element/manager-sent-element.component */ 9083);
/* harmony import */ var _components_manager_to_send_element_manager_to_send_element_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/manager-to-send-element/manager-to-send-element.component */ 4876);
/* harmony import */ var _components_manager_to_send_manager_to_send_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/manager-to-send/manager-to-send.component */ 4887);
/* harmony import */ var _components_manager_sent_manager_sent_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/manager-sent/manager-sent.component */ 9709);
/* harmony import */ var _components_reply_element_reply_element_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/reply-element/reply-element.component */ 1776);
/* harmony import */ var _components_reply_create_reply_create_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/reply-create/reply-create.component */ 5900);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/fire/compat */ 5908);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 6303);
/* harmony import */ var _repositories_reply_repository__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./repositories/reply.repository */ 8297);
/* harmony import */ var _components_grade_bar_grade_bar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/grade-bar/grade-bar.component */ 4791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 9580);
































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ providers: [
        _repositories_image_repository__WEBPACK_IMPORTED_MODULE_11__.ImageRepository,
        _repositories_reply_repository__WEBPACK_IMPORTED_MODULE_22__.ReplyRepository,
        _services_fire_storage_service__WEBPACK_IMPORTED_MODULE_12__.FireStorageService,
        _services_fire_store_service__WEBPACK_IMPORTED_MODULE_13__.FireStoreService
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule,
            _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_27__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebaseConfig),
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__.FlexModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
            _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_30__.AngularFirestoreModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__.SignInComponent,
        _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__.SignUpComponent,
        _components_start_start_component__WEBPACK_IMPORTED_MODULE_6__.StartComponent,
        _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__.ToolbarComponent,
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__.DashboardComponent,
        _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_9__.UploadComponent,
        _directives_drag_and_drop_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_10__.DragAndDropDirective,
        _components_manager_manager_component__WEBPACK_IMPORTED_MODULE_14__.ManagerComponent,
        _components_dashboard_element_dashboard_element_component__WEBPACK_IMPORTED_MODULE_15__.DashboardElementComponent,
        _components_manager_sent_element_manager_sent_element_component__WEBPACK_IMPORTED_MODULE_16__.ManagerSentElementComponent,
        _components_manager_to_send_element_manager_to_send_element_component__WEBPACK_IMPORTED_MODULE_17__.ManagerToSendElementComponent,
        _components_manager_to_send_manager_to_send_component__WEBPACK_IMPORTED_MODULE_18__.ManagerToSendComponent,
        _components_manager_sent_manager_sent_component__WEBPACK_IMPORTED_MODULE_19__.ManagerSentComponent,
        _components_reply_element_reply_element_component__WEBPACK_IMPORTED_MODULE_20__.ReplyElementComponent,
        _components_reply_create_reply_create_component__WEBPACK_IMPORTED_MODULE_21__.ReplyCreateComponent,
        _components_grade_bar_grade_bar_component__WEBPACK_IMPORTED_MODULE_23__.GradeBarComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule,
        _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_27__.AngularFireModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__.FlexModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_30__.AngularFirestoreModule] }); })();


/***/ }),

/***/ 5637:
/*!*****************************************************************************!*\
  !*** ./src/app/components/dashboard-element/dashboard-element.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardElementComponent": () => (/* binding */ DashboardElementComponent)
/* harmony export */ });
/* harmony import */ var _models_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/image */ 2316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 582);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _grade_bar_grade_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../grade-bar/grade-bar.component */ 4791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _reply_create_reply_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reply-create/reply-create.component */ 5900);
/* harmony import */ var _reply_element_reply_element_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reply-element/reply-element.component */ 1776);










function DashboardElementComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-reply-element", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reply_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("reply", reply_r1)("image", ctx_r0.image);
} }
class DashboardElementComponent {
    constructor() {
        this.image = new _models_image__WEBPACK_IMPORTED_MODULE_0__.Image('', '', '');
    }
    ngOnInit() {
    }
}
DashboardElementComponent.ɵfac = function DashboardElementComponent_Factory(t) { return new (t || DashboardElementComponent)(); };
DashboardElementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DashboardElementComponent, selectors: [["app-dashboard-element"]], inputs: { image: "image" }, decls: 11, vars: 7, consts: [["fxLayoutAlign", "center"], ["fxLayoutAlign", "center center", "fxLayout", "column", "fxLayoutGap", "8px", 2, "width", "55vw"], ["color", "accent"], ["mat-raised-button", "", "disabled", "", 2, "width", "100%"], ["alt", "", 1, "image", 3, "src"], [3, "grades", "image"], [4, "ngFor", "ngForOf"], [3, "image"], [3, "reply", "image"]], template: function DashboardElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-grade-bar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, DashboardElementComponent_div_9_Template, 2, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "app-reply-create", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.image.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.image.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx.image.drawable, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("grades", ctx.image.grades)("image", ctx.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.image.replies);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("image", ctx.image);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutGapDirective, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _grade_bar_grade_bar_component__WEBPACK_IMPORTED_MODULE_1__.GradeBarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _reply_create_reply_create_component__WEBPACK_IMPORTED_MODULE_2__.ReplyCreateComponent, _reply_element_reply_element_component__WEBPACK_IMPORTED_MODULE_3__.ReplyElementComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtZWxlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 619:
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _services_fire_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/fire-store.service */ 7442);
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toolbar/toolbar.component */ 7431);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ 2791);
/* harmony import */ var _dashboard_element_dashboard_element_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard-element/dashboard-element.component */ 5637);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);






function DashboardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-dashboard-element", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("image", item_r1);
} }
class DashboardComponent {
    constructor(fireStoreService) {
        this.fireStoreService = fireStoreService;
        this.elements = this.fireStoreService.sent;
    }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_fire_store_service__WEBPACK_IMPORTED_MODULE_0__.FireStoreService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 4, vars: 6, consts: [[3, "showUploadButton", "showManagerButton", "showLogoutButton"], ["itemSize", "900", 2, "width", "100vw", "height", "90vh"], [4, "cdkVirtualFor", "cdkVirtualForOf"], [3, "image"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "cdk-virtual-scroll-viewport", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DashboardComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showUploadButton", true)("showManagerButton", true)("showLogoutButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkVirtualForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, ctx.elements));
    } }, directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__.ToolbarComponent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__.CdkVirtualScrollViewport, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__.CdkFixedSizeVirtualScroll, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__.CdkVirtualForOf, _dashboard_element_dashboard_element_component__WEBPACK_IMPORTED_MODULE_2__.DashboardElementComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4791:
/*!*************************************************************!*\
  !*** ./src/app/components/grade-bar/grade-bar.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GradeBarComponent": () => (/* binding */ GradeBarComponent)
/* harmony export */ });
/* harmony import */ var _repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../repositories/local-storage.repository */ 762);
/* harmony import */ var _models_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/image */ 2316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _repositories_grade_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repositories/grade.repository */ 6661);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 582);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);








class GradeBarComponent {
    constructor(gradeRepository) {
        this.gradeRepository = gradeRepository;
        this.grades = [];
        this.image = new _models_image__WEBPACK_IMPORTED_MODULE_1__.Image('', '', '');
    }
    ngOnInit() {
    }
    onCLick(value) {
        let action = false;
        console.log('started');
        this.grades.forEach(grade => {
            if (grade.value === value && grade.author === _repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_0__.LocalStorageRepository.getDisplayName()) {
                console.log('deleting');
                action = true;
                this.gradeRepository.deleteGrade(this.image, grade);
            }
            else if (grade.value !== value && grade.author === _repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_0__.LocalStorageRepository.getDisplayName()) {
                console.log('changing');
                action = true;
                grade.value = value;
                this.gradeRepository.editGrade(this.image);
            }
        });
        if (!action) {
            console.log('adding');
            this.gradeRepository.addGrade(this.image, value);
        }
    }
    countGrade(value) {
        let counter = 0;
        this.grades.forEach(grade => {
            if (grade.value === value) {
                counter++;
            }
        });
        return counter;
    }
    hasUsersGradeButtonStyle(value) {
        let attributes = 'mat-stroked-button';
        this.grades.forEach(grade => {
            if (grade.value === value && grade.author === _repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_0__.LocalStorageRepository.getDisplayName()) {
                attributes = 'mat-raised-button';
            }
        });
        return attributes;
    }
    hasUserGradeColour(value) {
        let colour = '';
        this.grades.forEach(grade => {
            if (grade.value === value && grade.author === _repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_0__.LocalStorageRepository.getDisplayName()) {
                colour = 'primary';
            }
        });
        return colour;
    }
}
GradeBarComponent.ɵfac = function GradeBarComponent_Factory(t) { return new (t || GradeBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_repositories_grade_repository__WEBPACK_IMPORTED_MODULE_2__.GradeRepository)); };
GradeBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GradeBarComponent, selectors: [["app-grade-bar"]], inputs: { grades: "grades", image: "image" }, decls: 19, vars: 18, consts: [["fxLayoutGap", "16px", "fxLayoutAlign", "space-around center", 2, "width", "100%"], ["mat-button", "", "fxLayoutAlign", "center center", 3, "ngClass", "color", "click"], ["src", "assets/SS.png", "alt", "", 1, "grade"], ["src", "assets/S.png", "alt", "", 1, "grade"], ["src", "assets/A.png", "alt", "", 1, "grade"], ["src", "assets/B.png", "alt", "", 1, "grade"], ["src", "assets/C.png", "alt", "", 1, "grade"], ["src", "assets/D.png", "alt", "", 1, "grade"]], template: function GradeBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GradeBarComponent_Template_button_click_1_listener() { return ctx.onCLick(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GradeBarComponent_Template_button_click_4_listener() { return ctx.onCLick(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GradeBarComponent_Template_button_click_7_listener() { return ctx.onCLick(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GradeBarComponent_Template_button_click_10_listener() { return ctx.onCLick(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GradeBarComponent_Template_button_click_13_listener() { return ctx.onCLick(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GradeBarComponent_Template_button_click_16_listener() { return ctx.onCLick(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("color", ctx.hasUserGradeColour(6));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.hasUsersGradeButtonStyle(6));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" : ", ctx.countGrade(6), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("color", ctx.hasUserGradeColour(5));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.hasUsersGradeButtonStyle(5));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" : ", ctx.countGrade(5), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("color", ctx.hasUserGradeColour(4));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.hasUsersGradeButtonStyle(4));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" : ", ctx.countGrade(4), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("color", ctx.hasUserGradeColour(3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.hasUsersGradeButtonStyle(3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" : ", ctx.countGrade(3), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("color", ctx.hasUserGradeColour(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.hasUsersGradeButtonStyle(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" : ", ctx.countGrade(2), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("color", ctx.hasUserGradeColour(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.hasUsersGradeButtonStyle(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" : ", ctx.countGrade(1), " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutGapDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFkZS1iYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9083:
/*!***********************************************************************************!*\
  !*** ./src/app/components/manager-sent-element/manager-sent-element.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerSentElementComponent": () => (/* binding */ ManagerSentElementComponent)
/* harmony export */ });
/* harmony import */ var _models_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/image */ 2316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _repositories_image_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../repositories/image.repository */ 1781);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 582);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 2529);








class ManagerSentElementComponent {
    constructor(imageRepository) {
        this.imageRepository = imageRepository;
        this.image = new _models_image__WEBPACK_IMPORTED_MODULE_0__.Image('', '', '');
    }
    ngOnInit() {
    }
    deleteItem() {
        this.imageRepository.deleteFromSent(this.image);
    }
}
ManagerSentElementComponent.ɵfac = function ManagerSentElementComponent_Factory(t) { return new (t || ManagerSentElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_repositories_image_repository__WEBPACK_IMPORTED_MODULE_1__.ImageRepository)); };
ManagerSentElementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ManagerSentElementComponent, selectors: [["app-manager-sent-element"]], inputs: { image: "image" }, decls: 11, vars: 3, consts: [["fxLayoutAlign", "center center", "fxLayout", "column", "fxLayoutGap", "8px", 2, "width", "45vw"], ["color", "primary", "fxLayoutAlign", "center center"], ["alt", "", 1, "manager-image", 3, "src"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function ManagerSentElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ManagerSentElementComponent_Template_button_click_6_listener() { return ctx.deleteItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.image.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.image.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.image.drawable, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutGapDirective, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2VyLXNlbnQtZWxlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9709:
/*!*******************************************************************!*\
  !*** ./src/app/components/manager-sent/manager-sent.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerSentComponent": () => (/* binding */ ManagerSentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _services_fire_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/fire-store.service */ 7442);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ 582);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ 2791);
/* harmony import */ var _manager_sent_element_manager_sent_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager-sent-element/manager-sent-element.component */ 9083);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);







function ManagerSentComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-manager-sent-element", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("image", item_r1);
} }
class ManagerSentComponent {
    constructor(fireStoreService) {
        this.fireStoreService = fireStoreService;
        this.sentCollection = this.fireStoreService.sent;
    }
    ngOnInit() {
    }
}
ManagerSentComponent.ɵfac = function ManagerSentComponent_Factory(t) { return new (t || ManagerSentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_fire_store_service__WEBPACK_IMPORTED_MODULE_0__.FireStoreService)); };
ManagerSentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ManagerSentComponent, selectors: [["app-manager-sent"]], decls: 8, vars: 4, consts: [["fxLayout", "column"], ["fxLayoutAlign", "center center", "fxLayout", "column"], ["color", "accent", "fxLayoutAlign", "center center", "fxLayoutGap", "16px"], ["itemSize", "900", 2, "width", "50vw", "height", "85vh"], ["fxLayoutAlign", "center", 4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTemplateCacheSize"], ["fxLayoutAlign", "center"], [3, "image"]], template: function ManagerSentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "cdk-virtual-scroll-viewport", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ManagerSentComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkVirtualForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 2, ctx.sentCollection))("cdkVirtualForTemplateCacheSize", 10);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutGapDirective, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkVirtualScrollViewport, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkFixedSizeVirtualScroll, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkVirtualForOf, _manager_sent_element_manager_sent_element_component__WEBPACK_IMPORTED_MODULE_1__.ManagerSentElementComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2VyLXNlbnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4876:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/manager-to-send-element/manager-to-send-element.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerToSendElementComponent": () => (/* binding */ ManagerToSendElementComponent)
/* harmony export */ });
/* harmony import */ var _models_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/image */ 2316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _repositories_image_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../repositories/image.repository */ 1781);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 582);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 2529);








class ManagerToSendElementComponent {
    constructor(imageRepository) {
        this.imageRepository = imageRepository;
        this.image = new _models_image__WEBPACK_IMPORTED_MODULE_0__.Image('', '', '');
    }
    ngOnInit() {
    }
    deleteItem() {
        this.imageRepository.deleteFromToSend(this.image);
    }
}
ManagerToSendElementComponent.ɵfac = function ManagerToSendElementComponent_Factory(t) { return new (t || ManagerToSendElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_repositories_image_repository__WEBPACK_IMPORTED_MODULE_1__.ImageRepository)); };
ManagerToSendElementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ManagerToSendElementComponent, selectors: [["app-manager-to-send-element"]], inputs: { image: "image" }, decls: 11, vars: 3, consts: [["fxLayoutAlign", "center center", "fxLayout", "column", "fxLayoutGap", "8px", 2, "width", "45vw"], ["color", "primary", "fxLayoutAlign", "center center"], ["alt", "", 1, "manager-image", 3, "src"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function ManagerToSendElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ManagerToSendElementComponent_Template_button_click_6_listener() { return ctx.deleteItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.image.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.image.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.image.drawable, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutGapDirective, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2VyLXRvLXNlbmQtZWxlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4887:
/*!*************************************************************************!*\
  !*** ./src/app/components/manager-to-send/manager-to-send.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerToSendComponent": () => (/* binding */ ManagerToSendComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _services_fire_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/fire-store.service */ 7442);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ 582);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ 2791);
/* harmony import */ var _manager_to_send_element_manager_to_send_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager-to-send-element/manager-to-send-element.component */ 4876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);







function ManagerToSendComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-manager-to-send-element", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("image", item_r1);
} }
class ManagerToSendComponent {
    constructor(fireStoreService) {
        this.fireStoreService = fireStoreService;
        this.toSendCollection = this.fireStoreService.toSend;
    }
    ngOnInit() {
    }
}
ManagerToSendComponent.ɵfac = function ManagerToSendComponent_Factory(t) { return new (t || ManagerToSendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_fire_store_service__WEBPACK_IMPORTED_MODULE_0__.FireStoreService)); };
ManagerToSendComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ManagerToSendComponent, selectors: [["app-manager-to-send"]], decls: 8, vars: 4, consts: [["fxLayout", "column"], ["fxLayoutAlign", "center center", "fxLayout", "column"], ["color", "accent", "fxLayoutAlign", "center center", "fxLayoutGap", "16px"], ["itemSize", "900", 2, "width", "50vw", "height", "85vh"], ["fxLayoutAlign", "center", 4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTemplateCacheSize"], ["fxLayoutAlign", "center"], [3, "image"]], template: function ManagerToSendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "To Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "cdk-virtual-scroll-viewport", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ManagerToSendComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkVirtualForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 2, ctx.toSendCollection))("cdkVirtualForTemplateCacheSize", 10);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutGapDirective, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkVirtualScrollViewport, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkFixedSizeVirtualScroll, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkVirtualForOf, _manager_to_send_element_manager_to_send_element_component__WEBPACK_IMPORTED_MODULE_1__.ManagerToSendElementComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2VyLXRvLXNlbmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5209:
/*!*********************************************************!*\
  !*** ./src/app/components/manager/manager.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerComponent": () => (/* binding */ ManagerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 582);
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toolbar/toolbar.component */ 7431);
/* harmony import */ var _manager_to_send_manager_to_send_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager-to-send/manager-to-send.component */ 4887);
/* harmony import */ var _manager_sent_manager_sent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager-sent/manager-sent.component */ 9709);





class ManagerComponent {
    constructor() { }
    ngOnInit() {
    }
}
ManagerComponent.ɵfac = function ManagerComponent_Factory(t) { return new (t || ManagerComponent)(); };
ManagerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ManagerComponent, selectors: [["app-manager"]], decls: 5, vars: 2, consts: [["fxLayout", "column", "fxLayoutGap", "16px"], [3, "showDrawButton", "showBackButton"], ["fxFlex", "90", "fxLayout", "row", "fxLayoutAlign", "center center"]], template: function ManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-manager-to-send");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-manager-sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showDrawButton", true)("showBackButton", true);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutGapDirective, _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarComponent, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _manager_to_send_manager_to_send_component__WEBPACK_IMPORTED_MODULE_1__.ManagerToSendComponent, _manager_sent_manager_sent_component__WEBPACK_IMPORTED_MODULE_2__.ManagerSentComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5900:
/*!*******************************************************************!*\
  !*** ./src/app/components/reply-create/reply-create.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplyCreateComponent": () => (/* binding */ ReplyCreateComponent)
/* harmony export */ });
/* harmony import */ var _models_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/image */ 2316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _repositories_reply_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../repositories/reply.repository */ 8297);
/* harmony import */ var _handlers_snack_bar_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../handlers/snack-bar.handler */ 7337);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ 582);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 2529);










class ReplyCreateComponent {
    constructor(replyRepository, snackBar) {
        this.replyRepository = replyRepository;
        this.snackBar = snackBar;
        this.image = new _models_image__WEBPACK_IMPORTED_MODULE_0__.Image('', '', '');
        this.text = '';
    }
    ngOnInit() {
    }
    addReply() {
        this.replyRepository.addReply(this.image, this.text)
            .then(() => this.text = '').catch(error => {
            this.snackBar.open('Something went wrong.', 'Close');
            console.log(error);
        });
    }
}
ReplyCreateComponent.ɵfac = function ReplyCreateComponent_Factory(t) { return new (t || ReplyCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_repositories_reply_repository__WEBPACK_IMPORTED_MODULE_1__.ReplyRepository), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_handlers_snack_bar_handler__WEBPACK_IMPORTED_MODULE_2__.SnackBar)); };
ReplyCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ReplyCreateComponent, selectors: [["app-reply-create"]], inputs: { image: "image" }, decls: 7, vars: 1, consts: [["appearance", "outline", 1, "comment-form", 2, "width", "400px"], ["fxLayoutAlign", "center center", "fxFlex", "90", "matInput", "", "placeholder", "Enter your comment...", "name", "text", 3, "ngModel", "ngModelChange"], ["mat-icon-button", "", "color", "primary", 3, "click"]], template: function ReplyCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReplyCreateComponent_Template_input_ngModelChange_3_listener($event) { return ctx.text = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReplyCreateComponent_Template_button_click_4_listener() { return ctx.addReply(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.text);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBseS1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1776:
/*!*********************************************************************!*\
  !*** ./src/app/components/reply-element/reply-element.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplyElementComponent": () => (/* binding */ ReplyElementComponent)
/* harmony export */ });
/* harmony import */ var _models_reply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/reply */ 412);
/* harmony import */ var _repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../repositories/local-storage.repository */ 762);
/* harmony import */ var _models_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/image */ 2316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _repositories_reply_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../repositories/reply.repository */ 8297);
/* harmony import */ var _handlers_snack_bar_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../handlers/snack-bar.handler */ 7337);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ 582);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 4742);














function ReplyElementComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReplyElementComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.switchEditing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ReplyElementComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReplyElementComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.deleteReply(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ReplyElementComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.reply.message, " ");
} }
function ReplyElementComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown.enter", function ReplyElementComponent_div_8_Template_form_keydown_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.editReply(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ReplyElementComponent_div_8_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.reply.message = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReplyElementComponent_div_8_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.editReply(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.reply.message);
} }
class ReplyElementComponent {
    constructor(replyRepository, snackBar) {
        this.replyRepository = replyRepository;
        this.snackBar = snackBar;
        this.reply = new _models_reply__WEBPACK_IMPORTED_MODULE_0__.Reply('', '', '');
        this.image = new _models_image__WEBPACK_IMPORTED_MODULE_2__.Image('', '', '');
        this.username = _repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_1__.LocalStorageRepository.getDisplayName();
        this.isEditing = false;
    }
    ngOnInit() {
    }
    isAuthor() {
        return this.reply.author === this.username;
    }
    switchEditing() {
        this.isEditing = !this.isEditing;
    }
    deleteReply() {
        this.replyRepository.deleteReply(this.image, this.reply)
            .catch(() => this.snackBar.open('Something went wrong.', 'Close'));
    }
    editReply() {
        this.replyRepository.editReply(this.image)
            .then(() => this.isEditing = false)
            .catch(() => this.snackBar.open('Something went wrong.', 'Close'));
    }
}
ReplyElementComponent.ɵfac = function ReplyElementComponent_Factory(t) { return new (t || ReplyElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_repositories_reply_repository__WEBPACK_IMPORTED_MODULE_3__.ReplyRepository), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_handlers_snack_bar_handler__WEBPACK_IMPORTED_MODULE_4__.SnackBar)); };
ReplyElementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ReplyElementComponent, selectors: [["app-reply-element"]], inputs: { reply: "reply", image: "image" }, decls: 9, vars: 5, consts: [["fxLayout", "column", "fxLayoutGap", "16px", 1, "comment-container", 2, "width", "400px"], ["fxLayoutAlign", "space-between center"], ["mat-flat-button", "", "color", "primary"], ["matSuffix", "", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "16px", 4, "ngIf"], [4, "ngIf"], ["matSuffix", "", "mat-icon-button", "", 3, "click"], ["fxLayout", "row", "fxLayoutGap", "16px"], [3, "keydown.enter"], ["appearance", "outline", 1, "edit-comment-form"], ["matInput", "", "fxFlex", "90", "name", "editComment", "fxLayoutAlign", "start center", 3, "ngModel", "ngModelChange"], ["mat-icon-button", "", "color", "primary", "fxLayoutAlign", "center center", 3, "click"]], template: function ReplyElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ReplyElementComponent_button_5_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ReplyElementComponent_button_6_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ReplyElementComponent_div_7_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ReplyElementComponent_div_8_Template, 7, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.reply.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAuthor());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAuthor());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isEditing === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isEditing && ctx.isAuthor());
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutGapDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBseS1lbGVtZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 567:
/*!*********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInComponent": () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var _models_sign_in_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/sign-in-request */ 4033);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 582);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 2529);










class SignInComponent {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
        this.hide = true;
        this.signInRequest = new _models_sign_in_request__WEBPACK_IMPORTED_MODULE_0__.SignInRequest('', '');
    }
    ngOnInit() {
    }
    onLogIn() {
        this.authenticationService.signIn(this.signInRequest);
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService)); };
SignInComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 18, vars: 6, consts: [["fxLayout", "column"], ["appearance", "fill"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-icon-button", "", "matSuffix", "", "disabled", ""], ["matInput", "", 3, "type", "ngModel", "ngModelChange"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Enter your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_6_listener($event) { return ctx.signInRequest.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Enter your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_12_listener($event) { return ctx.signInRequest.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_13_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_16_listener() { return ctx.onLogIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.signInRequest.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("ngModel", ctx.signInRequest.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLWluLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9166:
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponent": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9580);

class SignUpComponent {
    constructor() { }
    ngOnInit() {
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(); };
SignUpComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 2, vars: 0, template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sign-up works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 727:
/*!*****************************************************!*\
  !*** ./src/app/components/start/start.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartComponent": () => (/* binding */ StartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 582);
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toolbar/toolbar.component */ 7431);
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sign-in/sign-in.component */ 567);
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sign-up/sign-up.component */ 9166);





class StartComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
StartComponent.ɵfac = function StartComponent_Factory(t) { return new (t || StartComponent)(); };
StartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: StartComponent, selectors: [["app-start"]], decls: 5, vars: 0, consts: [["fxLayout", "column", "fxLayoutGap", "16px"], ["fxFlex", "90", "fxLayout", "row", "fxLayoutAlign", "space-around center"]], template: function StartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-sign-in");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-sign-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutGapDirective, _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarComponent, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__.SignInComponent, _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__.SignUpComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFydC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7431:
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarComponent": () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../upload/upload.component */ 9424);
/* harmony import */ var _models_destinations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/destinations */ 3709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _repositories_image_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../repositories/image.repository */ 1781);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 2529);












function ToolbarComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ToolbarComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.openUploadDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ToolbarComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ToolbarComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.toManager(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Manager ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ToolbarComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ToolbarComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.draw(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "casino");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Draw ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ToolbarComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ToolbarComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ToolbarComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ToolbarComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.signOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Sign out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class ToolbarComponent {
    constructor(authenticationService, matDialog, router, imageRepository) {
        this.authenticationService = authenticationService;
        this.matDialog = matDialog;
        this.router = router;
        this.imageRepository = imageRepository;
        this.showLogoutButton = false;
        this.showUploadButton = false;
        this.showManagerButton = false;
        this.showBackButton = false;
        this.showDrawButton = false;
    }
    ngOnInit() {
    }
    signOut() {
        this.authenticationService.signOut();
    }
    openUploadDialog() {
        this.matDialog.open(_upload_upload_component__WEBPACK_IMPORTED_MODULE_0__.UploadComponent, {});
    }
    toManager() {
        this.router.navigate([_models_destinations__WEBPACK_IMPORTED_MODULE_1__.Destinations.MANAGER]);
    }
    back() {
        this.router.navigate([_models_destinations__WEBPACK_IMPORTED_MODULE_1__.Destinations.DASHBOARD]);
    }
    draw() {
        this.imageRepository.draw();
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_repositories_image_repository__WEBPACK_IMPORTED_MODULE_3__.ImageRepository)); };
ToolbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], inputs: { showLogoutButton: "showLogoutButton", showUploadButton: "showUploadButton", showManagerButton: "showManagerButton", showBackButton: "showBackButton", showDrawButton: "showDrawButton" }, decls: 9, vars: 5, consts: [["fxLayoutAlign", "space-between center", "color", "primary"], ["fxLayoutGap", "16px"], ["mat-raised-button", "", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", 3, "click"], ["mat-stroked-button", "", 3, "click"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Daily Girl\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ToolbarComponent_button_4_Template, 4, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ToolbarComponent_button_5_Template, 4, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ToolbarComponent_button_6_Template, 4, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ToolbarComponent_button_7_Template, 4, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ToolbarComponent_button_8_Template, 4, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showUploadButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showManagerButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showDrawButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showBackButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showLogoutButton);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutGapDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9424:
/*!*******************************************************!*\
  !*** ./src/app/components/upload/upload.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadComponent": () => (/* binding */ UploadComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5428);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _repositories_image_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../repositories/image.repository */ 1781);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _handlers_snack_bar_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../handlers/snack-bar.handler */ 7337);
/* harmony import */ var _directives_drag_and_drop_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/drag-and-drop/drag-and-drop.directive */ 1501);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ 582);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ 2791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);













const _c0 = ["drop"];
const _c1 = ["dropzone"];
function UploadComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "mat-progress-bar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UploadComponent_div_14_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const index_r4 = restoredCtx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.deleteFile(index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", file_r3.name, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.formatBytes(file_r3.size));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 5, file_r3.progress))("bufferValue", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.startedUploading);
} }
class UploadComponent {
    constructor(imageRepository, matDialog, dialogRef, snackbar) {
        this.imageRepository = imageRepository;
        this.matDialog = matDialog;
        this.dialogRef = dialogRef;
        this.snackbar = snackbar;
        this.elementReference = {};
        this.dropzone = {};
        this.files = [];
        this.startedUploading = false;
    }
    ngOnInit() {
    }
    onFileDropped($event) {
        this.prepareFilesList($event);
    }
    fileBrowseHandler(event) {
        this.prepareFilesList(event.target.files);
    }
    deleteFile(index) {
        this.files.splice(index, 1);
    }
    prepareFilesList(files) {
        for (const item of files) {
            item.progress = 0;
            this.files.push(item);
        }
    }
    formatBytes(bytes, decimals = 2) {
        if (bytes === 0) {
            return '0 Bytes';
        }
        const kilo = 1024;
        const decimal = decimals <= 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const index = Math.floor(Math.log(bytes) / Math.log(kilo));
        return parseFloat((bytes / Math.pow(kilo, index)).toFixed(decimal)) + ' ' + sizes[index];
    }
    upload() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.startedUploading = true;
            this.dialogRef.disableClose = true;
            const progresses = [];
            this.files.forEach(file => {
                file.progress = this.imageRepository.upload(file);
                progresses.push(file.progress);
            });
            let counter = 0;
            for (const progress of progresses) {
                yield progress.toPromise().then(() => counter++);
            }
            this.snackbar.open('Successfully uploaded all files!', 'Close');
            (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(1000);
            this.matDialog.closeAll();
        });
    }
    onDrag() {
        if (this.dropzone !== null) {
            this.dropzone.nativeElement.style.backgroundColor = '#AAAAAA';
        }
    }
    onLeave() {
        if (this.dropzone !== null) {
            this.dropzone.nativeElement.style.backgroundColor = 'transparent';
        }
    }
}
UploadComponent.ɵfac = function UploadComponent_Factory(t) { return new (t || UploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_repositories_image_repository__WEBPACK_IMPORTED_MODULE_0__.ImageRepository), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_handlers_snack_bar_handler__WEBPACK_IMPORTED_MODULE_1__.SnackBar)); };
UploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UploadComponent, selectors: [["app-upload"]], viewQuery: function UploadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.elementReference = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dropzone = _t.first);
    } }, decls: 19, vars: 2, consts: [["appDragAndDrop", "", "fxLayoutAlign", "center center", "fxLayout", "column", "fxLayoutGap", "16px", 2, "min-width", "600px", 3, "fileDropped"], ["fxFill", "", "fxLayout", "column", 2, "border-style", "dashed"], ["fxLayout", "column", "fxLayoutAlign", "center center", 2, "height", "200px", 3, "dragover", "dragleave", "drop"], ["dropzone", ""], ["hidden", "", "id", "drop", "type", "file", "multiple", "", 3, "change"], ["drop", ""], ["mat-raised-button", "", "color", "primary"], ["for", "drop"], ["itemSize", "50", 2, "min-height", "300px", "min-width", "650px"], ["fxFill", "", "fxLayout", "row", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "disabled", "click"], ["fxFill", "", "fxLayout", "row"], ["fxLayout", "column", "fxFlex", "90"], ["fxLayoutAlign", "space-between center"], ["color", "primary", 3, "value", "bufferValue"], ["mat-button", "", "fxFlex", "10", 3, "disabled", "click"]], template: function UploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("fileDropped", function UploadComponent_Template_div_fileDropped_0_listener($event) { return ctx.onFileDropped($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dragover", function UploadComponent_Template_div_dragover_2_listener() { return ctx.onDrag(); })("dragleave", function UploadComponent_Template_div_dragleave_2_listener() { return ctx.onLeave(); })("drop", function UploadComponent_Template_div_drop_2_listener() { return ctx.onLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Drag and drop to upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "or");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function UploadComponent_Template_input_change_8_listener($event) { return ctx.fileBrowseHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Browse files ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "cdk-virtual-scroll-viewport", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, UploadComponent_div_14_Template, 12, 7, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UploadComponent_Template_button_click_15_listener() { return ctx.upload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Upload! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.files.length === 0 || ctx.startedUploading);
    } }, directives: [_directives_drag_and_drop_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_2__.DragAndDropDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutGapDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexFillDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__.CdkVirtualScrollViewport, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__.CdkFixedSizeVirtualScroll, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBar], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1501:
/*!*********************************************************************!*\
  !*** ./src/app/directives/drag-and-drop/drag-and-drop.directive.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragAndDropDirective": () => (/* binding */ DragAndDropDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9580);


class DragAndDropDirective {
    constructor() {
        this.fileOver = false;
        this.fileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    onDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        this.fileOver = true;
    }
    onDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.fileOver = false;
    }
    ondrop(event) {
        event.preventDefault();
        event.stopPropagation();
        this.fileOver = false;
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            this.fileDropped.emit(files);
        }
    }
}
DragAndDropDirective.ɵfac = function DragAndDropDirective_Factory(t) { return new (t || DragAndDropDirective)(); };
DragAndDropDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DragAndDropDirective, selectors: [["", "appDragAndDrop", ""]], hostVars: 2, hostBindings: function DragAndDropDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function DragAndDropDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function DragAndDropDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function DragAndDropDirective_drop_HostBindingHandler($event) { return ctx.ondrop($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fileover", ctx.fileOver);
    } }, outputs: { fileDropped: "fileDropped" } });


/***/ }),

/***/ 5515:
/*!**************************************************!*\
  !*** ./src/app/handlers/authentication.guard.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationGuard": () => (/* binding */ AuthenticationGuard)
/* harmony export */ });
/* harmony import */ var _models_destinations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/destinations */ 3709);
/* harmony import */ var _repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repositories/local-storage.repository */ 762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);




class AuthenticationGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (this.isSignedIn()) {
            return true;
        }
        else {
            this.router.navigate([_models_destinations__WEBPACK_IMPORTED_MODULE_0__.Destinations.START]);
            return false;
        }
    }
    isSignedIn() {
        return _repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_1__.LocalStorageRepository.getIsSignedIn() === 'true';
    }
}
AuthenticationGuard.ɵfac = function AuthenticationGuard_Factory(t) { return new (t || AuthenticationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AuthenticationGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthenticationGuard, factory: AuthenticationGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 149:
/*!**************************************************!*\
  !*** ./src/app/handlers/picture-name.handler.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PictureNameHandler": () => (/* binding */ PictureNameHandler)
/* harmony export */ });
/* harmony import */ var _repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repositories/local-storage.repository */ 762);

class PictureNameHandler {
    static getName() {
        let day;
        let season;
        let name;
        if (_repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_0__.LocalStorageRepository.getDay() === null) {
            _repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_0__.LocalStorageRepository.setDay(dayOfYear().toString());
        }
        if (_repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_0__.LocalStorageRepository.getSeason() === null) {
            _repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_0__.LocalStorageRepository.setSeason(getSeason().toString());
        }
        season = parseInt(_repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_0__.LocalStorageRepository.getSeason(), 10);
        day = parseInt(_repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_0__.LocalStorageRepository.getDay(), 10);
        name = 'Season ' + season + ' Day ' + day;
        _repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_0__.LocalStorageRepository.setDay((day + 1).toString());
        if (season % 4 === 0) {
            if (parseInt(_repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_0__.LocalStorageRepository.getDay(), 10) === 366) {
                _repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_0__.LocalStorageRepository.setSeason((season + 1).toString());
            }
        }
        else if (parseInt(_repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_0__.LocalStorageRepository.getDay(), 10) === 365) {
            _repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_0__.LocalStorageRepository.setSeason((season + 1).toString());
        }
        return name;
    }
}
function dayOfYear() {
    const now = new Date();
    const oneDay = 1000 * 60 * 60 * 24;
    const start = new Date(new Date().getFullYear(), 0, 0);
    const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    return Math.floor(diff / oneDay);
}
function getSeason() {
    const now = new Date();
    return now.getFullYear() - 2016;
}


/***/ }),

/***/ 4180:
/*!***********************************************!*\
  !*** ./src/app/handlers/randomize.handler.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RandomizeHandler": () => (/* binding */ RandomizeHandler)
/* harmony export */ });
class RandomizeHandler {
    static randomize(images) {
        return images[getRandomInt(0, images.length)];
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


/***/ }),

/***/ 7337:
/*!***********************************************!*\
  !*** ./src/app/handlers/snack-bar.handler.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackBar": () => (/* binding */ SnackBar)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);


class SnackBar {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    open(message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
SnackBar.ɵfac = function SnackBar_Factory(t) { return new (t || SnackBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar)); };
SnackBar.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SnackBar, factory: SnackBar.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3977:
/*!******************************************!*\
  !*** ./src/app/handlers/time.handler.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeHandler": () => (/* binding */ TimeHandler)
/* harmony export */ });
class TimeHandler {
    static format() {
        const date = new Date();
        let day = date.getDate().toString();
        let month = date.getMonth().toString();
        const year = date.getFullYear().toString();
        day = addZeroToStartIfSingleDigit(day);
        month = addZeroToStartIfSingleDigit(month);
        return day + '.' + month + '.' + year;
    }
}
function addZeroToStartIfSingleDigit(value) {
    if (/^\d$/.test(value)) {
        value = '0' + value;
    }
    return value;
}


/***/ }),

/***/ 3806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ 8417);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ 5937);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ 5644);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 2937);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ 9243);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ 2080);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ 2323);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ 221);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/scrolling */ 2791);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/checkbox */ 4058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9580);


























class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridListModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__.MatChipsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatSlideToggleModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__.MatExpansionModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__.ScrollingModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTabsModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.MatCheckboxModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridListModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__.MatChipsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatSlideToggleModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__.MatExpansionModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__.ScrollingModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTabsModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.MatCheckboxModule] }); })();


/***/ }),

/***/ 3709:
/*!****************************************!*\
  !*** ./src/app/models/destinations.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Destinations": () => (/* binding */ Destinations)
/* harmony export */ });
var Destinations;
(function (Destinations) {
    Destinations["EMPTY"] = "";
    Destinations["DASHBOARD"] = "dashboard";
    Destinations["START"] = "start";
    Destinations["MANAGER"] = "manager";
})(Destinations || (Destinations = {}));


/***/ }),

/***/ 4909:
/*!***************************************!*\
  !*** ./src/app/models/files-paths.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesPaths": () => (/* binding */ FilesPaths)
/* harmony export */ });
var FilesPaths;
(function (FilesPaths) {
    FilesPaths["TOSEND"] = "to-send";
    FilesPaths["SENT"] = "sent";
})(FilesPaths || (FilesPaths = {}));


/***/ }),

/***/ 1225:
/*!*********************************!*\
  !*** ./src/app/models/grade.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Grade": () => (/* binding */ Grade)
/* harmony export */ });
class Grade {
    constructor(id, author, value) {
        this.id = id;
        this.author = author;
        this.value = value;
    }
}


/***/ }),

/***/ 2316:
/*!*********************************!*\
  !*** ./src/app/models/image.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Image": () => (/* binding */ Image)
/* harmony export */ });
class Image {
    constructor(name, drawable, date) {
        this.name = name;
        this.drawable = drawable;
        this.date = date;
        this.replies = [];
        this.grades = [];
    }
}


/***/ }),

/***/ 588:
/*!**********************************************!*\
  !*** ./src/app/models/local-storage-keys.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageKeys": () => (/* binding */ LocalStorageKeys)
/* harmony export */ });
var LocalStorageKeys;
(function (LocalStorageKeys) {
    LocalStorageKeys["DISPLAY_NAME"] = "display-name";
    LocalStorageKeys["IS_SIGNED_IN"] = "is-signed-in";
    LocalStorageKeys["DAY"] = "day";
    LocalStorageKeys["SEASON"] = "season";
})(LocalStorageKeys || (LocalStorageKeys = {}));


/***/ }),

/***/ 412:
/*!*********************************!*\
  !*** ./src/app/models/reply.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Reply": () => (/* binding */ Reply)
/* harmony export */ });
class Reply {
    constructor(id, author, message) {
        this.id = id;
        this.author = author;
        this.message = message;
    }
}


/***/ }),

/***/ 4033:
/*!*******************************************!*\
  !*** ./src/app/models/sign-in-request.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInRequest": () => (/* binding */ SignInRequest)
/* harmony export */ });
class SignInRequest {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}


/***/ }),

/***/ 6661:
/*!**************************************************!*\
  !*** ./src/app/repositories/grade.repository.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GradeRepository": () => (/* binding */ GradeRepository)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _services_fire_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/fire-store.service */ 7442);



class GradeRepository {
    constructor(fireStoreService) {
        this.fireStoreService = fireStoreService;
    }
    addGrade(image, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.fireStoreService.addGrade(image, value);
        });
    }
    editGrade(image) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.fireStoreService.editGrade(image);
        });
    }
    deleteGrade(image, gradeToDelete) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.fireStoreService.deleteGrade(image, gradeToDelete);
        });
    }
}
GradeRepository.ɵfac = function GradeRepository_Factory(t) { return new (t || GradeRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_fire_store_service__WEBPACK_IMPORTED_MODULE_0__.FireStoreService)); };
GradeRepository.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GradeRepository, factory: GradeRepository.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1781:
/*!**************************************************!*\
  !*** ./src/app/repositories/image.repository.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageRepository": () => (/* binding */ ImageRepository)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _models_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/image */ 2316);
/* harmony import */ var _handlers_randomize_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlers/randomize.handler */ 4180);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 88);
/* harmony import */ var _handlers_time_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handlers/time.handler */ 3977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _services_fire_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/fire-storage.service */ 8931);
/* harmony import */ var _services_fire_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/fire-store.service */ 7442);
/* harmony import */ var _handlers_snack_bar_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../handlers/snack-bar.handler */ 7337);









class ImageRepository {
    constructor(fireStorageService, fireStoreService, snackBar) {
        this.fireStorageService = fireStorageService;
        this.fireStoreService = fireStoreService;
        this.snackBar = snackBar;
    }
    upload(file) {
        let image;
        let url;
        const fileUploadMetadata = this.fireStorageService.uploadFileToSend(file);
        fileUploadMetadata.uploadProgress.toPromise().then((progress) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield fileUploadMetadata.downloadUrl.toPromise().then(nextUrl => url = nextUrl);
            if (progress === 100) {
                image = new _models_image__WEBPACK_IMPORTED_MODULE_0__.Image(fileUploadMetadata.name, url, _handlers_time_handler__WEBPACK_IMPORTED_MODULE_2__.TimeHandler.format());
                this.fireStoreService.addImageToSend(image);
            }
        }));
        return fileUploadMetadata.uploadProgress;
    }
    deleteFromToSend(image) {
        this.fireStoreService.deleteImageToSend(image);
        this.fireStorageService.deleteFile(image.drawable);
    }
    deleteFromSent(image) {
        this.fireStoreService.deleteImageSent(image);
        this.fireStorageService.deleteFile(image.drawable);
    }
    draw() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.snackBar.open('Drawing...', 'Close');
            yield this.fireStoreService.toSend.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.first)()).subscribe((images) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                let newDrawable;
                let newName;
                const image = _handlers_randomize_handler__WEBPACK_IMPORTED_MODULE_1__.RandomizeHandler.randomize(images);
                yield this.fireStorageService.moveFileToSent(image.name, image.drawable).then(item => {
                    newDrawable = item.drawable;
                    newName = item.newName;
                    this.fireStoreService.moveImageFromToSendToSent(image, newDrawable, newName);
                    this.snackBar.open('Successfully drawn!', 'Close');
                })
                    .catch(() => this.snackBar.open('Failed to draw :C', 'Close'));
            }));
        });
    }
}
ImageRepository.ɵfac = function ImageRepository_Factory(t) { return new (t || ImageRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_fire_storage_service__WEBPACK_IMPORTED_MODULE_3__.FireStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_fire_store_service__WEBPACK_IMPORTED_MODULE_4__.FireStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_handlers_snack_bar_handler__WEBPACK_IMPORTED_MODULE_5__.SnackBar)); };
ImageRepository.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: ImageRepository, factory: ImageRepository.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 762:
/*!**********************************************************!*\
  !*** ./src/app/repositories/local-storage.repository.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageRepository": () => (/* binding */ LocalStorageRepository)
/* harmony export */ });
/* harmony import */ var _models_local_storage_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/local-storage-keys */ 588);

class LocalStorageRepository {
    static setDisplayName(value) {
        localStorage.setItem(_models_local_storage_keys__WEBPACK_IMPORTED_MODULE_0__.LocalStorageKeys.DISPLAY_NAME, value);
    }
    static getDisplayName() {
        return localStorage.getItem(_models_local_storage_keys__WEBPACK_IMPORTED_MODULE_0__.LocalStorageKeys.DISPLAY_NAME);
    }
    static setIsSignedIn(value) {
        localStorage.setItem(_models_local_storage_keys__WEBPACK_IMPORTED_MODULE_0__.LocalStorageKeys.IS_SIGNED_IN, value);
    }
    static getIsSignedIn() {
        return localStorage.getItem(_models_local_storage_keys__WEBPACK_IMPORTED_MODULE_0__.LocalStorageKeys.IS_SIGNED_IN);
    }
    static setDay(value) {
        localStorage.setItem(_models_local_storage_keys__WEBPACK_IMPORTED_MODULE_0__.LocalStorageKeys.DAY, value);
    }
    static getDay() {
        return localStorage.getItem(_models_local_storage_keys__WEBPACK_IMPORTED_MODULE_0__.LocalStorageKeys.DAY);
    }
    static setSeason(value) {
        localStorage.setItem(_models_local_storage_keys__WEBPACK_IMPORTED_MODULE_0__.LocalStorageKeys.SEASON, value);
    }
    static getSeason() {
        return localStorage.getItem(_models_local_storage_keys__WEBPACK_IMPORTED_MODULE_0__.LocalStorageKeys.SEASON);
    }
}


/***/ }),

/***/ 8297:
/*!**************************************************!*\
  !*** ./src/app/repositories/reply.repository.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplyRepository": () => (/* binding */ ReplyRepository)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _services_fire_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/fire-store.service */ 7442);



class ReplyRepository {
    constructor(fireStoreService) {
        this.fireStoreService = fireStoreService;
    }
    addReply(image, text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.fireStoreService.addReply(image, text);
        });
    }
    editReply(image) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.fireStoreService.editReply(image);
        });
    }
    deleteReply(image, replyToDelete) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.fireStoreService.deleteReply(image, replyToDelete);
        });
    }
}
ReplyRepository.ɵfac = function ReplyRepository_Factory(t) { return new (t || ReplyRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_fire_store_service__WEBPACK_IMPORTED_MODULE_0__.FireStoreService)); };
ReplyRepository.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ReplyRepository, factory: ReplyRepository.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7053:
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _models_destinations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/destinations */ 3709);
/* harmony import */ var _repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repositories/local-storage.repository */ 762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/auth */ 7018);
/* harmony import */ var _handlers_snack_bar_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handlers/snack-bar.handler */ 7337);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 2213);







class AuthenticationService {
    constructor(angularFireAuth, snackBar, router, matDialog) {
        this.angularFireAuth = angularFireAuth;
        this.snackBar = snackBar;
        this.router = router;
        this.matDialog = matDialog;
    }
    signUp(signUpRequest) {
        this.angularFireAuth.createUserWithEmailAndPassword(signUpRequest.email, signUpRequest.password)
            .then(response => {
            var _a;
            (_a = response.user) === null || _a === void 0 ? void 0 : _a.updateProfile({ displayName: signUpRequest.displayName });
        })
            .catch(error => {
            this.snackBar.open(error.message, 'Close');
        });
    }
    signIn(signInRequest) {
        this.angularFireAuth.signInWithEmailAndPassword(signInRequest.email, signInRequest.password)
            .then(response => {
            var _a;
            _repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_1__.LocalStorageRepository.setDisplayName((_a = response.user) === null || _a === void 0 ? void 0 : _a.displayName);
            _repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_1__.LocalStorageRepository.setIsSignedIn('true');
            this.snackBar.open('Successfully signed in.', 'Close');
            this.router.navigate([_models_destinations__WEBPACK_IMPORTED_MODULE_0__.Destinations.DASHBOARD]).then();
        })
            .catch(error => {
            this.snackBar.open(error.message, 'Close');
        });
    }
    signOut() {
        localStorage.clear();
        this.router.navigate([_models_destinations__WEBPACK_IMPORTED_MODULE_0__.Destinations.START])
            .then(() => {
            _repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_1__.LocalStorageRepository.setIsSignedIn('false');
            this.snackBar.open('User Signed out.', 'Close');
            this.matDialog.closeAll();
        });
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_handlers_snack_bar_handler__WEBPACK_IMPORTED_MODULE_2__.SnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
AuthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8931:
/*!**************************************************!*\
  !*** ./src/app/services/fire-storage.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FireStorageService": () => (/* binding */ FireStorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _models_files_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/files-paths */ 4909);
/* harmony import */ var _handlers_picture_name_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlers/picture-name.handler */ 149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/storage */ 4416);





class FireStorageService {
    constructor(fireStorage) {
        this.fireStorage = fireStorage;
    }
    uploadFileToSend(fileToUpload) {
        const newName = new Date().getTime().toString() + '_' + fileToUpload.name;
        const filepath = _models_files_paths__WEBPACK_IMPORTED_MODULE_0__.FilesPaths.TOSEND + '/' + newName;
        const uploadTask = this.fireStorage.upload(filepath, fileToUpload);
        return {
            name: newName,
            uploadProgress: uploadTask.percentageChanges(),
            downloadUrl: this.fireStorage.ref(filepath).getDownloadURL()
        };
    }
    moveFileToSent(name, drawable) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const file = yield fetch(drawable).then(data => data.blob());
            const newName = _handlers_picture_name_handler__WEBPACK_IMPORTED_MODULE_1__.PictureNameHandler.getName();
            const type = name.substr(name.length - 4);
            const newFilePath = `${_models_files_paths__WEBPACK_IMPORTED_MODULE_0__.FilesPaths.SENT}/${newName}${type}`;
            const moveTask = this.fireStorage.upload(newFilePath, file);
            yield moveTask.then(() => this.fireStorage.refFromURL(drawable).delete());
            return {
                drawable: yield this.fireStorage.ref(newFilePath).getDownloadURL().toPromise(),
                newName
            };
        });
    }
    deleteFile(name) {
        this.fireStorage.refFromURL(name).delete();
    }
}
FireStorageService.ɵfac = function FireStorageService_Factory(t) { return new (t || FireStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_4__.AngularFireStorage)); };
FireStorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: FireStorageService, factory: FireStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7442:
/*!************************************************!*\
  !*** ./src/app/services/fire-store.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FireStoreService": () => (/* binding */ FireStoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4361);
/* harmony import */ var _models_files_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/files-paths */ 4909);
/* harmony import */ var _models_reply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/reply */ 412);
/* harmony import */ var _repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repositories/local-storage.repository */ 762);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/app */ 9260);
/* harmony import */ var _handlers_time_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../handlers/time.handler */ 3977);
/* harmony import */ var _models_grade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/grade */ 1225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 6303);










class FireStoreService {
    constructor(angularFirestore) {
        this.angularFirestore = angularFirestore;
        this.toSendCollection = angularFirestore.collection(_models_files_paths__WEBPACK_IMPORTED_MODULE_0__.FilesPaths.TOSEND);
        this.toSend = this.toSendCollection.valueChanges({ idField: 'id' });
        this.sentCollection = angularFirestore.collection(_models_files_paths__WEBPACK_IMPORTED_MODULE_0__.FilesPaths.SENT);
        this.sent = this.sentCollection.valueChanges({ idField: 'id' });
    }
    addImageToSend(image) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(this.toSendCollection.add(Object.assign({}, image)));
    }
    deleteImageToSend(image) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(this.toSendCollection.doc(image.id).delete());
    }
    addImageSent(image) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(this.sentCollection.add(Object.assign({}, image)));
    }
    deleteImageSent(image) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(this.sentCollection.doc(image.id).delete());
    }
    moveImageFromToSendToSent(image, newDrawable, newName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.deleteImageSent(image).toPromise().then(() => {
                image.name = newName;
                image.drawable = newDrawable;
                image.date = _handlers_time_handler__WEBPACK_IMPORTED_MODULE_4__.TimeHandler.format();
                this.addImageSent(image).toPromise().then(() => this.deleteImageToSend(image));
            }).catch(() => console.warn('firestore'));
        });
    }
    addReply(image, text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const reply = new _models_reply__WEBPACK_IMPORTED_MODULE_1__.Reply(this.angularFirestore.createId(), _repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_2__.LocalStorageRepository.getDisplayName(), text);
            image.replies.push(reply);
            return yield this.angularFirestore.doc(_models_files_paths__WEBPACK_IMPORTED_MODULE_0__.FilesPaths.SENT + '/' + image.id).update({
                replies: firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__.default.firestore.FieldValue.arrayUnion(...image.replies.map(nextReply => {
                    return Object.assign({}, nextReply);
                }))
            });
        });
    }
    editReply(image) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.angularFirestore.doc(_models_files_paths__WEBPACK_IMPORTED_MODULE_0__.FilesPaths.SENT + '/' + image.id).update({
                replies: image.replies
            });
        });
    }
    deleteReply(image, replyToDelete) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.angularFirestore.doc(_models_files_paths__WEBPACK_IMPORTED_MODULE_0__.FilesPaths.SENT + '/' + image.id).update({
                replies: firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__.default.firestore.FieldValue.arrayRemove(replyToDelete)
            });
        });
    }
    addGrade(image, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const grade = new _models_grade__WEBPACK_IMPORTED_MODULE_5__.Grade(this.angularFirestore.createId(), _repositories_local_storage_repository__WEBPACK_IMPORTED_MODULE_2__.LocalStorageRepository.getDisplayName(), value);
            image.grades.push(grade);
            return yield this.angularFirestore.doc(_models_files_paths__WEBPACK_IMPORTED_MODULE_0__.FilesPaths.SENT + '/' + image.id).update({
                grades: firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__.default.firestore.FieldValue.arrayUnion(...image.grades.map(nextReply => {
                    return Object.assign({}, nextReply);
                }))
            });
        });
    }
    editGrade(image) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.angularFirestore.doc(_models_files_paths__WEBPACK_IMPORTED_MODULE_0__.FilesPaths.SENT + '/' + image.id).update({
                grades: image.grades
            });
        });
    }
    deleteGrade(image, gradeToDelete) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.angularFirestore.doc(_models_files_paths__WEBPACK_IMPORTED_MODULE_0__.FilesPaths.SENT + '/' + image.id).update({
                replies: firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__.default.firestore.FieldValue.arrayRemove(gradeToDelete)
            });
        });
    }
}
FireStoreService.ɵfac = function FireStoreService_Factory(t) { return new (t || FireStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore)); };
FireStoreService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: FireStoreService, factory: FireStoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyAGgVzKLjB3cOhtQBb3_89p-li2yPq7LWM",
        authDomain: "daily-girl-v2.firebaseapp.com",
        databaseURL: "https://daily-girl-v2-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "daily-girl-v2",
        storageBucket: "daily-girl-v2.appspot.com",
        messagingSenderId: "873670599787",
        appId: "1:873670599787:web:eb04fb86de2b537764bd2e",
        measurementId: "G-6N8DVMJ878"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map