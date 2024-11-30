// src/components/UserDetails.js
import React from "react";

const UserDetails = ({ user }) => {
  return (
    <div className="max-w-full sm:max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mb-6 ">
      <div className="space-y-1 ">
        <p className="text-gray-700">
          <span className="font-semibold">Name:</span> {user.name}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Phone:</span> {user.phone}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Company:</span> {user.company.name}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
