import * as React from 'react';

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The headline figure, e.g. "1 in 3" or "44%". */
  value: React.ReactNode;
  /** What the figure measures. */
  label?: React.ReactNode;
  /** Optional small source/citation line. */
  source?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'navy' | 'teal' | 'maroon' | 'inverse';
}

/**
 * Data callout — big mono figure + label + source. ACHI's research surfaces lead with these.
 * @startingPoint section="Content" subtitle="Headline data figures" viewport="700x200"
 */
export function Stat(props: StatProps): JSX.Element;
