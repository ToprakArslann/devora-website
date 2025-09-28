import "./globals.css";
import localFont from 'next/font/local'
import Header from "./header";
import Footer from "./footer";

export const clash = localFont({
  src: [
    {
      path: '/fonts/ClashDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
})
export const clashLight = localFont({
  src: [
    {
      path: '/fonts/ClashDisplay-Light.otf',
      weight: '400',
      style: 'normal',
    },
  ],
})
export const satoshi = localFont({
  src: [
    {
      path: '/fonts/Satoshi-Light.otf',
      weight: '400',
      style: 'normal',
    },
  ],
})
export const satoshiReg = localFont({
  src: [
    {
      path: '/fonts/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
})
export const satoshiBlack = localFont({
  src: [
    {
      path: '/fonts/Satoshi-Black.otf',
      weight: '400',
      style: 'normal',
    },
  ],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`flex h-full w-full flex-col antialiased ${clash.className} ${satoshi.className}`}
        >
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
