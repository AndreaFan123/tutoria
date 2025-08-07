import {
  ApiErrorResponse,
  StudentLoginRequest,
  StudentRegisterRequest,
  StudentResponse,
  TeacherLoginRequest,
  TeacherRegisterRequest,
  TeacherResponse,
  TokenResponse,
} from "@/types/auth";

// API 基礎 URL
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

// API 端點
export const API_ENDPOINTS = {
  // 老師相關 API
  TEACHER: {
    REGISTER: "/auth/teacher/register",
    LOGIN: "/auth/teacher/login",
  },
  // 學生相關 API
  STUDENT: {
    REGISTER: "/auth/student/register",
    LOGIN: "/auth/student/login",
  },
} as const;

// API 請求函數
export class ApiService {
  private static async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;

    const defaultOptions: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, defaultOptions);

      if (!response.ok) {
        const errorData: ApiErrorResponse = await response.json();
        throw new Error(
          errorData.detail || `HTTP error! status: ${response.status}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  // 老師註冊
  static async registerTeacher(
    data: TeacherRegisterRequest
  ): Promise<TeacherResponse> {
    return this.request<TeacherResponse>(API_ENDPOINTS.TEACHER.REGISTER, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // 老師登入
  static async loginTeacher(data: TeacherLoginRequest): Promise<TokenResponse> {
    return this.request<TokenResponse>(API_ENDPOINTS.TEACHER.LOGIN, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // 學生註冊
  static async registerStudent(
    data: StudentRegisterRequest
  ): Promise<StudentResponse> {
    return this.request<StudentResponse>(API_ENDPOINTS.STUDENT.REGISTER, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // 學生登入
  static async loginStudent(
    data: StudentLoginRequest
  ): Promise<StudentResponse> {
    return this.request<StudentResponse>(API_ENDPOINTS.STUDENT.LOGIN, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }
}
