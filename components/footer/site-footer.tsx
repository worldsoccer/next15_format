import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className='container py-10 md:py-0 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
        <p className='text-center text-sm leading-loose md:text-left'>
          Built by {""}
          <Link
            href={siteConfig.links.builtBy}
            target='_blank'
            rel='noreferrer'
            className='font-medium underline underline-offset-4'
          >
            {siteConfig.builtBy}.
          </Link>
          . Hosted on {""}
          <Link
            className='font-medium underline underline-offset-4'
            href={siteConfig.links.hosted}
            target='_blank'
            rel='noreferrer'
          >
            {siteConfig.hosted}.
          </Link>
        </p>
      </div>
    </footer>
  );
}
