import Link from "next/link";
import NavLink from "@/components/ui/NavLink";

const layout = ({ children }) => {
  return (
    <>
      <h1>About layout</h1>
      <div className="mb-4 bg-amber-100">
        <NavLink href="/about/team">Team</NavLink>
      </div>
      {children}
    </>
  );
};
export default layout;
