import Link from "next/link";

const layout = ({ children }) => {
  return (
    <section className="p-6">
      <h1>About layout</h1>
      <div className="mb-4 bg-amber-100">
        <Link href="/about/team" className="text-blue-600">
          Team
        </Link>
      </div>
      {children}
    </section>
  );
};
export default layout;
