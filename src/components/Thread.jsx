import React from 'react'
import { MoreHorizontal, Heart, Repeat, Send, MessageCircle } from "react-feather";

const Thread = ({Thread}) => {
  return (
   
         <div className="flex p-4">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="https://avatars.githubusercontent.com/u/108215568?v=4"
          alt=""
        />

        <div className="w-full px-2 pb-4 border-b border-[rgba(49,49,50,1)]">

            {/* Thread header */}

          <div className="flex justify-between gap-2">
            <strong>Murat</strong>
            <div className="flex justify-between gap-2">
              <p className="text-[rgba(97,97,97,1)]">3hrs ago</p>
              <MoreHorizontal />
            </div>
          </div>
          {/* Thread body */}
          <div className="py-4">
            <span>
                Zuckerberg claims that this app has already 30M users.
                If that's true it's fkin impressive.
            </span>
          </div>
          <div className="flex gap-4 py-4">
            <Heart size={22}/>
            <MessageCircle size={22}/>
            <Repeat size={22}/>
            <Send size={22}/>

          </div>
          <div className="flex gap-4">
            <p className="text-[rgba(97,97,97,1)]">Replies 16</p>
            <p>-</p>
            <p className="text-[rgba(97,97,97,1)]">87 Likes</p>
          </div>
        </div>
      </div>
   
  )
}

export default Thread