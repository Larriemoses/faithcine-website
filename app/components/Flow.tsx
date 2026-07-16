const steps = [
  ["01", "Name the moment", "Say what you are facing."],
  ["02", "Receive Scripture", "See passages with references."],
  ["03", "Choose a response", "Study, pray, meditate, or reflect."],
  ["04", "Remain and reflect", "Listen, save a truth, or journal."],
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
