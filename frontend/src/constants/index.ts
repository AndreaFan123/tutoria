// 重新匯出所有 API 相關的常數和型別
export * from "./api";

// 應用程式常數
export const APP_CONSTANTS = {
  // 應用程式名稱
  APP_NAME: "Tutoria",

  // 預設語言
  DEFAULT_LOCALE: "zh-TW",

  // 支援的語言
  SUPPORTED_LOCALES: ["zh-TW", "en-US"] as const,

  // 分頁設定
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 10,
    MAX_PAGE_SIZE: 100,
  },

  // 檔案上傳限制
  UPLOAD: {
    MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
    ALLOWED_AUDIO_TYPES: ["audio/mp3", "audio/wav", "audio/m4a"],
    ALLOWED_IMAGE_TYPES: ["image/jpeg", "image/png", "image/gif"],
  },

  // 表單驗證規則
  VALIDATION: {
    PASSWORD_MIN_LENGTH: 6,
    LOGIN_CODE_MIN_LENGTH: 4,
    NAME_MIN_LENGTH: 1,
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },

  // 本地儲存鍵值
  STORAGE_KEYS: {
    AUTH_TOKEN: "auth_token",
    USER_INFO: "user_info",
    THEME: "theme",
    LOCALE: "locale",
  },

  // 路由路徑
  ROUTES: {
    HOME: "/",
    AUTH: {
      TEACHER_LOGIN: "/auth/teacher/login",
      TEACHER_REGISTER: "/auth/teacher/register",
      STUDENT_LOGIN: "/auth/student/login",
      STUDENT_REGISTER: "/auth/student/register",
    },
    DASHBOARD: {
      TEACHER: "/dashboard/teacher",
      STUDENT: "/dashboard/student",
    },
  },
} as const;

// 錯誤訊息常數
export const ERROR_MESSAGES = {
  // 一般錯誤
  GENERAL: {
    NETWORK_ERROR: "網路連線錯誤，請檢查您的網路連線",
    SERVER_ERROR: "伺服器錯誤，請稍後再試",
    UNKNOWN_ERROR: "發生未知錯誤",
  },

  // 認證錯誤
  AUTH: {
    INVALID_CREDENTIALS: "帳號或密碼錯誤",
    EMAIL_ALREADY_EXISTS: "此電子郵件已被註冊",
    LOGIN_CODE_NOT_FOUND: "登入碼不存在",
    INVALID_INVITE_CODE: "邀請碼無效",
    SESSION_EXPIRED: "登入已過期，請重新登入",
  },

  // 表單驗證錯誤
  VALIDATION: {
    EMAIL_REQUIRED: "請輸入電子郵件",
    EMAIL_INVALID: "請輸入有效的電子郵件格式",
    PASSWORD_REQUIRED: "請輸入密碼",
    PASSWORD_TOO_SHORT: "密碼至少需要6個字元",
    NAME_REQUIRED: "請輸入姓名",
    LOGIN_CODE_REQUIRED: "請輸入登入碼",
    LOGIN_CODE_TOO_SHORT: "登入碼至少需要4個字元",
    INVITE_CODE_REQUIRED: "請輸入邀請碼",
  },
} as const;

// 成功訊息常數
export const SUCCESS_MESSAGES = {
  AUTH: {
    REGISTER_SUCCESS: "註冊成功！",
    LOGIN_SUCCESS: "登入成功！",
    LOGOUT_SUCCESS: "登出成功！",
  },
  GENERAL: {
    SAVE_SUCCESS: "儲存成功！",
    DELETE_SUCCESS: "刪除成功！",
    UPDATE_SUCCESS: "更新成功！",
  },
} as const;
