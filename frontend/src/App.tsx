import { useEffect, useState } from "react";

type Ping =
  | { ok: true; msg: string }
  | { ok: false; error: string };

export default function App() {
  const [status, setStatus] = useState<Ping | null>(null);

  useEffect(() => {
    fetch("/api/ping")
      .then(r => r.json())
      .then(setStatus)
      .catch(err => setStatus({ ok: false, error: String(err) }));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h1>Gym App (Front)</h1>
      <pre>{JSON.stringify(status, null, 2)}</pre>
    </div>
  );
}
