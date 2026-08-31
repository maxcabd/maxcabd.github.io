import { Navbar } from "@/components/navbar";
import { Github, Star } from "lucide-react";
import Link from "next/link";

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
}

const EXCLUDED = new Set([
  "BinRead",
  "mot-unpack-rs",
  "message-info-localizer",
  "cosprm",
  "xml2fcv",
  "anm-clean",
  "png2xfbin",
  "maxcabd.github.io",
  "accprm",
]);

async function getRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/maxcabd/repos?per_page=100&sort=pushed",
      { cache: "force-cache" },
    );
    if (!res.ok) return [];
    const repos: GitHubRepo[] = await res.json();
    return repos
      .filter((r) => !r.fork && !EXCLUDED.has(r.name))
      .sort(
        (a, b) =>
          new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
      );
  } catch {
    return [];
  }
}

export default async function ProjectsPage() {
  const repos = await getRepos();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-5 sm:px-6 pt-28 pb-32">
        <h2 className="text-[clamp(1.5rem,3vw,1.8rem)] font-garamond font-normal text-white mb-2">
          Projects
        </h2>
        <p className="text-[14px] text-warm mb-10">Open source work on GitHub.</p>

        <div>
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="flex items-start gap-2.5 py-5 border-b border-warm/15"
            >
              <Github className="w-4 h-4 text-warm mt-[3px] shrink-0" />
              <div className="min-w-0">
                <p className="text-[15px] leading-relaxed text-warm">
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium bg-gradient-to-r from-pink-500 via-blue-500 to-green-400 bg-clip-text text-transparent"
                  >
                    {repo.name}
                  </Link>
                  {repo.description && (
                    <span> - {repo.description}</span>
                  )}
                </p>
                {repo.stargazers_count > 0 && (
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-warm fill-warm" />
                    <span className="text-[12px] text-warm tabular-nums">
                      {repo.stargazers_count}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
