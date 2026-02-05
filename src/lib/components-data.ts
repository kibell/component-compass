export interface ComponentItem {
  id: string;
  name: string;
  group: string;
  description: string;
  previewImageUrl: string;
  tags: string[];
  markup: string;
  notes: string;
}

export interface ComponentGroup {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const componentGroups: ComponentGroup[] = [
  {
    id: "buttons",
    name: "Buttons",
    icon: "mouse-pointer-click",
    description: "Interactive button components for actions and navigation",
  },
  {
    id: "cards",
    name: "Cards",
    icon: "square",
    description: "Container components for grouping related content",
  },
  {
    id: "images",
    name: "Images",
    icon: "image",
    description: "Image and media components for visual content",
  },
  {
    id: "navigation",
    name: "Navigation",
    icon: "menu",
    description: "Components for site navigation and wayfinding",
  },
  {
    id: "videos",
    name: "Videos",
    icon: "video",
    description: "Video and media components for visual content",
  },
  {
    id: "icons",
    name: "Icons",
    icon: "bell",
    description: "Icons for actions, status, and visual cues",
  },
];

export const components: ComponentItem[] = [
  // Buttons
  {
    id: "btn-primary",
    name: "Primary Button ",
    group: "buttons",
    description:
      "The main call-to-action button used for primary actions like Save or Submit.",
    previewImageUrl:
      "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/95dfb2f7-9d00-401a-b6ab-41a8f4e6a8c6.png",
    tags: ["action", "cta", "submit"],
    markup: `<button class="slds-button slds-button_brand">
  Save
</button>`,
    notes:
      "Use for the most important action on the page. Limit to one per section.",
  },
  {
    id: "btn-secondary",
    name: "Secondary Button Rounded",
    group: "buttons",
    description: "A neutral button for secondary actions like Cancel or Back.",
    previewImageUrl: "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/e38483be-e03a-4d00-a86c-816b7563eb7d.png",
    tags: ["button", "round", "cancel"],
    markup: `<button class="slds-button slds-button_neutral">
  Cancel
</button>`,
    notes: "Use alongside primary buttons for alternative actions.",
  },
  
  //videos
  {
    id: "campus-tours",
    name: "SNHU Campus Tours ",
    group: "videos",
    description: "A compact button with only an icon, ideal for toolbars.",
    previewImageUrl: "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/50af8ead-2150-424f-838c-08f4bce796f9.gif",
    tags: ["video", "snhu campus tours", "campus life"],
    markup: `<button class="slds-button slds-button_icon">
  <svg class="slds-button__icon">...</svg>
</button>`,
    notes: "Always include accessible labels via aria-label.",
  },

  // Cards
  {
    id: "card-rounded",
    name: "Rounded Card with Icon",
    group: "cards",
    description:
      "A simple card container with header, body, and optional footer.",
    previewImageUrl: "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/32a5dc76-a2a8-4b07-a1ed-ab239f95396f.png",
    tags: ["rounded card", "icon", "card"],
    markup: `<article class="slds-card">
  <div class="slds-card__header">
    <h2>Card Title</h2>
  </div>
  <div class="slds-card__body">
    Card content goes here
  </div>
</article>`,
    notes: "The fundamental container for grouping related content.",
  },
  {
    id: "card-empty",
    name: "Empty State Card",
    group: "cards",
    description:
      "A card displaying an empty state with illustration and action.",
    previewImageUrl: "",
    tags: ["empty", "illustration", "cta"],
    markup: `<article class="slds-card slds-card_empty">
  <div class="slds-card__body">
    <img src="empty.svg" alt="" />
    <p>No items to display</p>
    <button class="slds-button">Add Item</button>
  </div>
</article>`,
    notes:
      "Always provide a clear action to help users populate the empty state.",
  },

  // Images
  {
    id: "header-img1",
    name: "Header Image 1",
    group: "images",
    description:
      "A standard text input field with label and optional help text.",
    previewImageUrl:
      "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/6a06c6f7-32cd-41f1-af14-b3c11f00c3d8.png",
    tags: ["header", "images", "hero"],
    markup: `<img class="slds-form-element" src="https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/6a06c6f7-32cd-41f1-af14-b3c11f00c3d8.png" alt="Travis Smiling header" />
  `,
    notes: "Always include a visible label for accessibility.",
  },
  {
    id: "header-img2",
    name: "Header Image 2",
    group: "images",
    description:
      "A standard text input field with label and optional help text.",
    previewImageUrl:
      "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/63c3a605-53a1-4cf6-8694-b24233bd3dc7.png",
    tags: ["header", "images", "hero"],
    markup: `<img class="slds-form-element" src="https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/63c3a605-53a1-4cf6-8694-b24233bd3dc7.png" alt="Travis Smiling header" />
  `,
    notes: "Always include a visible label for accessibility.",
  },
  {
    id: "student-on-phone",
    name: "Student Looking on Phone",
    group: "images",
    description: "A checkbox input for boolean or multi-select options.",
    previewImageUrl: "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/78ea1544-12c3-41ee-ab1b-83c37c99592c.jpg",
    tags: ["checkbox", "toggle", "boolean"],
    markup: `<div class="slds-form-element">
  <div class="slds-form-element__control">
    <div class="slds-checkbox">
      <input type="checkbox" id="check1" />
      <label for="check1">Accept terms</label>
    </div>
  </div>
</div>`,
    notes: "Use for optional settings or multi-select scenarios.",
  },
 

  // Modals
  {
    id: "modal-basic",
    name: "Basic Modal",
    group: "modals",
    description: "A standard modal dialog for focused interactions.",
    previewImageUrl: "",
    tags: ["dialog", "overlay", "popup"],
    markup: `<section class="slds-modal slds-fade-in-open">
  <div class="slds-modal__container">
    <header class="slds-modal__header">
      <h2>Modal Title</h2>
    </header>
    <div class="slds-modal__content">
      Modal content
    </div>
    <footer class="slds-modal__footer">
      <button>Cancel</button>
      <button>Save</button>
    </footer>
  </div>
</section>`,
    notes: "Use modals sparingly. Consider inline editing for simple changes.",
  },
  {
    id: "modal-confirm",
    name: "Confirmation Modal",
    group: "modals",
    description:
      "A modal for confirming user actions, especially destructive ones.",
    previewImageUrl: "",
    tags: ["confirm", "warning", "dialog"],
    markup: `<section class="slds-modal">
  <div class="slds-modal__container">
    <header class="slds-modal__header">
      <h2>Confirm Delete</h2>
    </header>
    <div class="slds-modal__content">
      Are you sure you want to delete this item?
    </div>
    <footer class="slds-modal__footer">
      <button>Cancel</button>
      <button class="slds-button_destructive">Delete</button>
    </footer>
  </div>
</section>`,
    notes:
      "Always offer a clear way to cancel. Make the action button descriptive.",
  },

  // Navigation
  {
    id: "nav-tabs",
    name: "Tabs",
    group: "navigation",
    description: "Horizontal tabs for switching between related views.",
    previewImageUrl: "",
    tags: ["tabs", "horizontal", "switch"],
    markup: `<div class="slds-tabs_default">
  <ul class="slds-tabs_default__nav">
    <li class="slds-tabs_default__item slds-is-active">
      <a href="#">Tab 1</a>
    </li>
    <li class="slds-tabs_default__item">
      <a href="#">Tab 2</a>
    </li>
  </ul>
</div>`,
    notes:
      "Use for content that is related but doesn't need to be viewed simultaneously.",
  },
  {
    id: "nav-breadcrumb",
    name: "Breadcrumb",
    group: "navigation",
    description:
      "A breadcrumb trail showing the current location in hierarchy.",
    previewImageUrl: "",
    tags: ["breadcrumb", "hierarchy", "trail"],
    markup: `<nav class="slds-breadcrumb" aria-label="Breadcrumb">
  <ol class="slds-breadcrumb__list">
    <li class="slds-breadcrumb__item">
      <a href="#">Home</a>
    </li>
    <li class="slds-breadcrumb__item">
      <a href="#">Accounts</a>
    </li>
  </ol>
</nav>`,
    notes: "Keep breadcrumbs to 4-5 levels maximum for usability.",
  },
  {
    id: "nav-vertical",
    name: "Vertical Navigation",
    group: "navigation",
    description: "A vertical list of navigation links for sidebars.",
    previewImageUrl: "",
    tags: ["vertical", "sidebar", "menu"],
    markup: `<nav class="slds-nav-vertical">
  <ul class="slds-nav-vertical__section">
    <li class="slds-nav-vertical__item slds-is-active">
      <a href="#">Dashboard</a>
    </li>
    <li class="slds-nav-vertical__item">
      <a href="#">Reports</a>
    </li>
  </ul>
</nav>`,
    notes: "Highlight the current page clearly. Group related items together.",
  },

  // Tables
  {
    id: "table-basic",
    name: "Basic Table",
    group: "tables",
    description: "A simple data table with rows and columns.",
    previewImageUrl: "",
    tags: ["data", "grid", "rows"],
    markup: `<table class="slds-table slds-table_bordered">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
    </tr>
  </tbody>
</table>`,
    notes: "Use for structured data that benefits from column alignment.",
  },
  {
    id: "table-striped",
    name: "Striped Table",
    group: "tables",
    description: "A table with alternating row colors for easier scanning.",
    previewImageUrl: "",
    tags: ["data", "striped", "alternating"],
    markup: `<table class="slds-table slds-table_striped">
  <thead>...</thead>
  <tbody>...</tbody>
</table>`,
    notes: "Striped tables improve readability for tables with many rows.",
  },
  {
    id: "table-sortable",
    name: "Sortable Table",
    group: "tables",
    description: "A table with sortable column headers.",
    previewImageUrl: "",
    tags: ["data", "sortable", "interactive"],
    markup: `<table class="slds-table slds-table_bordered">
  <thead>
    <tr>
      <th class="slds-is-sortable">
        <a href="#">Name</a>
        <span class="slds-icon">↑</span>
      </th>
    </tr>
  </thead>
</table>`,
    notes: "Indicate sort direction clearly. Default to a logical sort order.",
  },

  // Icons
  {
    id: "icon-1",
    name: "Icon 1",
    group: "icons",
    description: "An informational icon for general notifications.",
    previewImageUrl:
      "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/fd53a586-c4eb-4802-b02d-03974d4fe5a5.png",
    tags: ["icon", "notification", "message"],
    markup: `<div class="slds-notify slds-notify_alert slds-alert_info">
  <span class="slds-icon">ℹ️</span>
  <h2>System maintenance scheduled for Sunday.</h2>
</div>`,
    notes: "Icon for step 1.",
  },
  {
    id: "icon-checkmark",
    name: "Icon Checkmark",
    group: "icons",
    description: "An informational icon for general notifications.",
    previewImageUrl:
      "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/b72ff5a6-b22e-4166-9422-a8d37c2a7fa0.png",
    tags: ["icon", "checkmark", "message"],
    markup: `<div class="slds-notify slds-notify_alert slds-alert_info">
  <span class="slds-icon">ℹ️</span>
  <h2>System maintenance scheduled for Sunday.</h2>
</div>`,
    notes: "Icon for checkmark.",
  },
  {
    id: "icon-checklist",
    name: "Icon Checklist",
    group: "icons",
    description: "An informational icon for general notifications.",
    previewImageUrl:
      "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/6f12607c-4990-4bb2-8d5b-edccfc5fdffb.png",
    tags: ["icon", "checklist", "message"],
    markup: `<div class="slds-notify slds-notify_alert slds-alert_info">
  <span class="slds-icon">ℹ️</span>
  <h2>System maintenance scheduled for Sunday.</h2>
</div>`,
    notes: "Icon for checklist items.",
  },
  {
    id: "alert-error",
    name: "Error Alert",
    group: "alerts",
    description: "An error alert for critical issues requiring attention.",
    previewImageUrl: "",
    tags: ["error", "critical", "problem"],
    markup: `<div class="slds-notify slds-notify_alert slds-alert_error">
  <span class="slds-icon">✕</span>
  <h2>Failed to save record. Please try again.</h2>
</div>`,
    notes: "Always explain what went wrong and how to fix it.",
  },

  // Badges
  {
    id: "badge-default",
    name: "Default Badge",
    group: "badges",
    description: "A neutral badge for displaying counts or labels.",
    previewImageUrl: "",
    tags: ["label", "count", "neutral"],
    markup: `<span class="slds-badge">42</span>`,
    notes: "Keep badge text short - ideally 2-3 characters for counts.",
  },
  {
    id: "badge-success",
    name: "Success Badge",
    group: "badges",
    description: "A green badge indicating success or active status.",
    previewImageUrl: "",
    tags: ["success", "active", "status"],
    markup: `<span class="slds-badge slds-badge_success">Active</span>`,
    notes: "Use sparingly to highlight positive states.",
  },
  {
    id: "badge-warning",
    name: "Warning Badge",
    group: "badges",
    description: "An orange badge indicating a warning or pending status.",
    previewImageUrl: "",
    tags: ["warning", "pending", "status"],
    markup: `<span class="slds-badge slds-badge_warning">Pending</span>`,
    notes: "Use for states that require attention but aren't critical.",
  },
  {
    id: "badge-error",
    name: "Error Badge",
    group: "badges",
    description: "A red badge indicating an error or inactive status.",
    previewImageUrl: "",
    tags: ["error", "inactive", "status"],
    markup: `<span class="slds-badge slds-badge_error">Inactive</span>`,
    notes: "Reserve for critical states or errors.",
  },
];

export const getComponentsByGroup = (groupId: string): ComponentItem[] => {
  return components.filter((c) => c.group === groupId);
};

export const searchComponents = (query: string): ComponentItem[] => {
  const lowerQuery = query.toLowerCase();
  return components.filter(
    (c) =>
      c.name.toLowerCase().includes(lowerQuery) ||
      c.description.toLowerCase().includes(lowerQuery) ||
      c.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)),
  );
};
