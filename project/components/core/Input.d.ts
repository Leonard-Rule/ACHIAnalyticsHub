import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  /** Error message; renders the field in its invalid state. */
  error?: string;
  required?: boolean;
  /** Render a multi-line <textarea>. */
  multiline?: boolean;
}

/** Text field with label, hint and error states. Newsletter & search inputs across ACHI. */
export function Input(props: InputProps): JSX.Element;
