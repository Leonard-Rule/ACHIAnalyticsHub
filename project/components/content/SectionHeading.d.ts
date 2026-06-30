import * as React from 'react';

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Small uppercase teal eyebrow above the title. */
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Title size. */
  size?: 'md' | 'lg' | 'xl';
  align?: 'left' | 'center';
  /** Render light type for dark backgrounds. */
  inverse?: boolean;
  /** Show the short teal accent rule. */
  rule?: boolean;
}

/**
 * The recurring ACHI section header: teal eyebrow + accent rule + title + description.
 * @startingPoint section="Content" subtitle="Eyebrow + rule + title block" viewport="700x260"
 */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
