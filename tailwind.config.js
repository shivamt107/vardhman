module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        countUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        headerSlideDown: {
          'from': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          'to': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        logoPopIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.7) translateY(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          },
        },
        bounceDown: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(12px)',
          },
        },
        swipeDownFadeIn: {
          'from': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          'to': {
            opacity: '0.7',
            transform: 'translateY(0)',
          },
        },
        floatShape: {
          '0%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '25%': {
            transform: 'translate(20px, -30px) scale(1.1)',
          },
          '50%': {
            transform: 'translate(-20px, -50px) scale(1.05)',
          },
          '75%': {
            transform: 'translate(15px, -30px) scale(1.15)',
          },
          '100%': {
            transform: 'translate(0, 0) scale(1)',
          },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        countUp: 'countUp 1s ease-out forwards',
        headerSlideDown: 'headerSlideDown 0.8s ease-out',
        logoPopIn: 'logoPopIn 1.2s cubic-bezier(0.4,0,0.2,1)',
        bounceDown: 'bounceDown 1.2s infinite',
        swipeDownFadeIn: 'swipeDownFadeIn 1.2s 1.2s forwards',
        floatShape: 'floatShape 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
