/*
 * Finally initializing the Gradient class, assigning a canvas to it and calling Gradient.connect() which initializes everything,
 * Use Gradient.pause() and Gradient.play() for controls.
 *
 * Here are some default property values you can change anytime:
 * Amplitude:    Gradient.amp = 0
 * Colors:       Gradient.sectionColors (if you change colors, use normalizeColor(#hexValue)) before you assign it.
 *
 *
 * Useful functions
 * Gradient.toggleColor(index)
 * Gradient.updateFrequency(freq)
 */
export declare class Gradient {
  constructor();
  async connect(): void;
  disconnect(): void;
  initMaterial(): void;
  initMesh(): void;
  shouldSkipFrame(e: number): boolean;
  updateFrequency(e: number): void;
  toggleColor(index: number): void;
  showGradientLegend(): void;
  hideGradientLegend(): void;
  init(): void;
  waitForCssVars(): void;
  initGradientColors(): void;

  initGradient(elementSelector: string): void;
  play(): void;
  pause(): void;
}
