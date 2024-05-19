'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { Button } from './ui/button';
import { Settings } from 'lucide-react';

export default function TopNav() {
  return (
    <div className="p-4 bg-zinc-100 flex justify-between items-center rounded-xl w-full">
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
      <Button
        variant="ghost"
        size="sm"
        className="hover:bg-zinc-200"
      >
        <Settings color="#09090b" />
      </Button>
    </div>
  );
}
