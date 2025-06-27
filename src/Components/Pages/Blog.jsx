import React from "react";
import { Link } from "react-router";
import { FaRegCalendarAlt, FaUserAlt, FaLeaf } from "react-icons/fa";
import useDocumentTitle from "../Others/useDocumentTitle";

const blogPosts = [
  {
    id: "how-to-water-plants",
    title: "How to Water Your Plants Correctly",
    excerpt:
      "Watering your plants might seem simple, but getting it right is essential for their health. Learn the best techniques and timing for different plant types.",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    author: "Emma Green",
    date: "2025-06-20",
    category: "Watering Tips",
  },
  {
    id: "choosing-the-right-soil",
    title: "Choosing the Right Soil for Your Plants",
    excerpt:
      "Different plants thrive in different soil types. Discover which soils suit your favorite plants best to ensure healthy growth.",
    image:
      "https://i.ibb.co/QvcFx8MM/blog-img-1.jpg",
    author: "Liam Bloom",
    date: "2025-06-15",
    category: "Soil & Fertilizer",
  },
  {
    id: "sunlight-exposure-guide",
    title: "Sunlight Exposure Guide for Indoor Plants",
    excerpt:
      "Understanding how much light your indoor plants need can make all the difference. Explore tips to position your plants for optimal sunlight.",
    image:
      "https://i.ibb.co/PGXLyKMh/blog-img-3.jpg",
    author: "Sophia Leaf",
    date: "2025-06-10",
    category: "Light & Placement",
  },
  {
    id: "preventing-pests-organically",
    title: "Preventing Plant Pests Organically",
    excerpt:
      "Keep your plants healthy without harsh chemicals. Learn organic methods to prevent and control common plant pests.",
    image:
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=80",
    author: "Oliver Root",
    date: "2025-06-05",
    category: "Plant Health",
  },
];

const Blog = () => {
  useDocumentTitle("Blog")
  return (
    <section className="min-h-screen bg-green-50 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-green-900 mb-4">
            PlantCare Tracker Blog
          </h1>
          <p className="text-lg text-green-800 max-w-2xl mx-auto">
            Tips, guides, and inspiration to help your plants thrive.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <Link>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </Link>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-green-600 text-sm font-semibold uppercase tracking-wide mb-2">
                  <FaLeaf />
                  <span>{post.category}</span>
                </div>

                <h2 className="text-2xl font-bold text-green-900 mb-3 hover:text-green-700 transition">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>

                <p className="text-green-800 flex-grow">{post.excerpt}</p>

                <div className="mt-6 flex items-center justify-between text-green-600 text-sm font-medium">
                  <div className="flex items-center gap-1">
                    <FaUserAlt />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaRegCalendarAlt />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
