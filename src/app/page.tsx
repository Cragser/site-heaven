"use client";

import { Suspense } from "react";

import { NavigateToResource } from "@refinedev/nextjs-router";
import { Authenticated } from "@refinedev/core";

export default function IndexPage() {
  return (
    <Suspense fallback="loading">
      <Authenticated key="home-page" v3LegacyAuthProviderCompatible>
        <NavigateToResource />
      </Authenticated>
    </Suspense>
  );
}
