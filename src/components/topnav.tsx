'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

export default function TopNav() {
  return (
    <div className="w-full p-4 bg-zinc-100 rounded-md flex justify-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="flex gap-4">
            <Link
              href="/dashboard/overview"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className="bg-blue-500 hover:bg-blue-400 text-zinc-100 rounded-lg py-2 px-4 transition ease-in-out delay-50">
                Overview
              </NavigationMenuLink>
            </Link>
            <Link
              href="/dashboard/books"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className="bg-red-500 hover:bg-red-400 text-zinc-100 rounded-lg py-2 px-4 transition ease-in-out delay-50">
                Books
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
