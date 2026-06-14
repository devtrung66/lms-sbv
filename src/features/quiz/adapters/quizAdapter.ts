import type { Quiz, Question, QuestionType, AnswerOption } from "../model/types";
import type { RawQuiz, RawQuestion, RawAnswerOption } from "../api/queries";

// Chuyen loai cau hoi dang chuoi sang kieu co kiem soat
function mapQuestionType(raw: string): QuestionType {
  const value = raw.toLowerCase();
  if (value === "multiple_choice") return "multiple_choice";
  if (value === "true_false") return "true_false";
  return "single_choice";
}

// Mapping mot lua chon dap an
function toAnswerOption(raw: RawAnswerOption): AnswerOption {
  return { id: raw.id, content: raw.content };
}

// Mapping mot cau hoi
function toQuestion(raw: RawQuestion): Question {
  return {
    id: raw.id,
    content: raw.content,
    type: mapQuestionType(raw.type),
    options: raw.options.map(toAnswerOption),
    points: raw.points,
  };
}

// Mapping de bai kiem tra
export function toQuiz(raw: RawQuiz): Quiz {
  return {
    id: raw.id,
    courseId: raw.course_id,
    title: raw.title,
    questions: raw.questions.map(toQuestion),
    durationMinutes: raw.duration_minutes,
    passThreshold: raw.pass_threshold,
    maxAttempts: raw.max_attempts,
  };
}