export function easeInOutQuad(x: number): number {
    return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

export function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t
}
