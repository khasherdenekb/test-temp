"use client";
import { Button } from "@/components/ui/button";
import { WEB_NAME } from "@/constants";
import { loginSso } from "@/lib/auth-helper";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  if (
    typeof window !== undefined &&
    window.localStorage.getItem("test_keycloak_auth") &&
    window.localStorage.getItem("permissions")
  ) {
    router.push("/");
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-muted">
      <div className="mx-auto flex w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg dark:bg-slate-900 lg:max-w-7xl">
        <div
          className="hidden animate-jump-in bg-contain bg-no-repeat lg:block lg:w-1/2"
          style={{
            backgroundImage: `url(/assets/authBg2.png)`,
          }}
        />

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="mx-auto flex justify-center">
            <Image src={"/logo.png"} width={32} height={32} alt="logo" />
          </div>

          <p className="mt-3 text-center text-xl text-gray-600 dark:text-gray-200">Системийн нэр</p>

          <div className="flex items-center justify-center">
            <Image
              src={"/assets/authBg.svg"}
              width={400}
              height={50}
              alt="auth-bg"
              className="animate-wiggle"
            />
          </div>

          <div className="flex justify-center pt-5">
            <Button onClick={() => loginSso()} size={"lg"} className="w-96">
              Нэвтрэх
            </Button>
          </div>

          <div className="flex justify-end pt-5 text-sm text-muted-foreground">
            {WEB_NAME} Developed by ПХХ &copy;
          </div>
        </div>
      </div>
    </div>
  );
}
