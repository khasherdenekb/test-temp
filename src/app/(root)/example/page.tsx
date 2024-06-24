import ContentCard from "@/components/layout/content-card";
import { ContentLayout } from "@/components/layout/content-layout";
import { BreadcrumbDynamic } from "@/components/dynamic/breadcrumb-dynamic";

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
