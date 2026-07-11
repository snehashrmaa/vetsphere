export function formatPercentage(value: number): string {
  return `${Math.round(value)}%`
}

export function truncate(text: string, length = 80): string {
  return text.length > length ? `${text.slice(0, length)}…` : text
}

export function getGreeting(date: Date = new Date()): string {
  const hour = date.getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}
