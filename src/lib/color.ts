import seedrandom from "seedrandom";
import chroma from "chroma-js";

export const randomizeColor = (originalHex: string, seed: string): string => {
  const rng = seedrandom(seed);
  const hsl = chroma(originalHex).hsl();
  const newHue = rng() * 360; 
  return chroma.hsl(newHue, hsl[1], hsl[2]).hex();
};
