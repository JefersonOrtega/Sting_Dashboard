import "./globals.css";

export const metadata = {
  title: "Sting",
  description: "STING BETA v0.0.1 ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
