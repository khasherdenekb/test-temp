import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetHeader, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { WEB_NAME } from "@/constants";
import { Menu } from "./menu";

export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex h-full flex-col px-3 sm:w-72" side="left">
        <SheetHeader>
          <Button className="flex items-center justify-center pb-2 pt-1" variant="link" asChild>
            <Link href="/" className="flex items-center !justify-start gap-2">
              <Image src={"/logo.png"} alt="logo" width={24} height={24} className="mr-1" />
              <h1 className="text-lg font-bold">{WEB_NAME}</h1>
            </Link>
          </Button>
        </SheetHeader>
        <Menu isOpen />
      </SheetContent>
    </Sheet>
  );
}
