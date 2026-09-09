import type { ReactNode } from "react";
import { cn } from "../../lib/cn";
import "@/css/marquee.css"

interface MarqueeStripProps<T> {
  items: T[];
  className?: string;
  contentClassName?: string;
  itemClassName?: string;
  ariaLabel: string;
  renderItem: (item: T, index: number) => ReactNode;
}

export function MarqueeStrip<T>({
  items,
  className,
  contentClassName,
  itemClassName,
  ariaLabel,
  renderItem,
}: MarqueeStripProps<T>) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className={cn("marquee-strip", className)} aria-label={ariaLabel}>
      <div className={cn("marquee-strip__content", contentClassName)}>
        {duplicatedItems.map((item, index) => (
          <div
            key={`marquee-item-${index}`}
            className={cn("marquee-strip__item", itemClassName)}
          >
            {renderItem(item, index % items.length)}
          </div>
        ))}
      </div>
    </div>
  );
}
