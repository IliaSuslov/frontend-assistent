import Link from "next/link";
import { LABELS, SUBJECT_ORDER } from "@/entities/subject/model/fixtures";

export default function Home() {
  return (
    <main className="p-6">
      <title>Home page</title>
      <h1 className="text-2xl font-semibold mb-4">Frontend Assistant</h1>
      <section>
        <article>
          <h3 className="text-2xl pb-2">Зачем?</h3>
          <p className="flex flex-wrap">
            Это сборник всех вопросов которые могут спросить на собесе, так что будь добр запомнить
            это, оно может пригодиться как на собесе, так и в работе. Все на свете запомнить невозможно, но надо стараться.
          </p>
        </article>
      </section>
    </main>
  );
}
