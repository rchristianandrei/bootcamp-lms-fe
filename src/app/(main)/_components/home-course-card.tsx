import Link from "next/link";

function randomLightColor() {
  const h = Math.floor(Math.random() * 360); // any hue
  const s = 70; // good saturation
  const l = 85; // high lightness = light colors
  return `hsl(${h}, ${s}%, ${l}%)`;
}

export function HomeCourseCard(props: {
  courseDetails: { name: string; description: string; progress: number };
}) {
  return (
    <>
      <section
        className="border rounded flex flex-col"
        style={{ backgroundColor: `${randomLightColor()}` }}
      >
        <section className="border-b-1 px-1 hover:underline cursor-pointer active:no-underline">
          <Link
            className="w-full"
            href={`/courses/${props.courseDetails.name}`}
          >
            <h3 className="text-lg font-bold">{props.courseDetails.name}</h3>
          </Link>
        </section>
        <p className="p-1 line-clamp-5 flex-1 text-sm">
          {props.courseDetails.description}
        </p>
        <section className="border-t-1 px-1 flex items-center gap-1">
          <div className="rounded h-3 flex-1">
            <div
              className="bg-green-600 rounded h-full"
              style={{ width: `${props.courseDetails.progress}%` }}
            ></div>
          </div>
          <p>{props.courseDetails.progress}%</p>
        </section>
      </section>
    </>
  );
}
