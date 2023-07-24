import React, { useState, useEffect } from "react";
import {
  MoreHorizontal,
  Heart,
  Repeat,
  Send,
  MessageCircle,
} from "react-feather";
import Thread from "../components/Thread";
import { database, DEVELOP_DB_ID, COLLECTION_ID_THREADS } from "../appWriteConfig";

const Feed = () => {
  const [threads, setThreads] = useState();
  useEffect(() => {
    getThreads();
  }, []);

  const getThreads = async () => {
    const response = await database.listDocuments(DEVELOP_DB_ID, COLLECTION_ID_THREADS)
    console.log("response :", response)
  };
  return (
    <div className="container mx-auto max-w-[600px]">
      <Thread />
      <Thread />
      <Thread />
      <Thread />
    </div>
  );
};

export default Feed;
