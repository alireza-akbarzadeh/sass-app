import Link from 'next/link';
import { BrandLogo } from '@/components/common/BrandLogo';

export function Navbar() {
  return (
    <nav className="container flex items-center gap-10">
      <Link href="/" className="mr-auto">
        <BrandLogo />
      </Link>
    </nav>
  );
}
