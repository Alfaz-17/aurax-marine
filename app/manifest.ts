import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Spice Ship Supplier – Marine Engine Spares & Ship Machinery',
    short_name: 'Spice Ship Supplier',
    description:
      'Global supplier of marine engine spares, MAN B&W components, Daihatsu spares, and critical ship machinery. 30+ years of maritime excellence.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F5F5F5',
    theme_color: '#FF3B30',
    orientation: 'portrait-primary',
    categories: ['business', 'shopping', 'industrial'],
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icon-dark-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  }
}
