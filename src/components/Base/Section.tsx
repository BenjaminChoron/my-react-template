export default function Section({ children }: { children: React.ReactNode }) {
  return <section className="flex-1 flex flex-col justify-center items-center">{children}</section>;
}
