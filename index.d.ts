

export interface cropper {
    getImageBlob: (base64: string) => Blob
    getResizedCanvas(blob: ImageBitmapSource, width: number, height: number): Promise<HTMLCanvasElement | null>
}

declare const ImageCropper: cropper

export default ImageCropper 