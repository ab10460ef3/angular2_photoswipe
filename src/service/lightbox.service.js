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
var LightboxService = (function () {
    function LightboxService() {
        this.gallery = {};
    }
    LightboxService.prototype.createGallery = function (key) {
        this.gallery[key] = [];
    };
    LightboxService.prototype.setImages = function (key, images) {
        this.gallery[key] = images;
    };
    LightboxService.prototype.addImage = function (key, image) {
        if (key in this.gallery) {
            this.gallery[key].push(image);
        }
        else {
            throw new Error("gallery '" + key + "' does not exist");
        }
    };
    LightboxService.prototype.getImages = function (key) {
        return this.gallery[key];
    };
    LightboxService.prototype.removeImage = function (key, id) {
        var _this = this;
        this.gallery[key].forEach(function (img, index) {
            if (img.id === id) {
                _this.gallery[key].splice(index, 1);
            }
        });
    };
    LightboxService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], LightboxService);
    return LightboxService;
}());
exports.LightboxService = LightboxService;
//# sourceMappingURL=lightbox.service.js.map