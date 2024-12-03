'use client';

export function Checkbox({ id, checked, onCheckedChange, className }) {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
      className={`h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500 ${className}`}
    />
  );
} 