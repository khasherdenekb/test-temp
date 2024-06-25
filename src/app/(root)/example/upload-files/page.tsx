import { ContentLayout } from "@/components/layout/body/content-layout";
import React from "react";
import { ContentCard } from "@/components/layout/body/content-card";
import { BreadcrumbDynamic } from "@/components/dynamic/breadcrumb-dynamic";
import { UploaderDynamic } from "@/components/dynamic/uploader-dynamic";

const UploadFilesPage = () => {
  return (
    <ContentLayout title="Upload files">
      {/* Breadcrumb is here */}
      <BreadcrumbDynamic
        items={[
          { title: "Home", href: "/" },
          { title: "Example", href: "/example" },
          { title: "Upload files" },
        ]}
      />
      {/* Content is here */}
      <ContentCard>
        <div className="flex w-full items-center justify-center gap-2">
          <div className="w-[500px]">
            <UploaderDynamic />
          </div>
        </div>
      </ContentCard>
    </ContentLayout>
  );
};

export default UploadFilesPage;
