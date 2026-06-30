import * as React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style. */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'link';
  /** Size. */
  size?: 'sm' | 'md' | 'lg';
  /** Full-width. */
  block?: boolean;
  /** Render as a different element/component (defaults to <button>, or <a> when href set). */
  as?: any;
  /** When set, renders as an anchor. */
  href?: string;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

/**
 * ACHI button. Primary = navy, accent = teal, secondary = outline.
 * @startingPoint section="Core" subtitle="Buttons in every variant & size" viewport="700x220"
 */
export function Button(props: ButtonProps): JSX.Element;
