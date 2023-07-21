import "./globals.css";

export const metadata = {
  title: "BLog",
  description: "Tech Blog For everyone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-auto p-8  max-w-[1280px]">{children}</body>
    </html>
  );
}
