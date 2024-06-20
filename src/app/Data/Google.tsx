"use client"

import Script from "next/script";

const Google = () => {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3BZVZDGD73" />
            <Script id="googleA" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-3BZVZDGD73');
                `}
            </Script>
        </>
    );
}

export default Google