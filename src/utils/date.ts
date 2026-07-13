export function getTripCountdown(targetDate: string): number {
  const today = new Date();

  const target = new Date(targetDate);

  const difference = target.getTime() - today.getTime();

  return Math.max(Math.ceil(difference / (1000 * 60 * 60 * 24)), 0);
}
