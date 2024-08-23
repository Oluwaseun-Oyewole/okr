import MotionWrapper from "@/components/custom/motion";
import LandingPageWrapper from "@/components/custom/wrapper";

const Customers = () => {
  return (
    <LandingPageWrapper>
      <section className="container__wrapper">
        <div className="child__wrapper">
          <div className="sub__wrapper">
            <MotionWrapper>Customers Page</MotionWrapper>
          </div>
        </div>
      </section>
    </LandingPageWrapper>
  );
};

export default Customers;
