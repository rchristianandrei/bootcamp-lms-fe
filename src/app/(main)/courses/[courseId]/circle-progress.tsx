interface CircleProgressProps {
  percent: number;
}

export function CircleProgress({ percent }: CircleProgressProps) {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center w-15 h-15 rounded-full p-1"
      style={{
        background: `conic-gradient(#4caf50 ${percent * 3.6}deg, #e5e7eb 0deg)`
      }}
    >
      <div className="bg-white w-full h-full rounded-full flex items-center justify-center">
          <span className="text-lg font-bold text-gray-800">
            {percent}%
          </span>
      </div>
    </div>
  );
}
