"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
  Trash2
} from 'lucide-react';
import Spinner from '@/components/ui/spinner';

/**
 * Interface for column configuration
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Column<T = any> {
  /** Unique key for the column */
  key: string;
  /** Header text to display */
  header: string;
  /** Whether the column is sortable */
  sortable?: boolean;
  /** Custom render function for the cell */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (value: any, row: T, index: number) => React.ReactNode;
  /** CSS class for the column */
  className?: string;
}

/**
 * Interface for pagination configuration
 */
export interface PaginationConfig {
  /** Current page number (1-based) */
  currentPage: number;
  /** Number of items per page */
  itemsPerPage: number;
  /** Total number of items */
  totalItems: number;
  /** Function to handle page change */
  onPageChange: (page: number) => void;
  /** Function to handle items per page change */
  onItemsPerPageChange?: (itemsPerPage: number) => void;
  /** Available options for items per page */
  itemsPerPageOptions?: number[];
}

/**
 * Interface for search configuration
 */
export interface SearchConfig {
  /** Current search query */
  query: string;
  /** Function to handle search query change */
  onQueryChange: (query: string) => void;
  /** Placeholder text for search input */
  placeholder?: string;
  /** Whether search is debounced (for server-side search) */
  debounced?: boolean;
  /** Debounce delay in milliseconds */
  debounceDelay?: number;
}

/**
 * Interface for bulk actions configuration
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface BulkActionsConfig<T = any> {
  /** Whether bulk actions are enabled */
  enabled: boolean;
  /** Function to handle bulk delete */
  onDelete?: (selectedIds: string[]) => Promise<void> | void;
  /** Custom render function for bulk actions */
  render?: (selectedIds: string[], selectedRows: T[], clearSelection: () => void) => React.ReactNode;
}

/**
 * Interface for DataTable props
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface DataTableProps<T = any> {
  /** Array of data items */
  data: T[];
  /** Column configuration */
  columns: Column<T>[];
  /** Unique identifier field for each row */
  idField: string;
  /** Pagination configuration */
  pagination?: PaginationConfig;
  /** If true, parent provides already-paginated data; table won't slice */
  serverSide?: boolean;
  /** Search configuration */
  search?: SearchConfig;
  /** Bulk actions configuration */
  bulkActions?: BulkActionsConfig<T>;
  /** Whether to show row selection checkboxes */
  showSelection?: boolean;
  /** CSS class for the table container */
  className?: string;
  /** Whether the table is loading */
  loading?: boolean;
  /** Message to display when no data is available */
  emptyMessage?: string;
  /** Function to handle row click */
  onRowClick?: (row: T, index: number) => void;
  /** Whether rows are clickable */
  clickableRows?: boolean;
}

/**
 * Reusable DataTable component with pagination, search, and bulk actions
 * 
 * Features:
 * - Client-side and server-side pagination
 * - Full row search (client-side and server-side)
 * - Bulk delete functionality
 * - Custom headers and row rendering
 * - Responsive design
 * 
 * @example
 * ```tsx
 * const columns: Column<Page>[] = [
 *   { key: 'title', header: 'Title', sortable: true },
 *   { key: 'slug', header: 'Slug' },
 *   { 
 *     key: 'status', 
 *     header: 'Status',
 *     render: (value) => (
 *       <span className={`px-2 py-1 rounded text-xs ${
 *         value === 'published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
 *       }`}>
 *         {value}
 *       </span>
 *     )
 *   },
 * ];
 * 
 * <DataTable
 *   data={pages}
 *   columns={columns}
 *   idField="id"
 *   pagination={{
 *     currentPage: 1,
 *     itemsPerPage: 10,
 *     totalItems: 100,
 *     onPageChange: handlePageChange
 *   }}
 *   search={{
 *     query: searchQuery,
 *     onQueryChange: handleSearchChange,
 *     placeholder: "Search pages..."
 *   }}
 *   bulkActions={{
 *     enabled: true,
 *     onDelete: handleBulkDelete
 *   }}
 *   showSelection={true}
 * />
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  idField,
  pagination,
  serverSide = false,
  search,
  bulkActions,
  showSelection = false,
  className = '',
  loading = false,
  emptyMessage = 'No data available',
  onRowClick,
  clickableRows = false,
}: DataTableProps<T>) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState(search?.query || '');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const selectionEnabled = showSelection && (bulkActions?.enabled ?? true);

  // Handle search debouncing for server-side search
  useEffect(() => {
    if (search?.debounced) {
      const timer = setTimeout(() => {
        setDebouncedQuery(searchQuery);
        search.onQueryChange(searchQuery);
      }, search.debounceDelay || 300);

      return () => clearTimeout(timer);
    } else {
      setDebouncedQuery(searchQuery);
      if (search) {
        search.onQueryChange(searchQuery);
      }
    }
  }, [searchQuery, search]);

  // Handle search for client-side filtering
  const filteredData = useMemo(() => {
    // If search is debounced, we assume the parent component is handling filtering
    if (search?.debounced) {
      return data;
    }

    // If no search or search query is empty, return all data
    if (!search || !searchQuery.trim()) {
      return data;
    }

    // Otherwise, filter the data
    const query = searchQuery.toLowerCase();
    return data.filter((row) => {
      return Object.values(row).some((value) => {
        if (value === null || value === undefined) return false;
        return String(value).toLowerCase().includes(query);
      });
    });
  }, [data, search, searchQuery]);

  // Handle pagination for client-side pagination
  const paginatedData = useMemo(() => {
    if (!pagination) {
      return filteredData;
    }
    if (serverSide) {
      return filteredData;
    }
    const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
    const endIndex = startIndex + pagination.itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, pagination, serverSide]);

  // Handle row selection
  const handleSelectAll = useCallback((checked: boolean | "indeterminate") => {
    if (!selectionEnabled) return;
    // If indeterminate, treat as checked to select all
    if (checked === true || checked === "indeterminate") {
      const allIds = paginatedData.map((row) => String(row[idField]));
      setSelectedIds(allIds);
    } else {
      setSelectedIds([]);
    }
  }, [paginatedData, idField, selectionEnabled]);

  const handleSelectRow = useCallback((id: string, checked: boolean) => {
    if (!selectionEnabled) return;
    if (checked) {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((selectedId) => selectedId !== id));
    }
  }, [selectionEnabled]);

  const handleBulkDelete = useCallback(async () => {
    if (bulkActions?.onDelete && selectedIds.length > 0) {
      await bulkActions.onDelete(selectedIds);
      setSelectedIds([]);
    }
  }, [bulkActions, selectedIds]);

  const clearSelection = useCallback(() => {
    setSelectedIds([]);
  }, []);

  // Calculate pagination info
  // For client-side pagination, use filtered data length
  // For server-side pagination, use totalItems from props
  const actualTotalItems = pagination?.totalItems || filteredData.length;
  const totalPages = pagination ? Math.ceil(actualTotalItems / pagination.itemsPerPage) : 1;
  const isAllSelected = selectionEnabled && paginatedData.length > 0 && selectedIds.length === paginatedData.length;
  const isIndeterminate = selectionEnabled && selectedIds.length > 0 && selectedIds.length < paginatedData.length;

  // Determine the checked state for the select all checkbox
  const selectAllCheckedState = isIndeterminate ? "indeterminate" : isAllSelected;

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Search and Bulk Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {search && (
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder={search.placeholder || 'Search...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        )}

        {bulkActions?.enabled && selectionEnabled && selectedIds.length > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              {selectedIds.length} item{selectedIds.length > 1 ? 's' : ''} selected
            </span>
            {bulkActions.render ? (
              bulkActions.render(selectedIds,
                data.filter(row => selectedIds.includes(String(row[idField]))),
                clearSelection
              )
            ) : (
              <Button
                variant="destructive"
                size="sm"
                onClick={handleBulkDelete}
                disabled={loading}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Selected
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Table */}
      <div className="border rounded-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                {selectionEnabled && (
                  <th className="w-12 p-4 text-left">
                    <Checkbox
                      checked={selectAllCheckedState}
                      onCheckedChange={handleSelectAll}
                      aria-label="Select all"
                    />
                  </th>
                )}
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className={`p-4 text-left font-medium text-gray-700 dark:text-gray-300 ${column.className || ''
                      }`}
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={columns.length + (showSelection ? 1 : 0)} className="p-8 text-center">
                    <div className="flex justify-center">
                      <Spinner />
                    </div>
                  </td>
                </tr>
              ) : paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={columns.length + (showSelection ? 1 : 0)} className="p-8 text-center text-gray-500">
                    {emptyMessage}
                  </td>
                </tr>
              ) : (
                paginatedData.map((row, index) => {
                  const id = String(row[idField]);
                  const isSelected = selectedIds.includes(id);

                  return (
                    <tr
                      key={id}
                      className={`border-t hover:bg-gray-50 dark:hover:bg-gray-800 ${isSelected ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                        } ${clickableRows ? 'cursor-pointer' : ''}`}
                      onClick={() => onRowClick?.(row, index)}
                    >
                      {selectionEnabled && (
                        <td className="p-4">
                          <Checkbox
                            checked={isSelected}
                            onCheckedChange={(checked) => handleSelectRow(id, checked as boolean)}
                            aria-label={`Select row ${index + 1}`}
                          />
                        </td>
                      )}
                      {columns.map((column) => (
                        <td
                          key={column.key}
                          className={`p-4 ${column.className || ''}`}
                        >
                          {column.render
                            ? column.render(row[column.key], row, index)
                            : row[column.key]}
                        </td>
                      ))}
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {pagination && (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              Showing {((pagination.currentPage - 1) * pagination.itemsPerPage) + 1} to{' '}
              {Math.min(pagination.currentPage * pagination.itemsPerPage, actualTotalItems)} of{' '}
              {actualTotalItems} results
            </span>

            {pagination.onItemsPerPageChange && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Show</span>
                <select
                  value={pagination.itemsPerPage}
                  onChange={(e) => pagination?.onItemsPerPageChange(Number(e.target.value))}
                  className="border rounded px-2 py-1 text-sm"
                >
                  {(pagination.itemsPerPageOptions || [10, 20, 50, 100]).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span className="text-sm text-gray-600">per page</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => pagination.onPageChange(1)}
              disabled={pagination.currentPage === 1}
            >
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => pagination.onPageChange(pagination.currentPage - 1)}
              disabled={pagination.currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-1 mx-2">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (pagination.currentPage <= 3) {
                  pageNum = i + 1;
                } else if (pagination.currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = pagination.currentPage - 2 + i;
                }

                return (
                  <Button
                    key={pageNum}
                    variant={pagination.currentPage === pageNum ? "default" : "outline"}
                    size="sm"
                    onClick={() => pagination.onPageChange(pageNum)}
                  >
                    {pageNum}
                  </Button>
                );
              })}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => pagination.onPageChange(pagination.currentPage + 1)}
              disabled={pagination.currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => pagination.onPageChange(totalPages)}
              disabled={pagination.currentPage === totalPages}
            >
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
