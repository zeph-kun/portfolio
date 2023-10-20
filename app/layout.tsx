import type { Metadata } from 'next'
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'


const vcr = localFont({
  src: [
    {
      path: '../public/fonts/VCR_OSD_MONO_1.001.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/VCR_OSD_MONO_1.001.ttf',
      weight: '700'
    }
  ],
  variable: '--font-vcr'
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Matthias Dive Portfolio',
  description: 'Matthias Dive Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${vcr.variable} font-sans`} lang="en">
      <head>
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={'flex flex-col min-h-screen'}>
        <header>
          <Navbar />
        </header>
        <div className={'container mx-auto'}>
          {children}
        </div>
        <footer className={'mt-auto'}>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  )
}
