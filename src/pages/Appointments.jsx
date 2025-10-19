import React, { useState, useEffect } from "react";
import Ava from "./Ava";
import { useNavigate } from "react-router-dom";
import userpage from "./Userpage";
import supabase from "../../supabase-client";


function A() {
  const [app, Setapp]=useState(" ");
  const [doct, Setdoct]=useState("");
  const [pat, Setpat]=useState("");
  const [date, Setdate]=useState("");
  const [time, Settime]=useState("");

  async function handle(){
    const appdata={
      paitent: pat,
      doctor: doct,
      date: date,
      time: time,
    };

    const { data, error } = await supabase
      .from('Appointments')
      .insert([appdata])
      .single();

   
    if (error) {
      console.error("Insert error:", error);
    } else {
      console.log("Inserted appointment:", data);
    }
  }

  const [appointments, setAppointments] = useState([]);
  const [newName, setNewName] = useState("");

  const navigate = useNavigate();
  function back(){
    navigate("/userpage");
  }

  return (
    <>
      <div className='flex justify-center items-center m-4'> 
        <div className="nav bg-[#ECD4EC]  h-12 sm:h-14 md:h-16 lg:h-16 w-7xl hover:text-[#39063C] flex justify-center 
            items-center rounded-2xl gap-14 text-2xl font-bold ">
          <div className='flex justify-end  w-4xl '>
            <button onClick={back} className='p-4 cursor-pointer'>Back</button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-20">
        <div className="bg-amber-950 h-[600px] w-3xl">
          <div>
            Book Appointments 
          </div>
          <div>
            patient name
            <input
              type="text"
              placeholder="enter patient name"
              value={pat}
              onChange={(e) => Setpat(e.target.value)}
            />
          </div>
          <div>
            doctor 
            <input
              type="text"
              placeholder="enter doctor name"
              value={doct}
              onChange={(e) => Setdoct(e.target.value)}
            />
          </div>
          <div>
            Date
            <input
              type="date"
              value={date}
              onChange={(e) => Setdate(e.target.value)}
            />
          </div>
          <div>
            time
            <input
              type="time"
              value={time}
              onChange={(e) => Settime(e.target.value)}
            />
          </div>
          <div>
            dept
            <select>
              <option value="card">card</option>
            </select>
          </div>
          <div>
            <button onClick={handle}>SUBMIT</button>
          </div>
        </div>
        <div className="bg-amber-950 h-[600px] w-xl"></div>
      </div>
    </>
  );
}

export default A;
