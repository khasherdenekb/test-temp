import { ContentLayout } from "@/components/layout/content-layout";
import ContentCard from "@/components/layout/content-card";
import { BreadcrumbDynamic } from "@/components/dynamic/breadcrumb-dynamic";
import PostTable from "./_components/post-table";

const PostPage = () => {
  return (
    <ContentLayout title="Posts">
      <BreadcrumbDynamic
        items={[{ title: "Home", href: "/" }, { title: "Posts" }]}
      />
      <ContentCard>
        <PostTable />
      </ContentCard>
    </ContentLayout>
  );
};

export default PostPage;
