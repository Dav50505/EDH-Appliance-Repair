type ContentImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
};

export function ContentImage({
  src,
  alt,
  width,
  height,
  sizes,
  priority = false,
  className,
  imageClassName,
}: ContentImageProps) {
  return (
    <div className={`content-image-frame ${className ?? ""}`.trim()}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        className={`h-full w-full object-cover ${imageClassName ?? ""}`.trim()}
        decoding="async"
      />
    </div>
  );
}
