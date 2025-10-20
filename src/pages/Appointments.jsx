import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../supabase-client";

function A() {
  const [doct, Setdoct] = useState("");
  const [pat, Setpat] = useState("");
  const [date, Setdate] = useState("");
  const [time, Settime] = useState("");
  const [doctors, Setdoctors] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {
    async function fetchDoctors() {
      const { data, error } = await supabase.from("Doctors").select("*");
      if (error) {
        console.error("Error fetching doctors:", error);
        alert("⚠️ Doctor data not fetched!");
      } else {
        Setdoctors(Array.isArray(data) ? data : []);
      }
    }
    fetchDoctors();
  }, []);

 
  async function handle() {
    if (!pat || !doct || !date || !time) {
      alert("⚠️ Please fill in all fields before submitting.");
      return;
    }

    const appdata = {
      paitent: pat,
      doctor: doct,
      date: date,
      time: time,
    };

    const { data, error } = await supabase
      .from("Appointments")
      .insert([appdata])
      .single();

    if (error) {
      console.error("Insert error:", error);
      alert("❌ Error booking appointment!");
    } else {
      alert("✅ Appointment booked successfully!");
      Setdoct("");
      Setpat("");
      Setdate("");
      Settime("");
    }
  }

  // 🔙 Navigate back
  function back() {
    navigate("/userpage");
  }

  return (
    <>
      {/* Header Bar */}
      <div className="flex justify-center items-center m-4">
        <div className="bg-[#ECD4EC] h-14 w-full max-w-5xl rounded-2xl flex justify-between items-center px-6 font-bold text-2xl text-[#39063C] shadow-lg">
          <div>Book Appointment</div>
          <button onClick={back} className="cursor-pointer text-[#39063C]">
            Back
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 m-10">

        {/* Left: Appointment Form */}
        <div className="bg-[#ECD4EC] rounded-2xl shadow-2xl p-10 w-full max-w-md">
          <h2 className="text-3xl text-center font-bold text-[#39063C] mb-8">
            Book Appointment
          </h2>

          <div className="flex flex-col gap-5">
            <label>Patient Name</label>
            <input
              className="h-10 rounded-2xl shadow px-4"
              type="text"
              placeholder="Enter patient name"
              value={pat}
              onChange={(e) => Setpat(e.target.value)}
            />

            <label>Select Doctor</label>
            <select
              className="h-10 rounded-2xl shadow px-4"
              value={doct}
              onChange={(e) => Setdoct(e.target.value)}
            >
              <option value="">Select Doctor</option>
              {doctors.map((d) => (
                <option key={d.id} value={d.Doctors}>
                  {d.Doctors} — {d.Department}
                </option>
              ))}
            </select>

            <label>Date</label>
            <input
              className="h-10 rounded-2xl shadow px-4"
              type="date"
              value={date}
              onChange={(e) => Setdate(e.target.value)}
            />

            <label>Time</label>
            <input
              className="h-10 rounded-2xl shadow px-4"
              type="time"
              value={time}
              onChange={(e) => Settime(e.target.value)}
            />

            <button
              onClick={handle}
              className="mt-6 bg-[#39063C] text-white py-2 rounded-2xl hover:bg-[#4f1152] transition"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Right: Doctors Table */}
        <div className="bg-[#ECD4EC] rounded-2xl shadow-2xl p-6 w-full max-w-2xl overflow-x-auto">
          <h2 className="text-3xl text-center font-bold text-[#39063C] mb-6">
            Available Doctors
          </h2>

          <table className="w-full border border-gray-300 text-center rounded-lg overflow-hidden text-black">
            <thead className="bg-purple-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Doctor</th>
                <th className="border border-gray-300 px-4 py-2">Department</th>
                <th className="border border-gray-300 px-4 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {doctors.length > 0 ? (
                doctors.map((doc) => (
                  <tr key={doc.id} className="hover:bg-purple-50">
                    <td className="border border-gray-300 px-4 py-2">
                      {doc.Doctors}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {doc.Department}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {doc.Time}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="py-4 text-gray-500">
                    No doctors available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default A;
