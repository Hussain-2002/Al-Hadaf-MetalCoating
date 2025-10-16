// ✅ src/components/BlogCreate.jsx - Component Version
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lock, CheckCircle, XCircle, Loader2 } from "lucide-react";
import ImageUploader from "../components/ImageUploader";

// ============================================
// 🔧 CONFIGURATION
// ============================================
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx0tO-WtDoYrojLZtAwcgxVBcc2DChXfLvrU0aTZ8NrFsBkp9UYmZtejrArvtXa2bXUbA/exec"; // 👈 Paste deployed Apps Script URL
const ADMIN_PASSWORD = "alhadaf2025"; // 👈 Same as Apps Script backend

function BlogCreate() {
  // ============================================
  // 📊 STATE MANAGEMENT
  // ============================================
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [activeTab, setActiveTab] = useState("blog"); // 'blog' | 'project'
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  // Blog Form State
  const [blogForm, setBlogForm] = useState({
    title: "",
    author: "",
    content: "",
    imageURLs: ""
  });

  // Project Form State
  const [projectForm, setProjectForm] = useState({
    title: "",
    projectLead: "",
    member1: "",
    member2: "",
    member3: "",
    company: "",
    content: "",
    imageURLs: ""
  });

  // ============================================
  // 🔐 PASSWORD AUTHENTICATION
  // ============================================
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError(null);
    } else {
      setError("Invalid password! Access denied.");
    }
  };

  // ============================================
  // 📝 BLOG FORM HANDLERS
  // ============================================
  const handleBlogChange = (e) => {
    const { name, value } = e.target;
    setBlogForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Validation
    if (!blogForm.title.trim() || !blogForm.author.trim() || !blogForm.content.trim()) {
      setError("Please fill all required fields (Title, Author, Content)");
      setLoading(false);
      return;
    }

    try {
      const formData = new URLSearchParams();
      formData.append("password", ADMIN_PASSWORD);
      formData.append("type", "blog");
      formData.append("title", blogForm.title.trim());
      formData.append("author", blogForm.author.trim());
      formData.append("content", blogForm.content.trim());
      formData.append("imageURLs", blogForm.imageURLs.trim());

      const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.result === "success") {
        setSuccess(true);
        setBlogForm({ title: "", author: "", content: "", imageURLs: "" });
        setTimeout(() => (window.location.href = "/blog"), 2000);
      } else {
        setError(result.message || "Failed to save blog");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
      console.error("Submit error:", err);
    } finally {
      setLoading(false);
    }
  };

  // ============================================
  // 🏗️ PROJECT FORM HANDLERS
  // ============================================
  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setProjectForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (
      !projectForm.title.trim() ||
      !projectForm.projectLead.trim() ||
      !projectForm.company.trim() ||
      !projectForm.content.trim()
    ) {
      setError("Please fill all required fields (Title, Project Lead, Company, Content)");
      setLoading(false);
      return;
    }

    try {
      const formData = new URLSearchParams();
      formData.append("password", ADMIN_PASSWORD);
      formData.append("type", "project");
      formData.append("title", projectForm.title.trim());
      formData.append("projectLead", projectForm.projectLead.trim());
      formData.append("member1", projectForm.member1.trim() || "-");
      formData.append("member2", projectForm.member2.trim() || "-");
      formData.append("member3", projectForm.member3.trim() || "-");
      formData.append("company", projectForm.company.trim());
      formData.append("content", projectForm.content.trim());
      formData.append("imageURLs", projectForm.imageURLs.trim());

      const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.result === "success") {
        setSuccess(true);
        setProjectForm({
          title: "",
          projectLead: "",
          member1: "",
          member2: "",
          member3: "",
          company: "",
          content: "",
          imageURLs: ""
        });
        setTimeout(() => (window.location.href = "/blog"), 2000);
      } else {
        setError(result.message || "Failed to save project");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
      console.error("Submit error:", err);
    } finally {
      setLoading(false);
    }
  };

  // ============================================
  // 🔒 PASSWORD SCREEN
  // ============================================
  if (!isAuthenticated) {
    return (
      <div className="relative min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100">
        <main className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <Card className="p-8 shadow-2xl rounded-2xl">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                    <Lock className="w-8 h-8 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Admin Access Required
                  </h2>
                  <p className="text-gray-600">
                    Enter password to create blogs & projects
                  </p>
                </div>

                <form onSubmit={handlePasswordSubmit} className="space-y-4">
                  <input
                    type="password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter admin password"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-all"
                    required
                  />
                  {error && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                      <XCircle className="w-5 h-5" />
                      <span className="text-sm font-semibold">{error}</span>
                    </div>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 rounded-lg transition-all duration-300"
                  >
                    Unlock Access
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => (window.location.href = "/blog")}
                    className="text-gray-600 hover:text-gray-900 text-sm font-semibold transition-colors"
                  >
                    ← Back to Blogs
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // ============================================
  // ✍️ MAIN FORM SCREEN
  // ============================================
  return (
    <div className="relative min-h-screen w-full bg-white">
      <main className="pb-16">
        {/* Header */}
        <section className="container mx-auto px-4 mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Create New <span className="text-red-600">Content</span>
          </h1>
          <p className="text-lg text-gray-600">
            Add blogs or showcase completed projects
          </p>
        </section>

        {/* Tabs */}
        <section className="container mx-auto px-4 mb-8">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => {
                setActiveTab("blog");
                setError(null);
                setSuccess(false);
              }}
              className={`px-8 py-3 font-semibold rounded-lg transition-all duration-300 ${
                activeTab === "blog"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              📝 Blog Form
            </button>

            <button
              onClick={() => {
                setActiveTab("project");
                setError(null);
                setSuccess(false);
              }}
              className={`px-8 py-3 font-semibold rounded-lg transition-all duration-300 ${
                activeTab === "project"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              🏗️ Project Form
            </button>
          </div>
        </section>

        {/* Alerts */}
        {success && (
          <section className="container mx-auto px-4 mb-6">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center gap-3 bg-green-50 border-2 border-green-500 text-green-700 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">
                  {activeTab === "blog"
                    ? "Blog created successfully! Redirecting..."
                    : "Project created successfully! Redirecting..."}
                </span>
              </div>
            </div>
          </section>
        )}

        {error && (
          <section className="container mx-auto px-4 mb-6">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center gap-3 bg-red-50 border-2 border-red-500 text-red-700 p-4 rounded-lg">
                <XCircle className="w-6 h-6" />
                <span className="font-semibold">{error}</span>
              </div>
            </div>
          </section>
        )}

        {/* Forms */}
        <section className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 shadow-2xl rounded-2xl">
              {activeTab === "blog" ? (
                // BLOG FORM
                <form onSubmit={handleBlogSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Write a New Blog
                  </h2>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Blog Title <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={blogForm.title}
                      onChange={handleBlogChange}
                      placeholder="e.g., Top 10 SEO Tips for 2025"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Author Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="author"
                      value={blogForm.author}
                      onChange={handleBlogChange}
                      placeholder="e.g., John Doe"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Blog Content <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      name="content"
                      value={blogForm.content}
                      onChange={handleBlogChange}
                      placeholder="Write your blog content here..."
                      rows={10}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-all resize-vertical"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Tip: Include keywords for better SEO
                    </p>
                  </div>

                  {/* Image Upload Component */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Blog Images (Optional)
                    </label>
                    <ImageUploader
                      onImagesChange={(urls) =>
                        setBlogForm((prev) => ({ ...prev, imageURLs: urls }))
                      }
                      existingImages={
                        blogForm.imageURLs
                          ? blogForm.imageURLs
                              .split(",")
                              .map((url) => url.trim())
                              .filter((url) => url)
                          : []
                      }
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Publishing Blog...
                      </span>
                    ) : (
                      "Publish Blog"
                    )}
                  </Button>
                </form>
              ) : (
                // PROJECT FORM
                <form onSubmit={handleProjectSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Add New Project
                  </h2>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Title <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={projectForm.title}
                      onChange={handleProjectChange}
                      placeholder="e.g., Factory Powder Coating Project"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Lead <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="projectLead"
                      value={projectForm.projectLead}
                      onChange={handleProjectChange}
                      placeholder="e.g., Sarah Smith"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["member1", "member2", "member3"].map((m, i) => (
                      <div key={m}>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Team Member {i + 1}
                        </label>
                        <input
                          type="text"
                          name={m}
                          value={projectForm[m]}
                          onChange={handleProjectChange}
                          placeholder="Name (optional)"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-all"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Client Company <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={projectForm.company}
                      onChange={handleProjectChange}
                      placeholder="e.g., ABC Industries"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Description <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      name="content"
                      value={projectForm.content}
                      onChange={handleProjectChange}
                      placeholder="Describe the project details, scope, outcomes..."
                      rows={10}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-all resize-vertical"
                      required
                    />
                  </div>

                  {/* Image Upload Component */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Images (Optional)
                    </label>
                    <ImageUploader
                      onImagesChange={(urls) =>
                        setProjectForm((prev) => ({ ...prev, imageURLs: urls }))
                      }
                      existingImages={
                        projectForm.imageURLs
                          ? projectForm.imageURLs
                              .split(",")
                              .map((url) => url.trim())
                              .filter((url) => url)
                          : []
                      }
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Saving Project...
                      </span>
                    ) : (
                      "Save Project"
                    )}
                  </Button>
                </form>
              )}

              {/* Back Button */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => (window.location.href = "/blog")}
                  className="text-gray-600 hover:text-gray-900 text-sm font-semibold transition-colors"
                >
                  ← Back to Blogs & Projects
                </button>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

export default BlogCreate;