"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export type AccordionItem = {
  id: string;
  label: string;
  description?: string;
  image?: StaticImageData;
  code?: { lang?: string; content: string }[];
};

type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const toggleItem = (itemId: string) => {
    setOpenItemId((current) => (current === itemId ? null : itemId));
  };

  return (
    <section className="w-full justify-center md:max-w-2/3 mx-auto">
      {items.map((item) => {
        const isOpen = item.id === openItemId;
        const buttonId = `accordion-header-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;
        return (
          <article key={item.id} className="border-b border-foreground/20">
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                className="w-full text-left py-3 flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
              >
                <span className="font-medium">{item.label}</span>
                <span className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
                  ▼
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div
                className="flex flex-col gap-3 overflow-hidden pb-4 text-sm text-foreground/80 transition-opacity duration-300 ease-in-out"
                style={{ opacity: isOpen ? 1 : 0 }}
              >
                {item.description}
                {item.code?.map((snip, i) => (
                  <pre key={i} className="bg-foreground/5 rounded p-3 overflow-x-auto text-sm">
                    <code>{snip.content}</code>
                  </pre>
                ))}
                {item.image && <Image src={item.image} alt={"image"} />}
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
