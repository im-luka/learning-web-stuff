"use client";

import { FC, useEffect } from "react";
import { useForm, useFieldArray, FieldErrors } from "react-hook-form";
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
  age: number;
  date: Date;
};

export const YoutubeForm: FC = () => {
  const {
    control,
    register,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
    reset,
    trigger,
  } = useForm<FormValues>({
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
      username: "Joker",
      email: "",
      channel: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phones: ["", ""],
      telephones: [{ number: "" }],
      age: 0,
      date: new Date(),
    },
    mode: "onChange",
  });
  const {
    errors,
    touchedFields,
    dirtyFields,
    isDirty,
    isValid,
    isSubmitting,
    isSubmitted,
    isSubmitSuccessful,
    submitCount,
  } = formState;
  console.log({ touchedFields, dirtyFields, isDirty });
  console.log({ isSubmitting, isSubmitted, isSubmitSuccessful, submitCount });

  const { fields, append, remove } = useFieldArray({
    name: "telephones",
    control,
  });

  const onSubmit = (data: FormValues) => {
    console.log("form submitted", data);
  };

  const onError = (errors: FieldErrors<FormValues>) => {
    console.log("form errors", errors);
  };

  const handleGetSocialValues = () => {
    console.log("these are socials", getValues("social"));
  };

  const handleSetChannelValue = () => {
    setValue("channel", "luka bazooka", {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  useEffect(() => {
    const subscription = watch((value) => console.log(value));
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div>
      <DevTool control={control} />
      <h2 className="mb-2 text-center">Watched value: {watch("username")}</h2>
      <form
        className="flex flex-col space-y-3"
        onSubmit={handleSubmit(onSubmit, onError)}
        noValidate
      >
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: "Username is required.",
              disabled: !watch("channel"),
            })}
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
                emailAvailable: async (fieldValue) => {
                  const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users?email=${fieldValue}`
                  );
                  const data = await response.json();
                  return data.length === 0 || "Email already exists.";
                },
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
        <div className="flex flex-col">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            {...register("age", {
              valueAsNumber: true,
              required: {
                value: true,
                message: "Age is required",
              },
            })}
          />
          <p className="text-sm text-red-500">{errors.age?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="channel">Date of Birth</label>
          <input
            type="date"
            id="date"
            {...register("date", {
              valueAsDate: true,
              required: {
                value: true,
                message: "Date of birth is required",
              },
            })}
          />
          <p className="text-sm text-red-500">{errors.date?.message}</p>
        </div>
        <div className="pt-5">
          <button
            disabled={!isDirty || !isValid || isSubmitting}
            className="w-full disabled:bg-slate-700 disabled:border-slate-900 disabled:hover:text-white"
          >
            Submit
          </button>
        </div>
        <div>
          <button
            type="button"
            className="w-full bg-yellow-300 text-black"
            onClick={handleGetSocialValues}
          >
            Get Social Values
          </button>
        </div>
        <div>
          <button
            type="button"
            className="w-full bg-green-300 text-black"
            onClick={handleSetChannelValue}
          >
            Set Channel Value
          </button>
        </div>
        <div>
          <button
            type="button"
            className="w-full bg-violet-400"
            onClick={() => reset()}
          >
            Reset Form
          </button>
        </div>
        <div>
          <button
            type="button"
            className="w-full bg-rose-500"
            onClick={() => trigger(["username", "channel"])}
          >
            Validate
          </button>
        </div>
      </form>
    </div>
  );
};
