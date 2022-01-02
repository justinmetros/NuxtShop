interface NavLink {
  label: string;
  path: string;
}

export const navLinks: NavLink[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Products",
    path: "/collections/all",
  },
  {
    label: "About",
    path: "/about",
  },
];
