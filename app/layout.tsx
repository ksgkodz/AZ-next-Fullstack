import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from '@/lib/constants'
import { ThemeProvider } from '@/components/shared/theme-provider'
import AppInitializer from '@/components/shared/app-initializer'
import { Toaster } from '@/components/ui/sonner'
import { getSetting } from '@/lib/actions/setting.actions'
import { cookies, headers } from 'next/headers'
import { getDirection } from '@/i18n-config'
import { ClientSetting } from '@/types'


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
  const clientSetting: ClientSetting = { ...setting, currency }

  // Extract locale from pathname for direction handling
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') || '/'
  const locale = pathname.split('/')[1] || 'en-US'
  const direction = getDirection(locale)

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body
        className={`min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppInitializer setting={clientSetting}>
          <ThemeProvider
            attribute='class'
            defaultTheme={setting.common.defaultTheme.toLocaleLowerCase()}
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </AppInitializer>
      </body>
    </html>
  );
}
