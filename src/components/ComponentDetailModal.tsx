import { useState } from 'react';
import { X, Copy, Check, Code, FileText, Lightbulb, ExternalLink } from 'lucide-react';
import { ComponentItem } from '@/lib/components-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface ComponentDetailModalProps {
  component: ComponentItem | null;
  open: boolean;
  onClose: () => void;
}

function CodeBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg border border-border bg-muted/50 overflow-hidden">
      <div className="flex items-center justify-between border-b border-border bg-muted/80 px-4 py-2">
        <span className="text-xs font-medium uppercase text-muted-foreground">
          {language}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-7 gap-1.5 text-xs"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-success" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copy
            </>
          )}
        </Button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm">
        <code className="text-foreground/90">{code}</code>
      </pre>
    </div>
  );
}

export function ComponentDetailModal({
  component,
  open,
  onClose,
}: ComponentDetailModalProps) {
  if (!component) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-hidden p-0">
        <DialogHeader className="border-b border-border px-6 py-4">
          <div className="flex items-start justify-between pr-8">
            <div>
              <DialogTitle className="text-xl font-bold">
                {component.name}
              </DialogTitle>
              <p className="mt-1 text-sm text-muted-foreground">
                {component.description}
              </p>
            </div>
          </div>
          {component.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {component.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </DialogHeader>

        <div className="overflow-y-auto p-6">
          {/* Preview Area */}
          <div className="mb-6 overflow-hidden rounded-lg border border-preview-border bg-preview-bg preview-pattern">
            <div className="flex min-h-[200px] items-center justify-center p-8">
              {component.previewImageUrl ? (
                <img
                  src={component.previewImageUrl}
                  alt={`${component.name} preview`}
                  className="max-h-[300px] rounded-lg object-contain shadow-md"
                />
              ) : (
                <div className="flex flex-col items-center gap-3 text-muted-foreground">
                  <Code className="h-12 w-12 opacity-40" />
                  <span className="text-sm font-medium opacity-60">
                    Component Preview
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Code & Notes Tabs */}
          <Tabs defaultValue="markup" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="markup" className="gap-2">
                <Code className="h-4 w-4" />
                HTML Markup
              </TabsTrigger>
              <TabsTrigger value="notes" className="gap-2">
                <Lightbulb className="h-4 w-4" />
                Usage Notes
              </TabsTrigger>
            </TabsList>

            <TabsContent value="markup" className="mt-4">
              <CodeBlock code={component.markup} language="HTML" />
            </TabsContent>

            <TabsContent value="notes" className="mt-4">
              <div className="rounded-lg border border-border bg-accent/30 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Lightbulb className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium text-foreground">
                      Implementation Notes
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {component.notes}
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
        <div className="border-t border-border bg-muted/30 px-6 py-4">
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              Salesforce Lightning Design System
            </p>
            <Button variant="outline" size="sm" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
