import type { Metadata } from "next";

// Define your dictionary
const mnMessages = {
  mn: {
    Yes: "Тийм",
    No: "Үгүй",
    Search: "Хайх...",
  }
};

export const metadata: Metadata = {
  title: "Smart Admin",
  description: "Системийн хяналтын самбар",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn">
      {/* Since we have no global.css, we use the body style to 
          set the "Vibe" for the entire application.
      */}
      <body style={{ 
        margin: 0, 
        padding: 0, 
        minHeight: "100vh",
        backgroundColor: "#f8fafc", // Background for the whole app
        color: "#0f172a",
        fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        textRendering: "optimizeLegibility"
      }}>
        {children}
      </body>
    </html>
  );
}