"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";

export const YoutubeForm: FC = () => {
  const { register } = useForm();

  return (
    <div>
      <form className="flex flex-col space-y-3">
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("username")} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" {...register("channel")} />
        </div>
        <div className="pt-5">
          <button className="w-full">Submit</button>
        </div>
      </form>
    </div>
  );
};
