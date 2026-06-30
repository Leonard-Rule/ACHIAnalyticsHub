import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Status tone. */
  tone?: 'success' | 'warning' | 'danger' | 'info' | 'neutral';
  /** Show a leading status dot. */
  dot?: boolean;
}

/** Small uppercase status label (data freshness, release status, alerts). */
export function Badge(props: BadgeProps): JSX.Element;
