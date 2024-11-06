import "./globals.css";

export const metadata = {
  title: "Star Rail",
  description: "Wiki Star Rail",
  charset: 'UTF-8',
  author: 'Caio Franco Siaticoski',
  keywords:'Wiki, Hoyoverse, Star Rail',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
