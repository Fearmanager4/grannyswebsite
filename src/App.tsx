import { useNavigate } from '@tanstack/react-router'

export function App() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Granny's Website</h1>
          <p className="text-gray-600 mt-2">Welcome to the family site</p>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-gray-700 mb-4">
            This is your granny's website. Edit this page to add your content.
          </p>
          <button
            onClick={() => navigate({ to: '/' })}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Learn More
          </button>
        </div>
      </main>
    </div>
  )
}
