// src/components/ImageUploader.jsx
// 🖼️ Seamless Image Upload Component - ImgBB Integration
import { useState } from "react";
import { Upload, X, Loader2, Image as ImageIcon, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// ============================================
// 🔧 CONFIGURATION - PASTE YOUR IMGBB API KEY HERE
// ============================================
const IMGBB_API_KEY = "d1027150f72d15be42cbb3d4d393150c"; // 👈 STEP 1: Paste your ImgBB API key

function ImageUploader({ onImagesChange, existingImages = [] }) {
  // ============================================
  // 📊 STATE MANAGEMENT
  // ============================================
  const [images, setImages] = useState(
    existingImages.filter(img => img && img.trim() !== "")
  );
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  // ============================================
  // 📤 UPLOAD IMAGE TO IMGBB (Single Image)
  // ============================================
  const uploadToImgBB = async (file) => {
    // Create FormData
    const formData = new FormData();
    formData.append("image", file);

    try {
      // Upload to ImgBB API
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData
        }
      );

      const result = await response.json();

      if (result.success) {
        return result.data.url; // Direct image URL (https://i.ibb.co/xxx/image.jpg)
      } else {
        throw new Error(result.error?.message || "Upload failed");
      }
    } catch (err) {
      console.error("ImgBB upload error:", err);
      throw new Error("Failed to upload image");
    }
  };

  // ============================================
  // 📝 HANDLE FILE SELECTION & UPLOAD
  // ============================================
  const handleFileSelect = async (e) => {
    const files = Array.from(e.target.files);
    
    if (files.length === 0) return;

    // Validate: Only image files
    const validFiles = files.filter(file => 
      file.type.startsWith("image/")
    );

    if (validFiles.length === 0) {
      setError("Please select valid image files (JPG, PNG, GIF, WebP)");
      return;
    }

    // Validate: File size (max 32MB per ImgBB free tier)
    const oversizedFiles = validFiles.filter(file => file.size > 32 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      setError("Some images are too large. Max size: 32MB per image");
      return;
    }

    setUploading(true);
    setError(null);
    setUploadProgress(0);

    try {
      const uploadedURLs = [];
      const totalFiles = validFiles.length;

      // Upload each file sequentially (to show progress)
      for (let i = 0; i < validFiles.length; i++) {
        const file = validFiles[i];
        const url = await uploadToImgBB(file);
        uploadedURLs.push(url);
        
        // Update progress
        setUploadProgress(Math.round(((i + 1) / totalFiles) * 100));
      }

      // Merge with existing images
      const newImages = [...images, ...uploadedURLs];
      setImages(newImages);

      // Send back to parent component (comma-separated string)
      onImagesChange(newImages.join(","));

      // Reset file input
      e.target.value = "";

    } catch (err) {
      setError(err.message || "Failed to upload images. Please try again.");
      console.error("Upload error:", err);
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  // ============================================
  // 🗑️ REMOVE IMAGE
  // ============================================
  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    onImagesChange(newImages.join(","));
  };

  // ============================================
  // 🎨 RENDER COMPONENT
  // ============================================
  return (
    <div className="space-y-4">
      {/* Upload Button Area */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-red-600 transition-all duration-300 bg-gray-50">
        <input
          type="file"
          id="imageUpload"
          multiple
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
          disabled={uploading}
        />
        <label
          htmlFor="imageUpload"
          className={`cursor-pointer flex flex-col items-center gap-3 ${
            uploading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {uploading ? (
            <>
              <Loader2 className="w-12 h-12 text-red-600 animate-spin" />
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-700">
                  Uploading images... {uploadProgress}%
                </p>
                <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-600 transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <Upload className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <p className="text-base font-bold text-gray-900">
                  Click to upload images
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  or drag and drop
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  PNG, JPG, GIF, WebP • Max 32MB per image
                </p>
              </div>
            </>
          )}
        </label>
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-3 bg-red-50 border-2 border-red-300 text-red-700 px-4 py-3 rounded-lg">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-semibold">{error}</span>
        </div>
      )}

      {/* Preview Uploaded Images */}
      {images.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-gray-900">
              Uploaded Images ({images.length})
            </p>
            <Button
              type="button"
              onClick={() => {
                setImages([]);
                onImagesChange("");
              }}
              className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded"
            >
              Clear All
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.map((url, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden border-2 border-gray-300 hover:border-red-600 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                {/* Image Preview */}
                <div className="aspect-square bg-gray-100">
                  <img
                    src={url}
                    alt={`Upload ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23ddd' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999'%3EError%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>

                {/* Remove Button */}
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700 shadow-lg"
                  title="Remove image"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Image Number Badge */}
                <div className="absolute bottom-2 left-2 bg-black/70 text-white rounded px-2 py-1 text-xs font-semibold flex items-center gap-1">
                  <ImageIcon className="w-3 h-3" />
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Info Message */}
      {images.length === 0 && !uploading && (
        <div className="text-center py-4">
          <p className="text-sm text-gray-500">
            No images uploaded yet. Click above to add images.
          </p>
        </div>
      )}
    </div>
  );
}

export default ImageUploader;