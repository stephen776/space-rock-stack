interface TableProps {
  children: React.ReactNode;
}

export default function Table({children}: TableProps) {
  return (
    <div className="overflow-x-auto rounded shadow-none sm:shadow">
      <table className="flex table w-full flex-row flex-nowrap">{children}</table>
    </div>
  );
}
