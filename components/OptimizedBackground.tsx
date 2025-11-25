import Image from 'next/image';

interface OptimizedBackgroundProps {
  src: string;
  alt?: string;
  priority?: boolean;
  className?: string;
  quality?: number;
}

export default function OptimizedBackground({
  src,
  alt = '',
  priority = false,
  className = '',
  quality = 75,
}: OptimizedBackgroundProps) {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        quality={quality}
        priority={priority}
        sizes="100vw"
        className="object-cover"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
      />
    </div>
  );
}
