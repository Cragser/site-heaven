import { ReactNode } from 'react';

export interface StateManagerProps {
  isLoading: boolean;
  isError: boolean;
  children: ReactNode;
}

export function StateManager({
  children,
  isError,
  isLoading,
}: Readonly<StateManagerProps>) {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }

  return <>{children}</>;
}
