import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { Gem } from "lucide-react";
export default function Navbarr() {
  return (
    <Navbar maxWidth="full" class="justify-start w-full">
      <NavbarBrand >
        <Button startContent={<Gem/>} variant="shadow" color="secondary" size="sm"></Button>
        <h1 class="text-3xl m-2">  TalentTrail</h1>
        
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link color="secondary" href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="secondary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
