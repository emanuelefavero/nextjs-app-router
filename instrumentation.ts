import { registerOTel } from '@vercel/otel'

export function register() {
  registerOTel({ serviceName: 'nextjs-app-router' })
}
