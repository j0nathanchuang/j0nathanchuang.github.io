'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-bold lg:text-5xl',
      h2: 'scroll-m-20 text-3xl font-semibold',
      h3: 'scroll-m-20 text-2xl font-semibold',
      h4: 'scroll-m-20 text-xl font-semibold',
      h5: 'scroll-m-20 text-lg font-semibold',
      h6: 'scroll-m-20 text-base font-semibold',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      xsmall: 'text-xs text-muted-foreground',
      muted: 'text-sm text-muted-foreground',
      blockquote: 'mt-6 border-l-2 pl-6 italic',
      code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      kbd: 'pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100',
      list: 'my-6 ml-6 list-disc [&>li]:mt-2',
      'list-ordered': 'my-6 ml-6 list-decimal [&>li]:mt-2',
    },
    color: {
      default: 'text-foreground',
      primary: 'text-primary',
      secondary: 'text-secondary-foreground',
      muted: 'text-muted-foreground',
      destructive: 'text-destructive',
    },
  },
  defaultVariants: {
    variant: 'p',
    color: 'default',
  },
});

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof typographyVariants> {
  as?: keyof React.JSX.IntrinsicElements;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, color, as, ...props }, ref) => {
    // Determine the default element based on variant
    const getDefaultElement = (
      variant: string
    ): keyof React.JSX.IntrinsicElements => {
      switch (variant) {
        case 'h1':
          return 'h1';
        case 'h2':
          return 'h2';
        case 'h3':
          return 'h3';
        case 'h4':
          return 'h4';
        case 'h5':
          return 'h5';
        case 'h6':
          return 'h6';
        case 'blockquote':
          return 'blockquote';
        case 'code':
          return 'code';
        case 'kbd':
          return 'kbd';
        case 'list':
          return 'ul';
        case 'list-ordered':
          return 'ol';
        default:
          return 'p';
      }
    };

    const Element = as || getDefaultElement(variant || 'p');

    return React.createElement(Element as React.ElementType, {
      className: cn(typographyVariants({ variant, color, className })),
      ref,
      ...props,
    });
  }
);
Typography.displayName = 'Typography';

// Convenience components for common use cases
const H1 = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, 'variant'>
>(({ className, ...props }, ref) => (
  <Typography ref={ref} variant="h1" className={className} {...props} />
));
H1.displayName = 'H1';

const H2 = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, 'variant'>
>(({ className, ...props }, ref) => (
  <Typography ref={ref} variant="h2" className={className} {...props} />
));
H2.displayName = 'H2';

const H3 = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, 'variant'>
>(({ className, ...props }, ref) => (
  <Typography ref={ref} variant="h3" className={className} {...props} />
));
H3.displayName = 'H3';

const H4 = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, 'variant'>
>(({ className, ...props }, ref) => (
  <Typography ref={ref} variant="h4" className={className} {...props} />
));
H4.displayName = 'H4';

const P = React.forwardRef<
  HTMLParagraphElement,
  Omit<TypographyProps, 'variant'>
>(({ className, ...props }, ref) => (
  <Typography ref={ref} variant="p" className={className} {...props} />
));
P.displayName = 'P';

const Lead = React.forwardRef<
  HTMLParagraphElement,
  Omit<TypographyProps, 'variant'>
>(({ className, ...props }, ref) => (
  <Typography ref={ref} variant="lead" className={className} {...props} />
));
Lead.displayName = 'Lead';

const Large = React.forwardRef<
  HTMLDivElement,
  Omit<TypographyProps, 'variant'>
>(({ className, ...props }, ref) => (
  <Typography ref={ref} variant="large" className={className} {...props} />
));
Large.displayName = 'Large';

const Small = React.forwardRef<HTMLElement, Omit<TypographyProps, 'variant'>>(
  ({ className, ...props }, ref) => (
    <Typography ref={ref} variant="small" className={className} {...props} />
  )
);
Small.displayName = 'Small';

const XSmall = React.forwardRef<HTMLElement, Omit<TypographyProps, 'variant'>>(
  ({ className, ...props }, ref) => (
    <Typography ref={ref} variant="xsmall" className={className} {...props} />
  )
);
XSmall.displayName = 'XSmall';

const Muted = React.forwardRef<
  HTMLParagraphElement,
  Omit<TypographyProps, 'variant'>
>(({ className, ...props }, ref) => (
  <Typography ref={ref} variant="muted" className={className} {...props} />
));
Muted.displayName = 'Muted';

const Blockquote = React.forwardRef<
  HTMLQuoteElement,
  Omit<TypographyProps, 'variant'>
>(({ className, ...props }, ref) => (
  <Typography ref={ref} variant="blockquote" className={className} {...props} />
));
Blockquote.displayName = 'Blockquote';

const Code = React.forwardRef<HTMLElement, Omit<TypographyProps, 'variant'>>(
  ({ className, ...props }, ref) => (
    <Typography ref={ref} variant="code" className={className} {...props} />
  )
);
Code.displayName = 'Code';

const Kbd = React.forwardRef<HTMLElement, Omit<TypographyProps, 'variant'>>(
  ({ className, ...props }, ref) => (
    <Typography ref={ref} variant="kbd" className={className} {...props} />
  )
);
Kbd.displayName = 'Kbd';

const List = React.forwardRef<
  HTMLUListElement,
  Omit<TypographyProps, 'variant'>
>(({ className, ...props }, ref) => (
  <Typography ref={ref} variant="list" className={className} {...props} />
));
List.displayName = 'List';

const ListOrdered = React.forwardRef<
  HTMLOListElement,
  Omit<TypographyProps, 'variant'>
>(({ className, ...props }, ref) => (
  <Typography
    ref={ref}
    variant="list-ordered"
    className={className}
    {...props}
  />
));
ListOrdered.displayName = 'ListOrdered';

export {
  Typography,
  H1,
  H2,
  H3,
  H4,
  P,
  Lead,
  Large,
  Small,
  XSmall,
  Muted,
  Blockquote,
  Code,
  Kbd,
  List,
  ListOrdered,
  typographyVariants,
};
