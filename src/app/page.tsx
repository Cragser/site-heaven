"use client";

import { Suspense } from "react";

import { NavigateToResource } from "@refinedev/nextjs-router";
import { Authenticated } from "@refinedev/core";
import { Hello } from "@cragser/core-heaven";

export default function IndexPage() {
  const helloWorld: Hello = {
    world: "Hello from core-heaven!",
  };
  return (
    <Suspense fallback="loading">
      <Authenticated key="home-page" v3LegacyAuthProviderCompatible>
        <NavigateToResource />
        <div>
          <h1>Hello, {helloWorld.world}</h1>
        </div>
      </Authenticated>
    </Suspense>
  );
}
