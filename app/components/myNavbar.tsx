import { Navbar, NavbarItem, NavbarSection } from "./navbar";
import { Logo } from "../../public/images/pp-script-logo.png";
import Link from "next/link";

export default function MyNavBar() {
  return (
    <Navbar>
      <Link href="/" aria-label="Home">
        
      </Link>
      <NavbarSection>
        <NavbarItem href="/" current>
          Home
        </NavbarItem>
        <NavbarItem href="/events">Events</NavbarItem>
        <NavbarItem href="/orders">Orders</NavbarItem>
      </NavbarSection>
    </Navbar>
  );
}
