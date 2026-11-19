export type ContactValues = { name: string; email: string; message: string };
export type ContactErrors = Partial<Record<keyof ContactValues, string>>;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function validate(v: ContactValues): ContactErrors {
  const e: ContactErrors = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!EMAIL.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (!v.message.trim()) e.message = "Please describe what you are building.";
  return e;
}
