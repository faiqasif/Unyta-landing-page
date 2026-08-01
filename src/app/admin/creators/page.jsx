"use client";

import { formatDateTime } from "@/lib/admin/format";
import { DataTable } from "../_components/DataTable";
import { useSubmissions } from "../_components/useSubmissions";
import { PageHeader } from "../_components/ui";
import { EmailCell, InstagramCell, NameCell } from "../_components/cells";

const COLUMNS = [
  {
    key: "fullName",
    header: "Full name",
    cell: (row) => <NameCell name={row.fullName} />,
    csv: (row) => row.fullName,
    search: (row) => row.fullName,
    sortValue: (row) => (row.fullName ?? "").toLowerCase(),
  },
  {
    key: "email",
    header: "Email",
    cell: (row) => <EmailCell email={row.email} />,
    csv: (row) => row.email,
    search: (row) => row.email,
    sortValue: (row) => (row.email ?? "").toLowerCase(),
  },
  {
    key: "instagramHandle",
    header: "Instagram",
    cell: (row) => <InstagramCell handle={row.instagramHandle} />,
    csv: (row) => (row.instagramHandle ? `@${row.instagramHandle}` : ""),
    search: (row) => row.instagramHandle,
    sortValue: (row) => (row.instagramHandle ?? "").toLowerCase(),
    hideBelow: "sm",
  },
  {
    key: "createdAt",
    header: "Applied",
    cell: (row) => (
      <span className="whitespace-nowrap font-light tabular-nums text-stone-600">
        {formatDateTime(row.createdAt)}
      </span>
    ),
    csv: (row) => row.createdAt,
    sortValue: (row) => row.createdAt?.getTime() ?? null,
  },
];

export default function AdminCreatorsPage() {
  const { data, loading, refreshing, error, refresh } = useSubmissions("creators");

  return (
    <>
      <PageHeader
        title="Creators"
        subtitle="Creator applications submitted through the early access form."
      />
      <DataTable
        columns={COLUMNS}
        rows={data}
        loading={loading}
        refreshing={refreshing}
        error={error}
        onRefresh={refresh}
        csvName="unyta-creators.csv"
        searchPlaceholder="Search name, email or handle…"
        emptyTitle="No creator applications yet"
        emptyBody="Applications from the “Join as a Creator” form will appear here."
      />
    </>
  );
}
