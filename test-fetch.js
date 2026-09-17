const url = 'https://ikntatpjxsmrskogjhdf.supabase.co/auth/v1/health';
fetch(url)
  .then(res => res.text())
  .then(console.log)
  .catch(err => {
    console.error("Fetch failed:", err);
    if (err.cause) console.error("Cause:", err.cause);
  });
