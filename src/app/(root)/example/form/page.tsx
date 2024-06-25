import { ContentCard } from "@/components/layout/body/content-card";
import { ContentLayout } from "@/components/layout/body/content-layout";
import React from "react";
import { MyForm } from "./_components/demo-form";
import { BreadcrumbDynamic } from "@/components/dynamic/breadcrumb-dynamic";

const ExampleForm = () => {
  return (
    <ContentLayout title="Example form">
      {/* Breadcrumb is here */}
      <BreadcrumbDynamic
        items={[
          { title: "Home", href: "/" },
          { title: "Example", href: "/example" },
          { title: "Example form" },
        ]}
      />
      {/* Content is here */}
      <ContentCard>
        <MyForm />
      </ContentCard>
    </ContentLayout>
  );
};

export default ExampleForm;
