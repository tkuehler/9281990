import Link from "next/link";

type Props = {
  href?: string;
  variant?: "primary" | "secondary";
  block?: boolean;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export function Button({ href, variant = "primary", block, children, className = "", ...rest }: Props) {
  const cls = `btn btn-${variant} ${block ? "btn-block" : ""} ${className}`;
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button className={cls} {...rest}>{children}</button>;
}
