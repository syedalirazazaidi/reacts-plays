import Image from "next/image";

export default function Home() {
  return (
    <main className="py-36">
      <div className="bg-gray-900 h-full text-white py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to my website!</h1>
          <p className="text-lg mb-8">Learn and explore with us.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
