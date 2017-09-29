import { Image } from '../model/image.model';
import { LightboxService } from '../service/lightbox.service';
export declare class Lightbox {
    private lbService;
    key: string;
    pswpEl: any;
    constructor(lbService: LightboxService);
    openImage(img: Image): boolean;
    isOpen(): boolean;
    getImages(): Image[];
    private openPhotoSwipe(img, galleryDOM);
    private getImagesAsPhotoswipe();
    private logImage(img);
}
