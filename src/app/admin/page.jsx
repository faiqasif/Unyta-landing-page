"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  RANGE_PRESETS,
  countBy,
  percentChange,
  previousWindow,
  recentActivity,
  sparkline,
  timeSeries,
  withinRange,
} from "@/lib/admin/analytics";
import { formatRelative } from "@/lib/admin/format";
import { RangeFilter } from "./_components/RangeFilter";
import { useSubmissions } from "./_components/useSubmissions";
import { useAdminAuth } from "./_components/AdminAuthProvider";
import { CategoryBars } from "./_components/charts/CategoryBars";
import { OrdinalColumns } from "./_components/charts/OrdinalColumns";
import { StatTile } from "./_components/charts/StatTile";
import { SubmissionsTrend } from "./_components/charts/SubmissionsTrend";
import { RefreshIcon } from "./_components/icons";
import { Alert, Card, CardHeading, EmptyState, PageHeader, PillButton, Spinner } from "./_components/ui";

const SERIES = [
  { key: "creators", label: "Creators", color: "var(--series-1)", href: "/admin/creators" },
  { key: "brands", label: "Brands", color: "var(--series-2)", href: "/admin/brands" },
  { key: "demoRequests", label: "Demo requests", color: "var(--series-3)", href: "/admin/demo-requests" },
];

const LOCATION_BUCKETS = ["1", "2–5", "6–10", "11–25", "26+"];
const CAMPAIGN_BUCKETS = ["1–2", "3–5", "6–10", "11–20", "20+"];

const SOURCE_LABELS = {
  creators: "Creator",
  brands: "Brand",
  demoRequests: "Demo request",
};

export default function AdminDashboardPage() {
  const { profile } = useAdminAuth();
  const { data, loading, refreshing, error, refresh } = useSubmissions("all");
  // All time by default so the panel always opens on real submissions, however
  // long ago they came in; narrower presets are one click away.
  const [rangeId, setRangeId] = useState("all");

  const range = RANGE_PRESETS.find((preset) => preset.id === rangeId) ?? RANGE_PRESETS[1];
  const days = range.days;

  const scoped = useMemo(
    () => ({
      creators: withinRange(data.creators, days),
      brands: withinRange(data.brands, days),
      demoRequests: withinRange(data.demoRequests, days),
    }),
    [data, days]
  );

  const stats = useMemo(() => {
    const build = (key) => {
      const current = scoped[key];
      const previous = previousWindow(data[key], days);
      return {
        total: current.length,
        allTime: data[key].length,
        delta: days ? percentChange(current.length, previous.length) : undefined,
        spark: sparkline(current, days ?? 90),
      };
    };
    const creators = build("creators");
    const brands = build("brands");
    const demoRequests = build("demoRequests");
    const totalCurrent = creators.total + brands.total + demoRequests.total;
    const totalPrevious =
      previousWindow(data.creators, days).length +
      previousWindow(data.brands, days).length +
      previousWindow(data.demoRequests, days).length;
    return {
      creators,
      brands,
      demoRequests,
      total: {
        total: totalCurrent,
        delta: days ? percentChange(totalCurrent, totalPrevious) : undefined,
        spark: sparkline(
          [...scoped.creators, ...scoped.brands, ...scoped.demoRequests],
          days ?? 90
        ),
      },
    };
  }, [data, scoped, days]);

  const series = useMemo(() => timeSeries(scoped, days), [scoped, days]);
  const industries = useMemo(() => countBy(scoped.demoRequests, "industry"), [scoped]);
  const locations = useMemo(
    () => countBy(scoped.demoRequests, "numberOfLocations", LOCATION_BUCKETS),
    [scoped]
  );
  const campaigns = useMemo(
    () => countBy(scoped.demoRequests, "estimatedCampaignsPerMonth", CAMPAIGN_BUCKETS),
    [scoped]
  );
  const activity = useMemo(() => recentActivity(scoped, 8), [scoped]);

  const previousPeriodLabel = days ? `previous ${days} days` : null;
  const hasAnyData =
    data.creators.length + data.brands.length + data.demoRequests.length > 0;

  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle={`Welcome back${profile?.name ? `, ${profile.name.split(" ")[0]}` : ""}. Here's what came in from the site.`}
      >
        <PillButton variant="secondary" onClick={refresh} disabled={refreshing || loading}>
          {refreshing ? <Spinner /> : <RefreshIcon width={16} height={16} />}
          Refresh
        </PillButton>
      </PageHeader>

      {error && (
        <div className="mb-6">
          <Alert tone="error">
            Could not load submissions. Publish the rules from firestore.rules in Firebase Console →
            Firestore → Rules, then refresh.
          </Alert>
        </div>
      )}

      {/* Filters scope every stat, chart and list below */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <RangeFilter value={rangeId} onChange={setRangeId} />
        <span className="font-sans text-xs font-light text-stone-500">
          {range.label} · {stats.total.total} submission{stats.total.total === 1 ? "" : "s"}
        </span>
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-[148px] animate-pulse rounded-[24px] bg-white/70" />
          ))}
        </div>
      ) : (
        <div
          className={`transition-opacity duration-200 ${refreshing ? "opacity-60" : "opacity-100"}`}
        >
          {/* KPI row — one hero figure, then the three sources */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatTile
              hero
              label="Total submissions"
              value={stats.total.total}
              delta={stats.total.delta}
              deltaPeriod={previousPeriodLabel}
              sparkline={stats.total.spark}
            />
            <StatTile
              label="Creator applications"
              value={stats.creators.total}
              delta={stats.creators.delta}
              deltaPeriod={previousPeriodLabel}
              sparkline={stats.creators.spark}
            />
            <StatTile
              label="Brand applications"
              value={stats.brands.total}
              delta={stats.brands.delta}
              deltaPeriod={previousPeriodLabel}
              sparkline={stats.brands.spark}
            />
            <StatTile
              label="Demo requests"
              value={stats.demoRequests.total}
              delta={stats.demoRequests.delta}
              deltaPeriod={previousPeriodLabel}
              sparkline={stats.demoRequests.spark}
            />
          </div>

          <Card className="mt-4">
            <CardHeading
              title="Submissions over time"
              subtitle={
                series.bucketDays > 1
                  ? "Grouped by week across the selected range"
                  : "One column per day across the selected range"
              }
            />
            {hasAnyData ? (
              <SubmissionsTrend buckets={series.buckets} series={SERIES} />
            ) : (
              <EmptyState
                title="Nothing yet"
                body="Creator and brand applications submitted on the site will appear here."
              />
            )}
          </Card>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeading title="Demo requests by industry" subtitle="Across the selected range" />
              <CategoryBars rows={industries} emptyLabel="No demo requests in this range." />
            </Card>

            <Card className="flex flex-col gap-6">
              <div>
                <CardHeading title="Locations per brand" subtitle="Ordered bands" />
                <OrdinalColumns rows={locations} emptyLabel="No demo requests in this range." />
              </div>
              <div className="border-t border-stone-100 pt-5">
                <CardHeading title="Campaigns per month" subtitle="Estimated by the brand" />
                <OrdinalColumns rows={campaigns} emptyLabel="No demo requests in this range." />
              </div>
            </Card>
          </div>

          <Card className="mt-4">
            <CardHeading title="Latest activity" subtitle="Newest submissions first">
              <div className="flex flex-wrap gap-2">
                {SERIES.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="rounded-full border border-stone-200 px-3 py-1.5 font-sans text-xs font-medium text-[#741717] transition-colors hover:border-[#741717]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </CardHeading>
            {activity.length ? (
              <ul className="divide-y divide-stone-100">
                {activity.map((row) => (
                  <li key={`${row.source}-${row.id}`} className="flex items-center gap-3 py-3">
                    <span
                      aria-hidden
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{
                        background: SERIES.find((item) => item.key === row.source)?.color,
                      }}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-sans text-sm font-medium text-[#22000C]">
                        {row.fullName || row.brandName || "—"}
                      </span>
                      <span className="block truncate font-sans text-xs font-light text-stone-500">
                        {SOURCE_LABELS[row.source]} ·{" "}
                        {row.email || row.workEmail || row.instagramHandle || "—"}
                      </span>
                    </span>
                    <span className="shrink-0 font-sans text-xs font-light text-stone-500">
                      {formatRelative(row.createdAt)}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <EmptyState
                title="No activity in this range"
                body="Widen the date range to see older submissions."
              />
            )}
          </Card>
        </div>
      )}
    </>
  );
}
