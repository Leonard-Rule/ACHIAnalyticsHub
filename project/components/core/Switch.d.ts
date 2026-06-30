import * as React from 'react';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}

/** Toggle switch with teal "on" track. */
export function Switch(props: SwitchProps): JSX.Element;
