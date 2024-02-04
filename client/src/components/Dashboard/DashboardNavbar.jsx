import {
  Dropdown,
  Navbar,
  DropdownMenu,
  DropdownItem,
  NavbarContent,
  NavbarItem,
  DropdownTrigger,
  Avatar,
  image
} from "@nextui-org/react";
import React, { useContext } from "react";
import ToggleTheme from "../ToggleTheme";
import talentTrailContext from "../Context/context";
import Logout from "../Logout";

function DashboardNavbar() {

    const user = JSON.parse(localStorage.getItem("user"))
    const {name, email, imageURL} = user

  return (
    <Navbar>
      <NavbarContent as="div" className="items-center" justify="end">
        <NavbarItem><ToggleTheme/></NavbarItem>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name={name}
              size="sm"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">{name}</p>
              <p className="font-semibold">{email}</p>
            </DropdownItem>
            {/* <DropdownItem key="logout" color="danger"> */}
            <DropdownItem>
              <Logout />
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

export default DashboardNavbar