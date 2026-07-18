import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AuroraBackground from "@/components/AuroraBackground";
import ProjectDetail from "@/components/ProjectDetail";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Saadgi Puniwala`,
    description: project.tagline,
    openGraph: {
      title: project.name,
      description: project.tagline,
      images: [project.cover],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <AuroraBackground />
      <Nav />
      <main>
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  );
}
