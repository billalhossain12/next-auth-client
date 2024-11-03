"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
      <div>
        <h2>{error.message}</h2>
        <button onClick={() => reset()}>Try again</button>
      </div>
  );
}
