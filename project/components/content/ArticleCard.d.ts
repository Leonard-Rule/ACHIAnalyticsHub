import * as React from 'react';

export interface ArticleCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Cover image URL. If omitted, a teal→navy placeholder gradient is shown. */
  image?: string;
  imageAlt?: string;
  /** Topic/category pill shown over the image. */
  category?: string;
  categoryColor?: 'neutral' | 'teal' | 'navy' | 'maroon' | 'solid' | 'outline';
  /** Date / type line (mono). */
  meta?: string;
  title?: React.ReactNode;
  excerpt?: React.ReactNode;
  cta?: string;
  /** When set, the whole card is a link. */
  href?: string;
}

/**
 * Publication / blog card: cover image, topic tag, date, title, excerpt. ACHI's primary content unit.
 * @startingPoint section="Content" subtitle="Publication & blog cards" viewport="700x420"
 */
export function ArticleCard(props: ArticleCardProps): JSX.Element;
