import { signIn } from "next-auth/react";

const handleProviderLogin = async (
  providerName: string,
  callbackUrl: string,
) => {
  await signIn(providerName, {
    callbackUrl,
    redirect: true,
  });
  return { success: true };
};

const handleCredentialsLogin = async (
  email: string,
  password: string,
  callbackUrl: string,
) => {
  const signUpResponse = await signIn("CredentialsSignUp", {
    callbackUrl,
    email,
    password,
    redirect: false,
  });

  console.log({ signUpResponse });

  if (!signUpResponse) {
    return { success: false };
  }

  const { error, ok } = signUpResponse;

  if (ok) {
    return {
      success: true,
      redirectTo: "/",
    };
  }

  return {
    success: false,
    error: new Error(error?.toString()),
  };
};

export const loginService =
  (to?: string) =>
  async ({ email, password, providerName }: any) => {
    const callbackUrl = to ?? "/";

    if (providerName) {
      return handleProviderLogin(providerName, callbackUrl);
    }

    return handleCredentialsLogin(email, password, callbackUrl);
  };
