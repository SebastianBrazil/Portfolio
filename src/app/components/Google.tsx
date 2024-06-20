"use client"

import Script from "next/script";

const Google = () => {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id={process.env.GOOGLE_ID}" />
            <Script id="googleA" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '{process.env.GOOGLE_ID}');
                `}
            </Script>
        </>
    );
}

export default Google