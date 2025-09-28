import { cn } from "@/libs/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // grid with spacing
        "relative mt-[200px] mx-auto grid max-w-7xl grid-cols-1 gap-60 gap-y-20 md:auto-rows-[40rem] md:grid-cols-2 pb-10",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-2xl border border-black bg-white p-4 transition duration-200 hover:shadow-xl dark:border-black bg-gradient-to-r from-blue-200 to-purple-200",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 ">
        {icon}
        <div className="mt-2 mb-2 font-sans text-xl font-bold dark:text-black-600">
          {title}
        </div>
        <div className="font-sans text-m font-normal  dark:text-black-600">
          {description}
        </div>
      </div>
    </div>
  );
};
