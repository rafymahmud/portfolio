"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function AdminUploadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const supabase = createClient();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const category = formData.get("category") as string;
    const video_url = formData.get("video_url") as string;

    if (!video_url) {
      setMessage("Please provide a video URL");
      setIsSubmitting(false);
      return;
    }

    try {
      const { error: insertError } = await supabase
        .from('works')
        .insert({
          title,
          category,
          video_url,
        });

      if (insertError) throw insertError;

      setMessage("Video link added successfully!");
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      console.error(error);
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto glass p-8 rounded-2xl">
      <h2 className="text-2xl font-bold text-white mb-4">Add New Work</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
        <input 
          type="text" 
          name="title" 
          required 
          className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 text-white focus:outline-none focus:border-green-500"
          placeholder="e.g. Luminex Mega Promo"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
        <select 
          name="category" 
          required
          className="w-full bg-black/50 border border-white/20 rounded px-3 py-2 text-white focus:outline-none focus:border-green-500"
        >
          <option value="Commercial Ads">Commercial Ads</option>
          <option value="Dynamic Promo">Dynamic Promo</option>
          <option value="Talking Head">Talking Head</option>
          <option value="Logo Animation">Logo Animation</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Video URL (YouTube/Vimeo/Google Drive)</label>
        <input 
          type="url" 
          name="video_url" 
          required 
          placeholder="https://youtube.com/... or https://drive.google.com/..."
          className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 text-white focus:outline-none focus:border-green-500"
        />
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="mt-4 bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-500 disabled:opacity-50 transition-colors"
      >
        {isSubmitting ? "Adding..." : "Add Video Link"}
      </button>

      {message && (
        <div className={`mt-4 p-3 rounded text-sm ${message.includes("Error") ? "bg-red-500/20 text-red-200" : "bg-green-500/20 text-green-200"}`}>
          {message}
        </div>
      )}
    </form>
  );
}
