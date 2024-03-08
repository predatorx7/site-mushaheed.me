export type WorkExperienceData = {
  organizationName: string;
  designationTitle: string;
  years?: { start: string; end?: string };
};

export const WorkExperienceSection = ({
  data,
  children,
}: {
  data: WorkExperienceData;
  children: JSX.Element | JSX.Element[];
}) => {
  let yearsText: string | undefined;
  if (data.years) {
    const { start, end } = data.years;
    yearsText = `, ${start}`;
    if (end) {
      yearsText = `${yearsText} — ${end}`;
    }
  }
  return (
    <>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <h2 className="font-medium text-xl mb-1 tracking-tighter">
        {data.organizationName}
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        {data.designationTitle}
        {yearsText}
      </p>
      {children}
    </>
  );
};
