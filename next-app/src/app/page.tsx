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
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="w-full px-16 lg:px-24 pt-12 bg-gradient-to-b from-secondary/60 to-background dark:from-secondary/50 dark:to-background">
          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-[6.5fr_3.5fr] gap-10 items-center mb-8">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
                Full‑stack Software Engineer at Greenlight
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                <TypeWriter
                  text="Hi I'm Jonathan, nice to meet you!"
                  speed={50}
                  delay={200}
                />
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                I help startups build, ship, and scale. Previously at
                <a
                  href="https://www.getmagical.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 ml-1"
                >
                  Magical
                </a>
                , I led monetization and enterprise features, helping grow from
                a pre‑revenue Chrome extension to $2M+ ARR. Now I'm excited to
                continue my professional journey at
                <a
                  href="https://www.greenlight.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 ml-1"
                >
                  Greenlight
                </a>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild>
                  <a href="mailto:jonathanchuang.dev@gmail.com">Get in touch</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#services">Browse services</a>
                </Button>
              </div>
              <div className="text-xs text-muted-foreground pt-2">
                University of Michigan B.S. 2022 • Based in Chicago
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
            <p className="text-sm text-muted-foreground mb-4 text-center text-primary">
              Loved by teams at
            </p>
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
                <h2 className="text-3xl font-semibold text-primary">
                  About me
                </h2>
                <p className="text-muted-foreground">
                  I'm driven by building software that makes people's lives
                  better. Outside of work you can find me on a basketball or
                  tennis court, listening to{' '}
                  <a href="/spotify" className="underline underline-offset-4">
                    music
                  </a>
                  , or trying new recipes. I aspire to be as good of a chef as
                  my mom one day.
                </p>
                <div className="flex gap-3">
                  <Button variant="secondary" asChild>
                    <a
                      href="https://jonathanchuang.me/Resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View resume
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#contact">Contact</a>
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
            <h2 className="text-3xl font-semibold mb-6 text-primary">
              Experience
            </h2>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-primary">Skills</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <li className="rounded-md border bg-muted/40 p-4">
                    TypeScript, React, Next.js, SQL, Python
                  </li>
                  <li className="rounded-md border bg-muted/40 p-4">
                    LLMs, Cursor, Devin, Dia
                  </li>
                  <li className="rounded-md border bg-muted/40 p-4">
                    English, Mandarin, Spanish
                  </li>
                  <li className="rounded-md border bg-muted/40 p-4">
                    3-pt Specialist, Can dunk on 9'5"
                  </li>
                </ul>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <li className="rounded-md border bg-muted/40 p-4">
                  TypeScript, React, Next.js, SQL, Python
                </li>
                <li className="rounded-md border bg-muted/40 p-4">
                  AWS, Railway, Stigg, Stripe, WorkOS
                </li>
                <li className="rounded-md border bg-muted/40 p-4">
                  LLMs, Cursor, Postman, Devin
                </li>
                <li className="rounded-md border bg-muted/40 p-4">
                  English, Mandarin, Spanish
                </li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-6 text-primary">
              Projects
            </h2>
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
                  <a
                    href="https://chrome.google.com/webstore/detail/quicklinks/pmmebpkgkcjmdacahjaomedifklninbp?utm_source=site"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Chrome Web Store
                  </a>
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Contact */}
          <section id="contact" className="mb-8">
            <div className="rounded-xl border bg-muted/40 p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">
                    Let’s build something great
                  </h3>
                  <p className="text-muted-foreground">
                    Email is best. I read everything.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" asChild>
                    <a href="mailto:jonathanchuang.dev@gmail.com">Email me</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a
                      href="https://www.linkedin.com/in/j0nathanchuang/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="secondary" size="lg" asChild>
                    <a
                      href="https://github.com/j0nathanchuang"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Jonathan Chuang. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <Image src="/globe.svg" alt="Globe" width={16} height={16} />
            <span>Built with Next.js and shadcn/ui</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
