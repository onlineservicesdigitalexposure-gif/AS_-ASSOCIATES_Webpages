import { siteInfo } from "../data/siteInfo.js";

export default function FloatingWhatsAppButton() {
  // wa.me needs digits only — no "+", spaces, or punctuation.
  const whatsappNumber = siteInfo.phoneRaw.replace(/[^\d]/g, "");
  const message = encodeURIComponent(
    `Hello. I am seeking legal assistance and would like to know more about the services offered by ${siteInfo.firmName}. I would appreciate it if you could share some details.`
  );

  return (
    
    <a href={`https://wa.me/${whatsappNumber}?text=${message}`}
    target="_blank"
    rel="noopener noreferrer"
    className="float-whatsapp"
    aria-label={`Message ${siteInfo.firmName} on WhatsApp`}
    >
    <span className="float-whatsapp__ring" aria-hidden="true" />
    <svg className="float-whatsapp__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
        d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.7 0-3.28-.48-4.62-1.31l-.33-.2-3 .79.8-2.92-.21-.34A8.18 8.18 0 0 1 3.8 12 8.2 8.2 0 1 1 12 20.2zm4.52-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z"
        fill="currentColor"
        />
    </svg>
    </a>
  );
}