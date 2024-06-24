"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

type BreadcrumbDynamicProps = {
  title: string;
  href?: string;
};

export const BreadcrumbDynamic = ({ items }: { items: BreadcrumbDynamicProps[] }) => (
  <Breadcrumb>
    <BreadcrumbList>
      {items?.map(({ title, href }, i) => (
        <React.Fragment key={i}>
          <BreadcrumbItem>
            {href ? (
              <BreadcrumbLink asChild>
                <Link href={href}>{title}</Link>
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage>{title}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
          {i < items.length - 1 && <BreadcrumbSeparator />}
        </React.Fragment>
      ))}
    </BreadcrumbList>
  </Breadcrumb>
);
