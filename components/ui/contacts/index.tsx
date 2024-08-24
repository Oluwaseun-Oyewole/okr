"use client";
import ContactForm from "@/components/custom/contact";
import MotionWrapper from "@/components/custom/motion";
import { useCustomContext } from "@/hooks/useContext";
import SuccessMessage from "../success";

const Contacts = () => {
  const { status } = useCustomContext();
  return (
    <section>
      {status ? (
        <SuccessMessage />
      ) : (
        <MotionWrapper>
          <div className="container__wrapper">
            <div className="child__wrapper">
              <div className="sub__wrapper">
                <div className="grid w-full grid-flow-row items-start lg:grid-cols-[50%_50%]">
                  <div className="flex w-full flex-col justify-start font-light lg:items-end">
                    <div className="flex flex-col font-medium">
                      <h1 className="heading__text">Contact</h1>
                      <h1 className="heading__text py-1">sales</h1>
                      <p className="sub__text w-4/5">
                        {"Send us message and we'll promptly get back to you."}
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
      )}
    </section>
  );
};

export default Contacts;
