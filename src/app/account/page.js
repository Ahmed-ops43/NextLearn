import { redirect } from "next/navigation";

export default function Account() {
  const isVerified = false;

  if (isVerified === false)
    redirect("/profiledoc/profile/13/12?name=ahmed&product=bread");

  return (
    <div>
      <h1>This is a Account Page</h1>
    </div>
  );
}
