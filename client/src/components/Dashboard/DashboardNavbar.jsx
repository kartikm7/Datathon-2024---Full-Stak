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
  import { JanDrishtiContext } from "../../context/Context";
  import Logout from "../Logout";
  
  function DashboardNavbar() {
  
      const {userDetails} = useContext(JanDrishtiContext)
      const {name, email, imageURL} = userDetails
  
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
                src={imageURL}
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