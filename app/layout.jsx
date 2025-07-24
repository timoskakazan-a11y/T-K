export const metadata = {
  title: 'Музыкальное приложение',
  description: 'Простой плеер на Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
