"use client"
import Link from "next/link";



export default function Home() {

  const roomId = () => {

    const room = crypto.randomUUID();
    console.log(room);

    return room;
  }


  return (
    <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
      <div className="space-y-8">
        {/* Logo */}
        <div className="flefx justify-center items-center gap-2">
          {/* <Pencil className="h-8 w-8 text-blue-600" /> */}
          <h1 className="text-2xl font-bold text-blue-600">DrawTogether</h1>
        </div>

        {/* Hero Text */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900">
            Collaborate and create together in real-time
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start drawing instantly. No account needed. Share your ideas visually with anyone, anywhere.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center gap-4">
          <Link
            href={`/room/${roomId()}`}
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 gap-2"
          >
            Start Drawing 
            {/* <ArrowRight className="h-5 w-5" /> */}
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="p-6 rounded-xl bg-gray-50">
            <h3 className="text-lg font-semibold mb-2">Real-time Collaboration</h3>
            <p className="text-gray-600">Draw and brainstorm together with your team in real-time</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-50">
            <h3 className="text-lg font-semibold mb-2">No Sign-up Required</h3>
            <p className="text-gray-600">Start drawing immediately without creating an account</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-50">
            <h3 className="text-lg font-semibold mb-2">Easy Sharing</h3>
            <p className="text-gray-600">Share your drawings with a simple link</p>
          </div>
        </div>

        {/* Preview Image */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-2xl border border-gray-200">
          <img
            src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=1200&h=600"
            alt="Whiteboard Preview"
            className="w-full object-cover"
          />
        </div>
      </div>
    </main>

    {/* Footer */}
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* <Pencil className="h-5 w-5 text-gray-600" /> */}
            <span className="text-gray-600">DrawTogether</span>
          </div>
          <p className="text-gray-500 text-sm">© 2024 DrawTogether. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
  );
}
