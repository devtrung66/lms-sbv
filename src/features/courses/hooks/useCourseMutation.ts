import { useMutation, useQueryClient } from "@tanstack/react-query";
import { courseService } from "../services/courseService";
import { COURSE_LIST_KEY } from "./useCourseList";
import type { CourseFormValues } from "../model/types";

// Hook gom cac thao tac ghi (tao/sua/xoa/xuat ban) khoa hoc.
export function useCourseMutation() {
  const queryClient = useQueryClient();

  function invalidateList(): void {
    void queryClient.invalidateQueries({ queryKey: [COURSE_LIST_KEY] });
  }

  const createMutation = useMutation({
    mutationFn: (values: CourseFormValues) => courseService.create(values),
    onSuccess: invalidateList,
  });

  const updateMutation = useMutation({
    mutationFn: (input: { id: string; values: CourseFormValues }) =>
      courseService.update(input.id, input.values),
    onSuccess: invalidateList,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => courseService.remove(id),
    onSuccess: invalidateList,
  });

  const publishMutation = useMutation({
    mutationFn: (id: string) => courseService.publish(id),
    onSuccess: invalidateList,
  });

  return {
    create: createMutation,
    update: updateMutation,
    remove: deleteMutation,
    publish: publishMutation,
  };
}