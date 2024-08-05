"use client";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import Image from "next/image";
import PhoneInput from "./phone-number-input";

const LoginModal = ({ buttonName }) => {
  const [visible, setVisible] = useState(false);

  const hideDialog = () => {
    setVisible(false);
  };
  const handlePhoneChange = (phoneNumber: string) => {
    console.log("Phone number changed:", phoneNumber);
    // You can perform further validation or state management here
  };
  return (
    <div className="card flex justify-content-center">
      <Button
        label={buttonName}
        // icon="pi pi-user"
        onClick={() => setVisible(true)}
      />
      <Dialog
        visible={visible}
        modal
        onHide={hideDialog}
        className="p-fluid"
        // header="Login"
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          width: "23.75rem",
          minHeight: '450px'
        }}
      >
        <div className="flex flex-col">
          <Image
            src="https://www.beyoung.in/images/login-and-signup-image.jpg"
            width={500}
            height={500}
            alt="Login Illustration"
            style={{
              borderRadius: "12px 12px 0 0",
            }}
          />
          <p
            className="font-semibold px-8 pt-2"
            style={{
              fontSize: "20px",
            }}
          >
            Login <span className="font-normal">or</span> SignUp
          </p>
          <p className="mb-3 text-xs px-8">Get Exciting Offers & Track Order</p>
          <div className="inline-flex flex-column gap-2 mb-3 h-10">
            <PhoneInput onChange={handlePhoneChange} />{" "}
          </div>

          <div className="flex flex-col align-items-center gap-2">
            <Button
              label="Login with OTP"
              onClick={hideDialog}
              text
              className="border-2 h-10 rounded-md"
              style={{
                backgroundColor: "#51cccc",
                color: "#FFFFF",
                fontWeight: "bold",
              }}
            />
            <Button
              label="Continue as Guest"
              onClick={hideDialog}
              text
              className="mb-16 h-8"
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default LoginModal;
