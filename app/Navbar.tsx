"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <div>
      <nav className="flex space-x-6  border-b border-b-gray-300 mb-5 px-5 h-14 items-center">
        <Link href={"/"}>
          <AiFillBug />
        </Link>
        <ul className="flex space-x-6">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                className={classnames({
                  "text-zinc-950": link.href === currentPath,
                  "text-zinc-500": link.href !== currentPath,
                  "hover:text-zinc-800 transition-colors": true,
                })}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
