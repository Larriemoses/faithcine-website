const steps = [
  ["01", "Name what is happening", "Choose or write what you want to bring to Scripture."],
  ["02", "Read Scripture in context", "Read related passages with references and enough context to understand them."],
  ["03", "Choose how to respond", "Read, listen, study, pray, confess, declare, or combine several activities."],
  ["04", "Save what matters", "Save a note, journal privately, keep a passage, or return to the session later."],
] as const;

export function Flow({ compact = false }: { compact?: boolean }) {
  return (
    <ol className={compact ? "flow flow-compact" : "flow"}>
      {steps.map(([number, title, description]) => (
        <li key={number}>
          <span className="flow-number">{number}</span>
          <div><h3>{title}</h3>{!compact && <p>{description}</p>}</div>
        </li>
      ))}
    </ol>
  );
}
