export default function Home() {
  return (
    <main className="relative bg-center h-screen flex flex-col items-center text-center">
      <div className="absolute brightness-[.10] inset-0 bg-center bg-cover bg-landing-page"></div>
      <section className="text-primary absolute top-1/4 flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-5xl">Welcome to Workout Creative</h1>
          <p className="max-w-md">
            Infuse energy and excitement to your workouts with our workout
            generator
          </p>
        </div>
        <button className="inline-block rounded px-6 py-2 font-medium text-lg bg-accent relative w-52">
          Create a Workout
        </button>
      </section>
    </main>
  );
}
