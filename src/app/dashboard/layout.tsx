import Link from 'next/link';
import { Button } from '@/components/ui/button';
import TopNav from '@/components/topnav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex justify-start items-center gap-2 p-4 m-4 rounded-xl bg-gradient-to-r from-red-500 to-blue-500">
        <Link href="/">
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-100 hover:text-red-500"
          >
            {'<'}-
          </Button>
        </Link>
        <h1 className="font-semibold text-2xl text-zinc-100">Dashboard</h1>
      </header>

      <main className="flex flex-col justify-center items-center px-4 gap-4">
        <TopNav />
        {children}
      </main>
    </>
  );
}
