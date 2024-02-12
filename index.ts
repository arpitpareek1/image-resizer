/**
 * 
 * @param blob ImageBitmapSource
 * @param width number
 * @param height number
 * @returns 
 */

function getResizedCanvas(
  blob: ImageBitmapSource,
  width: number,
  height: number
): Promise<HTMLCanvasElement | null> {
  return new Promise((resolve, reject) => {
    createImageBitmap(blob)
      .then((bmp) => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (ctx) {
          canvas.width = width
          canvas.height = height
          const scale = Math.min(
            canvas.width / bmp.width,
            canvas.height / bmp.height
          );
          const x = (canvas.width - bmp.width * scale) / 2;
          const y = (canvas.height - bmp.height * scale) / 2;
          ctx.drawImage(bmp, x, y, bmp.width * scale, bmp.height * scale);
          bmp.close();
          resolve(canvas);
        } else {
          resolve(null);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}


/**
 * 
 * @param base64 : base64 encoded string
 * @returns 
 */
const getImageBlob = (base64: string): Blob => {
  return new Blob(
    [new ArrayBuffer(atob(base64.split(',')[1]).length)],
    { type: base64.split(',')[0].split(':')[1].split(';')[0] }
  );
};






