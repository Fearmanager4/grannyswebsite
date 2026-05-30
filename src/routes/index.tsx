import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')('{
  component: Index,
})

function Index() {
  return (
    <div className="text-center py-8">
      <h2 className="text-2xl font-bold mb-4">Welcome Home!</h2>
      <p>This is the home page.</p>
    </div>
  )
}
