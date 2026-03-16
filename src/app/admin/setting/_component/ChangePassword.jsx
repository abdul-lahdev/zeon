"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = ({ id, name, label, placeholder }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-1">
      <Label htmlFor={id} className="text-[16px] font-normal text-(--dark2)">
        {label}
      </Label>

      <div className="relative">
        <Input
          id={id}
          name={name}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          className="h-13 rounded-[12px] border border-(--grey4) pr-12"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-(--dark2) cursor-pointer"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
};

const ChangePassword = () => {
  return (
    <div>
      <h3 className="text-[20px] font-medium mb-6 text-[#3F434D]">
        Change Password
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-1">
          <PasswordInput
            id="currentPassword"
            name="currentPassword"
            label="Current Password"
            placeholder="CUST-REF-1022"
          />
        </div>

        <div className="hidden md:block" />

        <div>
          <PasswordInput
            id="newPassword"
            name="newPassword"
            label="New Password"
            placeholder="CUST-REF-1022"
          />
        </div>

        <div>
          <PasswordInput
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="CUST-REF-1022"
          />
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
