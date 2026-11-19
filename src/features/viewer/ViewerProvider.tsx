"use client";
import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";

export type SelectedDocument = { title: string; pdf: string };
type ViewerContextValue = {
  selectedDocument: SelectedDocument | null;
  openDocument(title: string, pdf: string): void;
  closeDocument(): void;
  onDialogClose(): void;
  dialogRef: React.RefObject<HTMLDialogElement | null>;
};

const ViewerContext = createContext<ViewerContextValue | null>(null);

export function useViewer(): ViewerContextValue {
  const context = useContext(ViewerContext);
  if (!context) throw new Error("useViewer must be used inside ViewerProvider");
  return context;
}

export function ViewerProvider({ children }: { children: ReactNode }) {
  const [selectedDocument, setSelectedDocument] = useState<SelectedDocument | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const restoreFocus = useCallback(() => {
    const opener = openerRef.current;
    openerRef.current = null;
    if (opener?.isConnected) opener.focus();
  }, []);

  const openDocument = useCallback((title: string, pdf: string) => {
    openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setSelectedDocument({ title, pdf });
  }, []);

  const closeDocument = useCallback(() => {
    if (dialogRef.current?.open) dialogRef.current.close();
    setSelectedDocument(null);
    restoreFocus();
  }, [restoreFocus]);

  const onDialogClose = useCallback(() => {
    setSelectedDocument(null);
    restoreFocus();
  }, [restoreFocus]);

  const value = useMemo(() => ({ selectedDocument, openDocument, closeDocument, onDialogClose, dialogRef }), [selectedDocument, openDocument, closeDocument, onDialogClose]);

  return <ViewerContext.Provider value={value}>{children}</ViewerContext.Provider>;
}
