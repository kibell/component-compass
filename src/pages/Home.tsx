import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  BookOpen,
  Compass,
  Copy,
  Download,
  Layers,
  Search,
  Sparkles,
  Workflow,
} from "lucide-react";

import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  componentGroups,
  components,
  getComponentsByGroup,
} from "@/lib/components-data";

const quickStartSteps = [
  {
    title: "Choose a category",
    description:
      "Use the left sidebar to jump into Buttons, Cards, Navigation, and other component groups.",
    icon: Layers,
  },
  {
    title: "Search across the library",
    description:
      "Type in the sidebar search field to find components by name, description, or tags.",
    icon: Search,
  },
  {
    title: "Open details and copy markup",
    description:
      "Preview a component, inspect its notes, and copy the HTML snippet when you are ready to use it.",
    icon: Copy,
  },
];

const featureCards = [
  {
    title: "Fast discovery",
    description:
      "Browse curated UI examples without digging through code or image folders manually.",
    icon: Compass,
  },
  {
    title: "Implementation-ready snippets",
    description:
      "Each component includes markup you can copy directly into your downstream project or email build.",
    icon: BookOpen,
  },
  {
    title: "Reference notes",
    description:
      "Usage notes help explain where a pattern fits best and what to watch out for before shipping.",
    icon: Sparkles,
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isCopyingStarter, setIsCopyingStarter] = useState(false);

  const starterTemplateHref = `${import.meta.env.BASE_URL}component-compass-starter.html`;

  const componentCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    componentGroups.forEach((group) => {
      counts[group.id] = getComponentsByGroup(group.id).length;
    });
    return counts;
  }, []);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      navigate(`/components?search=${encodeURIComponent(query)}`);
    }
  };

  const handleSelectGroup = (groupId: string) => {
    navigate(`/components?group=${encodeURIComponent(groupId)}`);
  };

  const handleCopyStarterHtml = async () => {
    if (isCopyingStarter) {
      return;
    }

    setIsCopyingStarter(true);

    try {
      const response = await fetch(starterTemplateHref);
      if (!response.ok) {
        throw new Error("Starter file unavailable");
      }

      const htmlText = await response.text();
      await navigator.clipboard.writeText(htmlText);

      toast.success("Starter HTML copied", {
        description: "Paste it directly into your IDE as a new .html file.",
      });
    } catch (error) {
      toast.error("Could not copy starter HTML", {
        description: "Please use the download button instead.",
      });
    } finally {
      setIsCopyingStarter(false);
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <AppSidebar
        activeView="home"
        groups={componentGroups}
        selectedGroup=""
        onNavigateHome={() => undefined}
        onSelectGroup={handleSelectGroup}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        componentCounts={componentCounts}
      />

      <main className="flex min-w-0 flex-1 flex-col overflow-y-auto lg:pl-72">
        {/* Hero */}
        <section className="border-b border-border bg-card px-6 py-10 lg:px-8 lg:py-12">
          <div className="mx-auto flex max-w-6xl flex-col gap-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl space-y-4 pt-10 lg:pt-0">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                  <Workflow className="h-4 w-4" />
                  Getting started guide
                </div>
                <div className="space-y-3">
                  <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                    Welcome to Component Compass
                  </h1>
                  <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:text-lg">
                    This home page explains how to browse the library, inspect
                    component details, and copy the markup you need for your
                    project.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link to="/components">Browse components</Link>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={handleCopyStarterHtml}
                  disabled={isCopyingStarter}
                >
                  <Copy className="h-4 w-4" />
                  {isCopyingStarter ? "Copying…" : "Copy starter HTML"}
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href={starterTemplateHref} download>
                    <Download className="h-4 w-4" />
                    Download starter HTML
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/components?group=navigation">
                    View navigation examples
                  </Link>
                </Button>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid gap-4 md:grid-cols-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Available groups</CardDescription>
                  <CardTitle>{componentGroups.length}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Organized categories in the sidebar for faster navigation.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Documented components</CardDescription>
                  <CardTitle>{components.length}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Preview-ready entries with screenshots, notes, and HTML
                    markup.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Primary workflow</CardDescription>
                  <CardTitle>Search → Review → Copy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Find the right pattern, confirm the fit, then copy the
                    snippet.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Starter download</CardDescription>
                  <CardTitle>HTML file ready</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    A blank template to paste copied markup into and test
                    locally.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    <a href={starterTemplateHref} download>
                      <Download className="h-4 w-4" />
                      Get starter file
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How-to + Tips */}
        <section className="px-6 py-8 lg:px-8 lg:py-10">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <Card>
              <CardHeader>
                <CardTitle>How to use the application</CardTitle>
                <CardDescription>
                  Follow this workflow to move from browsing to implementation
                  quickly.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-3">
                {quickStartSteps.map(({ title, description, icon: Icon }) => (
                  <div
                    key={title}
                    className="rounded-lg border bg-background p-4"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      {title}
                    </h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Helpful tips</CardTitle>
                <CardDescription>
                  A few habits make the library much easier to use day to day.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <div className="rounded-lg bg-secondary/60 p-4 text-secondary-foreground">
                  Start with the sidebar search when you know the pattern name
                  or keyword.
                </div>
                <div className="rounded-lg border p-4">
                  Download the starter HTML file to quickly test copied snippets
                  in a browser.
                </div>
                <div className="rounded-lg border p-4">
                  Use “Copy starter HTML” if you want to paste the full template
                  straight into your IDE.
                </div>
                <div className="rounded-lg border p-4">
                  Open the detail modal before copying so you can review the
                  usage notes first.
                </div>
                <div className="rounded-lg border p-4">
                  Use the Home link in the sidebar whenever you want to return
                  to this guide.
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Feature cards */}
        <section className="px-6 pb-10 lg:px-8 lg:pb-12">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
            {featureCards.map(({ title, description, icon: Icon }) => (
              <Card key={title} className="h-full">
                <CardHeader>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl">{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
