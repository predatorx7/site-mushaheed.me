export default function AltBadge(props: any) {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-200 bg-neutral-50 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 no-underline"
    />
  );
}
