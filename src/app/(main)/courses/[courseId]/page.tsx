import { CircleProgress } from "@/app/(main)/courses/[courseId]/circle-progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activities } from "./activities";

export default async function Course({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const courseId = (await params).courseId;

  return (
    <>
      <section className="max-w-[1000px] mx-auto flex flex-col gap-5">
        <section className="flex flex-col gap-1">
          <section className="flex justify-between items-center">
            <h2 className="text-3xl">{courseId.replaceAll("%20", " ")}</h2>
            <CircleProgress percent={100}></CircleProgress>
          </section>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            magnam officiis ipsa ratione deleniti voluptates optio esse
            veritatis quod itaque! Ducimus blanditiis quia modi saepe iste id
            sed optio aliquam.
          </p>
        </section>

        <Tabs defaultValue="activitites" className="flex flex-col gap-2">
          <div className="border-b">
            <TabsList className="[&>*]:data-[state=active]:bg-slate-300 [&>*]:rounded-b-none bg-white p-0">
              <TabsTrigger value="activitites">Activities</TabsTrigger>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="activitites">
            <Activities></Activities>
          </TabsContent>
          <TabsContent value="tasks">Tasks</TabsContent>
        </Tabs>
      </section>
    </>
  );
}
