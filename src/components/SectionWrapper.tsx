import { ReactNode } from "react";
import Container from "./Container";

interface Props {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, title, children, className = "" }: Props) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <Container className="animate-fade-up">
        <h2 className="text-2xl font-bold text-gray-900 mb-1 tracking-tight">{title}</h2>
        <div className="w-8 h-0.5 bg-gray-200 mb-10" />
        {children}
      </Container>
    </section>
  );
}
