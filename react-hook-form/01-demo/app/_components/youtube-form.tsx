import { FC } from "react";

export const YoutubeForm: FC = () => {
  return (
    <div>
      <form className="flex flex-col space-y-3">
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" name="channel" />
        </div>
        <div className="pt-5">
          <button className="w-full">Submit</button>
        </div>
      </form>
    </div>
  );
};
