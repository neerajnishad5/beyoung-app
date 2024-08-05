import React, { useState } from "react";

interface PhoneInputProps {
  onChange: (phoneNumber: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ onChange }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Ensure only numbers are entered
    value = value.replace(/\D/g, "");

    // Optionally, you can format the number as per your requirements
    // Example: Format as (XXX) XXX-XXXX
    // value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

    setPhoneNumber(value);
    onChange(value);
  };

  return (
    <div className="input-number-property" style={{ width: "100%" }}>
      <div className="flex flex-row items-center justify-center px-2">
        <span className="flex flex-row border-2 p-2 h-10">
          <img
            src="https://www.beyoung.in/mobile/images/failure/flag-1.svg "
            alt="Country Flag"
          />
          <span className="text-[#808080]">+91</span>
        </span>
        <input
          type="tel"
          id="login-numbers"
          placeholder=" "
          className="text-start px-2 h-10 border-2"
          autoComplete="off"
          maxLength={10} // Limit to 10 digits for Indian phone numbers
          value={phoneNumber}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default PhoneInput;
