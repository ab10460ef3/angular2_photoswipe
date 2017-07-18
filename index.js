'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
__export(require("./src/service/lightbox.service"));
__export(require("./src/component/lightbox.component"));
__export(require("./src/model/image.model"));
var lightbox_component_1 = require("./src/component/lightbox.component");
var lightbox_service_1 = require("./src/service/lightbox.service");
window['PhotoSwipe'] = require('photoswipe');
var photoswipe_1 = require("photoswipe");
window['PhotoSwipeUI_Default'] = photoswipe_1.default;
exports.default = {
    providers: [lightbox_service_1.LightboxService],
    directives: [lightbox_component_1.Lightbox]
};
var Angular2Photoswipe = (function () {
    function Angular2Photoswipe() {
    }
    Angular2Photoswipe_1 = Angular2Photoswipe;
    Angular2Photoswipe.forRoot = function () {
        return {
            ngModule: Angular2Photoswipe_1,
            providers: [lightbox_service_1.LightboxService]
        };
    };
    Angular2Photoswipe = Angular2Photoswipe_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [lightbox_component_1.Lightbox],
            providers: [lightbox_service_1.LightboxService],
            exports: [lightbox_component_1.Lightbox]
        })
    ], Angular2Photoswipe);
    return Angular2Photoswipe;
    var Angular2Photoswipe_1;
}());
exports.Angular2Photoswipe = Angular2Photoswipe;
//# sourceMappingURL=index.js.map