import successImage from "@/assets/svg/Suucess Illustration.svg";
import MotionWrapper from "@/components/custom/motion";
import Image from "next/image";

const SuccessMessage = () => {
  return (
    <MotionWrapper>
      <div className="container__wrapper">
        <div className="child__wrapper">
          <div className="sub__wrapper">
            <div className="grid w-full grid-flow-row items-center gap-10 lg:grid-cols-[50%_50%]">
              <div className="flex w-full flex-col justify-start font-light lg:items-end">
                <div className="flex flex-col font-medium">
                  <h1 className="heading__text">Thank you</h1>
                  <p className="sub__text pt-5">
                    a member of our team will be in touch with you shortly
                  </p>
                </div>
              </div>
              <div className="w-full">
                <Image
                  alt="success image"
                  src={successImage}
                  className="w-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default SuccessMessage;
