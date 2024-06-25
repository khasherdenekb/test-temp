import { BreadcrumbDynamic } from "@/components/dynamic/breadcrumb-dynamic";
import { ContentCard } from "@/components/layout/body/content-card";
import { ContentLayout } from "@/components/layout/body/content-layout";

const Example = () => {
  // TODO: ContentLayout-р children хучиж өгнө.
  // TODO: title хэсэгт header гарчиг байрлана.
  return (
    <ContentLayout title="Example">
      {/* Breadcrumb is here */}
      <BreadcrumbDynamic items={[{ title: "Home", href: "/" }, { title: "Example" }]} />
      {/* Content is here */}
      <ContentCard>Хөгжүүлэлт дууссаны дараа энэ хуудсыг устгана уу</ContentCard>
    </ContentLayout>
  );
};

export default Example;
