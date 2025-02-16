import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#FDF7F2] p-6">
      {/* Blog Header */}
      <header className="container mx-auto text-center py-12">
        <h1 className="text-5xl font-extrabold text-[#9E6F21]">My Blog</h1>
        <p className="mt-4 text-lg text-[#5B4636] max-w-xl mx-auto">
          Exploring the world of tech, coding, and creativity.
        </p>
      </header>

      {/* Featured Blog Post */}
      <section className="container mx-auto max-w-4xl bg-[#c3c0bc] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img className="w-full h-64 object-cover rounded-xl" src="/featured-blog.jpg" alt="Featured Blog" />
        <h2 className="text-3xl font-bold mt-4 text-[#191919]">Featured Blog Post</h2>
        <p className="mt-2 text-[#5B4636]">An exciting post about my recent project and learnings.</p>
        <Link to="/blog/featured" className="mt-4 inline-block text-[#9E6F21] font-semibold hover:underline">Read More →</Link>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {[1, 2, 3, 4, 5, 6].map((post) => (
          <div 
            key={post} 
            className="bg-[#c3c0bc] p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
            <img className="w-full h-40 object-cover rounded-lg" src={`/blog-thumbnail-${post}.jpg`} alt={`Blog ${post}`} />
            <h3 className="text-2xl font-bold mt-2 text-[#191919]">Blog Post {post}</h3>
            <p className="text-[#5B4636] mt-1">A short preview of the blog post content...</p>
            <Link to={`/blog/post-${post}`} className="mt-2 inline-block text-[#9E6F21] font-semibold hover:underline">Read More →</Link>
          </div>
        ))}
      </section>
    </div>
  );
}
