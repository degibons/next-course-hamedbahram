"use client";

import { useRouter } from "next/navigation";

const ContactButton = () => {
  const router = useRouter();

  function handleClick() {
    router.push("/about/team");
  }

  return <button onClick={handleClick}>Team</button>;
};
export default ContactButton;
