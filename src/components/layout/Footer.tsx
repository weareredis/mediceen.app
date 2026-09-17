import { MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { footerNav } from "@/data/navigation";
import { DISCLAIMER, PLACEHOLDERS, SITE, DEVELOPER, DEVELOPER_URL, ADDRESS_MAP_URL } from "@/lib/constants";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { StoreBadges } from "@/components/ui/StoreBadge";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid w-full max-w-[76rem] gap-12 px-6 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_auto]">
        <div>
          <BrandLogo markClassName="h-9 w-9" wordmarkClassName="h-[1.3rem]" />
          <p className="mt-4 text-sm text-muted-foreground">{SITE.tagline}</p>
          <p className="mt-6 max-w-md text-xs leading-relaxed text-muted-foreground">
            {DISCLAIMER}
          </p>
        </div>

        {footerNav.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brand-ink">
              {group.title}
            </h2>
            <ul className="mt-4 space-y-3">
              {group.items.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    {...(item.hash ? { hash: item.hash } : {})}
                    className="text-sm text-muted-foreground transition-colors hover:text-green-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="font-display text-sm font-semibold text-brand-ink">
            Download Our App
          </h2>
          <div className="mt-4">
            <StoreBadges className="flex-col items-start" />
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-2 px-6 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="flex items-center">
            © {year} {SITE.name}
          </p>
          <p className="flex items-center gap-1.5">
          <span className="mx-1.5"> 
              <svg
              width="13"
              height="15"
              viewBox="0 0 13 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="12.8566" height="1.959" fill="#e31d3e" />
              <path
                d="M0.00012207 4.30859H10.8977C11.9796 4.30859 12.8567 5.18567 12.8567 6.2676H0.00012207V4.30859Z"
                fill="#e31d3e"
              />
              <rect
                width="12.8651"
                height="1.95771"
                transform="matrix(0.939068 0.34373 -0.340317 0.940311 0.667908 8.7373)"
                fill="#e31d3e"
                fill-opacity="0.9"
              />
              <path
                d="M0.00012207 8.61914H12.8567C12.8567 9.70107 11.9796 10.5781 10.8977 10.5781H0.00012207V8.61914Z"
                fill="#e31d3e"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.9081 8.61816H9.95306C10.482 8.60792 10.9079 8.17681 10.9081 7.64551V8.61816ZM10.9081 7.24219C10.9081 6.70453 10.4721 6.26892 9.93451 6.26855V6.26758H10.9081V7.24219Z"
                fill="#666667"
              />
              <rect x="10.9091" y="6.26855" width="1.94796" height="2.3508" fill="#e31d3e" />
            </svg> 
            </span>
            
            Powered by {" "}
            <a
              href={DEVELOPER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#e31d3e]"
            >
              {DEVELOPER.name}
            </a>
          </p>
          <p>
            <MapPin className="h-4 w-4 inline-block mr-1.5 align-middle" />
            <a
              href={ADDRESS_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-green-700"
            >
              {PLACEHOLDERS.registeredAddress}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}