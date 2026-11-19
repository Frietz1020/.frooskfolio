"use client";
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { submitContact } from "./submitContact";
import { validate, type ContactErrors, type ContactValues } from "./validate";

type Status = "idle" | "sending" | "sent" | "error";
const FIELDS = [
  { key: "name", label: "Name", type: "text", placeholder: "Your name" },
  { key: "email", label: "Email", type: "email", placeholder: "you@example.com" },
  { key: "message", label: "Message", type: "textarea", placeholder: "What are you building?" },
] as const;
const control = "w-full px-space-md bg-surface-container rounded-lg text-body-md text-on-surface placeholder:text-on-surface-variant focus:bg-surface-container-lowest focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary border border-transparent transition-all";

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [shake, setShake] = useState<keyof ContactValues | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [honey, setHoney] = useState("");
  const refs = useRef<Record<string, HTMLElement | null>>({});
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => { if (status === "sent") heading.current?.focus(); }, [status]);

  async function send() {
    if (honey) { setStatus("sent"); return; } // bot: pretend success, send nothing
    setStatus("sending");
    try { await submitContact(values); setStatus("sent"); } catch { setStatus("error"); }
  }
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    const first = FIELDS.map((f) => f.key).find((k) => errs[k]);
    if (first) { refs.current[first]?.focus(); setShake(first); return; }
    void send();
  }
  function onChange(key: keyof ContactValues) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const next = { ...values, [key]: e.target.value };
      setValues(next);
      if (errors[key]) setErrors((p) => ({ ...p, [key]: validate(next)[key] }));
    };
  }

  if (status === "sent")
    return (
      <div role="status" className="py-16 flex flex-col items-center text-center gap-space-md animate-pulse-once">
        <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary"><Icon name="check" className="size-6" /></div>
        <h3 ref={heading} tabIndex={-1} className="font-headline-sm text-headline-sm text-on-surface focus:outline-none">Message sent</h3>
        <p className="text-body-md text-on-surface-variant max-w-md">Thanks for reaching out. I’ll reply as soon as I can.</p>
        <Button variant="text" onClick={() => { setValues({ name: "", email: "", message: "" }); setStatus("idle"); }}>Send another message</Button>
      </div>
    );

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-space-md">
      {FIELDS.map((f) => {
        const err = errors[f.key];
        const id = `contact-${f.key}`;
        const common = {
          id, name: f.key, value: values[f.key], onChange: onChange(f.key), placeholder: f.placeholder, required: true,
          "aria-invalid": err ? true : undefined, "aria-describedby": err ? `${id}-error` : undefined,
          className: `${control} ${err ? "border-error" : ""}`,
        };
        return (
          <div key={f.key} className={shake === f.key ? "animate-shake" : ""} onAnimationEnd={() => setShake(null)}>
            <label htmlFor={id} className="block text-sm font-headline-sm text-on-surface mb-2">{f.label}</label>
            <div className="relative">
              {f.type === "textarea"
                ? <textarea ref={(el) => { refs.current[f.key] = el; }} rows={5} {...common} className={`${common.className} p-space-md resize-y`} />
                : <input ref={(el) => { refs.current[f.key] = el; }} type={f.type} autoComplete={f.key} {...common} className={`${common.className} h-12 min-h-[44px]`} />}
              {err && <span className="absolute right-3 top-3 text-error"><Icon name="error" /></span>}
            </div>
            {err && <p id={`${id}-error`} role="alert" className="text-sm text-error mt-1.5 font-medium">{err}</p>}
          </div>
        );
      })}
      <div className="hidden" aria-hidden="true">
        <label>Company<input tabIndex={-1} autoComplete="off" name="company" value={honey} onChange={(e) => setHoney(e.target.value)} /></label>
      </div>
      {status === "error" && (
        <div role="alert" className="rounded-lg bg-error-container text-error px-space-md py-3 flex items-center justify-between gap-space-md">
          <span className="font-medium">Message not sent</span>
          <Button variant="neutral" onClick={() => void send()}>Try again</Button>
        </div>
      )}
      <button type="submit" disabled={status === "sending"}
        className="btn-tap h-12 min-h-[44px] px-space-lg inline-flex items-center justify-center gap-2 bg-secondary text-on-secondary font-headline-sm text-body-md rounded-xl hover:bg-secondary-container hover:text-on-secondary-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-60 disabled:cursor-not-allowed">
        {status === "sending" ? "Sending your message" : "Send message"}
      </button>
    </form>
  );
}
