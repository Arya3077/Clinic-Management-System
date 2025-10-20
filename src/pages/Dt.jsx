import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import supabase from '../../supabase-client';

const Dt = () => {
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
   function back() {
    navigate("/userpage");
  }
  function back() {
    navigate("/adminpage");
  }

  return (
    <>
     <div className="flex justify-center items-center m-4">
        <div className="bg-[#ECD4EC] h-14 w-full max-w-5xl rounded-2xl flex justify-between items-center px-6 font-bold text-2xl text-[#39063C] shadow-lg">
          <div>Doctor List</div>
          <button onClick={back} className="cursor-pointer text-[#39063C]">
            Back
          </button>
        </div>
      </div>
    <div className='flex justify-center items-center'>
    <div className="bg-[#ECD4EC] rounded-2xl shadow-2xl p-6 w-full max-w-2xl overflow-x-auto flex">
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
  )
}

export default Dt