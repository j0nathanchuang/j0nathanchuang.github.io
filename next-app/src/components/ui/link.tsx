import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { scrollToElement } from '@/lib/scroll';

const linkVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'text-primary underline-offset-4 underline hover:text-primary/80',
        muted:
          'text-muted-foreground underline-offset-4 underline hover:text-primary/80',
        destructive:
          'text-destructive underline-offset-4 underline hover:text-destructive/80',
        ghost: 'hover:text-accent-foreground',
        secondary:
          'text-secondary-foreground underline-offset-4 underline hover:text-secondary-foreground/80',
        button: '',
      },
      size: {
        default: '',
        sm: 'text-xs',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string;
  external?: boolean;
  asChild?: boolean;
}

const CustomLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      variant,
      size,
      href,
      external = false,
      asChild = false,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    // Check if it's an external link based on href or explicit external prop
    const isExternal =
      external ||
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:');

    // Check if it's a hash link for smooth scrolling
    const isHashLink = href.startsWith('#');

    const handleClick = React.useCallback(
      (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isHashLink) {
          e.preventDefault();
          const elementId = href.substring(1); // Remove the # symbol
          scrollToElement(elementId, { offset: 80 }); // Add some offset for better UX
        }
        onClick?.(e);
      },
      [href, isHashLink, onClick]
    );

    if (isExternal) {
      return (
        <a
          ref={ref}
          href={href}
          target="_blank"
          rel="noreferrer"
          className={cn(linkVariants({ variant, size, className }))}
          {...props}
        >
          {children}
        </a>
      );
    }

    if (isHashLink) {
      return (
        <a
          ref={ref}
          href={href}
          onClick={handleClick}
          className={cn(linkVariants({ variant, size, className }))}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(linkVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </Link>
    );
  }
);
CustomLink.displayName = 'CustomLink';

export { CustomLink as Link, linkVariants };
