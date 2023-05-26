import "../styles/globals.css";

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
      <body>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
        </main>
      </body>
    </html>
  );
}
