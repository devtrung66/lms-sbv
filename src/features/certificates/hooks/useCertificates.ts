import { useQuery } from "@tanstack/react-query";
import { certificateService } from "../services/certificateService";

export function useCertificates() {
  const query = useQuery({
    queryKey: ["certificates"],
    queryFn: () => certificateService.getList(),
  });
  return { certificates: query.data ?? [], isLoading: query.isLoading };
}