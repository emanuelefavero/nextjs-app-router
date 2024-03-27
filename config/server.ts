const dev = process.env.NODE_ENV !== 'production'

export const server = dev
  ? 'http://localhost:3000'
  : 'https://nextjs-app-router-rouge.vercel.app'

// ? EXAMPLE VERCEL URL: https://YOUR-APP-NAME.vercel.app
