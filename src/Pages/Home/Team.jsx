import React, { useEffect, useState } from 'react'
import MemberCard from './MemberCard';

const Team = () => {

  const[team,setTeam]=useState([]);
  useEffect(()=>{
    fetch('https://car-doctor-server-pi-one.vercel.app/team')
    .then(res=>res.json())
    .then(data => setTeam(data))
  },[])

  // console.log(data)


  return (
    <div className='mt-33 p-2' id='team'>
      <p className='text-[#FF3811] text-xl font-bold '>Team</p>
      <h2 className='font-bold text-2xl md:text-5xl mt-5'>Meet Our Team</h2>
      <p className='mt-5'>Get to know the passionate and talented individuals who make up our team. Each of us brings unique skills and expertise, working collaboratively to deliver exceptional results and drive the success of our projects </p>

      <p className='mt-12 text-2xl'>Number of members : {team.length}</p>
      <div className='mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          team.map(member => 
          <MemberCard
          key = {member._id}
          member = {member}>
          </MemberCard>
         )
        }
      </div>
      <button className='btn btn-outline text-[#FF3811] font-semibold mt-12 '>More Services</button>
    </div>
  )
}

export default Team