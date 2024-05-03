import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between px-6 py-5">
      <Image src="/logo.png" alt="iFoodfy" height={30} width={100} />
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
