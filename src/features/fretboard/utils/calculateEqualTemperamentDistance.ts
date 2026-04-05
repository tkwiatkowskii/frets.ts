export default function calculateEqualTemperamentDistance(
  n: number,
  startX: number,
  scaleLength: number) : number {
  const raw = 1 - Math.pow(2, -n / 12);
  const lastRaw = 1 - Math.pow(2, -12 / 12);

  return startX + (raw / lastRaw) * scaleLength;
}