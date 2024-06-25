// "use client";
// import { Button } from "@/components/ui/button";
// import { WEB_NAME } from "@/constants";
// import { loginSso } from "@/lib/auth-helper";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function SignIn() {
//   const router = useRouter();
//   if (
//     typeof window !== undefined &&
//     window.localStorage.getItem("test_keycloak_auth") &&
//     window.localStorage.getItem("permissions")
//   ) {
//     router.push("/");
//   }

//   return (
//     <div className="flex h-screen w-full items-center justify-center bg-muted">
//       <div className="mx-auto flex w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg dark:bg-slate-900 lg:max-w-7xl">
//         <div
//           className="hidden animate-jump-in bg-contain bg-no-repeat lg:block lg:w-1/2"
//           style={{
//             backgroundImage: `url(/assets/authBg2.png)`,
//           }}
//         />

//         <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
//           <div className="mx-auto flex justify-center">
//             <Image src={"/logo.png"} width={32} height={32} alt="logo" />
//           </div>

//           <p className="mt-3 text-center text-xl text-gray-600 dark:text-gray-200">Системийн нэр</p>

//           <div className="flex items-center justify-center">
// <Image
//   src={"/assets/authBg.svg"}
//   width={400}
//   height={50}
//   alt="auth-bg"
//   className="animate-wiggle"
// />
//           </div>

//           <div className="flex justify-center pt-5">
//             <Button onClick={() => loginSso()} size={"lg"} className="w-96">
//               Нэвтрэх
//             </Button>
//           </div>

//           <div className="flex justify-end pt-5 text-sm text-muted-foreground">
//             {WEB_NAME} Developed by ПХХ &copy;
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { loginSso } from "@/lib/auth-helper";
import { WEB_NAME, WEB_NAME_MN } from "@/constants";

const SignIn = () => {
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
            <p className="text-balance text-muted-foreground">{WEB_NAME_MN} - Системийн нэр...</p>
          </div>
          <div className="grid gap-4">
            <Image
              src={"/assets/authBg.svg"}
              width={400}
              height={50}
              alt="auth-bg"
              className="animate-wiggle"
            />
            <Button onClick={loginSso} type="submit" className="w-full">
              LDAP Нэвтрэх
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
