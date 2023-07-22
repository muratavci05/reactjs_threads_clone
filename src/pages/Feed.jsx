import React from "react";
import { MoreHorizontal, MoreVertical } from "react-feather";

const Feed = () => {
  return (
    <div className="container mx-auto max-w-[600px]">
      <div className="flex p-4">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="https://avatars.githubusercontent.com/u/108215568?v=4"
          alt=""
        />

        <div className="w-full px-2">

            {/* Thread header */}

          <div className="flex justify-between gap-2">
            <strong>Murat</strong>
            <div className="flex justify-between gap-2">
              <p className="text-[rgba(97,97,97,1)]">3hrs ago</p>
              <MoreHorizontal />
            </div>
          </div>
          {/* Thread body */}
          <div>
            <span>
                Zuckerberg claims that this app has already 30M users.
                If that's true it's fkin impressive.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
