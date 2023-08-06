import { YoutubeForm } from "./_components/youtube-form";
import { YupYoutubeForm } from "./_components/yup-youtube-form";

export default function Home() {
  return (
    <div>
      <h1 className="mb-7 text-4xl font-bold">
        Welcome to <span className="italic text-red-400">React Hook Form</span>
      </h1>
      <YoutubeForm />
      <YupYoutubeForm />
    </div>
  );
}
