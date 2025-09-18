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
import { Accordion } from '@/components/ui/accordion';
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
import { ExperienceAccordionItem } from '@/components/shared';

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
                  tennis court, listening to{' '}
                  <Link href="https://open.spotify.com/user/1240388369?si=61fa566040b8426b">
                    music
                  </Link>
                  , or trying new recipes. I aspire to be as good of a chef as
                  my mom one day.
                </P>
                <div className="flex gap-3">
                  <Button variant="secondary" asChild>
                    <Link href="/resume.pdf" variant="button" external>
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
            <Accordion type="single" collapsible className="w-full">
              <ExperienceAccordionItem
                value="greenlight"
                companyName="Greenlight"
                tagline="Software Engineer • Sep 2025 – Present"
                website="https://greenlight.com"
              >
                <Link href="https://www.linkedin.com/company/greenlightcard/">
                  Greenlight
                </Link>{' '}
                is a{' '}
                <Link href="https://techcrunch.com/2021/04/27/kids-focused-fintech-greenlight-raises-260m-in-a16z-led-series-d-nearly-doubles-valuation-to-2-3b/">
                  Series D
                </Link>{' '}
                fintech startup focused on empowering parents to raise
                financially-smart kids, providing money and safety features for
                families.
                <br />
                <br />
                More to come about my role here soon!
              </ExperienceAccordionItem>
              <ExperienceAccordionItem
                value="magical"
                companyName="Magical"
                tagline="Software Engineer • Aug 2022 – Jul 2025"
                website="https://getmagical.com"
              >
                <Link href="https://www.linkedin.com/company/getmagical/">
                  Magical
                </Link>{' '}
                is a{' '}
                <Link href="https://techcrunch.com/2022/06/06/magical-nabs-35m-to-move-data-across-webpages-automatically/">
                  Series A
                </Link>{' '}
                startup that is focused on automating mundane, repetitive
                workflows. For example, imagine you are a recruiter and you want
                to input all of your candidates' LinkedIn profiles into a
                spreadsheet. You could manually do this for a few candidates,
                but for hundreds of candidates, that would take a lot of time.
                Instead, Magical can automate this process.
                <br />
                <br />
                When I first joined, we only had a pre-revenue Chrome extension
                product. I was fortunate enough to lead the monetization
                implementation – going from 0 paying customers to $2M+ in ARR
                today. In 2025, we shifted towards a new AI web application
                product, where I helped create the UI for the AI agent creation
                flow. At Magical, I got to wear many hats – from talking to
                customers to building our internal design system to creating AI
                agents. I'm so appreciative that this was my first full-time
                role – I met so many great people and learned so much.
                <br />
                <br />
                Download our Chrome Extension{' '}
                <Link href="https://www.getmagical.com/">here</Link>
              </ExperienceAccordionItem>
              <ExperienceAccordionItem
                value="capital-one"
                companyName="Capital One"
                tagline="Software Engineering Intern • May 2021 - Aug 2021"
                website="https://capitalone.com"
              >
                After working at a startup, I really wanted to work at an
                established tech company to experience the other end of the
                spectrum. I definitely got that at Capital One. I worked in an
                agile environment using a{' '}
                <Link href="https://support.atlassian.com/jira-software-cloud/docs/what-is-a-jira-software-board/">
                  Jira board
                </Link>{' '}
                for the two-week{' '}
                <Link href="https://support.atlassian.com/jira-software-cloud/docs/what-is-a-sprint/">
                  sprints
                </Link>{' '}
                along with daily{' '}
                <Link href="https://www.atlassian.com/agile/scrum/standups">
                  standups
                </Link>{' '}
                with our manager.
                <br />
                <br />
                I worked in an intern pod with 3 other interns and got to and
                work with the full-time employees every day. I even got to
                experience a beta launch of the internal credit card policy
                builder tool I was working on. Throughout my internship, I
                received numerous swag bags, snack boxes, and GrubHub gift
                cards. I also had the opportunity to interact with the CEO! Not
                many internship experiences can say that.
                <br />
                <br />
                Additionally, everyone that I ever talked to at Capital One felt
                like a genuine, friendly person that I would enjoy working with
                full-time.{' '}
                <Link href="https://www.linkedin.com/company/capital-one/">
                  Capital One
                </Link>{' '}
                truly puts its employees first and has mastered work-life
                balance in the pandemic.
              </ExperienceAccordionItem>
              <ExperienceAccordionItem
                value="leasemagnets"
                companyName="LeaseMagnets"
                tagline="Software Engineering Intern • Jun 2020 - Aug 2020 • Jan 2021 - May 2021"
                website="https://leasemagnets.com"
              >
                After my original summer internship got canceled, I,
                fortunately, found a new internship through{' '}
                <Link href="https://annarborusa.org/">Ann Arbor SPARK</Link> and
                was matched with a startup founded by 2 Michigan undergrads
                called LeaseMagnets.{' '}
                <Link href="https://www.linkedin.com/company/leasemagnets/">
                  LeaseMagnets
                </Link>{' '}
                is a startup looking to reinvent digital marketing and virtual
                leasing tools for apartments, specifically student housing,
                multi-family housing, and senior living.
                <br />
                <br />
                After enjoying the previous summer working at LeaseMagnets and
                becoming extremely tired of{' '}
                <Link href="https://www.theguardian.com/world/2020/oct/06/zoom-university-college-cost-students-in-person-experience">
                  "Zoom university"
                </Link>
                , I returned to LeaseMagnets the winter 2021 semester to
                continue my web development journey. This time around, I had a
                lot more responsibilities and a broader range of projects.
              </ExperienceAccordionItem>
            </Accordion>
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
