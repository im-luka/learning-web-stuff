"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Email format is not valid")
    .required("Email is required"),
  channel: yup.string().required("Channel is required"),
});

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

export const YupYoutubeForm: FC = () => {
  const { register, formState, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
    },
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <div className="mt-10 px-2 py-4 border-2 border-yellow-100">
      <h2 className="text-2xl text-center">Yup Form</h2>
      <form
        className="flex flex-col space-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("username")} />
          <p className="text-sm text-red-500">{errors.username?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" {...register("email")} />
          <p className="text-sm text-red-500">{errors.email?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" {...register("channel")} />
          <p className="text-sm text-red-500">{errors.channel?.message}</p>
        </div>
        <div className="pt-5">
          <button className="w-full disabled:bg-slate-700 disabled:border-slate-900 disabled:hover:text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
