import { CourseCard } from "@/components/custom/custom-card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Home() {
  const courses = [
    {
      name: "Data Structures and Algorithms",
      description: "Lorem ipsum dolor sit amet",
      progress: 100,
    },
    {
      name: "Agile Methodology and Practices",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aperiam reprehenderit id. Obcaecati ducimus sunt repellendus tenetur autem in itaque. Pariatur ullam maxime possimus ex neque sit ea blanditiis iure?",
      progress: 40,
    },
    {
      name: "ASP.NET Web Api",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aperiam reprehenderit id. Obcaecati ducimus sunt repellendus tenetur autem in itaque. Pariatur ullam maxime possimus ex neque sit ea blanditiis iure?",
      progress: 20,
    },
    {
      name: "Fundamentals of Angular",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aperiam reprehenderit id. Obcaecati ducimus sunt repellendus tenetur autem in itaque. Pariatur ullam maxime possimus ex neque sit ea blanditiis iure?",
      progress: 15,
    },
  ];

  return (
    <>
      <section className="flex flex-col gap-5">

        <Collapsible defaultOpen>
          <section className="max-w-[1250px] mx-auto flex flex-col gap-2">
            <CollapsibleTrigger className="text-left border-b-1"><h2 className="text-3xl">Your Courses</h2></CollapsibleTrigger>
            <CollapsibleContent>
              <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {courses.map((course, key) => (
                  <CourseCard key={key} courseDetails={course}></CourseCard>
                ))}
              </section>
            </CollapsibleContent>
          </section>
        </Collapsible>

        <Collapsible defaultOpen>
          <section className="max-w-[1250px] mx-auto flex flex-col gap-2">
            <CollapsibleTrigger className="text-left border-b-1"><h2 className="text-3xl">Completed Courses</h2></CollapsibleTrigger>
            <CollapsibleContent>
              <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {courses.map((course, key) => (
                  <CourseCard key={key} courseDetails={course}></CourseCard>
                ))}
              </section>
            </CollapsibleContent>
          </section>
        </Collapsible>

      </section>
    </>
  );
}
