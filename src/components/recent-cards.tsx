import { books } from '@/lib/books';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { ProgressBar } from '@tremor/react';
import { Badge } from './ui/badge';

export default function RecentCards() {
  return (
    <div className="flex flex-col gap-3">
      <h1>Recently Added</h1>
      {books.map((book, index) => (
        <Card
          key={index}
          className="rounded-xl border-none"
        >
          <CardHeader>
            <CardTitle className='flex items-center gap-3'>
              <Badge className={`${book.backgroundColor}`}></Badge>
              {book.title}
            </CardTitle>
            <div>
              <CardDescription>
                {book.status}
              </CardDescription>
              <CardDescription>
                {book.pagesRead} / {book.pages}
              </CardDescription>
            </div>
            <ProgressBar
              value={Math.round((book.pagesRead / book.pages) * 100)}
              color={book.status === 'Completed' ? 'blue' : 'emerald'}
            />
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
