'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  DocumentDuplicateIcon,
  CreditCardIcon,
  Cog6ToothIcon,
  PowerIcon,
} from '@heroicons/react/24/outline';

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Products', href: '/dashboard/products', icon: ShoppingBagIcon },
  { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
  { name: 'Orders', href: '/dashboard/orders', icon: CreditCardIcon },
  { name: 'Settings', href: '/dashboard/settings', icon: Cog6ToothIcon },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 bg-gradient-to-b from-orange-50 to-white shadow-lg p-4 flex flex-col">
      {/* Navigation Links */}
      <nav className="flex flex-col gap-2 mt-4">
        {links.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium
                ${
                  isActive
                    ? 'bg-orange-100 text-orange-600 font-semibold'
                    : 'text-gray-700 hover:bg-orange-50 hover:text-orange-500'
                }`}
            >
              <Icon className="w-5 h-5" />
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Push Sign Out to bottom */}
      <div className="flex-grow"></div>

      {/* Sign Out */}
      <form>
        <button
          type="button"
          className="flex items-center gap-3 w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600 transition"
        >
          <PowerIcon className="w-5 h-5" />
          <span>Sign Out</span>
        </button>
      </form>
    </aside>
  );
}
