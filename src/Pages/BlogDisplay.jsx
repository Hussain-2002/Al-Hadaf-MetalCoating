// src/pages/BlogDisplay.jsx
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUp, Calendar, User, Building2, Users, ArrowLeft } from "lucide-react";
import BlogCreate from "../components/BlogCreate";
import BlogDetailsModal from "../components/BlogDetailsModal"; // ✅ NEW: Blog modal
import ProjectDetailsModal from "../components/ProjectDetailsModal"; // ✅ NEW: Project modal

// ============================================
// 🔧 CONFIGURATION
// ============================================
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx0tO-WtDoYrojLZtAwcgxVBcc2DChXfLvrU0aTZ8NrFsBkp9UYmZtejrArvtXa2bXUbA/exec";

function BlogDisplay() {
  // ============================================
  // 📊 STATE MANAGEMENT
  // ============================================
  const [activeTab, setActiveTab] = useState("blogs"); // 'blogs' or 'projects'
  const [blogsData, setBlogsData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showScroll, setShowScroll] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  
  // ✅ NEW: Modal states
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // ============================================
  // 🔄 FETCH DATA FROM GOOGLE SHEET
  // ============================================
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Fetch all data from Google Sheet
      const response = await fetch(APPS_SCRIPT_URL);
      const result = await response.json();
      
      if (result.result === "success") {
        const allData = result.data;
        
        // Separate blogs and projects
        const blogs = allData.filter(item => item.Type === "blog");
        const projects = allData.filter(item => item.Type === "project");
        
        // Sort by timestamp (newest first)
        blogs.sort((a, b) => new Date(b.Timestamp) - new Date(a.Timestamp));
        projects.sort((a, b) => new Date(b.Timestamp) - new Date(a.Timestamp));
        
        setBlogsData(blogs);
        setProjectsData(projects);
      } else {
        setError("Failed to fetch data. Please try again.");
      }
    } catch (err) {
      setError("Network error. Check your internet connection.");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  // ============================================
  // 🎯 SCROLL TO TOP FUNCTIONALITY
  // ============================================
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // ============================================
  // 🎨 RENDER BLOG CARD
  // ============================================
  const renderBlogCard = (blog) => {
    // Parse image URLs (comma-separated string to array)
    const imageURLs = blog.ImageURLs ? blog.ImageURLs.split(",").map(url => url.trim()) : [];
    const mainImage = imageURLs[0] || "/assets/default-blog.jpg";

    return (
      <Card 
        key={blog.Timestamp} 
        className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
      >
        {/* Image Section */}
        <div className="h-48 overflow-hidden bg-gray-200">
          <img
            src={mainImage}
            alt={blog.Title}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = "/assets/default-blog.jpg"; }}
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
            {blog.Title}
          </h3>

          {/* Author & Date */}
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{blog["Author/Lead"]}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{blog.Timestamp}</span>
            </div>
          </div>

          {/* Content Preview */}
          <p className="text-gray-700 mb-4 line-clamp-3">
            {blog.Content}
          </p>

          {/* Read More Button */}
          <Button
            onClick={() => setSelectedBlog(blog)} // ✅ UPDATED: Open modal
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-300"
          >
            Read Full Blog
          </Button>
        </div>
      </Card>
    );
  };

  // ============================================
  // 🎨 RENDER PROJECT CARD
  // ============================================
  const renderProjectCard = (project) => {
    const imageURLs = project.ImageURLs ? project.ImageURLs.split(",").map(url => url.trim()) : [];
    const mainImage = imageURLs[0] || "/assets/default-project.jpg";

    // Get team members (max 3)
    const teamMembers = [project.Member1, project.Member2, project.Member3]
      .filter(member => member && member !== "-");

    return (
      <Card 
        key={project.Timestamp}
        className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
      >
        {/* Image Section */}
        <div className="h-48 overflow-hidden bg-gray-200">
          <img
            src={mainImage}
            alt={project.Title}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = "/assets/default-project.jpg"; }}
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
            {project.Title}
          </h3>

          {/* Project Lead & Company */}
          <div className="space-y-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span><strong>Lead:</strong> {project["Author/Lead"]}</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              <span><strong>Client:</strong> {project.Company}</span>
            </div>
            {teamMembers.length > 0 && (
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span><strong>Team:</strong> {teamMembers.join(", ")}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{project.Timestamp}</span>
            </div>
          </div>

          {/* Content Preview */}
          <p className="text-gray-700 mb-4 line-clamp-3">
            {project.Content}
          </p>

          {/* View Details Button */}
          <Button
            onClick={() => setSelectedProject(project)} // ✅ UPDATED: Open modal
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-300"
          >
            View Project Details
          </Button>
        </div>
      </Card>
    );
  };

  // ============================================
  // 🎨 RENDER COMPONENT
  // ============================================
  
  // 👉 If showCreateForm is true, render the BlogCreate component
  if (showCreateForm) {
    return (
      <div className="relative min-h-screen w-full bg-white">
        <Header />
        <main className="pt-32 md:pt-40 pb-16">
          {/* Back Button */}
          <div className="container mx-auto px-4 mb-8">
            <Button
              onClick={() => setShowCreateForm(false)}
              className="flex items-center gap-2 bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs & Projects
            </Button>
          </div>
          
          {/* Render BlogCreate Component */}
          <BlogCreate />
        </main>
        <Footer />
      </div>
    );
  }

  // 👉 Otherwise, render the normal blog display
  return (
    <div className="relative min-h-screen w-full bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-32 md:pt-40 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
              Our <span className="text-red-600">Blogs</span> & <span className="text-red-600">Projects</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our latest insights, industry updates, and successful project completions
            </p>
          </div>
        </section>

        {/* Tab Pills */}
        <section className="container mx-auto px-4 mb-8">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab("blogs")}
              className={`px-8 py-3 font-semibold rounded-lg transition-all duration-300 ${
                activeTab === "blogs"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Blogs ({blogsData.length})
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-8 py-3 font-semibold rounded-lg transition-all duration-300 ${
                activeTab === "projects"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Projects ({projectsData.length})
            </button>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-4">
          {/* Loading State */}
          {loading && (
            <div className="text-center py-20">
              <div className="inline-block w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600 font-semibold">Loading content...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-20">
              <p className="text-red-600 font-semibold mb-4">{error}</p>
              <Button onClick={fetchData} className="bg-red-600 hover:bg-red-700 text-white">
                Retry
              </Button>
            </div>
          )}

          {/* Blogs Grid */}
          {!loading && !error && activeTab === "blogs" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogsData.length > 0 ? (
                blogsData.map(blog => renderBlogCard(blog))
              ) : (
                <div className="col-span-full text-center py-20">
                  <p className="text-gray-600 text-lg">No blogs available yet.</p>
                </div>
              )}
            </div>
          )}

          {/* Projects Grid */}
          {!loading && !error && activeTab === "projects" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.length > 0 ? (
                projectsData.map(project => renderProjectCard(project))
              ) : (
                <div className="col-span-full text-center py-20">
                  <p className="text-gray-600 text-lg">No projects available yet.</p>
                </div>
              )}
            </div>
          )}
        </section>

        {/* Admin Create Button */}
        <section className="container mx-auto px-4 mt-16">
          <div className="text-center">
            <Button
              onClick={() => setShowCreateForm(true)}
              className="bg-gradient-to-r from-white  to-white hover:from-white hover:white  text-black font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              🔒 Admin: Create New Blog/Project
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      {showScroll && (
        <Button
          size="icon"
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 rounded-full bg-red-600 text-white hover:bg-red-700 shadow-lg z-50"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      {/* ============================================ */}
      {/* 🎯 BLOG DETAILS MODAL - NEW! */}
      {/* ============================================ */}
      <BlogDetailsModal 
        blog={selectedBlog} 
        onClose={() => setSelectedBlog(null)} 
      />

      {/* ============================================ */}
      {/* 🎯 PROJECT DETAILS MODAL - NEW! */}
      {/* ============================================ */}
      <ProjectDetailsModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}

export default BlogDisplay;