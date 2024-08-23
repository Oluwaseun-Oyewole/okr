import MotionWrapper from "@/components/custom/motion";
import LandingPageWrapper from "@/components/custom/wrapper";

const Docs = () => {
  return (
    <LandingPageWrapper>
      <section className="container__wrapper">
        <div className="child__wrapper">
          <div className="sub__wrapper">
            <MotionWrapper>Docs Page</MotionWrapper>
          </div>
        </div>
      </section>
    </LandingPageWrapper>
  );
};

export default Docs;
