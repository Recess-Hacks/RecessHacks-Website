import type { Metadata } from "next";
import React from "react";
import "./global.css"

export const metadata: Metadata = {
    title: "RecessHacks 2025",
    description: "RecessHacks 5.0 is our first ever inperson hackaton. We are a highschool hackathon open to all students from August 23-24. Hours of coding, mentorship & fun (+ free food!)",
    openGraph: {
        title: "RecessHacks 2025",
        type: "website",
        url: "https://https://recess-hacks.onrender.com/",
        images: [
            {
                url: "https://i.postimg.cc/DwkDgpkj/logo.png",
            },
        ],
        description: "RecessHacks 5.0 is our first ever inperson hackaton. We are a highschool hackathon open to all students from August 23-24. Hours of coding, mentorship & fun (+ free food!)",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // Disable hydration warning since browser addons/extensions trigger
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta charSet="UTF-8" />
                <link rel="icon" type="image/svg+xml" href="/logo.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
                <title>RecessHacks</title>
                <script defer src="https://cloud.umami.is/script.js"
                    data-website-id="515f16a5-8036-482d-b535-7cdc2310d52b"></script>
            </head>
            <body className="overflow-x-hidden">
                {children}
            </body>
        </html>
    );
}
