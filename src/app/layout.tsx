import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { MobileBottomNav } from "@/components/layout/MobileNav/MobileBottomNav";
import { FloatingChat } from "@/components/layout/FloatingChat";
import { QuickViewModal } from "@/components/common/QuickViewModal";
import { CartDrawer } from "@/components/common/CartDrawer";
import { ToastNotification } from "@/components/common/ToastNotification";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Toy House - Premium Kids Toys, Ride-On Cars & Baby Essentials",
  description:
    "Discover the finest collection of electric ride-on cars, baby strollers, Montessori educational toys, and maternal essentials with super fast delivery in Bangladesh.",
  keywords: [
    "Toy House",
    "Kids Toys",
    "Electric Cars for Kids",
    "Baby Strollers",
    "Baby Formula",
    "Educational Toys",
    "Montessori Toys",
    "Ride-on Bike",
    "Bangladesh Online Toy Store",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body className="min-h-screen flex flex-col bg-[#FAFAFA] font-sans antialiased text-gray-900 selection:bg-[#FF5B00] selection:text-white">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileBottomNav />
          <FloatingChat />
          <QuickViewModal />
          <CartDrawer />
          <ToastNotification />
        </CartProvider>
      </body>
    </html>
  );
}
