'use client';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { H4, Small, P } from '@/components/ui/typography';
import { Link } from '@/components/ui/link';

interface ExperienceAccordionItemProps {
  value: string;
  companyName: string;
  tagline: string;
  website: string;
  children: React.ReactNode;
}

export default function ExperienceAccordionItem({
  value,
  companyName,
  tagline,
  website,
  children,
}: ExperienceAccordionItemProps) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="text-left">
        <div className="flex flex-col items-start">
          <H4 className="font-semibold" color="primary">
            {companyName}
          </H4>
          <Small color="muted">{tagline}</Small>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-4">
          <P color="muted">
            <span style={{ fontWeight: 'bold' }}>Website:</span>{' '}
            <Link href={website}>{website}</Link>
          </P>
          <P color="muted">{children}</P>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
