import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl rounded">
      <img
        src={data["avatar_url"]}
        alt="git pic"
        className="block mx-auto mt-4 rounded-full"
      />
      Github Followers: {data["followers"]}
    </div>
  );
}

export default Github;

export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/ghauoor");
  return response.json();
};
