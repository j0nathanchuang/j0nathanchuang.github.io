import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center space-y-6 mb-12">
          <Image
            className="mx-auto"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-4xl font-bold tracking-tight text-blue-600 bg-gray-100 p-4 rounded-lg">
            Welcome to Shadcn/ui
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your Next.js app is now configured with Shadcn/ui components. Start
            building beautiful, accessible interfaces with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Modern Design</CardTitle>
              <CardDescription>
                Beautiful, accessible components built with Radix UI and
                Tailwind CSS
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Every component is carefully crafted with attention to detail
                and accessibility.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mobile First</CardTitle>
              <CardDescription>
                Responsive design that works perfectly on all devices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Built with mobile-first principles and responsive utilities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Customizable</CardTitle>
              <CardDescription>
                Easy to customize with CSS variables and Tailwind classes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Modify colors, spacing, and styles to match your brand.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
          <Button variant="secondary" size="lg">
            View Components
          </Button>
        </div>
      </main>

      <footer className="border-t bg-muted/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Built with Next.js and Shadcn/ui
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                <Image
                  aria-hidden
                  src="/file.svg"
                  alt="File icon"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                Learn
              </Button>
              <Button variant="ghost" size="sm">
                <Image
                  aria-hidden
                  src="/window.svg"
                  alt="Window icon"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                Examples
              </Button>
              <Button variant="ghost" size="sm">
                <Image
                  aria-hidden
                  src="/globe.svg"
                  alt="Globe icon"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                Next.js →
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
