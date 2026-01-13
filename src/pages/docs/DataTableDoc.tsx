import React, { useState } from 'react';
import { DataTable, type Column } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import { PreviewCodeTabs } from "@/components/ui/preview-code-tabs";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

const initialData: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User", status: "inactive" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Editor", status: "active" },
  { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "User", status: "inactive" },
  { id: 6, name: "David Miller", email: "david@example.com", role: "User", status: "active" },
  { id: 7, name: "Eva Green", email: "eva@example.com", role: "Admin", status: "active" },
  { id: 8, name: "Frank White", email: "frank@example.com", role: "User", status: "inactive" },
  { id: 9, name: "Grace Lee", email: "grace@example.com", role: "Editor", status: "active" },
  { id: 10, name: "Henry Ford", email: "henry@example.com", role: "User", status: "active" },
  { id: 11, name: "Ivy Chen", email: "ivy@example.com", role: "User", status: "inactive" },
  { id: 12, name: "Jack Black", email: "jack@example.com", role: "Admin", status: "active" },
];

export default function DataTableDoc() {
  const [data, setData] = useState<User[]>(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const columns: Column<User>[] = [
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email' },
    { key: 'role', header: 'Role' },
    { 
      key: 'status', 
      header: 'Status',
      render: (value) => (
        <span className={`px-2 py-1 rounded text-xs ${
          value === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {value}
        </span>
      )
    },
  ];

  const handleBulkDelete = (selectedIds: string[]) => {
    setData(prev => prev.filter(user => !selectedIds.includes(String(user.id))));
  };

  const code = `import { DataTable, Column } from "@/components/ui/data-table";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

const columns: Column<User>[] = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email' },
  { key: 'role', header: 'Role' },
  { 
    key: 'status', 
    header: 'Status',
    render: (value) => (
      <span className={\`px-2 py-1 rounded text-xs \${
        value === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }\`}>
        {value}
      </span>
    )
  },
];

export function DataTableDemo() {
  const [data, setData] = useState<User[]>(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  return (
    <DataTable
      data={data}
      columns={columns}
      idField="id"
      pagination={{
        currentPage,
        itemsPerPage,
        totalItems: data.length,
        onPageChange: setCurrentPage,
        onItemsPerPageChange: setItemsPerPage
      }}
      search={{
        query: "",
        onQueryChange: () => {},
        placeholder: "Search users..."
      }}
      bulkActions={{
        enabled: true,
        onDelete: (ids) => setData(d => d.filter(u => !ids.includes(String(u.id))))
      }}
      showSelection={true}
    />
  );
}`;

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-8">
      <Breadcrumb className="text-left">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink to="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink to="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Data Table</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-8">
        <h1 className="text-3xl font-bold">Data Table</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A powerful data table with pagination, search, and bulk actions.
        </p>
      </div>

      <Separator className="my-8" />

      <div className="space-y-8">
        <PreviewCodeTabs code={code}>
          <div className="p-4 border rounded-lg bg-white dark:bg-zinc-950">
             <DataTable
              data={data}
              columns={columns}
              idField="id"
              pagination={{
                currentPage,
                itemsPerPage,
                totalItems: data.length,
                onPageChange: setCurrentPage,
                onItemsPerPageChange: setItemsPerPage
              }}
              search={{
                query: "",
                onQueryChange: () => {},
                placeholder: "Search users..."
              }}
              bulkActions={{
                enabled: true,
                onDelete: handleBulkDelete
              }}
              showSelection={true}
            />
          </div>
        </PreviewCodeTabs>
      </div>
    </div>
  );
}
