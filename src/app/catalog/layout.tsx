import {ThemedLayout} from "@client/layouts/themed-layout";
import { redirect } from 'next/navigation';
import React from 'react';
import { getServerSession } from 'next-auth';
import authOptions from "@/app/api/auth/[...nextauth]/options";

export default async function Layout({
  children,
}: Readonly<React.PropsWithChildren>) {
  const data = await getData();

  if (!data.session?.user) {
    return redirect('/login');
  }
  return <ThemedLayout>{children}</ThemedLayout>;
}

async function getData() {
  const session = await getServerSession(authOptions);
  return {
    session,
  };
}
