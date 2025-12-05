import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account">
      <div className="border-b">
          <TabsList className="[&>*]:data-[state=active]:bg-slate-300 [&>*]:rounded-b-none bg-white p-0">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
      </div>
      <TabsContent value="account">Activities</TabsContent>
      <TabsContent value="password">Tasks</TabsContent>
    </Tabs>
  );
}
