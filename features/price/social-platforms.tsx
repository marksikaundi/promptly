export function SocialPlatforms() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
      <span className="text-sm text-muted-foreground">Post to:</span>
      <div className="flex flex-wrap items-center gap-4">
        {platforms.map((platform) => (
          <div
            key={platform}
            className="h-6 w-6 rounded-full bg-muted flex items-center justify-center"
            title={platform}
          >
            <div className="h-4 w-4 bg-current opacity-50" />
          </div>
        ))}
      </div>
    </div>
  );
}

const platforms = [
  "X (Twitter)",
  "Instagram",
  "LinkedIn",
  "Facebook",
  "TikTok",
  "YouTube",
  "Bluesky",
  "Threads",
  "Pinterest",
];
