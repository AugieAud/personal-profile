import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-4xl font-bold text-primary">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg text-gray-600">
        I am a developer passionate about building great applications.
      </p>
      <div className="space-x-4">
        <Link href="/projects" className="btn btn-primary">
          View Projects
        </Link>
        <Link href="/contact" className="btn btn-secondary">
          Contact Me
        </Link>
      </div>
    </div>
  );
}
