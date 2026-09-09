export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Igor Simões
      </h1>
      <p className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-foreground/50">
        Building
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/50 [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/50 [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/50" />
        </span>
      </p>
    </main>
  );
}
