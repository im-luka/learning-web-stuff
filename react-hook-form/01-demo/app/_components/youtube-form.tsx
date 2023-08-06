"use client";

import { FC } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phones: string[];
  telephones: { number: string }[];
};

export const YoutubeForm: FC = () => {
  const { control, register, handleSubmit, formState } = useForm<FormValues>({
    // defaultValues: async () => {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/users/1"
    //   );
    //   const data = await response.json();
    //   return {
    //     username: "Batman",
    //     email: data.email,
    //     channel: "",
    //   };
    // },
    defaultValues: {
      username: "",
      email: "",
      channel: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phones: ["", ""],
      telephones: [{ number: "" }],
    },
  });
  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "telephones",
    control,
  });

  const onSubmit = (data: FormValues) => {
    console.log("form submitted", data);
  };

  return (
    <div>
      <DevTool control={control} />
      <form
        className="flex flex-col space-y-3"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", { required: "Username is required." })}
          />
          <p className="text-sm text-red-500">{errors.username?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email format",
              },
              validate: {
                notAdmin: (fieldValue) =>
                  fieldValue !== "admin@example.com" ||
                  "Enter a different email address.",
                notBlackListed: (fieldValue) =>
                  !fieldValue.endsWith("baddomain.com") ||
                  "This domain is not supported.",
              },
            })}
          />
          <p className="text-sm text-red-500">{errors.email?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            {...register("channel", {
              required: {
                value: true,
                message: "Channel is required",
              },
            })}
          />
          <p className="text-sm text-red-500">{errors.channel?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="twitter">Twitter</label>
          <input type="text" id="twitter" {...register("social.twitter")} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="facebook">Facebook</label>
          <input type="text" id="facebook" {...register("social.facebook")} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="primary-phone">Primary Phone</label>
          <input type="text" id="primary-phone" {...register("phones.0")} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="secondary-phone">Secondary Phone</label>
          <input type="text" id="secondary-phone" {...register("phones.1")} />
        </div>
        <div className="p-2 border border-yellow-100">
          <label>List of telephones</label>
          <div className="flex flex-col items-start space-y-1">
            {fields.map((field, index) => (
              <div key={field.id} className="flex space-x-2">
                <input
                  type="text"
                  {...register(`telephones.${index}.number`)}
                />
                {index > 0 && (
                  <button type="button" onClick={() => remove(index)}>
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={() => append({ number: "" })}>
              Add telephone
            </button>
          </div>
        </div>
        <div className="pt-5">
          <button className="w-full">Submit</button>
        </div>
      </form>
    </div>
  );
};