import InstagramSocial from "../instagram-social";
import TiktokSocial from "../tiktok-social";
import YoutubeShorts from "../youtube-shorts";

export function Integrations() {
  return (
    <section className="px-4 py-16 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
            Clipes otimizados para TikTok, Reels e YouTube Shorts
          </h2>
          <p className="text-muted-foreground">
            Proporção, duração e formato automaticamente ajustados para cada rede social.
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 sm:gap-16">
          <div className="flex flex-col items-center gap-2">
            <TiktokSocial className="h-20 w-20"/>
            <span className="text-sm font-medium">TikTok</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <InstagramSocial className="h-20 w-20"/>
            <span className="text-sm font-medium">Instagram</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <YoutubeShorts className="h-20 w-20"/>
            <span className="text-sm font-medium">YouTube Shorts</span>
          </div>
        </div>
      </div>
    </section>
  )
}
