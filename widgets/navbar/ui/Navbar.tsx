import Link from "next/link";
import { LABELS, SUBJECT_ORDER } from "@/entities/subject/model/fixtures";

export default function Navbar() {
  return (
    <nav className="border-b border-foreground/20">
      <div className="max-w-2/3 mx-auto px-4 py-3 flex gap-4 flex-wrap">
        <Link href="/" className="font-semibold mr-4">
          Assistant
        </Link>
        {SUBJECT_ORDER.map((key) => (
          <Link key={key} href={`/${key}`} className="text-md hover:underline">
            {LABELS[key]}
          </Link>
        ))}
      </div>
    </nav>
  );
}
