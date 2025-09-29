import "./globals.css";
import Header from "./header";
import Footer from "./footer";
import { clash, satoshi } from './fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`flex h-full w-full flex-col antialiased ${clash.className} ${satoshi.className} text-white`}
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
