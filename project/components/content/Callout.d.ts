import * as React from 'react';

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Semantic tone (sets color + icon). */
  tone?: 'info' | 'success' | 'warning' | 'danger' | 'brand';
  title?: React.ReactNode;
  children?: React.ReactNode;
}

/** Inline note / alert box with icon and left accent bar. For data caveats, key takeaways, advisories. */
export function Callout(props: CalloutProps): JSX.Element;
