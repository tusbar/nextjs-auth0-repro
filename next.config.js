module.exports = {
  reactStrictMode: true,
  env: {
    AUTH0_BASE_URL: process.env.AUTH0_BASE_URL ?? process.env.VERCEL_URL ?? 'localhost:3000'
  }
}
