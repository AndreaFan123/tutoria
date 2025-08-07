import serviceStudent from "@/public/assets/landing/service_student.svg";
import serviceTeacher from "@/public/assets/landing/service_teacher.svg";

export const services = [
  {
    role: "For Teachers",
    description:
      "Create and manage teaching materials, organize students, and track progress with comprehensive analytics and collaboration tools.",
    image: serviceTeacher,
    imageDes: "Service for student",
  },
  {
    role: "For Student",
    description:
      "Access learning materials, take interactive notes, submit assignments, and collaborate with peers in a streamlined learning environment.",
    image: serviceStudent,
    imageDes: "Service for teacher",
  },
];

export const teacherTools = [
  {
    title: "Flexible Plans",
    description: "Choose from Free, Basic, or Pro subscription plans",
  },
  {
    title: "Material Management",
    description: "Create, edit, and organize all your teaching content",
  },
  {
    title: "Student Management",
    description: "Track progress and manage your student roster",
  },
  {
    title: "Invite System",
    description: "Generate secure invite codes for seamless student onboarding",
  },
];

export const studentTools = [
  {
    title: "Easy Access",
    description: "Join using teacher-provided invite codes",
  },
  {
    title: "Interactive Learning",
    description: "Access materials with note-taking capabilities",
  },
  {
    title: "Collaboration",
    description: "Leave comments and engage with content",
  },
  {
    title: "Assignment Submission",
    description: "Submit work directly through the platform",
  },
];
