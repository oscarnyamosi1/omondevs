import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

export function PlaceholderImage({
  src,
  alt,
  className,
  containerClassName,
  fallbackText = "Image missing",
  ...props
}) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (!src || error) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center bg-gradient-to-br from-card to-accent rounded-md border border-border overflow-hidden relative",
          containerClassName,
          className
        )}
      >
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-pulse" />
        <ImageOff className="w-8 h-8 text-muted-foreground mb-2 relative z-10" />
        {fallbackText && (
          <span className="text-xs text-muted-foreground font-mono relative z-10 px-4 text-center">
            {fallbackText}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {!loaded && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-md" />
      )}
      <img
        src={src}
        alt={alt || "Image"}
        className={cn(
          "transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        {...props}
      />
    </div>
  );
}
