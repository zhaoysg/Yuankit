/** Pure helpers; no DOM or Vue dependency. */
export function clamp(value, min = 0, max = 100) {
  return Math.min(max, Math.max(min, Number.isFinite(Number(value)) ? Number(value) : min));
}
export function contrastRatio(a, b) {
  const luminance = (hex) => {
    if (!/^#[0-9a-f]{6}$/i.test(hex)) throw new TypeError('Use six-digit hexadecimal colors.');
    const parts = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255)
      .map(c => c <= .04045 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4);
    return parts[0] * .2126 + parts[1] * .7152 + parts[2] * .0722;
  };
  const x = luminance(a), y = luminance(b);
  return (Math.max(x, y) + .05) / (Math.min(x, y) + .05);
}
export function foregroundFor(background) {
  return contrastRatio(background, '#ffffff') >= contrastRatio(background, '#17171c') ? '#ffffff' : '#17171c';
}
