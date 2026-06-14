import { apiClient } from "@/core/api/client";
import type { Certificate } from "../model/types";

interface RawCertificate {
  id: string;
  course_title: string;
  learner_name: string;
  score: number;
  issued_at: string;
  certificate_code: string;
}

function toCertificate(raw: RawCertificate): Certificate {
  return {
    id: raw.id,
    courseTitle: raw.course_title,
    learnerName: raw.learner_name,
    score: raw.score,
    issuedAt: raw.issued_at,
    certificateCode: raw.certificate_code,
  };
}

export const certificateService = {
  async getList(): Promise<Certificate[]> {
    const raws = await apiClient.get<RawCertificate[]>("/certificates");
    return raws.map(toCertificate);
  },
};