/**
 * Hook to determine the current seasonal schedule based on the month
 * - Summer (Dec-Mar): 18hs - 2hs daily
 * - Regular (Apr-Nov): Sun-Thu 17hs-1hs, Fri-Sat 17hs-3hs
 */

export type Season = 'summer' | 'regular'

export interface ScheduleData {
  season: Season
  badge: string
  hours: {
    lines: string[]
  }
  metaDescription: string
}

export function useSeasonalSchedule(date: Date = new Date()): ScheduleData {
  const month = date.getMonth() // 0-11 (Jan=0, Dec=11)

  // Summer: December (11), January (0), February (1), March (2)
  const isSummer = month === 11 || month === 0 || month === 1 || month === 2

  if (isSummer) {
    return {
      season: 'summer',
      badge: 'Verano ☀️',
      hours: {
        lines: ['18hs - 2:00hs'],
      },
      metaDescription:
        'Diviértete en nuestro moderno bowling en Mar del Plata. Bolos, aperitivos y diversión para todas las edades. ¡Únete! Abierto en verano de 18hs a 2:00hs.',
    }
  }

  // Regular season: April (3) through November (10)
  return {
    season: 'regular',
    badge: 'Temporada 🍂',
    hours: {
      lines: ['Dom - Jue: 17hs - 1:00hs', 'Vie - Sáb: 17hs - 3:00hs'],
    },
    metaDescription:
      'Diviértete en nuestro moderno bowling en Mar del Plata. Bolos, aperitivos y diversión para todas las edades. ¡Únete! Abierto dom-jue de 17hs a 1hs, vie-sáb de 17hs a 3hs.',
  }
}
