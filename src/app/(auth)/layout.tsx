import React from "react";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-gradient-to-r from-blue-300 to-indigo-500 flex flex-col items-center justify-center h-screen">
            {children}
        </div>
    )
}