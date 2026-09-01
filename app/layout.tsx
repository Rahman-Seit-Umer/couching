import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Роман Сейтумеров — психолог-консультант',
  description: 'Индивидуальное психологическое консультирование онлайн и очно в Санкт-Петербурге.',
  icons: {
    icon: '/images/roman-portrait.jpeg',
  },
  openGraph: {
    title: 'Роман Сейтумеров — психолог-консультант',
    description: 'Индивидуальное психологическое консультирование онлайн и очно в Санкт-Петербурге.',
    type: 'website',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary',
    title: 'Роман Сейтумеров — психолог-консультант',
    description: 'Индивидуальное психологическое консультирование онлайн и очно в Санкт-Петербурге.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
