import Head from 'next/head'
import 'aos/dist/aos.css'
interface LayoutProps {
    children: React.ReactNode
    title: string
    description: string
    segmentName: string | null
    disableMailerlite: boolean
    disableDrift: boolean
}

export default function Layout({
    children,
    title = 'Internxt',
    description = "Internxt",
    segmentName = null,
    disableMailerlite = false,
    disableDrift = false
}: LayoutProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <script 
                    id="Cookiebot" 
                    src="https://consent.cookiebot.com/uc.js" data-cbid="f107e2b2-3258-4ef1-aefa-533acd1a84d2" 
                    data-blockingmode="auto" 
                    type="text/javascript"
                >
                </script>
                <link rel="alternate" hrefLang="en" href="https://internxt.com/" />
                <link rel="alternate" hrefLang="es" href="https://internxt.com/es" />
                <link rel="alternate" hrefLang="x-default" href="https://internxt.com/" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={description}></meta>
                <link rel="icon" href="/favicon.ico" />
                {!disableMailerlite && <script src="/js/mailerlite.js"></script>}
                <script src={`/js/segment${process.env.NODE_ENV === 'production' ? '' : '-test'}.js`}></script>
                {!disableDrift && <script src="/js/drift.js"></script>}
                <script src="/js/twitter.js"></script>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-6EXL38KVWG"></script>
                <script dangerouslySetInnerHTML={{
                    __html: 'window.dataLayer = window.dataLayer || [];\
                    function gtag(){dataLayer.push(arguments);}\
                    gtag(\'js\', new Date());\
                    gtag(\'config\', \'G-6EXL38KVWG\');\
                    gtag(\'config\', \'AW-728922855\');\
                '}} />
                <script dangerouslySetInnerHTML={{ __html: `analytics.page(\'${segmentName}\')` }} />
            </Head>
            {children}
            <script 
                id="CookieDeclaration" 
                src="https://consent.cookiebot.com/f107e2b2-3258-4ef1-aefa-533acd1a84d2/cd.js" type="text/javascript" 
                async
            >
            </script>
        </>
    )
}