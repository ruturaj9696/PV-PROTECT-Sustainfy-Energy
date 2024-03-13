import React from "react";

const GetAllAdmins = () => {
  // Dummy data for plant information
  const dummyPlantData = [
    {
      username: "Admin1",
      email: "Admin1@example.com",
      Mobile: 123456789,
    },
    {
      username: "Admin3",
      email: "Admin1@example.com",
      Mobile: 123456789,
    },
    {
      username: "Admin3",
      email: "Admin1@example.com",
      Mobile: 123456789,
    },
  ];

  return (
    <div className="flex justify-center items-center min-w-full">
      <div className="overflow-x-auto">
        <h2 className="text-xl font-bold mb-2 text-center">All Admin Information</h2>
        <table className="w-full bg-white shadow-md rounded my-3">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="py-2 px-6">S.No</th>
              <th className="py-2 px-6">Username</th>
              <th className="py-2 px-6">Email</th>
              <th className="py-2 px-6">Mobile</th>
            </tr>
          </thead>
          <tbody>
            {dummyPlantData.map((data, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-2 px-6">{index + 1}</td>
                <td className="py-2 px-6">{data.username}</td>
                <td className="py-2 px-6">{data.email}</td>
                <td className="py-2 px-6">{data.Mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetAllAdmins;
