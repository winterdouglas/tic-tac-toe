export const parseHsl = (hslString: string) => {
  // Removes whitespace around and "hsl(" and ")"
  const trimmedString = hslString.trim().slice(4, -1);

  // Splits the string into hue, saturation, and lightness.
  const [hueStr, saturationStr, lightnessStr] = trimmedString.split(",");

  // Removes the % symbol and convert the hue, saturation, and lightness values to numbers.
  const hue = parseFloat(hueStr);
  const saturation = parseFloat(saturationStr.replace("%", ""));
  const lightness = parseFloat(lightnessStr.replace("%", ""));

  // Return an array of three numbers: hue, saturation, and lightness.
  return [hue, saturation, lightness];
};

export const toHsl = (hsl: number[]) => {
  const [h, s, l] = hsl;

  return `hsl(${h}, ${s}%, ${l}%)`;
};

export const changeHslLightness = (hsl: number[], deltaLightness: number) => {
  // Ensure hue is within [0, 360], saturation and lightness are within [0, 100].
  const [hue, saturation, lightness] = hsl.map((value, index) => {
    if (index === 0) return (value + 360) % 360; // wrap hue around 360
    return Math.max(0, Math.min(100, value)); // clamp saturation and lightness
  });

  // Compute new lightness value, clamped within [0, 100].
  const newLightness = Math.max(0, Math.min(100, lightness + deltaLightness));

  // Return new HSL color as an array with percentage values.
  return [hue, saturation, newLightness];
};

export const changeHslStringLightness = (
  hslString: string,
  deltaLightness: number
) => {
  const hsl = parseHsl(hslString);
  const result = changeHslLightness(hsl, deltaLightness);
  return toHsl(result);
};
