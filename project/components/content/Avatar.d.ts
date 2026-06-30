import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Full name — used for initials fallback and title. */
  name?: string;
  /** Headshot URL. Falls back to initials on brand color. */
  src?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'navy' | 'teal' | 'maroon';
}

/** Circular avatar for experts/staff; shows headshot or initials on a brand color. */
export function Avatar(props: AvatarProps): JSX.Element;
