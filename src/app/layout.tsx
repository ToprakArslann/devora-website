import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
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
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
