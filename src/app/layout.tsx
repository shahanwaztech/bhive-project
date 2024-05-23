import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import BottomText from "@/components/bottom-text";
import NavBar from "@/components/navbar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Bhive Frontend Test",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {children}
        </body>
        </html>
    );
}
