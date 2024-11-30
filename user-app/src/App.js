// src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/userSlice";
import UserDetails from "./components/UserDetails";
import Search from "./components/Search";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  // Get the list of users from Redux store
  const { users, status, error } = useSelector((state) => state.user);

  useEffect(() => {
    // Fetch all users when component mounts
    dispatch(fetchUsers());
  }, [dispatch]);

  // Handle search input change
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  // Filter users based on search query (name or email)
  const filteredUsers = users.filter((user) => {
    const lowerQuery = searchQuery.toLowerCase();
    return (
      user.name.toLowerCase().includes(lowerQuery) ||
      user.email.toLowerCase().includes(lowerQuery)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl text-center font-bold mb-6 text-blue-600">
        Fetch User Details
      </h1>

      {/* Search bar */}
      <Search searchQuery={searchQuery} onSearchChange={handleSearchChange} />

      {/* Loading, Error, or User List */}
      {status === "loading" && (
        <div className="text-center text-lg">Loading...</div>
      )}
      {status === "failed" && (
        <div className="text-center text-lg text-red-500">{error}</div>
      )}

      {/* Display the filtered list of users in 3 or 4 columns per row */}
      <div className=" font-bold text-blue-700 text-2xl mb-6">User Details</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserDetails key={user.id} user={user} />)
        ) : (
          <div className="text-center text-lg">
            No user found or matching search criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
