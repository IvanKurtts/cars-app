import "./globals.css";
require('dotenv').config()

export const metadata = {
  title: "Car App",
  description: "Car Application created by Ivan Kurtts",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        {children}
      </body>
    </html>
  );
}