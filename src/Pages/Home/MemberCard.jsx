import React from 'react'


const MemberCard = ({ member }) => {

    const { name, expertise, image } = member;
    console.log(member);

    return (
        <div className="shadow-lg rounded-lg border-2 bg-[#FFF] p-6 text-center">
            <figure >
                <img
                    src={image}
                    alt="team member"
                    className="rounded-lg h-[293px] w-full" />
            </figure>
            <h2 className="text-2xl font-bold mt-5">{name}</h2>
            <p >{expertise}</p>
        </div>
    )
}

export default MemberCard