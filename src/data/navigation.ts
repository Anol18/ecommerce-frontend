import { NavItem } from "@/types";

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "All Products", href: "/products" },
  { label: "All Brands", href: "/brands" },
  { label: "Blogs", href: "/blogs" },
];

export const FOOTER_SECTIONS = [
  {
    title: "About Toy House",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Stores & Outlets", href: "/stores" },
      { label: "Authenticity Guarantee", href: "/guarantee" },
      { label: "Careers", href: "/careers" },
      { label: "Privacy Policy", href: "/privacy" },
    ]
  },
  {
    title: "Customer Service",
    links: [
      { label: "Track Your Order", href: "/track-order" },
      { label: "Shipping & Delivery", href: "/shipping" },
      { label: "Return & Refund Policy", href: "/returns" },
      { label: "FAQ & Help Center", href: "/faq" },
      { label: "Terms & Conditions", href: "/terms" },
    ]
  },
  {
    title: "Popular Categories",
    links: [
      { label: "Electric Cars & Bikes", href: "/category/ride-on-vehicle-toys" },
      { label: "Baby Strollers & High Chairs", href: "/category/mother-baby-essentials" },
      { label: "Pretend Play & Kitchen Sets", href: "/category/pretend-role-play" },
      { label: "STEM & Montessori Toys", href: "/category/educational-learning-toys" },
      { label: "Flash Mega Deals", href: "/deals" },
    ]
  }
];

export const STORE_INFO = {
  name: "Toy House",
  tagline: "Spreading Joy, Inspiring Imagination",
  phone: "+880 1800-TOYHOUSE",
  email: "support@toyhouseltd.com",
  address: "House 42, Road 11, Banani, Dhaka - 1213, Bangladesh",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    whatsapp: "https://whatsapp.com"
  }
};
