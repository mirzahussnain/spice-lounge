let cachedImage: HTMLImageElement | null = null;

export function loadSmogSprite(): Promise<HTMLImageElement> {
  if (cachedImage) {
    return Promise.resolve(cachedImage);
  }

  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = "/smog/smog-sprite_sheet.png";
    image.onload = () => {
      cachedImage = image;
      resolve(image);
    };
    image.onerror = () => reject(new Error("Failed to load smog sprite sheet."));
  });
}
