interface Props {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  isLink?: string;
}

export const InfoItem = ({ icon, label, value, isLink }: Props) => {
  const content = (
    <div className="flex items-center gap-2">
      {icon}
      <span>{value}</span>
    </div>
  );

  return (
    <div className="rounded-md border bg-card p-3 shadow-sm">
      <p className="mb-1 text-xs font-medium text-muted-foreground">{label}</p>
      {isLink ? (
        <a
          href={isLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-primary hover:underline"
        >
          {content}
        </a>
      ) : (
        <div className="text-sm font-medium">{content}</div>
      )}
    </div>
  );
};
