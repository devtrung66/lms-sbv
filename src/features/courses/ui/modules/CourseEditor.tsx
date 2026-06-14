import { useState, useEffect, type ReactElement } from "react";
import { Save } from "lucide-react";
import { validateCourseForm } from "../../lib/validators";
import { useCourseMutation } from "../../hooks/useCourseMutation";
import type { Course, CourseFormValues } from "../../model/types";

interface CourseEditorProps {
  // Khoa hoc dang sua (neu co), khong co thi la tao moi
  course?: Course;
}

// Form thong tin khoa hoc: tieu de, mo ta, co bai kiem tra cuoi khoa.
export function CourseEditor({ course }: CourseEditorProps): ReactElement {
  const { create, update } = useCourseMutation();
  const [values, setValues] = useState<CourseFormValues>({
    title: "",
    description: "",
    hasFinalQuiz: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof CourseFormValues, string>>>({});

  // Nap du lieu khi sua khoa hoc co san
  useEffect(() => {
    if (course) {
      setValues({
        title: course.title,
        description: course.description,
        hasFinalQuiz: course.hasFinalQuiz,
      });
    }
  }, [course]);

  // Xu ly luu
  async function handleSave(): Promise<void> {
    const result = validateCourseForm(values);
    if (!result.valid) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    if (course) {
      await update.mutateAsync({ id: course.id, values });
    } else {
      await create.mutateAsync(values);
    }
  }

  const saving = create.isPending || update.isPending;

  return (
    <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">
        {course ? "Chỉnh sửa khóa học" : "Tạo khóa học mới"}
      </h3>

      <div className="space-y-4">
        {/* Tieu de */}
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-ink">Tên khóa học</span>
          <input
            value={values.title}
            onChange={(e) => setValues((p) => ({ ...p, title: e.target.value }))}
            className="form-input"
          />
          {errors.title && <span className="mt-1 block text-xs text-danger">{errors.title}</span>}
        </label>

        {/* Mo ta */}
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-ink">Mô tả</span>
          <textarea
            value={values.description}
            onChange={(e) => setValues((p) => ({ ...p, description: e.target.value }))}
            rows={4}
            className="form-input resize-none"
          />
          {errors.description && (
            <span className="mt-1 block text-xs text-danger">{errors.description}</span>
          )}
        </label>

        {/* Co bai kiem tra cuoi khoa */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={values.hasFinalQuiz}
            onChange={(e) => setValues((p) => ({ ...p, hasFinalQuiz: e.target.checked }))}
            className="h-4 w-4 rounded border-slate-300 text-brand-500"
          />
          <span className="text-sm text-ink">Có bài kiểm tra cuối khóa (đạt 80% mới qua)</span>
        </label>
      </div>

      <div className="mt-5 flex justify-end">
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-60"
        >
          <Save size={16} /> {saving ? "Đang lưu..." : "Lưu khóa học"}
        </button>
      </div>
    </div>
  );
}