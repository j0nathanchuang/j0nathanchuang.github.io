import { Small, XSmall } from '@/components/ui/typography';
import { Link } from '@/components/ui/link';
import Image from 'next/image';
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  Heart,
  FileUser,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-secondary/10">
      <div className="container mx-auto p-12">
        {/* Social Links */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            <Link
              href="mailto:jonathanchuang.dev@gmail.com"
              className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
              title="Email me"
            >
              <Mail size={20} className="text-primary" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/j0nathanchuang"
              className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
              title="Connect on LinkedIn"
            >
              <Linkedin size={20} className="text-primary" />
            </Link>
            <Link
              href="https://github.com/j0nathanchuang"
              className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
              title="View my GitHub"
            >
              <Github size={20} className="text-primary" />
            </Link>
            <Link
              href="https://www.instagram.com/j0nathanchuang"
              className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
              title="Follow on Instagram"
            >
              <Instagram size={20} className="text-primary" />
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
              title="View Resume"
            >
              <FileUser size={20} className="text-primary" />
            </Link>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <XSmall>
              © {new Date().getFullYear()} Jonathan Chuang. All rights reserved.
              Made with
            </XSmall>
            <Heart size={14} className="text-red-500 fill-current" />
            <XSmall>.</XSmall>
          </div>
        </div>
      </div>
    </footer>
  );
}
