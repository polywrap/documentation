import React from 'react';
// $start: js-react-custom-provider
import { createPolywrapProvider } from '@polywrap/react';

const CustomPolywrapProvider = createPolywrapProvider('custom');

export const CustomProvider = ({ children }: { children: JSX.Element }) => {
  return (
    <CustomPolywrapProvider>
      {children}
    </CustomPolywrapProvider>
  );
};
// $end
