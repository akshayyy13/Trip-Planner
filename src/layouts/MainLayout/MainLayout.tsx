import type { ReactNode } from "react";

import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";

import "./MainLayout.css";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="layout">
      <Navbar />

      <main className="layout__main">{children}</main>

      <Footer />
    </div>
  );
}

export default MainLayout;
