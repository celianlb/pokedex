"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="flex flex-col justify-center items-center mt-[300px]">
      <h1>Something Went Wrong</h1>
      <p>Sorry, there was a problem on our end. Please try again later.</p>
      <p>Message d&apos;erreur : {error.message}</p>
    </div>
  );
}
