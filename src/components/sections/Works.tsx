import { createClient } from "@/utils/supabase/server";
import WorksGallery from "./WorksGallery";
import { unstable_noStore as noStore } from 'next/cache';

export default async function Works() {
  noStore();
  const supabase = await createClient();
  const { data: works, error } = await supabase
    .from('works')
    .select('*')
    .order('created_at', { ascending: false });

  console.log("SERVER SIDE FETCH RESULT:", { works, error });

  return (
    <section id="works" className="py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-green-400">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of video editing and motion design projects.
          </p>
        </div>
        
        {error && (
          <div className="bg-red-900/50 border border-red-500 text-white p-4 rounded mb-8 text-center max-w-2xl mx-auto">
            Error fetching works: {error.message || JSON.stringify(error)}
          </div>
        )}
        
        {/* Pass fetched data to the interactive client component */}
        <WorksGallery initialWorks={works || []} />
      </div>
    </section>
  );
}
