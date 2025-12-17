export default function Card({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="w-full max-w-md rounded-xl bg-white p-6 shadow">
      <h1 className="mb-6 text-center text-2xl font-bold">
        {title}
      </h1>
      {children}
    </div>
  )
}
