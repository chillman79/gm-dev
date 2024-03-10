import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'mantis': {
            DEFAULT: '#8bd059',
            '50': '#f3fbea',
            '100': '#e3f5d2',
            '200': '#c8ecaa',
            '300': '#a4de78',
            '400': '#8bd059',
            '500': '#65b230',
            '600': '#4b8e22',
            '700': '#3b6d1e',
            '800': '#32571d',
            '900': '#2c4a1d',
            '950': '#14280b',
        },
        
      }
    }
  }
}
