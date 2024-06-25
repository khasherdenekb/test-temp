import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BasicAuthSignIn = () => {
  return (
    <div className="w-full justify-center lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="hidden bg-muted lg:block">
        <Image
          src="/assets/authBackground.png"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.7]"
        />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Нэвтрэх</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Имэйл</Label>
              <Input id="email" type="email" placeholder="example@arigbank.mn" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Нууц үг</Label>
                <Link href="/forgot-password" className="ml-auto inline-block text-sm underline">
                  Нууц үгээ мартсан уу?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Нэвтрэх
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Харилцагч бүртгэлгүй юу?{" "}
            <Link href="#" className="underline">
              Бүртгүүлэх
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicAuthSignIn;
