import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { userId } = useParams();
  return (
    <div className="bg-gray-600 text-3xl rounded p-4 text-white text-center">
      User: {userId}
    </div>
  );
}
