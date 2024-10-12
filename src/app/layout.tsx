// src/app/layout.tsx
import './globals.css';
import Header from './(components)/header';
import Footer from './(components)/footer'

export const metadata = {
  title: 'Real Estate Homepage',
  description: 'Find your dream home with us.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        {/**  <Footer />*/}
      </body>
    </html>
  );
}
