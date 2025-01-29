import React from 'react'

const Room = async ({
params
}:{
  params:{
    roomId:string
  }

}) => {

  const roomId = (await params).roomId;
  console.log("Id");
  console.log(roomId);


  return (
    <div className='bg-red-500 flex justify-center items-center '>
      Room Chat
    </div>
  )
}

export default Room
