import RecentCards from '@/components/recent-cards';

export default function Page() {
  return (
    <div className="grid md:grid-cols-2 bg-zinc-100 w-full rounded-xl p-6">
      <RecentCards />
    </div>
  );
}
