import type { Config } from 'tailwindcss';

function withOpacity(variableName: string) {
  return ({ opacityValue }: { opacityValue?: number }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: 'Oswald',
        aileron: 'Aileron'
      },
      textColor: {
        theme: {
          base: withOpacity('--theme-base'),
          accent: withOpacity('--theme-accent'),
          'accent-two': withOpacity('--theme-accent-two')
        }
      },
      fill: {
        theme: {
          accent: withOpacity('--theme-accent'),
          'accent-two': withOpacity('--theme-accent-two')
        }
      },
      backgroundColor: {
        theme: {
          base: withOpacity('--theme-bg'),
          accent: withOpacity('--theme-accent'),
          'accent-two': withOpacity('--theme-accent-two')
        }
      },
      borderColor: {
        base: withOpacity('--theme-base'),
        accent: withOpacity('--theme-accent'),
        'accent-two': withOpacity('--theme-accent-two')
      }
    }
  },
  plugins: []
} satisfies Config;
