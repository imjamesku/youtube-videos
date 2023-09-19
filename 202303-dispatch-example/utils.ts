export function getAge(birthDate: Date, now: Date): number {
  const diff = now.getTime() - birthDate.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
