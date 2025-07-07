export default function Card({ title, desc }: { title: string, desc: string }) {
    return (
      <div className="p-4 rounded-2xl shadow-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white h-64">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm mt-2">{desc}</p>
      </div>
    )
  }
// This component renders a card with a title and description.
// It uses Tailwind CSS for styling and supports both light and dark themes.