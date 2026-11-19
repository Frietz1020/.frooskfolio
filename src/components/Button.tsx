import type { ReactNode } from "react";

const base = "btn-tap min-h-[44px] inline-flex items-center justify-center gap-2 font-headline-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary";
const variants = {
  primary: "h-11 px-space-md text-sm rounded-xl bg-secondary text-on-secondary hover:bg-secondary-container hover:text-on-secondary-container",
  neutral: "h-11 px-space-md text-sm rounded-xl bg-surface-container-low text-on-surface border border-outline-variant hover:bg-surface-container",
  text: "px-2 text-sm rounded-lg text-secondary hover:text-secondary-strong",
};
type Props = { variant?: keyof typeof variants; href?: string; onClick?: () => void; className?: string; children: ReactNode; "aria-label"?: string };

export function Button({ variant = "primary", href, onClick, className = "", children, ...rest }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return <button type="button" onClick={onClick} className={cls} {...rest}>{children}</button>;
}
