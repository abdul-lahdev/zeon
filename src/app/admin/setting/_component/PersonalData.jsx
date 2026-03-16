"use client";

import React, { useRef, useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ProfileSettings = () => {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(null);

  const handleChangeClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // sirf image allow karo
    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file.");
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);
  };

  const handleDelete = () => {
    if (profileImage) {
      URL.revokeObjectURL(profileImage);
    }
    setProfileImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  useEffect(() => {
    return () => {
      if (profileImage) {
        URL.revokeObjectURL(profileImage);
      }
    };
  }, [profileImage]);

  return (
    <div className="pt-4">
      {/* Upload Logo Section */}
      <div className="mb-8">
        <h3 className="text-[18px] font-medium mb-4 text-[#333]">
          Upload Logo
        </h3>

        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-[12px] overflow-hidden border bg-[#F4F4F5] flex items-center justify-center">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-[12px] text-[#71717A]">No Image</span>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              type="button"
              onClick={handleChangeClick}
              className="bg-[#1DA1F2] hover:bg-[#1a91da] text-white rounded-[10px] px-6 h-11"
            >
              Change
            </Button>

            <Button
              type="button"
              variant="secondary"
              onClick={handleDelete}
              className="bg-[#F4F4F5] text-[#71717A] hover:bg-gray-200 rounded-[10px] px-6 h-11"
            >
              Delete
            </Button>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </div>

      {/* General Details Section */}
      <div>
        <h3 className="text-[20px] font-medium mb-6 text-[#3F434D]">
          General Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Username */}
          <div className="space-y-1">
            <Label
              htmlFor="username"
              className="text-[16px] font-normal text-(--dark2)"
            >
              Username
            </Label>
            <Input
              id="username"
              name="username"
              placeholder="Marco Carlos"
              className="h-13 rounded-[12px] border border-(--grey4) focus:ring-0"
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <Label
              htmlFor="billingEmail"
              className="text-[16px] font-normal text-(--dark2)"
            >
              Email
            </Label>
            <Input
              id="billingEmail"
              name="billingEmail"
              type="email"
              placeholder="Johnnyion799@gmail.com"
              className="h-13 rounded-[12px] border border-(--grey4) bg-[#F8F8F8]"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-1">
            <Label
              htmlFor="phoneNumber"
              className="text-[16px] font-normal text-(--dark2)"
            >
              Phone Number
            </Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              placeholder="0300 1234567"
              className="h-13 rounded-[12px] border border-(--grey4)"
            />
          </div>

          {/* Address */}
          <div className="space-y-1">
            <Label
              htmlFor="address"
              className="text-[16px] font-normal text-(--dark2)"
            >
              Address
            </Label>
            <Input
              id="address"
              name="address"
              placeholder="1022 Garden, GD Web Road"
              className="h-13 rounded-[12px] border border-(--grey4)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
