import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function AppSidebar() {
  return (
    <Collapsible defaultOpen className="group/collapsible">
      <CollapsibleTrigger>Help</CollapsibleTrigger>
      <CollapsibleContent>asdajnajla</CollapsibleContent>
    </Collapsible>
  );
}
