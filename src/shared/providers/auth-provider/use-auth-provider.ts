import { AuthProvider } from "@refinedev/core";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { loginService } from "@providers/auth-provider/util/login-service";

export const useAuthProvider = (): AuthProvider => {
  const { data, status } = useSession();
  const to = usePathname();

  return {
    check: async () => {
      if (status === "unauthenticated") {
        return {
          authenticated: false,
          redirectTo: "/login",
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
    login: async (credentials: any) => {
      const login = loginService(to);
      return login(credentials);
    },
    logout: async () => {
      signOut({
        callbackUrl: "/login",
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
