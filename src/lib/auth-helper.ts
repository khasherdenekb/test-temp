"use client";
import { UserManager, UserManagerSettings } from "oidc-client-ts";
import { AES, enc } from "crypto-js";
import { toast } from "sonner";

// TODO: ENV-с авдаг байх ёстой
const settings: UserManagerSettings = {
  authority: "https://test-keycloak.arigbank.mn/auth/realms/my_realm/",
  client_id: "frontend_client",
  redirect_uri: "http://localhost:3000/auth",
  response_type: "code",
  scope: "openid profile message.read",
  response_mode: "query",
};

export const userManager = new UserManager(settings);

export const loginSso = async (): Promise<void> => {
  await userManager?.signinRedirect();
};

//TODO: add logout token
export const logoutSso = async (): Promise<void> => {
  try {
    await userManager?.signoutRedirect({
      post_logout_redirect_uri: "http://localhost:3000",
    });

    userManager?.clearStaleState();
    window.localStorage.clear();
  } catch (error) {
    toast.error((error as Error)?.message);
  }
};

export interface System {
  systemName: string;
  systemCode: string;
  systemUrl: string;
  systemIcon: string;
  loginCheck: boolean;
  actions: string;
}

export const decryptData = (data: string | null): string | null => {
  if (data === null) {
    return null;
  }
  return AES.decrypt(data, "END ENV GEESEE AVDAG SECRET BH YSTOI").toString(enc.Utf8);
};

export const checkPermission = (code: string | undefined): boolean => {
  if (code === undefined) {
    return false;
  }

  let decrypted;

  if (typeof window !== undefined) {
    decrypted = window.localStorage.getItem("permissions");
  }

  const data = JSON.parse(decryptData(decrypted!)!);

  const system = data?.systemList.find((el: System) => {
    // TODO: system code env-с авдаг байх ёстой
    return el.systemCode === "END SYSTEM CODE BH YSTOI";
  });
  return !!system && system.actions.includes(code.toUpperCase());
};
