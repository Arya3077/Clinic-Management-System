import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../supabase-client";

const Prescription = () => {
  const navigate = useNavigate();

  // Go back to doctor page
  function back() {
    navigate("/doctorpage");
  }

  // Form state
  const [formData, setFormData] = useState({
    Paitent_name: "",
    MedicationName: "",
    Purpose: "",
    Dosage: "",
    Route: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Insert data into Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.from("Prescription").insert([
      {
        Paitent_name: formData.Paitent_name,
        "Medication Name": formData.MedicationName,
        Purpose: formData.Purpose,
        Dosage: formData.Dosage,
        Route: formData.Route,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error("Error inserting prescription:", error);
      alert("❌ Failed to add prescription");
    } else {
      alert("✅ Prescription added successfully!");
      setFormData({
        Paitent_name: "",
        MedicationName: "",
        Purpose: "",
        Dosage: "",
        Route: "",
      });
    }
  };

  return (
    <>
      {/* Header Section */}
      <div className="flex justify-center items-center m-4">
        <div className="bg-[#ECD4EC] h-14 w-full max-w-5xl rounded-2xl flex justify-between items-center px-6 font-bold text-2xl text-[#39063C] shadow-lg">
          <div>PRESCRIPTIONS</div>
          <button onClick={back} className="cursor-pointer text-[#39063C]">
            Back
          </button>
        </div>
      </div>

      {/* Add Prescription Form */}
      <div className="flex justify-center mt-6">
        <div className="bg-[#ECD4EC] rounded-2xl shadow-2xl p-6 w-full max-w-md">
          <h2 className="text-2xl text-center font-bold text-[#39063C] mb-4">
            Add New Prescription
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="Paitent_name"
              placeholder="Patient Name"
              value={formData.Paitent_name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-purple-400"
            />

            <input
              type="text"
              name="MedicationName"
              placeholder="Medication Name"
              value={formData.MedicationName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-purple-400"
            />

            <input
              type="text"
              name="Purpose"
              placeholder="Purpose"
              value={formData.Purpose}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-purple-400"
            />

            <input
              type="text"
              name="Dosage"
              placeholder="Dosage"
              value={formData.Dosage}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-purple-400"
            />

            <input
              type="text"
              name="Route"
              placeholder="Route (e.g., Oral, IV)"
              value={formData.Route}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-purple-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-700 text-white py-2 rounded-lg font-semibold hover:bg-purple-800 transition"
            >
              {loading ? "Adding..." : "Add Prescription"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Prescription;
