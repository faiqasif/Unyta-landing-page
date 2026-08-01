"use client";

import { formatDateTime } from "@/lib/admin/format";
import { DataTable } from "../_components/DataTable";
import { useSubmissions } from "../_components/useSubmissions";
import { PageHeader } from "../_components/ui";
import { EmailCell, NameCell, Tag } from "../_components/cells";

const COLUMNS = [
  {
    key: "brandName",
    header: "Brand",
    cell: (row) => <NameCell name={row.brandName} secondary={row.fullName} />,
    csv: (row) => row.brandName,
    search: (row) => `${row.brandName ?? ""} ${row.fullName ?? ""}`,
    sortValue: (row) => (row.brandName ?? "").toLowerCase(),
  },
  {
    key: "workEmail",
    header: "Work email",
    cell: (row) => <EmailCell email={row.workEmail} />,
    csv: (row) => row.workEmail,
    search: (row) => row.workEmail,
    sortValue: (row) => (row.workEmail ?? "").toLowerCase(),
  },
  {
    key: "industry",
    header: "Industry",
    cell: (row) => (row.industry ? <Tag tone="brand">{row.industry}</Tag> : <span className="text-stone-400">—</span>),
    csv: (row) => row.industry,
    search: (row) => row.industry,
    sortValue: (row) => (row.industry ?? "").toLowerCase(),
  },
  {
    key: "numberOfLocations",
    header: "Locations",
    cell: (row) => <Tag>{row.numberOfLocations || "—"}</Tag>,
    csv: (row) => row.numberOfLocations,
    search: (row) => row.numberOfLocations,
    sortValue: (row) => row.numberOfLocations ?? "",
    hideBelow: "lg",
  },
  {
    key: "estimatedCampaignsPerMonth",
    header: "Campaigns / mo",
    cell: (row) => <Tag>{row.estimatedCampaignsPerMonth || "—"}</Tag>,
    csv: (row) => row.estimatedCampaignsPerMonth,
    search: (row) => row.estimatedCampaignsPerMonth,
    sortValue: (row) => row.estimatedCampaignsPerMonth ?? "",
    hideBelow: "lg",
  },
  {
    key: "createdAt",
    header: "Requested",
    cell: (row) => (
      <span className="whitespace-nowrap font-light tabular-nums text-stone-600">
        {formatDateTime(row.createdAt)}
      </span>
    ),
    csv: (row) => row.createdAt,
    sortValue: (row) => row.createdAt?.getTime() ?? null,
  },
  {
    key: "notes",
    header: "Notes",
    cell: () => null,
    csv: (row) => row.notes,
    search: (row) => row.notes,
    hideBelow: "always",
  },
];

// The notes column only exists for search and CSV — details live in the expanded row.
const VISIBLE_COLUMNS = COLUMNS.filter((column) => column.hideBelow !== "always");

function Details({ row }) {
  const items = [
    ["Contact", row.fullName],
    ["Work email", row.workEmail],
    ["Industry", row.industry],
    ["Locations", row.numberOfLocations],
    ["Campaigns per month", row.estimatedCampaignsPerMonth],
    ["Requested", formatDateTime(row.createdAt)],
  ];

  return (
    <div className="flex flex-col gap-4">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
        {items.map(([label, value]) => (
          <div key={label}>
            <dt className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-[#741717]">
              {label}
            </dt>
            <dd className="mt-0.5 font-sans text-[13px] text-[#22000C]">{value || "—"}</dd>
          </div>
        ))}
      </dl>
      <div>
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-[#741717]">
          Notes
        </p>
        <p className="mt-1 max-w-[720px] whitespace-pre-wrap font-sans text-[13px] font-light leading-relaxed text-stone-600">
          {row.notes || "No notes provided."}
        </p>
      </div>
    </div>
  );
}

export default function AdminDemoRequestsPage() {
  const { data, loading, refreshing, error, refresh } = useSubmissions("demoRequests");

  return (
    <>
      <PageHeader
        title="Demo Requests"
        subtitle="Brands that asked for a walkthrough from the guidance section."
      />
      <DataTable
        columns={VISIBLE_COLUMNS}
        rows={data}
        loading={loading}
        refreshing={refreshing}
        error={error}
        onRefresh={refresh}
        csvName="unyta-demo-requests.csv"
        searchPlaceholder="Search brand, contact, industry or notes…"
        emptyTitle="No demo requests yet"
        emptyBody="Requests from the “Book a demo” form will appear here."
        expandedRender={(row) => <Details row={row} />}
      />
    </>
  );
}
