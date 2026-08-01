"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import { downloadCsv } from "@/lib/admin/format";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DownloadIcon,
  RefreshIcon,
  SearchIcon,
  SortIcon,
} from "./icons";
import { Alert, Card, EmptyState, PillButton, SkeletonRows, Spinner, inputClassName } from "./ui";

const PAGE_SIZE = 12;

/**
 * Columns: { key, header, cell(row), csv(row), sortValue(row), search(row), className, hideBelow }
 */
export function DataTable({
  columns,
  rows,
  loading,
  refreshing,
  error,
  onRefresh,
  csvName,
  searchPlaceholder = "Search…",
  emptyTitle = "Nothing here yet",
  emptyBody,
  expandedRender,
}) {
  const [term, setTerm] = useState("");
  const [sort, setSort] = useState({ key: "createdAt", direction: "desc" });
  const [page, setPage] = useState(1);
  const [expandedId, setExpandedId] = useState(null);

  const filtered = useMemo(() => {
    const needle = term.trim().toLowerCase();
    if (!needle) return rows;
    return rows.filter((row) =>
      columns.some((column) => {
        const value = column.search ? column.search(row) : column.csv?.(row);
        return value ? String(value).toLowerCase().includes(needle) : false;
      })
    );
  }, [rows, columns, term]);

  const sorted = useMemo(() => {
    const column = columns.find((item) => item.key === sort.key);
    if (!column?.sortValue) return filtered;
    const factor = sort.direction === "asc" ? 1 : -1;
    return [...filtered].sort((a, b) => {
      const left = column.sortValue(a);
      const right = column.sortValue(b);
      if (left === right) return 0;
      if (left === null || left === undefined) return 1;
      if (right === null || right === undefined) return -1;
      return left > right ? factor : -factor;
    });
  }, [filtered, columns, sort]);

  const pageCount = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));

  useEffect(() => {
    setPage(1);
  }, [term, sort.key, sort.direction, rows.length]);

  const visible = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function toggleSort(column) {
    if (!column.sortValue) return;
    setSort((previous) =>
      previous.key === column.key
        ? { key: column.key, direction: previous.direction === "asc" ? "desc" : "asc" }
        : { key: column.key, direction: "desc" }
    );
  }

  return (
    <Card className="p-0 sm:p-0">
      <div className="flex flex-wrap items-center gap-2.5 border-b border-stone-100 p-4 sm:p-5">
        <div className="relative min-w-0 flex-1 sm:max-w-[320px]">
          <SearchIcon
            width={17}
            height={17}
            className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-stone-400"
          />
          <input
            type="search"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            placeholder={searchPlaceholder}
            className={`${inputClassName} pl-12 sm:pl-13`}
          />
        </div>
        <span className="font-sans text-xs font-light text-stone-500">
          {sorted.length} of {rows.length}
        </span>
        <div className="ml-auto flex items-center gap-2">
          {onRefresh && (
            <PillButton variant="secondary" onClick={onRefresh} disabled={refreshing || loading}>
              {refreshing ? <Spinner /> : <RefreshIcon width={16} height={16} />}
              Refresh
            </PillButton>
          )}
          <PillButton
            variant="secondary"
            onClick={() => downloadCsv(csvName, columns, sorted)}
            disabled={!sorted.length}
          >
            <DownloadIcon width={16} height={16} />
            Export CSV
          </PillButton>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        {error ? (
          <Alert tone="error">
            Could not load this collection. Publish the rules from firestore.rules in Firebase Console
            → Firestore → Rules, then refresh.
          </Alert>
        ) : loading ? (
          <SkeletonRows rows={6} />
        ) : !rows.length ? (
          <EmptyState title={emptyTitle} body={emptyBody} />
        ) : !sorted.length ? (
          <EmptyState title="No matches" body={`Nothing matches “${term}”.`} />
        ) : (
          <div
            className={`transition-opacity duration-200 ${refreshing ? "opacity-60" : "opacity-100"}`}
          >
            <div className="-mx-1 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-stone-200">
                    {columns.map((column) => {
                      const active = sort.key === column.key;
                      return (
                        <th
                          key={column.key}
                          scope="col"
                          aria-sort={
                            active
                              ? sort.direction === "asc"
                                ? "ascending"
                                : "descending"
                              : "none"
                          }
                          className={`px-3 py-2.5 font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-stone-500 ${
                            column.hideBelow === "lg" ? "hidden lg:table-cell" : ""
                          } ${column.hideBelow === "sm" ? "hidden sm:table-cell" : ""}`}
                        >
                          {column.sortValue ? (
                            <button
                              onClick={() => toggleSort(column)}
                              className={`inline-flex items-center gap-1.5 transition-colors hover:text-[#741717] ${
                                active ? "text-[#741717]" : ""
                              }`}
                            >
                              {column.header}
                              <SortIcon width={13} height={13} className={active ? "" : "opacity-40"} />
                            </button>
                          ) : (
                            column.header
                          )}
                        </th>
                      );
                    })}
                    {expandedRender && <th className="w-10" />}
                  </tr>
                </thead>
                <tbody>
                  {visible.map((row) => {
                    const expanded = expandedId === row.id;
                    return (
                      <Fragment key={row.id}>
                        <tr className="border-b border-stone-100 transition-colors last:border-0 hover:bg-[#F5F2F1]/70">
                          {columns.map((column) => (
                            <td
                              key={column.key}
                              className={`px-3 py-3 align-middle font-sans text-[13px] text-[#22000C] ${
                                column.className ?? ""
                              } ${column.hideBelow === "lg" ? "hidden lg:table-cell" : ""} ${
                                column.hideBelow === "sm" ? "hidden sm:table-cell" : ""
                              }`}
                            >
                              {column.cell(row)}
                            </td>
                          ))}
                          {expandedRender && (
                            <td className="px-2 py-3 text-right">
                              <button
                                onClick={() => setExpandedId(expanded ? null : row.id)}
                                aria-expanded={expanded}
                                aria-label={expanded ? "Hide details" : "Show details"}
                                className="rounded-full p-1.5 text-stone-400 transition-colors hover:bg-stone-100 hover:text-[#741717]"
                              >
                                <ChevronRightIcon
                                  width={16}
                                  height={16}
                                  className={`transition-transform ${expanded ? "rotate-90" : ""}`}
                                />
                              </button>
                            </td>
                          )}
                        </tr>
                        {expandedRender && expanded && (
                          <tr className="border-b border-stone-100 bg-[#F5F2F1]/50">
                            <td colSpan={columns.length + 1} className="px-3 py-4">
                              {expandedRender(row)}
                            </td>
                          </tr>
                        )}
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {pageCount > 1 && (
              <div className="mt-4 flex items-center justify-between gap-3 border-t border-stone-100 pt-4">
                <span className="font-sans text-xs font-light text-stone-500">
                  Page {page} of {pageCount}
                </span>
                <div className="flex items-center gap-2">
                  <PillButton
                    variant="secondary"
                    onClick={() => setPage((current) => Math.max(1, current - 1))}
                    disabled={page === 1}
                    className="px-3"
                  >
                    <ChevronLeftIcon width={16} height={16} />
                    Prev
                  </PillButton>
                  <PillButton
                    variant="secondary"
                    onClick={() => setPage((current) => Math.min(pageCount, current + 1))}
                    disabled={page === pageCount}
                    className="px-3"
                  >
                    Next
                    <ChevronRightIcon width={16} height={16} />
                  </PillButton>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
