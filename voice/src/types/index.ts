export type LoginFormData = { email: string; password: string };
export type SignupFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export type ContactUsFormData = {
  firstName: string;
  lastName: string;
  email: string;
  profession: string;
  message: string;
};
export type ConversationData = {
  id: number,
  created_at: string,
  updated_at: string,
  session_id: string,
  project_id: number,
  name: string
}
export type MessageData = {
  id: number;
  created_at: string;
  updated_at: string;
  user_query: string;
  openai_response: string;
  audioBase64: string | undefined;
  citations: string[]
};
export type ChatbotApplicationFormData = {
  name: string;
  email: string;
  attachement: string | File;
}
export type ProfileData = {
  firstName: string;
  lastName: string;
  email: string;
};
export type UserSuspensionData = {
  isSuspended: boolean;
  date?: string | null;
  duration?: string | null;
};
export type SubscribedData = {
  id: string;
  name: string;
  chatbotId: string;
  subscribedAt: string;
  duration: string;
};
