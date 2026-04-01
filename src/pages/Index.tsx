import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { AppSidebar } from "@/components/AppSidebar";
import { ComponentGrid } from "@/components/ComponentGrid";
import { ComponentDetailModal } from "@/components/ComponentDetailModal";
import {
  componentGroups,
  components,
  getComponentsByGroup,
  searchComponents,
  ComponentItem,
} from "@/lib/components-data";

const Index = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentItem | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  const defaultGroup = componentGroups[0]?.id ?? "";
  const requestedGroup = searchParams.get("group") ?? defaultGroup;
  const selectedGroup = componentGroups.some((g) => g.id === requestedGroup)
    ? requestedGroup
    : defaultGroup;
  const searchQuery = searchParams.get("search") ?? "";

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

  const handleSelectGroup = (groupId: string) => {
    const next = new URLSearchParams(searchParams);
    next.set("group", groupId);
    next.delete("search");
    setSearchParams(next);
  };

  const handleSearchChange = (query: string) => {
    const next = new URLSearchParams(searchParams);
    if (selectedGroup) next.set("group", selectedGroup);
    if (query.trim()) {
      next.set("search", query);
    } else {
      next.delete("search");
    }
    setSearchParams(next);
  };

  const handleCopyMarkup = async (component: ComponentItem) => {
    try {
      await navigator.clipboard.writeText(component.markup);
      toast.success("Markup copied to clipboard!", {
        description: `${component.name} HTML copied successfully.`,
      });
    } catch (error) {
      toast.error("Failed to copy markup", {
        description: "Please try again or copy manually from the details view.",
      });
    }
  };

  const handleCloseModal = () => {
    setDetailModalOpen(false);
    setSelectedComponent(null);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <AppSidebar
        activeView="components"
        groups={componentGroups}
        selectedGroup={selectedGroup}
        onNavigateHome={() => navigate("/")}
        onSelectGroup={handleSelectGroup}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        componentCounts={componentCounts}
      />

      <main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden lg:pl-72">
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
