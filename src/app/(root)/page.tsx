import { BreadcrumbDynamic } from "@/components/dynamic/breadcrumb-dynamic";
import { ContentCard } from "@/components/layout/body/content-card";
import { ContentLayout } from "@/components/layout/body/content-layout";

export default function HomePage2() {
  return (
    <ContentLayout title="Home">
      <BreadcrumbDynamic
        items={[{ title: "Home2", href: "/" }, { title: "Test", href: "/" }, { title: "Home" }]}
      />
      <ContentCard>Hello from home page</ContentCard>
    </ContentLayout>
  );
}
