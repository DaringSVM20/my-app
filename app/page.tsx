import Navbar from '@/components/navbar'
import Card from '@/components/Card'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-100 dark:bg-gray-900 max-h-screen">
        <Card title="Project One" desc="Description of project one." />
        <Card title="Project Two" desc="Description of project two." />
        <Card title="Project Three" desc="Description of project three." />
      </main>
    </>
  )
}
