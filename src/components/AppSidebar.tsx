import { useState } from 'react';
import { Search, X, Menu, ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { ComponentGroup } from '@/lib/components-data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface AppSidebarProps {
  groups: ComponentGroup[];
  selectedGroup: string;
  onSelectGroup: (groupId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  componentCounts: Record<string, number>;
}

function SidebarContent({
  groups,
  selectedGroup,
  onSelectGroup,
  searchQuery,
  onSearchChange,
  componentCounts,
  onClose,
}: AppSidebarProps & { onClose?: () => void }) {
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
      'mouse-pointer-click': Icons.MousePointerClick,
      'square': Icons.Square,
      'text-cursor-input': Icons.TextCursorInput,
      'panel-top': Icons.PanelTop,
      'menu': Icons.Menu,
      'table': Icons.Table,
      'bell': Icons.Bell,
      'tag': Icons.Tag,
    };
    const IconComponent = iconMap[iconName] || Icons.Circle;
    return IconComponent;
  };

  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-sidebar-border px-4 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-primary">
            <Icons.Layers className="h-5 w-5 text-sidebar-primary-foreground" />
          </div>
          <div>
            <h1 className="text-base font-semibold">Component Library</h1>
            <p className="text-xs text-sidebar-muted">Salesforce Design System</p>
          </div>
        </div>
        {onClose && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 text-sidebar-foreground hover:bg-sidebar-accent lg:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-sidebar-muted" />
          <Input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="h-10 border-sidebar-border bg-sidebar-accent pl-9 text-sidebar-foreground placeholder:text-sidebar-muted focus-visible:ring-sidebar-primary"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sidebar-muted hover:text-sidebar-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Groups */}
      <nav className="flex-1 overflow-y-auto px-3 pb-4 scrollbar-thin">
        <div className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-sidebar-muted">
          Categories
        </div>
        <ul className="space-y-1">
          {groups.map((group) => {
            const Icon = getIcon(group.icon);
            const isSelected = selectedGroup === group.id;
            const count = componentCounts[group.id] || 0;

            return (
              <li key={group.id}>
                <button
                  onClick={() => {
                    onSelectGroup(group.id);
                    onClose?.();
                  }}
                  className={cn(
                    'group flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150',
                    isSelected
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    <span>{group.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        'min-w-[1.5rem] rounded-full px-2 py-0.5 text-center text-xs font-medium',
                        isSelected
                          ? 'bg-sidebar-primary-foreground/20 text-sidebar-primary-foreground'
                          : 'bg-sidebar-accent text-sidebar-muted'
                      )}
                    >
                      {count}
                    </span>
                    <ChevronRight
                      className={cn(
                        'h-4 w-4 transition-transform',
                        isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                      )}
                    />
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-sidebar-border p-4">
        <div className="text-center text-xs text-sidebar-muted">
          <span className="font-medium">{Object.values(componentCounts).reduce((a, b) => a + b, 0)}</span> components total
        </div>
      </div>
    </div>
  );
}

export function AppSidebar(props: AppSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Trigger */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed left-4 top-4 z-50 h-10 w-10 shadow-md lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 p-0">
          <SidebarContent {...props} onClose={() => setMobileOpen(false)} />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className="hidden h-screen w-72 flex-shrink-0 shadow-sidebar lg:block">
        <SidebarContent {...props} />
      </aside>
    </>
  );
}
