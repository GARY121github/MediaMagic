import React from 'react';
import { Download, Video, Cloud, Share, SquareStack } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200">

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Effortlessly Manage, Compress, and Share Your Videos</h1>
        <p className="text-xl mb-8">Powerful video compression and seamless sharing, all in one platform.</p>
        <Link href="/sign-in" className="btn btn-primary bg-white text-indigo-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition">
          Get Started for Free
        </Link>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="p-6 bg-gray-800 shadow-lg rounded-lg text-center">
            <SquareStack className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Efficient Compression</h3>
            <p className="text-sm text-gray-400">Reduce video size by up to 80% without compromising quality.</p>
          </div>

          <div className="p-6 bg-gray-800 shadow-lg rounded-lg text-center">
            <Video className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">High-Quality Previews</h3>
            <p className="text-sm text-gray-400">Preview videos with crisp quality before downloading or sharing.</p>
          </div>

          <div className="p-6 bg-gray-800 shadow-lg rounded-lg text-center">
            <Share className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Sharing & Downloads</h3>
            <p className="text-sm text-gray-400">Seamless video downloads in multiple resolutions and formats.</p>
          </div>

          <div className="p-6 bg-gray-800 shadow-lg rounded-lg text-center">
            <Cloud className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cloud Integration</h3>
            <p className="text-sm text-gray-400">Upload, manage, and store your videos securely in the cloud.</p>
          </div>

        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-700">
        <h2 className="text-3xl font-bold text-center mb-10">How Does It Work?</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">

          <div className="p-6">
            <Video className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Upload Your Video</h3>
            <p className="text-sm text-gray-400">Choose any video, our system handles large files up to 70MB.</p>
          </div>

          <div className="p-6">
            <SquareStack className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Automatic Compression</h3>
            <p className="text-sm text-gray-400">Your video is compressed without losing quality.</p>
          </div>

          <div className="p-6">
            <Download className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Preview & Download</h3>
            <p className="text-sm text-gray-400">Get a preview and download your video in various sizes.</p>
          </div>

          <div className="p-6">
            <Share className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Share with Ease</h3>
            <p className="text-sm text-gray-400">Share your videos effortlessly with optimized quality.</p>
          </div>

        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10">See It in Action!</h2>
        <div className="container mx-auto">
          {/* Add your showcase carousel or images here */}
          <div className="aspect-video bg-gray-700 flex items-center justify-center">
            <p className="text-xl font-semibold text-gray-300">Video Showcase Coming Soon</p>
          </div>
        </div>
      </section>
    </div>
  );
}
