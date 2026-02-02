import { ComponentItem, ComponentGroup } from '@/lib/components-data';
import { ComponentCard } from './ComponentCard';
import { Layers, Search } from 'lucide-react';

interface ComponentGridProps {
  components: ComponentItem[];
  group: ComponentGroup | null;
  searchQuery: string;
  onViewDetails: (component: ComponentItem) => void;
  onCopyMarkup: (component: ComponentItem) => void;
}

export function ComponentGrid({
  components,
  group,
  searchQuery,
  onViewDetails,
  onCopyMarkup,
}: ComponentGridProps) {
  const isSearching = searchQuery.length > 0;

  return (
    <div className="flex flex-1 flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card px-6 py-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="pt-10 lg:pt-0">
            {isSearching ? (
              <>
                <div className="mb-1 flex items-center gap-2">
                  <Search className="h-5 w-5 text-primary" />
                  <h1 className="text-2xl font-bold text-foreground">
                    Search Results
                  </h1>
                </div>
                <p className="text-muted-foreground">
                  Showing results for "{searchQuery}"
                </p>
              </>
            ) : group ? (
              <>
                <h1 className="text-2xl font-bold text-foreground">{group.name}</h1>
                <p className="text-muted-foreground">{group.description}</p>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-bold text-foreground">All Components</h1>
                <p className="text-muted-foreground">Browse the complete component library</p>
              </>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
              {components.length} component{components.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </header>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto p-6 lg:p-8">
        {components.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {components.map((component) => (
              <ComponentCard
                key={component.id}
                component={component}
                onViewDetails={onViewDetails}
                onCopyMarkup={onCopyMarkup}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 rounded-full bg-muted p-4">
              <Layers className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">No components found</h3>
            <p className="max-w-sm text-muted-foreground">
              {isSearching
                ? `No components match "${searchQuery}". Try a different search term.`
                : 'No components available in this category.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
