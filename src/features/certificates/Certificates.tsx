"use client";
import { Button } from "@/components/Button";
import { certificates } from "@/content/certificates";
import { useViewer } from "../viewer/ViewerProvider";

export function Certificates() {
  const { openDocument } = useViewer();
  return (
    <div className="mt-16">
      <h3 className="font-headline-md text-headline-md text-on-surface mb-space-md">Certificates</h3>
      <ul className="bg-surface-container-lowest rounded-xl shadow-[0_1px_3px_0_rgba(0,0,0,0.03),0_6px_18px_-2px_rgba(0,0,0,0.05)] overflow-hidden divide-y divide-surface-container">
        {certificates.map((c) => (
          <li key={c.title} className="min-h-[52px] px-5 py-3 flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <span className="font-headline-sm text-body-md text-on-surface [text-wrap:pretty]">{c.title}</span>
              <span className="text-sm text-on-surface-variant">{c.issuer}</span>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <span className="text-sm font-headline-sm text-on-surface-variant tabular-nums">{c.year}</span>
              <Button variant="text" onClick={() => openDocument(c.title, c.pdf)} aria-label={`Preview ${c.title} in the document viewer`}>View</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
