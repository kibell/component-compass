import { useState, useMemo } from 'react';
import { toast } from 'sonner';
import { AppSidebar } from '@/components/AppSidebar';
import { ComponentGrid } from '@/components/ComponentGrid';
import { ComponentDetailModal } from '@/components/ComponentDetailModal';
import {
  componentGroups,
  components,
  getComponentsByGroup,
  searchComponents,
  ComponentItem,
} from '@/lib/components-data';

const Index = () => {
  const [selectedGroup, setSelectedGroup] = useState('buttons');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedComponent, setSelectedComponent] = useState<ComponentItem | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  // Calculate component counts per group
  const componentCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    componentGroups.forEach((group) => {
      counts[group.id] = getComponentsByGroup(group.id).length;
    });
    return counts;
  }, []);

  // Get components based on search or selected group
  const displayedComponents = useMemo(() => {
    if (searchQuery.trim()) {
      return searchComponents(searchQuery);
    }
    return getComponentsByGroup(selectedGroup);
  }, [searchQuery, selectedGroup]);

  // Get current group details
  const currentGroup = useMemo(() => {
    return componentGroups.find((g) => g.id === selectedGroup) || null;
  }, [selectedGroup]);

  const handleViewDetails = (component: ComponentItem) => {
    setSelectedComponent(component);
    setDetailModalOpen(true);
  };

  const handleCopyMarkup = async (component: ComponentItem) => {
    try {
      await navigator.clipboard.writeText(component.markup);
      toast.success('Markup copied to clipboard!', {
        description: `${component.name} HTML copied successfully.`,
      });
    } catch (error) {
      toast.error('Failed to copy markup', {
        description: 'Please try again or copy manually from the details view.',
      });
    }
  };

  const handleCloseModal = () => {
    setDetailModalOpen(false);
    setSelectedComponent(null);
  };

  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar
        groups={componentGroups}
        selectedGroup={selectedGroup}
        onSelectGroup={setSelectedGroup}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        componentCounts={componentCounts}
      />

      <main className="flex flex-1 flex-col overflow-hidden">
        <ComponentGrid
          components={displayedComponents}
          group={searchQuery ? null : currentGroup}
          searchQuery={searchQuery}
          onViewDetails={handleViewDetails}
          onCopyMarkup={handleCopyMarkup}
        />
      </main>

      <ComponentDetailModal
        component={selectedComponent}
        open={detailModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
