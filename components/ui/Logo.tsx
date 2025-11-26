import Image from "next/image";
import { Link } from '@/lib/navigation';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/Logo.svg"
        alt="Symplexy"
        width={153}
        height={40}
        priority
        className="h-10 w-auto"
      />
    </Link>
  );
}
