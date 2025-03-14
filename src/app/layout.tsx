import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <nav>
            <ul className="nav-list flex gap-5">
              <li className="nav-item">
                <Link href={"/"}>Home(SSG)</Link>
              </li>
              <li className="nav-item">
                <Link href={"/news"}>News(ISR)</Link>
              </li>
              <li className="nav-item">
                <Link href={"/blogs"}>Blogs(SSR)</Link>
              </li>
              <li className="nav-item">
                <Link href={"/todo-list"}>TodoList(CSR)</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
