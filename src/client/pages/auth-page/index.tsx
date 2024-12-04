"use client";
import { AuthPage as AuthPageBase } from "@refinedev/antd";
import type { AuthPageProps } from "@refinedev/core";

export const AuthPage = (props: AuthPageProps) => {
  return (
    <AuthPageBase
      {...props}
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
    />
  );
};
