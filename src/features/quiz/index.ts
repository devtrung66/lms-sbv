// API cong khai cua module quiz.
export { useQuiz } from "./hooks/useQuiz";
export { useQuizAttempt } from "./hooks/useQuizAttempt";
export { useQuizResult } from "./hooks/useQuizResult";
export { quizService } from "./services/quizService";
export { gradingService } from "./services/gradingService";
export { attemptService } from "./services/attemptService";

// Thanh phan UI dung lai
export { ScoreBadge } from "./ui/components/ScoreBadge";

export type { Quiz, Question, QuestionType, QuizResult, UserAnswer } from "./model/types";