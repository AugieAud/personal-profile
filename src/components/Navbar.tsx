import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-base-200 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="space-x-4">
          <Link href="/" className="btn btn-ghost">
            Home
          </Link>
          <Link href="/about" className="btn btn-ghost">
            About
          </Link>
          <Link href="/projects" className="btn btn-ghost">
            Projects
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
