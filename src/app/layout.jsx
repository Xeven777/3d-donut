import "./globals.css";

export const metadata = {
  title: "3d donut",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
