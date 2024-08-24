"use client";
import Button from "@/components/custom/button";
import MotionWrapper from "@/components/custom/motion";
import LandingPageWrapper from "@/components/custom/wrapper";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { back } = useRouter();
  return (
    <div>
      {" "}
      <LandingPageWrapper>
        <section className="container__wrapper">
          <div className="child__wrapper">
            <div className="sub__wrapper">
              <MotionWrapper>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-2xl font-extrabold">404 Page</h1>
                  <div className="relative z-10 mt-10 flex items-center justify-center">
                    <Button onClick={back} type="submit" buttonType="secondary">
                      Go back
                    </Button>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>
      </LandingPageWrapper>
    </div>
  );
};

export default NotFoundPage;
