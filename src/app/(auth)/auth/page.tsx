"use client";

import axios from "axios";
import { AES } from "crypto-js";
import { useRouter } from "next/navigation";
import { userManager } from "@/lib/auth-helper";

const AuthCallback = () => {
  const router = useRouter();
  if (
    typeof window !== undefined &&
    window.localStorage.getItem("test_keycloak_auth") &&
    window.localStorage.getItem("permissions")
  ) {
    router.push("/");
  }

  const handleAuthCallback = async () => {
    try {
      const data = await userManager?.signinRedirectCallback();
      if (typeof window !== undefined) {
        window.localStorage.setItem("test_keycloak_auth", JSON.stringify(data));
      }
      const userInfo = await axios.get(
        `https://test-sso-backend.arigbank.mn/restapi/v1/system/user/info/${data?.profile?.email}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data?.access_token}`,
            authUser: 1,
            systemCode: "MID",
          },
        },
      );

      let system = userInfo?.data?.result.systemList.filter((el: { systemCode: string }) => {
        return el?.systemCode === "MID" ? el : null;
      });

      if (typeof window !== undefined) {
        window.localStorage.setItem(
          "permissions",
          AES?.encrypt(
            JSON.stringify(userInfo?.data?.result),
            "END ENV GEESEE AVDAG SECRET BH YSTOI",
          ).toString(),
        );
      }
      router.push("/");
    } catch (error) {
      console.error("Error during authentication callback:", error);
      // await logoutSso();
      // router.push("/error");
    }
  };

  handleAuthCallback();

  return (
    <div>
      <h1>Authentication callback processing...</h1>
    </div>
  );
};

export default AuthCallback;
