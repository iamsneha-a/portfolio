import { Code, Server, Monitor, Database, Wrench } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { skills } from "@/data/portfolio";

const categoryConfig: Record<string, { icon: React.ReactNode; color: string }> = {
  "Programming Languages": {
    icon: <Code className="w-4 h-4" />,
    color: "text-gray-600",
  },
  "Backend Technologies": {
    icon: <Server className="w-4 h-4" />,
    color: "text-blue-500",
  },
  "Frontend Technologies": {
    icon: <Monitor className="w-4 h-4" />,
    color: "text-purple-500",
  },
  Databases: {
    icon: <Database className="w-4 h-4" />,
    color: "text-green-500",
  },
  "Tools & Libraries": {
    icon: <Wrench className="w-4 h-4" />,
    color: "text-orange-500",
  },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Skills" className="bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
        {skills.map((group) => (
          <div
            key={group.category}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 hover:shadow-md hover:border-gray-300 transition-all duration-200 animate-fade-up"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className={categoryConfig[group.category]?.color ?? "text-gray-500"}>
                {categoryConfig[group.category]?.icon}
              </span>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                {group.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs text-gray-700 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-md hover:bg-gray-200 hover:border-gray-300 transition-all duration-150 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
