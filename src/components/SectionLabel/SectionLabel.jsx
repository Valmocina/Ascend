import "./SectionLabel.css";

export default function SectionLabel({ children, color = "#a78bfa", line = "linear-gradient(90deg,#8b5cf6,#10b981)" }) {
  return (
    <div className="section-label mb-5 flex items-center gap-2.5">
      <span className="section-label__line h-0.5 w-6" style={{ background: line }} />
      <span className="text-[0.7rem] font-bold uppercase tracking-[0.15em]" style={{ color }}>{children}</span>
    </div>
  );
}
