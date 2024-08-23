"use client";
import Button from "@/components/custom/button";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { back } = useRouter();
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#121212] text-white">
      <h1 className="text-2xl font-extrabold">404 Page</h1>
      <div className="relative z-10 mt-10 flex items-center justify-center">
        <Button onClick={back} type="submit" buttonType="secondary">
          Go back
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
