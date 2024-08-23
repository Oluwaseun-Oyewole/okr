import ContactForm from "@/components/custom/contact";
import MotionWrapper from "@/components/custom/motion";

const Contacts = () => {
  return (
    <section className="">
      <MotionWrapper>
        <div className="container__wrapper">
          <div className="child__wrapper">
            <div className="sub__wrapper">
              <div className="grid w-full grid-flow-row items-start gap-8 lg:grid-cols-[50%_50%]">
                <div className="flex w-full flex-col items-end justify-start font-light">
                  <div className="flex flex-col font-medium">
                    <h1 className="heading__text">Contact</h1>
                    <h1 className="heading__text py-1">sales</h1>
                    <p className="sub__text md:pr-16">
                      {"Send us message and we'll promptly get back to you"}
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionWrapper>
    </section>
  );
};

export default Contacts;
