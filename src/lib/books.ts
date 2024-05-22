interface Books {
  title: string;
  author: string;
  genre: string;
  backgroundColor: string;
  link: string;
  pages: number;
  pagesRead: number;
  status: 'Reading' | 'Completed' | 'On Hold' | 'Dropped';
}

export const books: Books[] = [
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    genre: 'Literary Fiction',
    backgroundColor: 'bg-red-500',
    pages: 527,
    pagesRead: 310,
    status: 'Reading',
    link: 'https://www.google.co.id/books/edition/Crime_and_Punishment/aCgVAAAAYAAJ?hl=en&gbpv=0',
  },
  {
    title: 'I Am a Cat',
    author: 'Natsume Sōseki',
    genre: 'Fiction',
    backgroundColor: 'bg-yellow-500',
    pages: 638,
    pagesRead: 129,
    status: 'Reading',
    link: 'https://www.google.co.id/books/edition/I_Am_a_Cat/KXr7EAAAQBAJ?hl=en&gbpv=0',
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Literary Fiction',
    backgroundColor: 'bg-blue-500',
    pages: 528,
    pagesRead: 528,
    status: 'Completed',
    link: 'https://www.google.co.id/books/edition/Pride_and_Prejudice/kQ0mAAAAMAAJ?hl=en&gbpv=0',
  },
];
