const dev = process.env.NODE_ENV !== 'production'

export const server = dev
  ? 'http://localhost:3000'
  : 'https://nextjs-app-router-mr0aw1s1g-emanuelefavero.vercel.app'

// ? EXAMPLE VERCEL URL: https://YOUR-APP-NAME.vercel.app
