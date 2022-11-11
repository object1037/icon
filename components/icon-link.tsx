export default function IconLink({
  link,
  title,
  children,
}: {
  link: string
  title: string
  children: React.ReactNode
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className="p-4 hover:text-gray-400 dark:hover:text-gray-500 transition"
    >
      <p className="text-3xl">{children}</p>
    </a>
  )
}
