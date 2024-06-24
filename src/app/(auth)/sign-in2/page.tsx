"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WEB_NAME } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

// ? This page with input fields
export default function SignIn2() {
  const router = useRouter();
  if (
    typeof window !== undefined &&
    window.localStorage.getItem("test_keycloak_auth") &&
    window.localStorage.getItem("permissions")
  ) {
    router.push("/");
  }

  return (
    <div className="flex justify-center items-center h-screen w-full bg-muted">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-slate-900 lg:max-w-7xl">
        <div
          className="hidden bg-contain bg-no-repeat lg:block lg:w-1/2 animate-jump-in"
          style={{
            backgroundImage: `url(/assets/authBg2.png)`,
          }}
        />

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <Image src={"/logo.png"} width={32} height={32} alt="logo" />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200 animate-jump-in py-5">
            Системийн нэр
          </p>

          <div className="flex justify-center items-center">
            <Image
              src={"/assets/authBg.svg"}
              width={220}
              height={50}
              alt="auth-bg"
              className="animate-wiggle"
            />
          </div>

          <div className="flex justify-center">
            <div className="flex gap-4 flex-col w-full max-w-96 ">
              <div className="flex flex-col gap-2">
                <Label>Нэвтрэх нэр</Label>
                <Input className="w-96" placeholder="Нэвтрэх нэр" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Нууц үг</Label>
                <Input className="w-96" placeholder="Нууц үг" />
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-5">
            <Button size={"lg"} className="w-96">
              Нэвтрэх
            </Button>
          </div>

          <div className="pt-5 flex justify-end text-muted-foreground text-sm">
            {WEB_NAME} Developed by ПХХ &copy;
          </div>
        </div>
      </div>
    </div>
  );
}
