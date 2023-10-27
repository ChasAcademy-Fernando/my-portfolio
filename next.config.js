/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:[
      'scontent-cph2-1.xx.fbcdn.net',
      'firebasestorage.googleapis.com',
      'cdn.sanity.io'
    ]
  }
}

module.exports = nextConfig
