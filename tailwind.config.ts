function withOpacity(variableName: string) {
  return ({ opacityValue }: { opacityValue?: number }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
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
  plugins: [require('@tailwindcss/typography')]
};
