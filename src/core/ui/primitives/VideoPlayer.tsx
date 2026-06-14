import { forwardRef, useEffect, type SyntheticEvent } from "react";

interface VideoPlayerProps {
  // Duong dan video tren CDN
  src: string;
  // Vi tri tiep tuc xem (giay) - tua den khi bat dau
  resumePosition?: number;
  // Goi khi thoi gian phat thay doi: (giay hien tai, tong thoi luong)
  onTimeUpdate?: (currentSeconds: number, durationSeconds: number) => void;
  // Cho phep tua qua phan chua xem hay khong
  allowSeekAhead?: boolean;
}

// Trinh phat video dung the <video> chuan, ho tro tiep tuc xem
// va bao tien do ra ngoai de module learning theo doi.
export const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(
  function VideoPlayer({ src, resumePosition = 0, onTimeUpdate }, ref) {
    // Tua den vi tri tiep tuc xem khi video san sang
    useEffect(() => {
      const video = (ref as React.RefObject<HTMLVideoElement>)?.current;
      if (video && resumePosition > 0) {
        const seek = (): void => {
          video.currentTime = resumePosition;
          video.removeEventListener("loadedmetadata", seek);
        };
        video.addEventListener("loadedmetadata", seek);
      }
    }, [ref, resumePosition]);

    // Bao tien do moi khi thoi gian phat thay doi
    function handleTimeUpdate(e: SyntheticEvent<HTMLVideoElement>): void {
      const video = e.currentTarget;
      onTimeUpdate?.(video.currentTime, video.duration || 0);
    }

    return (
      <div className="overflow-hidden rounded-xl bg-black">
        <video
          ref={ref}
          src={src}
          controls
          onTimeUpdate={handleTimeUpdate}
          className="aspect-video w-full"
        >
          Trình duyệt của bạn không hỗ trợ phát video.
        </video>
      </div>
    );
  }
);