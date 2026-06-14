import { describe, it, expect } from "vitest";
import { validateCourseForm } from "../../lib/validators";
import { formatFileSize, countLessonsByType } from "../../lib/utils";
import { mediaUploadService } from "../../services/mediaUploadService";
import type { Lesson } from "../../model/types";

// Kiem thu don vi cho validator, tien ich va kiem tra tep cua module courses.
describe("courses - validators", () => {
  it("chap nhan khoa hoc co tieu de", () => {
    const result = validateCourseForm({
      title: "Nghiệp vụ thanh tra",
      description: "Mô tả khóa học",
      hasFinalQuiz: true,
    });
    expect(result.valid).toBe(true);
  });

  it("tu choi khoa hoc thieu tieu de", () => {
    const result = validateCourseForm({
      title: "",
      description: "",
      hasFinalQuiz: false,
    });
    expect(result.valid).toBe(false);
  });
});

describe("courses - utils", () => {
  it("dinh dang dung luong tep", () => {
    expect(formatFileSize(512)).toBe("512 B");
    expect(formatFileSize(1536)).toBe("1.5 KB");
    expect(formatFileSize(1572864)).toBe("1.5 MB");
  });

  it("dem so bai hoc theo loai", () => {
    const lessons = [
      { type: "video" },
      { type: "video" },
      { type: "slide" },
    ] as Lesson[];
    const counts = countLessonsByType(lessons);
    expect(counts.video).toBe(2);
    expect(counts.slide).toBe(1);
  });
});

describe("courses - kiem tra tep tai len", () => {
  it("tu choi tep sai dinh dang video", () => {
    const file = new File(["x"], "tep.txt", { type: "text/plain" });
    const result = mediaUploadService.validate(file, "video");
    expect(result.ok).toBe(false);
  });

  it("chap nhan tep mp4 hop le", () => {
    const file = new File(["x"], "bai-giang.mp4", { type: "video/mp4" });
    const result = mediaUploadService.validate(file, "video");
    expect(result.ok).toBe(true);
  });
});