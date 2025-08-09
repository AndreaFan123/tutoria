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
export const API_BASE_URL = process.env.API_ENDPOINT || "http://localhost:8000";

// API 端點
export const API_ENDPOINTS = {
  // 老師相關 API
  TEACHER: {
    REGISTER: "/auth/teacher/register",
    LOGIN: "/auth/teacher/login",
    INFO: (id: number) => `/auth/teacher/${id}`,
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
      // Attach Authorization header if access token exists (client-side only)
      const token =
        typeof window !== "undefined"
          ? window.localStorage.getItem("access_token")
          : null;
      const headers = new Headers(defaultOptions.headers);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      const response = await fetch(url, { ...defaultOptions, headers });
      const contentType = response.headers.get("content-type") || "";

      if (!response.ok) {
        let message = `HTTP error! status: ${response.status}`;
        try {
          if (contentType.includes("application/json")) {
            const errorData: ApiErrorResponse = await response.json();
            message = errorData.detail || message;
          } else {
            const text = await response.text();
            message = text || message;
          }
        } catch {
          // noop, fall back to default message
        }
        throw new Error(message);
      }

      if (response.status === 204) {
        // No content
        return undefined as unknown as T;
      }

      if (contentType.includes("application/json")) {
        return await response.json();
      }

      const text = await response.text();
      throw new Error(
        `Unexpected non-JSON response from API. Verify NEXT_PUBLIC_API_URL points to your FastAPI server. Status: ${
          response.status
        }. Body: ${text.slice(0, 200)}`
      );
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

  // 取得老師資訊
  static async getTeacherById(id: number): Promise<TeacherResponse> {
    return this.request<TeacherResponse>(API_ENDPOINTS.TEACHER.INFO(id), {
      method: "GET",
      cache: "no-store",
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
