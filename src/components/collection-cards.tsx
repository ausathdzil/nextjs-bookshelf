import { books } from '@/lib/books';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import Link from 'next/link';

export default function CollectionCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
      {books.map((book, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center"
        >
          <Card
            className={`${book.color} text-zinc-100 rounded-xl border-none w-full h-full`}
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
            <CardFooter>
              
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}
