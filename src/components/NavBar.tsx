import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Switch
} from "@nextui-org/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";
import { navList } from "../utils/navList";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ theme, changeTheme] = useDarkMode()
  const navLinkCssClasses = ({ isActive }: { isActive: boolean }): string => {
    return `${isActive ? 'text-[#006FED] font-medium ' : ''}`
  }
  const handleMenuItemClick = () => {
    setIsMenuOpen(false)
  };
  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          
        />
        <NavbarBrand className="text-[14px] md:text-[16px] lg:text-[20px] font-bold uppercase">
        Rick and Morty
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
          navList.map(element => (
            <NavbarItem key={element.id} className="text-[18px]">
              <NavLink to={element.path} className={navLinkCssClasses}>
                {element.label}
              </NavLink>
            </NavbarItem>
          ))
        }
      </NavbarContent>
      <NavbarContent justify="end">
        <Switch
          defaultSelected ={theme === "light"}
          size="lg"
          color="primary"
          startContent={<SunIcon />}
          endContent={<MoonIcon />}
          onValueChange={changeTheme}
      />
      </NavbarContent>
      <NavbarMenu>
        {navList.map((item) => (
          <NavbarMenuItem key={`${item.id}`}>
            <NavLink to={item.path} className={navLinkCssClasses} onClick={handleMenuItemClick}>
                {item.label}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}