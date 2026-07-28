"use client";

import { IPostMeta } from "@/lib/types";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type paginationProps = {
  postMeta: IPostMeta;
};

export const NewsPagination = ({ postMeta }: paginationProps) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>

        {Array.from({ length: postMeta.totalPages }, (_, idx: number) => (
          <PaginationItem key={idx + 1}>
            <PaginationLink href="#">{idx + 1}</PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
