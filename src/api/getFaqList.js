import { questionAnswer } from "@/data/question_answer";

export async function getFaqList() {
  return questionAnswer;
}

