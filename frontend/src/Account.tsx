import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

export default function Account({ session }: any) {
  const [loading, setLoading] = useState<boolean>(true);
  const [username, setUsername] = useState<any>(null);
  const [website, setWebsite] = useState<any>(null);
  // const [avatar_url, setAvatarUrl] = useState<any>(null);

  useEffect(() => {
    let ignore = false;
    async function getProfile() {
      setLoading(true);
      const { user } = session;

      const { data, error } : any = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", user.id)
        .single();

      if (!ignore) {
        if (error) {
          console.warn(error);
        } else if (data) {
          setUsername(data.username);
          setWebsite(data.website);
          // setAvatarUrl(data.avatar_url);
        }
      }

      setLoading(false);
    }

    getProfile();

    return () => {
      ignore = true;
    };
  }, [session]);

  async function updateProfile(event: any, avatarUrl: any) {
    event.preventDefault();

    setLoading(true);
    const { user } = session;

    const updates : any = {
      id: user.id,
      username,
      website,
      avatar_url: avatarUrl,
      updated_at: new Date(),
    };

    const { error } = await supabase.from("profiles").upsert(updates);

    if (error) {
      alert(error.message);
    } else {
      // setAvatarUrl(avatarUrl);
    }
    setLoading(false);
  }

  return (
    <form onSubmit={() => updateProfile} className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor="username">Name</label>
        <input
          id="username"
          type="text"
          required
          value={username ?? ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="url"
          value={website ?? ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setWebsite(e.target.value)
          }
        />
      </div>

      <div>
        <button
          className="button block primary"
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>

      <div>
        <button
          className="button block"
          type="button"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </form>
  );
}
