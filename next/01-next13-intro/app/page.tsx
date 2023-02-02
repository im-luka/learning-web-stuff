import { cookies, headers } from "next/headers";

interface Time {
  dateTime: number;
}

async function getCurrentTime() {
  const nextCookies = cookies();
  const auth = nextCookies.get("auth")?.value;

  const headersList = headers();
  const referer = headersList.get("referer");

  const res = await fetch(
    "https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Zagreb",
    {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    }
  );

  const time: Promise<Time> = await res.json();
  return time;
}

export default async function SSRPage() {
  const time = await getCurrentTime();
  console.log(time);

  return (
    <>
      <h1>Time in Chicago (SSR)</h1>
      <p>{new Date(time.dateTime).toString()}</p>
    </>
  );
}
