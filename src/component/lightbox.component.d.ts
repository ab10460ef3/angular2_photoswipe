import { Image } from '../model/image.model';
import { LightboxService } from '../service/lightbox.service';
export declare class Lightbox {
    private lbService;
    key: string;
    pswpEl: any;
    constructor(lbService: LightboxService);
    openImage(img: Image): boolean;
    getImages(): Image[];
    isOpen(): boolean;
    private openPhotoSwipe(img, galleryDOM);
    private getImagesAsPhotoswipe();
    private logImage(img);
}
