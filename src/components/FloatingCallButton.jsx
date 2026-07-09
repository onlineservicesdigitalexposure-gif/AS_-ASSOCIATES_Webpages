import { siteInfo } from "../data/siteInfo.js";

export default function FloatingCallButton() {
  return (
    
    <a  href={`tel:${siteInfo.phoneRaw}`}
      className="float-call"
      aria-label={`Call ${siteInfo.firmName} at ${siteInfo.phoneDisplay}`}
    >
      <span className="float-call__ring" aria-hidden="true" />
      <svg className="float-call__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}
