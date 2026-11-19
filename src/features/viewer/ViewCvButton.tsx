"use client";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { site } from "@/content/site";
import { useViewer } from "./ViewerProvider";

export function ViewCvButton() {
  const { openDocument } = useViewer();
  return (
    <Button variant="neutral" onClick={() => openDocument("Curriculum Vitae", site.cv)} className="h-12 px-space-lg text-body-md border-0 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <Icon name="document" /> <span>View CV</span>
    </Button>
  );
}
