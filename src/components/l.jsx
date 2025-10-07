import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const RoleSelect = () => {
  const [role, setRole] = useState("");
  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const user = auth.currentUser;
    if (!user || !role) return;

    await setDoc(doc(db, "users", user.uid), { role }, { merge: true });

    navigate(`/${role}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h2 className="text-xl font-bold">Select Your Role</h2>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="p-2 border rounded-md"
      >
        <option value="">-- Choose Role --</option>
        <option value="user">User</option>
        <option value="doctor">Doctor</option>
        <option value="admin">Admin</option>
      </select>
      <button
        onClick={handleSubmit}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg"
      >
        Continue
      </button>
    </div>
  );
};

export default RoleSelect;
