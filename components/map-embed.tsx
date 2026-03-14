import { siteConfig } from "@/lib/site";

type MapEmbedProps = {
  title: string;
};

export function MapEmbed({ title }: MapEmbedProps) {
  return (
    <div className="service-area-map rounded-[2rem] border border-[var(--border)] p-4">
      <div className="overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/70">
        <iframe
          title={title}
          src={`${siteConfig.googleMapsUrl}&z=10&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[320px] w-full border-0"
        />
      </div>
    </div>
  );
}
