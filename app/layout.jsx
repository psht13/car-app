import "./globals.css";

export const metadata = {
  title: "Car App",
  description: "Find vehicles by various filters",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative flex justify-center w-[100vw] h-[100vh] p-0 ">
        <div className="gradient" />
        {children}
      </body>
    </html>
  );
}
