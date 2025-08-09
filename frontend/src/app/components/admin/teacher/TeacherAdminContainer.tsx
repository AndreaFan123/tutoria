"use client";

import { Locale } from "@/i18n/request";
import { useState, useEffect } from "react";
import { ApiService } from "@/constants/api";
import { TeacherResponse } from "@/types/auth";

interface TeacherAdminContainerProps {
  teacherId: number;
  locale: Locale;
}

export default function TeacherAdminContainer({
  teacherId,
  locale,
}: TeacherAdminContainerProps) {
  const [teacher, setTeacher] = useState<TeacherResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      try {
        setLoading(true);
        const data = await ApiService.getTeacherById(teacherId);
        if (!cancelled) setTeacher(data);
      } catch (e) {
        if (!cancelled)
          setError(e instanceof Error ? e.message : "Failed to fetch teacher");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [teacherId]);

  return (
    <div>
      <h1 className="text-2xl font-semibold">Teacher Admin</h1>

      {loading && <div className="p-6">Loading...</div>}
      {error && <div className="p-6 text-red-600">{error}</div>}

      {!loading && !error && teacher && (
        <div className="mt-4 space-y-4">
          <div className="space-y-1">
            <div>
              <span className="font-medium">ID:</span> {teacher.id}
            </div>
            <div>
              <span className="font-medium">Email:</span> {teacher.email}
            </div>
            <div>
              <span className="font-medium">Full name:</span>{" "}
              {teacher.full_name || "-"}
            </div>
            <div>
              <span className="font-medium">Subscription:</span>{" "}
              {teacher.subscription_level}
            </div>
            <div>
              <span className="font-medium">Created:</span>{" "}
              {new Date(teacher.created_at).toLocaleString()}
            </div>
            <div>
              <span className="font-medium">Last login:</span>{" "}
              {teacher.last_login_at
                ? new Date(teacher.last_login_at).toLocaleString()
                : "-"}
            </div>
            <div>
              <span className="font-medium">Active:</span>{" "}
              {teacher.is_active ? "Yes" : "No"}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-4">Invite Codes</h2>
            {teacher.invite_codes.length === 0 ? (
              <div className="text-sm text-muted-foreground">
                No invite codes
              </div>
            ) : (
              <ul className="list-disc pl-6">
                {teacher.invite_codes.map((c) => (
                  <li key={c.id}>
                    <span className="font-mono">{c.code}</span> –{" "}
                    {c.is_used ? "Used" : "Unused"}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
