"use client";
import React from "react";
import { AuthPage as AuthPageBase, AuthProps } from "@refinedev/antd"; //import type { AuthPageProps } from "@refinedev/core";
//import type { AuthPageProps } from "@refinedev/core";

// @ts-ignore
interface ExtendedAuthPageProps extends AuthProps {
  forgotPasswordLink?: React.ReactNode;
  registerLink?: React.ReactNode;
  rememberMe?: React.ReactNode;
}

export const AuthPage = (props: ExtendedAuthPageProps) => {
  return (
    <AuthPageBase
      {...props}
      forgotPasswordLink={<></>}
      registerLink={<></>}
      rememberMe={<></>}
      title={null}
      renderContent={(content) => (
        <div>
          {/* Renderiza el contenido sin incluir un logo */}
          {content}
        </div>
      )}
      formProps={{
        initialValues: {
          email: "demo@formel.dev",
          password: "formelpass",
        },
      }}
    ></AuthPageBase>
  );
};
