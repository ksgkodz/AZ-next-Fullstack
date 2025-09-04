import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from '@/lib/constants'
import ClientProviders from '@/components/shared/client-providers'
import { getSetting } from '@/lib/actions/setting.actions'
import { cookies } from 'next/headers'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME}. ${APP_SLOGAN}`,
  },
  description: APP_DESCRIPTION,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const setting = await getSetting()
  const currencyCookie = (await cookies()).get('currency')
  const currency = currencyCookie ? currencyCookie.value : 'USD'

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProviders setting={{ ...setting, currency }}>{children}</ClientProviders>

      </body>
    </html>
  );
}
