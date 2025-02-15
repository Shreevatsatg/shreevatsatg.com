import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Navbar */}
      <nav className="container mx-auto flex justify-between items-center py-4">
        <a className="text-3xl font-bold" href="/">shreevatsa tg</a>
        <ul className="flex space-x-6 text-lg">
          <li><Link to="/projects" className="text-lg font-medium">Projects</Link></li>
          <li><Link to="/" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg">
        Go to Home
      </Link></li>
        </ul>
      </nav>
      
      {/* Blog Header */}
      <header className="container mx-auto text-center py-12">
        <h1 className="text-5xl font-extrabold">My Blog</h1>
        <p className="mt-4 text-lg text-gray-600">Sharing my journey in tech, coding, and creativity.</p>
      </header>

      {/* Featured Blog Post */}
      <section className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <img className="w-full h-64 object-cover rounded-lg" src="/featured-blog.jpg" alt="Featured Blog" />
        <h2 className="text-3xl font-bold mt-4">Featured Blog Post</h2>
        <p className="mt-2 text-gray-600">An exciting post about my recent project and learnings.</p>
        <Link to="/blog/featured" className="mt-4 inline-block text-[#FF00E5] font-semibold">Read More →</Link>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {[1, 2, 3, 4, 5, 6].map((post) => (
          <div key={post} className="bg-white p-4 rounded-lg shadow-md">
            <img className="w-full h-40 object-cover rounded-lg" src={`/blog-thumbnail-${post}.jpg`} alt={`Blog ${post}`} />
            <h3 className="text-2xl font-bold mt-2">Blog Post {post}</h3>
            <p className="text-gray-600 mt-1">A short preview of the blog post content...</p>
            <Link to={`/blog/post-${post}`} className="mt-2 inline-block text-[#FF00E5] font-semibold">Read More →</Link>
          </div>
        ))}
      </section>
    </div>
  );
}