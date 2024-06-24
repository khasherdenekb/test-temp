import { ContentLayout } from "@/components/layout/content-layout";
import ContentCard from "@/components/layout/content-card";
import { BreadcrumbDynamic } from "@/components/dynamic/breadcrumb-dynamic";

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
