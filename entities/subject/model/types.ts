import { StaticImageData } from "next/image";

export type SubjectKey =
  | "html"
  | "css"
  | "js"
  | "ts"
  | "react"
  | "vue"
  | "nextjs"
  | "nuxtjs"
  | "http"
  | "git"
  | "cicd"
  | "browser"
  | "render"
  | "algorithms"
  | "api"
  | "security"
  | "architecture"
  | "project_repository"
  | "testing"
  | "database"
  | "system_design";

export type SubjectRule = {
  id: string;
  label: string;
  description?: string;
  image?: StaticImageData;
  code?: Array<{
    lang?: string;
    content: string;
  }>;
};

export type Subject = {
  key: SubjectKey;
  title: string;
  rules: SubjectRule[];
};
