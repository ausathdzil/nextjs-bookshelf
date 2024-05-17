import { books } from '@/lib/books';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import Link from 'next/link';

export default function CollectionCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-2 w-full h-full">
      {books.map((book, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center"
        >
          <Card
            className={`${book.color} text-zinc-100 border-none w-full h-full`}
          >
            <CardHeader>
              <Link
                href={book.link}
                target="_blank"
                className="hover:underline underline-offset-2"
              >
                <CardTitle>{book.title}</CardTitle>
              </Link>
              <CardDescription className="text-zinc-200">
                {book.author}
              </CardDescription>
              <CardDescription className="text-zinc-200">
                {book.genre}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}
