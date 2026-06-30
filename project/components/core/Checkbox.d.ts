import * as React from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  /** 'checkbox' (default) or 'radio' — shares one visual style. */
  type?: 'checkbox' | 'radio';
}

/** Checkbox / radio with teal selected fill. Pass type="radio" for a radio. */
export function Checkbox(props: CheckboxProps): JSX.Element;
