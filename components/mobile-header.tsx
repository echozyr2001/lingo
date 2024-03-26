import { MobileSidebar } from "@/components/mobile-sidebar";

export const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-6 h-[50px] flex items-center border-b bg-green-500 fixed top-0 w-full z-50">
      <MobileSidebar />
    </nav>
  );
};
