interface ChevronLeftProps {
  width?: number;
  height?: number;
}

export const ChevronLeft: React.FC<ChevronLeftProps> = ({
  width = 10,
  height = 18,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 10 18"
  >
    <path
      stroke="#47585B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 17L1 9l8-8"
    />
  </svg>
);
