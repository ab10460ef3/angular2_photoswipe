import { ModuleWithProviders } from '@angular/core';
export * from './src/service/lightbox.service';
export * from './src/component/lightbox.component';
export * from './src/model/image.model';
import { Lightbox } from './src/component/lightbox.component';
import { LightboxService } from './src/service/lightbox.service';
declare const _default: {
    providers: typeof LightboxService[];
    directives: typeof Lightbox[];
};
export default _default;
export declare class Angular2Photoswipe {
    static forRoot(): ModuleWithProviders;
}
