export interface NavigationItem {
  label: string;
  path: string;
}

export const navigationItems: NavigationItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Engineering", path: "/engineering" },
  { label: "Buyers", path: "/for/buyers" },
  { label: "Sellers", path: "/for/sellers" },
  { label: "Marketplace", path: "/marketplace" },
];

export const contactDetails = {
  email: "info@kaiakarbon.com",
  phone: "+91 453-4968-4546",
  address:
    "Flat No. 1204, Tower B, Sea Breeze Residency, Juhu Tara Road, Opposite JW Marriott Hotel",
};
