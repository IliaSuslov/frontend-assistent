import Accordion from "@/shared/ui/accordion/Accordion";
import { getSubject } from "@/entities/subject/model/fixtures";
import { SubjectKey } from "@/entities/subject/model/types";

type SectionPageProps = {
  section: SubjectKey;
};

export default function SectionPage({ section }: SectionPageProps) {
  const subject = getSubject(section);
  if (!subject) return null;

  return (
    <main className="p-6">
      <title>{subject.title}</title>
      <article className="text-2xl font-semibold mb-4">{subject.title} Assistant</article>
      <Accordion
        items={subject.rules.map((r) => ({
          id: r.id,
          label: r.label,
          description: r.description,
          image: r.image,
          code: r.code,
        }))}
      />
    </main>
  );
}
