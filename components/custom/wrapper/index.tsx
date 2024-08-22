import Footer from "@/components/ui/footer";
import Navigation from "@/components/ui/nav";
import { type PropsWithChildren } from "react";

const LandingPageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <Navigation />
      {children}
      <Footer />
    </main>
  );
};

export default LandingPageWrapper;
