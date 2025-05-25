export function bufferToImageUrl(bufferData, mimeType = "image/webp") {
  const uint8Array = new Uint8Array(bufferData);
  const blob = new Blob([uint8Array], { type: mimeType });
  return URL.createObjectURL(blob);
}