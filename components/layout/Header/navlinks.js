import { useRouter } from "next/router";
import Link from "next/link";

export default function NavLink({ to, children, activeClassName, ...props }) {
  const { pathname } = useRouter();
  const isActive = pathname === to;

  if (isActive) {
    props.className += ` ${activeClassName}`;
  }

  return (
    <Link href={to}>
      <a {...props}>{children}</a>
    </Link>
  );
}
export { NavLink };
