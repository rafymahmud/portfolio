import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import AdminUploadForm from "@/components/AdminUploadForm";
import { signOut } from "./actions";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/admin/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12 max-w-4xl mx-auto pt-20 px-6">
      <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/10">
        <p className="text-white">Logged in as <span className="font-bold">{user.email}</span></p>
        <form action={signOut}>
          <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded text-white text-sm transition-colors">
            Sign out
          </button>
        </form>
      </div>

      <AdminUploadForm />
    </div>
  );
}
