export const metadata = { title: "Farpy — Distributed GPU power for everyone" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <header className="border-b">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex gap-6 text-sm">
            <a href="/" className="font-semibold">Farpy</a>
            <a href="/how">How</a>
            <a href="/join">Join</a>
            <a href="/status">Status</a>
            <a href="/about">About</a>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <footer className="border-t mt-16">
          <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-gray-500">
            © 2025 Farpy — Tiny taps. Big compute.
          </div>
        </footer>
      </body>
    </html>
  );
}
