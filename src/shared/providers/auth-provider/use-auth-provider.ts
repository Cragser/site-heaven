import { AuthBindings } from '@refinedev/core';
import { signIn, signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export const useAuthProvider = (): AuthBindings => {
  const { data, status } = useSession();
  const to = usePathname();
  return {
    check: async () => {
      if (status === 'unauthenticated') {
        return {
          authenticated: false,
          redirectTo: '/login',
        };
      }

      return {
        authenticated: true,
      };
    },
    getIdentity: async () => {
      if (data?.user) {
        const { user } = data;
        return {
          avatar: user.image,
          name: user.name,
        };
      }

      return null;
    },
    getPermissions: async () => {
      return null;
    },
    login: async ({ email, password, providerName }: any) => {
      console.log({ email, password, providerName });
      if (providerName) {
        signIn(providerName, {
          callbackUrl: to ? to.toString() : '/',
          redirect: true,
        });

        return {
          success: true,
        };
      }

      const signUpResponse = await signIn('CredentialsSignUp', {
        callbackUrl: to ? to.toString() : '/',
        email,
        password,
        redirect: false,
      });

      if (!signUpResponse) {
        return {
          success: false,
        };
      }

      const { error, ok } = signUpResponse;

      if (ok) {
        return {
          redirectTo: '/',
          success: true,
        };
      }

      return {
        error: new Error(error?.toString()),
        success: false,
      };
    },
    logout: async () => {
      signOut({
        callbackUrl: '/login',
        redirect: true,
      });

      return {
        success: true,
      };
    },
    onError: async (error: any) => {
      if (error.response?.status === 401) {
        return {
          logout: true,
        };
      }

      return {
        error,
      };
    },
  };
};
