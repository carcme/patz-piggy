import "./globals.css";

export const metadata = {
  title: "Home | Lindenhof Pätz",
  description: "Only the best restaurant in Pätz",
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
