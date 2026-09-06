export interface NavigationItem {
  label: string;
  path: string;
}

export const navigationItems: NavigationItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "For Buyers", path: "/for/buyers" },
  { label: "For Sellers", path: "/for/sellers" },
  { label: "Marketplace", path: "/marketplace" },
];

export const contactDetails = {
  email: "support@kaia.com",
  phone: "+91 453-4968-4546",
  address:
    "Flat No. 1204, Tower B, Sea Breeze Residency, Juhu Tara Road, Opposite JW Marriott Hotel",
};
