import CollectionCards from '@/components/collection-cards';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col gap-4 p-4">
      <header className="flex items-end justify-start gap-4 p-6 h-24 w-full rounded-xl bg-gradient-to-r from-blue-500 to-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          width="28"
          viewBox="0 0 448 512"
        >
          <path
            fill="#f4f4f5"
            d="M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32zM320 112c0-35.3-35.8-64-80-64s-80 28.7-80 64c0 20.9 12.6 39.5 32 51.2V176c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V163.2c19.4-11.7 32-30.3 32-51.2zM208 96a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM134.3 209.3c-8.1-3.5-17.5 .3-21 8.4s.3 17.5 8.4 21L199.4 272l-77.7 33.3c-8.1 3.5-11.9 12.9-8.4 21s12.9 11.9 21 8.4L240 289.4l105.7 45.3c8.1 3.5 17.5-.3 21-8.4s-.3-17.5-8.4-21L280.6 272l77.7-33.3c8.1-3.5 11.9-12.9 8.4-21s-12.9-11.9-21-8.4L240 254.6 134.3 209.3z"
          />
        </svg>
        <h1 className="font-semibold text-3xl text-zinc-100">MyBookshelf</h1>
      </header>

      <section className="flex flex-col justify-center lg:flex-row gap-4">
        <div className="lg:order-last w-full lg:w-1/3 bg-zinc-100 rounded-md p-4 flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl text-center">
            Welcome to{' '}
            <span className="text-blue-500 font-semibold">MyBookshelf</span>
          </h1>
          <p>Manage your books here.</p>
          <Button className="bg-blue-600 hover:bg-blue-500 text-lg text-zinc-100">
            Dashboard -{'>'}
          </Button>
        </div>

        <div className="w-full lg:w-2/3 bg-gradient-to-r from-red-500 to-blue-500 rounded-md p-1 flex flex-row justify-center items-center">
          <div className="bg-zinc-100 rounded w-full h-full p-4 flex flex-col justify-center items-center gap-4">
            <div className="bg-blue-600 text-lg text-zinc-100 w-full rounded-md p-1 text-center">
              Collection
            </div>
            <CollectionCards />
          </div>
        </div>
      </section>

      <footer className="w-full">
        <div className="bg-gradient-to-r from-red-500 to-blue-500 p-4 text-zinc-100 rounded-md">
          <p>Ausath Abdi Dzil Ikram</p>
          {/* Social Links */}
        </div>
      </footer>
    </main>
  );
}

