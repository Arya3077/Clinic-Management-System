import React, { useState, useEffect } from 'react';
import supabase from '../../supabase-client';
import { useNavigate } from 'react-router-dom';

const Schedule = () => {
  const [pat, Setpat] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchP() {
      const { data, error } = await supabase.from("Schedule").select("*");
      if (error) {
        console.error("Error fetching schedule:", error);
        alert("⚠️ Schedule data not fetched!");
      } else {
        Setpat(Array.isArray(data) ? data : []);
      }
      setLoading(false);
    }
    fetchP();
  }, []);

const navigate= useNavigate();
  function back() {
    navigate("/doctorpage");
  }

  return (
    <>
    <div className="flex justify-center items-center m-4">
        <div className="bg-[#ECD4EC] h-14 w-full max-w-5xl rounded-2xl flex justify-between items-center px-6 font-bold text-2xl text-[#39063C] shadow-lg">
          <div>Book Appointment</div>
          <button onClick={back} className="cursor-pointer text-[#39063C]">
            Back
          </button>
        </div>
      </div>
    <div className='flex justify-center items-center mt-4'>
      <div className="bg-[#ECD4EC] rounded-2xl shadow-2xl p-6 w-full max-w-2xl overflow-x-auto">
        <h2 className="text-3xl text-center font-bold text-[#39063C] mb-6">
          Scheduled Patients
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : (
          <table className="w-full border border-gray-300 text-center rounded-lg overflow-hidden text-black">
            <thead className="bg-purple-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Patient</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {pat.length > 0 ? (
                pat.map((item) => (
                  <tr key={item.id} className="hover:bg-purple-50">
                    <td className="border border-gray-300 px-4 py-2">
                      {item.Paitent}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.Date}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.Time}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="py-4 text-gray-500">
                    No patients scheduled
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
      </div>
    </>
  );
};

export default Schedule;
