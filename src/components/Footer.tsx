import Container from "./Container";
import { personal } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Currently Open To */}
      <div className="border-t border-gray-100 py-8 text-center">
        <Container>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Currently Open To
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Software Engineer Roles", "Frontend Roles", "Backend Roles", "Full Stack Opportunities"].map((item) => (
              <span
                key={item}
                className="text-sm text-gray-600 bg-gray-50 border border-gray-200 px-4 py-1.5 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </Container>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 py-6">
        <Container className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-400">
          <span>© {new Date().getFullYear()} {personal.name}. All rights reserved.</span>
          <a href="#" className="hover:text-gray-900 transition-colors duration-150">
            Back to top ↑
          </a>
        </Container>
      </div>
    </footer>
  );
}
