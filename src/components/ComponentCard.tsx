import { ExternalLink, Code, Eye } from "lucide-react";
import { ComponentItem } from "@/lib/components-data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ComponentCardProps {
  component: ComponentItem;
  onViewDetails: (component: ComponentItem) => void;
  onCopyMarkup: (component: ComponentItem) => void;
}

export function ComponentCard({
  component,
  onViewDetails,
  onCopyMarkup,
}: ComponentCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-200 hover:shadow-card-hover hover:border-primary/30 animate-fade-in">
      {/* Preview Area */}
      <div className="relative aspect-[16/10] overflow-hidden bg-preview-bg preview-pattern flex justify-center items-center">
        {component.previewImageUrl ? (
          <img
            src={component.previewImageUrl}
            alt={`${component.name} preview`}
            className=""
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <Code className="h-8 w-8 opacity-40" />
              <span className="text-xs font-medium opacity-60">Preview</span>
            </div>
          </div>
        )}
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 opacity-0 transition-all duration-200 group-hover:bg-foreground/5 group-hover:opacity-100">
          <Button
            onClick={() => onViewDetails(component)}
            className="translate-y-2 transition-transform group-hover:translate-y-0"
          >
            <Eye className="mr-2 h-4 w-4" />
            View Details
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 text-base font-semibold text-foreground">
          {component.name}
        </h3>
        <p className="mb-3 flex-1 text-sm text-muted-foreground line-clamp-2">
          {component.description}
        </p>

        {/* Tags */}
        {component.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {component.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs font-normal"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            variant="default"
            size="sm"
            className="flex-1"
            onClick={() => onViewDetails(component)}
          >
            <Eye className="mr-1.5 h-3.5 w-3.5" />
            Details
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onCopyMarkup(component)}
          >
            <Code className="mr-1.5 h-3.5 w-3.5" />
            Copy
          </Button>
        </div>
      </div>
    </article>
  );
}
