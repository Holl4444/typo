import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TypeScript Tutorial',
  description: 'Learn TypeScript basics',
  icons: {
    icon: [
      {
        url: '/dinoJoy.ico',
        sizes: 'any',
      },
      {
        url: '/dinoJoy.svg',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
