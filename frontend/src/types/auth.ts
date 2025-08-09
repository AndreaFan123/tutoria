// 老師訂閱等級
export enum SubscriptionLevel {
  FREE = "free",
  BASIC = "basic",
  PRO = "pro",
}

// #region Teacher
// Teacher register type
export interface TeacherRegisterRequest {
  email: string;
  password: string;
  full_name?: string;
  subscription_level?: SubscriptionLevel;
}

// Teacher login type
export interface TeacherLoginRequest {
  email: string;
  password: string;
}

// Invite Code type
export interface InviteCode {
  id: number;
  code: string;
  is_used: boolean;
}

// Teacher Response Type
export interface TeacherResponse {
  id: number;
  email: string;
  full_name?: string;
  subscription_level: SubscriptionLevel;
  created_at: string; // ISO datetime string
  last_login_at?: string; // ISO datetime string
  is_active: boolean;
  invite_codes: InviteCode[];
}

// #endregion

// #region Student

// Student register type
export interface StudentRegisterRequest {
  name: string;
  login_code: string;
  invite_code: string;
}

// Student login type
export interface StudentLoginRequest {
  login_code: string;
}

// Student response type
export interface StudentResponse {
  id: number;
  name: string;
  login_code: string;
  invite_code: string;
  teacher_id: number;
}

// Token response type
export interface TokenResponse {
  access_token: string;
  token_type: string;
  teacher_id: number;
}

// API error response type
export interface ApiErrorResponse {
  detail: string;
}
