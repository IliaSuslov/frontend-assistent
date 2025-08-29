import SectionPage from "@/widgets/section/ui/SectionPage";
import { SUBJECT_ORDER } from "@/entities/subject/model/fixtures";
import { SubjectKey } from "@/entities/subject/model/types";

type PageProps = {
  params: { section: string };
};

export function generateStaticParams() {
  return SUBJECT_ORDER.map((key) => ({ section: key }));
}

async function SectionRoute({ params }: PageProps) {
  const { section } = await params;

  return <SectionPage section={section as SubjectKey} />;
}

export default SectionRoute;
