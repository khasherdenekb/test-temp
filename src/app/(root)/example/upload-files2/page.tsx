import { ContentLayout } from "@/components/layout/content-layout";
import React from "react";
import ContentCard from "@/components/layout/content-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BreadcrumbDynamic } from "@/components/dynamic/breadcrumb-dynamic";
import { UploaderDynamic } from "@/components/dynamic/uploader-dynamic";

const UploadFilesPage2 = () => {
  return (
    <ContentLayout title="Upload files">
      {/* Breadcrumb is here */}
      <BreadcrumbDynamic
        items={[
          { title: "Home", href: "/" },
          { title: "Example", href: "/example" },
          { title: "Upload files 2" },
        ]}
      />
      {/* Content is here */}
      <ContentCard>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Upload Files</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Upload your files</DialogTitle>
                <DialogDescription>The only file upload you will ever need</DialogDescription>
              </DialogHeader>
              <div className="w-full">
                <UploaderDynamic />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </ContentCard>
    </ContentLayout>
  );
};

export default UploadFilesPage2;
