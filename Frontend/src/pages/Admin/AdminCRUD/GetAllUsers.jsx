import React from "react";

const GetAllUsers = () => {
  // Dummy data for plant information
  const dummyPlantData = [
    {
      username: "user1",
      email: "user1@example.com",
      plantInformation: "Plant A",
      address: "123 Main St, City A",
    },
    {
      username: "user2",
      email: "user2@example.com",
      plantInformation: "Plant B",
      address: "456 Elm St, City B",
    },
    {
      username: "user3",
      email: "user3@example.com",
      plantInformation: "Plant C",
      address: "789 Oak St, City C",
    },
  ];

  return (
    <div className="flex justify-center items-center min-w-full">
      <div className="overflow-x-auto">
        <h2 className="text-xl font-bold mb-2 text-center">All User Information</h2>
        <table className="w-full bg-white shadow-md rounded my-3">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="py-2 px-6">S.No</th>
              <th className="py-2 px-6">Username</th>
              <th className="py-2 px-6">Email</th>
              <th className="py-2 px-6">Plant Information</th>
              <th className="py-2 px-6">Address</th>
            </tr>
          </thead>
          <tbody>
            {dummyPlantData.map((data, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-2 px-6">{index + 1}</td>
                <td className="py-2 px-6">{data.username}</td>
                <td className="py-2 px-6">{data.email}</td>
                <td className="py-2 px-6">{data.plantInformation}</td>
                <td className="py-2 px-6">{data.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetAllUsers;
