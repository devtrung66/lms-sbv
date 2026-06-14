import { describe, it, expect, beforeEach } from "vitest";
import { useCourseStore } from "../../state/store";

// Kiem thu tich hop luong tien do tai len o cap trang thai.
describe("courses - luong tai len", () => {
  beforeEach(() => {
    useCourseStore.getState().clearUploads();
  });

  it("them tien do tai len moi", () => {
    useCourseStore.getState().setUploadProgress({
      fileName: "video1.mp4",
      percent: 30,
      status: "uploading",
    });
    expect(useCourseStore.getState().uploads).toHaveLength(1);
    expect(useCourseStore.getState().uploads[0]?.percent).toBe(30);
  });

  it("cap nhat tien do tep da co thay vi them moi", () => {
    const store = useCourseStore.getState();
    store.setUploadProgress({ fileName: "video1.mp4", percent: 30, status: "uploading" });
    store.setUploadProgress({ fileName: "video1.mp4", percent: 80, status: "uploading" });
    expect(useCourseStore.getState().uploads).toHaveLength(1);
    expect(useCourseStore.getState().uploads[0]?.percent).toBe(80);
  });

  it("xoa toan bo tien do", () => {
    useCourseStore.getState().setUploadProgress({
      fileName: "a.mp4",
      percent: 10,
      status: "uploading",
    });
    useCourseStore.getState().clearUploads();
    expect(useCourseStore.getState().uploads).toHaveLength(0);
  });
});