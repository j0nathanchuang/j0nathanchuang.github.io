'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TypeWriter } from '@/components/ui/typewriter';
import { H1, H2, P, Small, Muted, XSmall } from '@/components/ui/typography';
import { Link } from '@/components/ui/link';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import {
  MapPin,
  GraduationCap,
  BriefcaseBusiness,
  Code,
  Bot,
  Languages,
  Medal,
  Mail,
  Linkedin,
  Github,
  Instagram,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="w-full px-16 lg:px-24 pt-12 bg-gradient-to-b from-secondary/60 to-background dark:from-secondary/50 dark:to-background">
          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-[6.5fr_3.5fr] gap-10 items-center mb-8">
            <div className="space-y-6">
              <H1 color="primary">
                <TypeWriter
                  text="Hi I'm Jonathan, nice to meet you!"
                  speed={50}
                  delay={200}
                />
              </H1>
              <Muted className="text-lg max-w-3xl">
                I help startups build, ship, and scale. Previously at
                <Link href="https://www.getmagical.com/" className="ml-1">
                  Magical
                </Link>
                , I led monetization and enterprise features, helping grow from
                a pre‑revenue Chrome extension to $2M+ ARR. Now I'm excited to
                continue my professional journey at
                <Link href="https://www.greenlight.com/" className="ml-1">
                  Greenlight
                </Link>
                .
              </Muted>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild>
                  <Link href="/#contact" variant="button">
                    Get in touch
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pt-2">
                <div className="flex items-center gap-1">
                  <BriefcaseBusiness size={14} />
                  <XSmall>Full‑stack Software Engineer at Greenlight</XSmall>
                </div>
                <div className="flex items-center gap-1">
                  <GraduationCap size={14} />
                  <XSmall>University of Michigan B.S. 2022</XSmall>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <XSmall>Chicago</XSmall>
                </div>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="aspect-[4/3] rounded-2xl flex items-center justify-center">
                <DotLottieReact
                  src="/programmer.lottie"
                  loop
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </section>

          {/* Social proof */}
          <section className="mb-8">
            <Muted color="primary" className="mb-4 text-center">
              Loved by teams at
            </Muted>
            <div className="w-full flex justify-center">
              <Image
                src="/social_proof.svg"
                alt="Social proof"
                width={2063}
                height={200}
                className="w-full max-w-4xl h-auto"
              />
            </div>
          </section>
        </div>

        <div className="container mx-auto px-16 lg:px-48 pt-8 pb-12">
          {/* About */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-10 items-start">
              <div className="space-y-4">
                <H2 color="primary">About me</H2>
                <P color="muted">
                  I'm driven by building software that makes people's lives
                  better. Outside of work you can find me on a basketball or
                  tennis court, listening to <Link href="/spotify">music</Link>,
                  or trying new recipes. I aspire to be as good of a chef as my
                  mom one day.
                </P>
                <div className="flex gap-3">
                  <Button variant="secondary" asChild>
                    <Link href="/Resume.pdf" variant="button" external>
                      View resume
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#contact" variant="button">
                      Contact
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 flex items-center justify-center">
                  <DotLottieReact
                    src="/basketball.lottie"
                    loop
                    autoplay
                    speed={0.7}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-20">
            <H2 color="primary" className="mb-6">
              Experience
            </H2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Magical</CardTitle>
                  <CardDescription>
                    Software Engineer • Aug 2022 – Jul 2025
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Led monetization, subscriptions, and enterprise features
                    across the stack.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Capital One</CardTitle>
                  <CardDescription>
                    Software Engineering Intern • Summer 2021
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Built internal tools in an agile environment; contributed to
                    beta launch.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>LeaseMagnets</CardTitle>
                  <CardDescription>
                    Software Engineering Intern • 2020–2021
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Web development across marketing analytics and customer
                    workflows.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-20">
            <div className="space-y-6">
              <H2 color="primary">Skills</H2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group flex items-center gap-3 p-4 rounded-lg border border-border/50">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Code size={18} className="text-primary" />
                  </div>
                  <span className="font-medium">
                    TypeScript, React, Next.js, SQL, Python
                  </span>
                </div>
                <div className="group flex items-center gap-3 p-4 rounded-lg border border-border/50">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Bot size={18} className="text-primary" />
                  </div>
                  <span className="font-medium">LLMs, Cursor, Devin, Dia</span>
                </div>
                <div className="group flex items-center gap-3 p-4 rounded-lg border border-border/50">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Languages size={18} className="text-primary" />
                  </div>
                  <span className="font-medium">
                    English, Mandarin, Spanish
                  </span>
                </div>
                <div className="group flex items-center gap-3 p-4 rounded-lg border border-border/50">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Medal size={18} className="text-primary" />
                  </div>
                  <span className="font-medium">
                    3-pt Specialist, Can dunk on 9'5"
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-20">
            <H2 color="primary" className="mb-6">
              Projects
            </H2>
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>
                  QuickLinks — the clipboard for your favorite links
                </CardTitle>
                <CardDescription>Chrome extension</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6 items-start">
                <div className="flex-1 text-sm text-muted-foreground">
                  Tired of opening up all your links just to copy-and-paste them
                  into job applications? Use QuickLinks to speed up your
                  workflow.
                </div>
                <Button asChild>
                  <Link
                    href="https://chrome.google.com/webstore/detail/quicklinks/pmmebpkgkcjmdacahjaomedifklninbp?utm_source=site"
                    variant="button"
                  >
                    View on Chrome Web Store
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Contact */}
          <section id="contact" className="mb-8">
            <H2 color="primary" className="mb-2">
              Contact
            </H2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div className="gap-4">
                <div className="group flex items-center gap-3 p-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <Link
                    href="mailto:jonathanchuang.dev@gmail.com"
                    variant="button"
                    className="text-primary"
                  >
                    Email me
                  </Link>
                </div>
                <div className="group flex items-center gap-3 p-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Linkedin size={18} className="text-primary" />
                  </div>
                  <Link
                    href="https://www.linkedin.com/in/j0nathanchuang"
                    variant="button"
                    className="text-primary"
                  >
                    Connect with me on LinkedIn
                  </Link>
                </div>
                <div className="group flex items-center gap-3 p-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Github size={18} className="text-primary" />
                  </div>
                  <Link
                    href="https://github.com/j0nathanchuang"
                    variant="button"
                    className="text-primary"
                  >
                    View my projects on GitHub
                  </Link>
                </div>
                <div className="group flex items-center gap-3 p-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Instagram size={18} className="text-primary" />
                  </div>
                  <Link
                    href="https://www.instagram.com/j0nathanchuang"
                    variant="button"
                    className="text-primary"
                  >
                    Follow me on Instagram
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <div className="w-64 h-64 flex items-center justify-center">
                  <DotLottieReact
                    src="/mail.lottie"
                    loop
                    autoplay
                    speed={0.8}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-3">
          <Small>
            © {new Date().getFullYear()} Jonathan Chuang. All rights reserved.
          </Small>
          <div className="flex items-center gap-3">
            <Image src="/globe.svg" alt="Globe" width={16} height={16} />
            <Small>Built with Next.js and shadcn/ui</Small>
          </div>
        </div>
      </footer>
    </div>
  );
}
