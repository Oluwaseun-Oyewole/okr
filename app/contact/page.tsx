import LandingPageWrapper from "@/components/custom/wrapper";
import Contacts from "@/components/ui/contacts";
import HelpfulResources from "@/components/ui/resources";

export default function Home() {
  return (
    <LandingPageWrapper>
      <Contacts />
      <HelpfulResources />
    </LandingPageWrapper>
  );
}
