'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const accordionVariants = cva('', {
  variants: {
    variant: {
      default: 'space-y-2',
      bordered: 'space-y-2',
      flush: 'space-y-0',
    },
    size: {
      default: '',
      sm: 'text-sm',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> &
    VariantProps<typeof accordionVariants>
>(({ className, variant, size, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn(accordionVariants({ variant, size, className }))}
    {...props}
  />
));
Accordion.displayName = 'Accordion';

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
    variant?: 'default' | 'bordered' | 'flush';
  }
>(({ className, variant = 'default', ...props }, ref) => {
  const itemVariants = cva('', {
    variants: {
      variant: {
        default: 'border border-border rounded-md',
        bordered: 'border border-border rounded-md',
        flush: 'border-0',
      },
    },
  });

  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(itemVariants({ variant }), className)}
      {...props}
    />
  );
});
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    variant?: 'default' | 'bordered' | 'flush';
    size?: 'default' | 'sm' | 'lg';
  }
>(
  (
    { className, children, variant = 'default', size = 'default', ...props },
    ref
  ) => {
    const triggerVariants = cva(
      'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:bg-accent [&[data-state=open]>svg]:rotate-180',
      {
        variants: {
          variant: {
            default: 'px-6',
            bordered: 'px-6',
            flush: 'px-0',
          },
          size: {
            default: 'text-base',
            sm: 'text-sm py-3',
            lg: 'text-lg py-5',
          },
        },
        defaultVariants: {
          variant: 'default',
          size: 'default',
        },
      }
    );

    return (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          ref={ref}
          className={cn(triggerVariants({ variant, size }), className)}
          {...props}
        >
          {children}
          <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  }
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
    variant?: 'default' | 'bordered' | 'flush';
    size?: 'default' | 'sm' | 'lg';
  }
>(
  (
    { className, children, variant = 'default', size = 'default', ...props },
    ref
  ) => {
    const contentVariants = cva(
      'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      {
        variants: {
          variant: {
            default: 'px-6',
            bordered: 'px-6',
            flush: 'px-0',
          },
          size: {
            default: 'text-base',
            sm: 'text-sm',
            lg: 'text-lg',
          },
        },
        defaultVariants: {
          variant: 'default',
          size: 'default',
        },
      }
    );

    return (
      <AccordionPrimitive.Content
        ref={ref}
        className={cn(contentVariants({ variant, size }), className)}
        {...props}
      >
        <div className="py-4">{children}</div>
      </AccordionPrimitive.Content>
    );
  }
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  accordionVariants,
};
