import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-center h-screen flex flex-col items-center text-center bg-landing-page bg-cover">
      <section className="flex flex-col items-center mt-52 gap-5">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-5xl text-primaryColor">Welcome to Workout Creative</h1>
          <p className="max-w-md text-primaryColor">
            Infuse energy and excitement to your workouts with our workout
            generator
          </p>
        </div>
        <Link href={`/createworkout`} className="inline-block rounded px-6 py-2 font-medium text-lg bg-accent w-52 text-primaryColor no-underline">
          Create a Workout
        </Link>
      </section>
    </main>
  );
}
