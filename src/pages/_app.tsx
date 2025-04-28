import "./globals.css";
import { Provider } from "@/components/ui/provider"
import QueryProvider from '@/components/queryProvider/queryProvider';
import { Toaster } from '@/components/ui/toaster';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function RootLayout({ Component, pageProps }){


    return (
      <QueryProvider>
        <Provider>
            <Toaster />

            <Component {...pageProps} />
        </Provider>
      </QueryProvider>
    )
}

