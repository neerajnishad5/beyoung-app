"use client";
import Link from "next/link";
import Image from "next/image";
import { LuShieldCheck } from "react-icons/lu";
import beyoung from "../../../../public/icons/beyoung.svg";
const CheckoutHeader = () => {
  return (
    <div className="flex justify-around p-2">
      <div className="beyoung-logo flex justify-center items-center">
        <Link href="/">
          <Image src={beyoung} alt="be-young logo" width={100} height={50} />
        </Link>
      </div>
      <div
        style={{
          width: "25%",
        }}
        className="secure-payment flex justify-center items-center bg-[#F8F8F8] p-2"
      >
        <LuShieldCheck color="green" size={32} />
        <p className="font-semibold">100% SECURE PAYMENT</p>
      </div>
    </div>
  );
};

export default CheckoutHeader;