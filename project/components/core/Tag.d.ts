import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLElement> {
  /** Color treatment. */
  color?: 'neutral' | 'teal' | 'navy' | 'maroon' | 'solid' | 'outline';
  /** Render as different element (e.g. anchor for topic links). */
  as?: any;
  href?: string;
}

/** Topic / category pill used across ACHI publications, blog and topic pages. */
export function Tag(props: TagProps): JSX.Element;
