export function Field({ label, error, hint, children }) {
  return (
    <div className="space-y-1">
      {label && <label className="text-sm font-medium">{label}</label>}

      {children}

      {error ? (
        <p className="text-sm text-red-500">{error}</p>
      ) : hint ? (
        <p className="text-sm text-gray-500">{hint}</p>
      ) : null}
    </div>
  );
}
