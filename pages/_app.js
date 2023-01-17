import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import { Anek_Bangla } from "@next/font/google";

import Layout from "../components/Layout";
const anek = Anek_Bangla({ subsets: ["latin"] });
const theme = extendTheme({
    fonts: {
        heading: anek.style.fontFamily,
        body: anek.style.fontFamily,
    },
});

export default function App({ Component, pageProps }) {
    NProgress.configure({ showSpinner: false });
    Router.events.on("routeChangeStart", () => {
        NProgress.start();
    });

    Router.events.on("routeChangeComplete", () => {
        NProgress.done();
    });

    return (
        <>
            <Head>
                {/* <style jsx global>
                    {`
                        html {
                            font-family: ${akshar.style.fontFamily};
                        }
                    `}
                </style> */}
            </Head>
            <ChakraProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ChakraProvider>
        </>
    );
}
