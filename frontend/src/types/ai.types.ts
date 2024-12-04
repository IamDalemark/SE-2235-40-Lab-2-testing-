export type AIOutputOption = "summary" | "flashcards";

// export type SupportedFileType =
//   | "application/pdf"
//   | "plain/text"
//   | "image/jpeg"
//   | "image/png";

// export type AIInputType = "text" | SupportedFileType;

export interface GenerateAIResponseProps {
  input: File | string;
  outputOption: AIOutputOption;
}

export interface GenerateSummaryResponse {
  title: string;
  content: string;
}

export interface GeneratedFlashcard {
  front: string;
  back: string;
}

export interface GenerateFlashcardsResponse {
  flashcards: Array<GeneratedFlashcard>;
}

export type AIResponse =
  | null
  | GenerateSummaryResponse
  | GenerateFlashcardsResponse;
