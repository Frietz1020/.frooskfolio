"use client";
import { useEffect } from "react";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { useViewer } from "./ViewerProvider";

export function DocumentViewer() {
  const { selectedDocument, closeDocument, onDialogClose, dialogRef } = useViewer();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedDocument && !dialog.open) dialog.showModal();
    if (!selectedDocument && dialog.open) dialog.close();
  }, [dialogRef, selectedDocument]);

  return (
    <dialog
      ref={dialogRef}
      className="viewer"
      aria-labelledby="document-viewer-title"
      onClose={onDialogClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeDocument();
      }}
    >
      {selectedDocument && (
        <>
          <header className="viewer__header">
            <h2 id="document-viewer-title" className="font-headline-sm text-on-surface truncate">{selectedDocument.title}</h2>
            <Button variant="neutral" onClick={closeDocument} aria-label="Close document viewer">
              <Icon name="close" /> <span>Close</span>
            </Button>
          </header>
          <iframe
            key={selectedDocument.pdf}
            src={selectedDocument.pdf}
            title={`PDF viewer: ${selectedDocument.title}`}
            className="viewer__frame"
          />
        </>
      )}
    </dialog>
  );
}
