import Link from "next/link";

export default function Page(): JSX.Element {
  return (
    <main className="h-screen overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
      <div className="container mx-auto px-4 py-10 md:py-24">
        <div className="mb-16 flex flex-col items-center justify-center space-y-6 text-center">
          <h1 className="bg-gradient-to-r from-[#fad6f8] to-[#b5f2fd] bg-clip-text text-4xl font-bold text-transparent sm:text-6xl">
            Emsteel
          </h1>
          <p className="max-w-2xl text-lg text-zinc-300 sm:text-xl">
            Emsteel chat platform
          </p>
          <div className="flex gap-4">
            <Link
              href="/home"
              className="rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] px-6 py-2 font-medium text-white transition hover:opacity-90"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
