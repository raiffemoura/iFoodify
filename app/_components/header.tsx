import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between px-6 py-5">
      <div className="relative h-[40px] w-[120px]">
        <Link href={"/"}>
          <Image src="/logo.png" alt="iFoodfy" fill className="object-cover" />
        </Link>
      </div>
      <Button
        size="icon"
        variant="outline"
        className="bg-tranparent border-none"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
