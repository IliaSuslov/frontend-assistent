import Link from "next/link";
import { LABELS, SUBJECT_ORDER } from "@/entities/subject/model/fixtures";

export default function Home() {
  return (
    <main className="p-6">
      <title>Home page</title>
      <h1 className="text-2xl font-semibold mb-4">Frontend Assistant</h1>
      <ul className="list-disc pl-6 space-y-1">
        {SUBJECT_ORDER.map((key) => (
          <li key={key}>
            <Link className="hover:underline" href={`/${key}`}>
              {LABELS[key]}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
