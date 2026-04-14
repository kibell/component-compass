import NavBlue from "../images/Navbar/heritage blue Nav.png";
import NavYellow from "../images/Navbar/Gold BG Nav.png";
import NavInk from "../images/Navbar/Ink Blue Nav.png";
import { Icon } from "lucide-react";

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
    id: "content-sections",
    name: "Content",
    icon: "square",
    description:
      "Full Pre made Section Layouts for structuring and presenting content",
  },
  {
    id: "hero-sections",
    name: "Hero",
    icon: "square",
    description: "Headers with variations",
  },
  {
    id: "typography",
    name: "Typography",
    icon: "square",
    description:
      "Predefined text styles and typographic elements for consistent design",
  },
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
    id: "tables",
    name: "Tables",
    icon: "table",
    description: "Table components for displaying structured data",
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
  {
    id: "layouts",
    name: "Layouts",
    icon: "layout-panel-left",
    description: "Bootstrap column and grid layouts for card spacing",
  },
  {
    id: "accordions",
    name: "Accordions",
    icon: "panel-top-bottom-dashed",
    description: "Expandable and collapsible content sections",
  },
  {
    id: "footers",
    name: "Footers",
    icon: "square",
    description: "Footer components for site-wide information and links",
  },

  {
    id: "scripts",
    name: "JS Scripts",
    icon: "panel-top-bottom-dashed",
    description:
      "Useful JavaScript snippets for common interactive features like countdown timers, accordions, etc. If using the editing tool include all scripts at the end of the page in a dedicated 'Scripts' section so they can be easily copied together.",
  },
];

export const components: ComponentItem[] = [
  //Hero Sections
  {
    id: "weekly-planner-overlap",
    name: "Weekly Planner Hero with Advisor Form",
    group: "hero-sections",
    description:
      "Hero-style welcome section with overlapping advisor message form for weekly planning pages.",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Hero/overlap-form-hero.png`,
    tags: ["hero", "form", "advisor", "dashboard", "overlap"],
    markup: `  <div class="overlap-content">

      <!-- Hero Section -->
      <section class="z-n1 bg-container weekly-planner-bg header-content bg-pos-top">
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-5 col-sm-12 mb-m-5">

              <div class="card rad-tr-bl-60 bg-sky p-5">
                <h1 class="text-break">Welcome,<br>{First Name}!</h1>
                <p class="text-lg">
                  Here's a peek at what’s due in your courses this week. No need to tackle everything at once—take a look, plan ahead and come back whenever you need to.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <!-- Advisor Form Section -->
      <section class="z-1 form-content">
        <div class="container bg-tan brdr-rad-20 form-placeholder p-5 my-5">
          <div class="row px-5 align-items-stretch">

            <div class="col-lg-3">
              <p class="text-lg fw-bold mb-0">
                Have a question or message for your advisor.
              </p>
            </div>

            <div class="col-lg-7">
              <textarea 
                class="form-control w-100 p-3" 
                rows="2"
                placeholder="Write your message here"
              ></textarea>
            </div>

            <div class="col-lg-2">
              <button class="btn-corner btn-primary h-100 w-100" type="button">
                Submit
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
`,
    notes:
      "Use as a top-of-page experience for dashboards or weekly planners. Combines a personalized welcome message with an advisor contact form. Designed for overlapping layout styling.",
  },

  {
    id: "welcome-hero-prep-success",
    name: "Welcome Hero – Prep for Success",
    group: "hero-sections",
    description:
      "Personalized welcome hero section introducing the Prep for Success resource page.",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Hero/register-hero.png`,
    tags: ["hero", "welcome", "intro", "personalized"],
    markup: `  <section id="welcome" class="welcome-hero registration-bg bg-container py-5">
      <div class="container">
        <div class="row">
          
          <div class="col-md-6">
            <div class="bg-ink-blue p-5 rad-tr-bl-60">

              <h1 class="text-white">
                , welcome to your Prep for Success resource page!
              </h1>

              <p class="text-white mt-4">
                We’ve created this page to show you how students at SNHU succeed in their courses —
                with best practices, time-saving tips and the best ways to reach out for support when you need it.
              </p>

              <p class="text-white mt-3 fw-bold">
                YOU DON'T HAVE TO READ THIS PAGE ALL AT ONCE.
              </p>

              <p class="text-white">
                Give it a quick scan, bookmark it and come back whenever you need to look something up.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
`,
    notes:
      "Use as a top-of-page hero for onboarding or resource pages. Supports AMPscript personalization for first name and works well with background imagery or color overlays.",
  },
  // Buttons
  {
    id: "button-primary-corner",
    name: "Primary Corner Button",
    group: "buttons",
    description: "Primary branded button with corner radius styling.",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Button Images/primary-btn-corner.png`,
    tags: ["button", "primary", "corner", "cta"],
    markup: `  <a href="#" class="btn-corner btn-primary">Primary Action</a>

  <button class="btn-corner btn-primary" type="button">Primary Action</button>
`,
    notes:
      "Use the anchor version for navigation and the button version for actions. This component combines the corner shape with the primary brand style.",
  },
  {
    id: "button-secondary-corner",
    name: "Secondary Corner Button",
    group: "buttons",
    description: "Secondary branded button with corner radius styling.",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Button Images/secondary-btn-corner.png`,
    tags: ["button", "secondary", "corner"],
    markup: `  <a href="#" class="btn-corner btn-secondary">Secondary Action</a>

  <button class="btn-corner btn-secondary" type="button">Secondary Action</button>
`,
    notes:
      "Use for secondary actions. Anchor for navigation, button for interaction.",
  },
  {
    id: "button-primary-rounded",
    name: "Primary Rounded Button",
    group: "buttons",
    description: "Primary branded button with rounded pill styling.",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Button Images/primary-btn-rounded.png`,
    tags: ["button", "primary", "rounded", "cta"],
    markup: `  <a href="#" class="btn-rounded btn-primary">Primary Action</a>

  <button class="btn-rounded btn-primary" type="button">Primary Action</button>
`,
    notes: "Use when a softer, pill-shaped primary button is preferred.",
  },
  {
    id: "button-secondary-rounded",
    name: "Secondary Rounded Button",
    group: "buttons",
    description: "Secondary branded button with rounded pill styling.",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Button Images/secondary-btn-rounded.png`,
    tags: ["button", "secondary", "rounded"],
    markup: `  <a href="#" class="btn-rounded btn-secondary">Secondary Action</a>

  <button class="btn-rounded btn-secondary" type="button">Secondary Action</button>
`,
    notes: "Use for lower-emphasis rounded actions.",
  },
  {
    id: "button-primary-standard",
    name: "Primary Standard Button",
    group: "buttons",
    description: "Primary branded button using the default button shape.",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Button Images/primary-btn.png`,
    tags: ["button", "primary", "standard"],
    markup: `  <a href="#" class="btn btn-primary">Primary Action</a>

  <button class="btn btn-primary" type="button">Primary Action</button>
`,
    notes:
      "Use as the default primary button when a simple rectangular shape is needed.",
  },
  {
    id: "button-secondary-standard",
    name: "Secondary Standard Button",
    group: "buttons",
    description: "Secondary branded button using the default button shape.",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Button Images/secondary-btn.png`,
    tags: ["button", "secondary", "standard"],
    markup: `  <a href="#" class="btn btn-secondary">Secondary Action</a>

  <button class="btn btn-secondary" type="button">Secondary Action</button>
`,
    notes:
      "Use as the default secondary button when a simple rectangular shape is needed.",
  },
  {
    id: "button-no-outline",
    name: "No Outline Button",
    group: "buttons",
    description: "Minimal transparent button style with no visible border.",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Button Images/no-outline.png`,
    tags: ["button", "minimal", "text"],
    markup: `  <button class="btn btn-no-outline" type="button">Minimal Action</button>
`,
    notes:
      "Use for very low-emphasis treatments. This style disables pointer events in the current CSS, so it may function more like a display treatment than an interactive control.",
  },

  //videos
  {
    id: "campus-tours",
    name: "SNHU Campus Tours ",
    group: "videos",
    description: "A compact button with only an icon, ideal for toolbars.",
    previewImageUrl:
      "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/50af8ead-2150-424f-838c-08f4bce796f9.gif",
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
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Card Images/Rounded card.png`,
    tags: ["rounded card", "icon", "card"],
    markup: `<div class="rounded-card">
          <div class="info-icon campus"></div>
          <h3>Campus Accessibility Center</h3>
          <p>Providing equal access to students with documented disabilities (including 504 accommodations).</p>
          <p>
           <a href="tel:6036443118" target="_blank" class="link-unset">603-644-3118</a> 
            <br>
             <a href="mailto:cac@snhu.edu" target="_blank" class="link-unset">cac@snhu.edu</a>
            
            </p>
        </div>`,
    notes: "The fundamental container for grouping related content.",
  },
  {
    id: "card-simple-course",
    name: "Simple Course Card",
    group: "cards",
    description:
      "Basic card displaying course, discussion, and instructor information.",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Card Images/simple-card.png`,
    tags: ["card", "course", "instructor", "content"],
    markup: `  <div class="card-simple">
      <div class="card-body">
        <h4>{Course Name} – {Discussion Name}</h4>

        <p class="mb-1 fw-semibold">Instructor:</p>
        <ul class="m-0 list-style-none">
          <li>{Instructor Name}</li>
          <li>{Instructor Email}</li>
        </ul>
      </div>
    </div>
`,
    notes:
      "Use for displaying course-related information such as discussions and instructor details. Works well in lists or dashboard-style layouts.",
  },
  {
    id: "card-number",
    name: "Number Card",
    group: "cards",
    description:
      "A bordered card layout intended for step-based content with a number icon anchored above the card.",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Card Images/number-card.png`,
    tags: ["card", "numbered", "steps", "process"],
    markup: `<div class="number-card">
  <div class="number-icon one"></div>
  <h3>Step One</h3>
  <p>Introduce the first action or instruction in the sequence here.</p>
</div>`,
    notes:
      "Works best in multi-step processes, timelines, or instructional layouts.",
  },

  {
    id: "steps-4-col-card",
    name: "Card – 4 Column Numbered Cards",
    group: "content-sections",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Card Images/4-col-number-card.png`,
    description:
      "4-step numbered card row with headline and footnote. Used here for SNHU email setup instructions.",
    tags: ["steps", "numbered", "4-column", "how-to"],
    markup: `<section class="p-5">
  <div class="container">
    <h2 class="text-center mb-5">Follow these steps to check your SNHU email account:</h2>

    <div class="row mt-5">

      <div class="col-lg-3 col-sm-12 mt-4">
        <div class="number-card position-relative">
          <div class="number-icon one"></div>
          <p>Visit <a href="https://my.snhu.edu" target="_blank" class="link-dark-blue">my.snhu.edu</a></p>
        </div>
      </div>

      <div class="col-lg-3 col-sm-12 mt-4">
        <div class="number-card">
          <div class="number-icon two"></div>
          <p>Log in using your SNHU email address:<br><span class="link-dark-blue">xxxxxx@snhu.edu</span></p>
        </div>
      </div>

      <div class="col-lg-3 col-sm-12 mt-4">
        <div class="number-card">
          <div class="number-icon three"></div>
          <p>Click on "Use this link to create/reset your password".</p>
        </div>
      </div>

      <div class="col-lg-3 col-sm-12 mt-4">
        <div class="number-card">
          <div class="number-icon four"></div>
          <p>Follow the prompts to create your SNHU password — and please save/remember your password!</p>
        </div>
      </div>

    </div>

    <p class="text-center mt-5">If you have problems logging into your SNHU email account, please contact our IT Service Desk at 1.855.877.9919.</p>
  </div>
</section>`,
    notes:
      "number-icon classes: one, two, three, four, five. position-relative is required on the card so the absolute-positioned icon badge sits correctly.",
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
    previewImageUrl:
      "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/78ea1544-12c3-41ee-ab1b-83c37c99592c.jpg",
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
    id: "count-down-nav",
    name: "Count Down Nav with White Background",
    group: "navigation",
    description: "Horizontal nav with timer.",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Nav Images/Timer Nav with with bg.png`,
    tags: ["tabs", "horizontal", "switch"],
    markup: `<header class="bg-white">
  <nav class="countdown-nav navbar navbar-expand-lg p-3 navbar-bg-white ">
    <div class="container">
      <a class="navbar-brand" href="https://www.snhu.edu/">
        <img
        class="logo-blue-text"
          alt="SNHU Logo" height="80" />
      </a>
     <div class="d-flex  align-items-center mt-3 countdown-wrapper">
    <div >
      <h3 id="countdown-headline" >Next Term Starts in:  
      </h3>
    </div>
    <div id="countdown">
      <span id="nextTermStartDate" class="d-none"> 4/26/2026 12:00:00 AM</span>
      <ul>
        <li>
          <span id="days"></span>Days
        </li>
        <li>
          <span id="hours"></span>Hours
        </li>
        <li>
          <span id="minutes"></span>Minutes
        </li>
      </ul>
    </div>
  </div>
    <div class=" justify-content-end"  id="navbarNavAltMarkup">
      <div class="navbar-nav d-flex">
        <a href="Tel:8883870861" class="nav-link mx-3 " target="_blank">Call</a>
        <a href="sms:21216" class="nav-link head-link mx-3" target="_blank">Text</a>
        <a href="mailto:admissions@snhu.edu" class="nav-link head-link mx-3" target="_blank">Email</a>
      </div>
    </div>
    </div>
  </nav>
</header>
`,
    notes:
      "For countdown functionality, include a script that calculates the time difference between the current date and the target date (next term start) and updates the #days, #hours, and #minutes spans accordingly. The #nextTermStartDate span can be used to store the target date in a machine-readable format. Can be copied from the Scripts Section",
  },

  {
    id: "advisor-nav-white",
    name: "Advisor Nav with White Background",
    group: "navigation",
    description:
      "Navigation bar with SNHU branding, advisor information, and contact actions.",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Nav Images/advsior-nav.png`,
    tags: ["navigation", "advisor", "contact", "header"],
    markup: `<header class="bg-white">
  <nav class="navbar navbar-expand-lg py-3">
    <div class="container d-flex align-items-center justify-content-between">

      <a class="navbar-brand" href="https://www.snhu.edu/">
        <img 
          src=""
          alt="SNHU Logo" 
          class="logo-blue-text" 
          height="64"
        />
      </a>

      <div class="nav-advisor text-center">
        <p class="fw-semibold mb-0 small text-uppercase">Your Advisor</p>
        <p class="fw-bold mb-0">{Advisor Name}</p>
      </div>

      <div class="nav-actions d-flex align-items-center gap-3">
        <a 
          class="nav-link text-center"
          href="mailto:{advisorEmail}"
        >
          Email<br>
          <span class="small">{advisorEmail}</span>
        </a>

        <a 
          class="nav-link text-center"
          href="tel:{advisorPhone}"
        >
          Call<br>
          <span class="small">{advisorPhone}</span>
        </a>

        <a 
          class="btn btn-primary btn-corner"
          href="{loginLink}"
        >
          Log in to Brightspace
        </a>
      </div>

    </div>
  </nav>
</header>
`,
    notes:
      "Use when a page needs advisor-specific support actions in the header, including direct contact options and a Brightspace login CTA.",
  },

  {
    id: "nav-logo-call-text",
    name: "Simple Nav – Logo, Call & Text Links",
    group: "navigation",
    description:
      "Logo left, call and text contact links right. No countdown. White background.",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Nav Images/nav-white-bg.png`,
    tags: ["nav", "simple", "contact", "call", "text"],
    markup: `<header class="bg-white">
<nav class="navbar navbar-expand-lg p-3 navbar-bg-white">
  <div class="container">
    <a class="navbar-brand" href="https://www.snhu.edu/">
      <img class="logo-blue-text" alt="SNHU Logo" height="80" />
    </a>
    <div class="justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav d-flex">
        <a href="Tel:8883870861" class="nav-link mx-3 text-center" target="_blank">Call <br> 888.387.0864</a>
        <a href="sms:21216" class="nav-link mx-3 text-center" target="_blank">Text <br> 21216</a>
      </div>
    </div>
  </div>
</nav>
</header>`,
    notes:
      "Uses logo-blue-text CSS class instead of a hardcoded src so the logo stays in sync with the design system. Add navbar-bg-white for white background or navbar-bg-blue with bg-heritage for the dark variant.",
  },

  // Tables
  {
    id: "upcoming-dates-pattern-bg",
    name: "Upcoming Dates – Pattern Blue Background",
    group: "content-sections",
    description:
      "Split row: headline left, dates table right. Heritage blue with pattern background.",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Tables/important-date-table.png`,
    tags: ["dates", "table", "pattern", "blue", "schedule"],
    markup: `<section class="pattern-blue-bg bg-container bg-heritage mb-0">
  <div class="container">
    <div class="row">

      <div class="col-md-5 d-flex align-items-center">
        <h2 class="text-white">Important Upcoming Dates</h2>
      </div>

      <div class="col-md-7">
        <table class="upcoming-date-table">
          <tr>
            <td><strong>Orientation</strong></td>
            <td>June 16, 17 or 18</td>
          </tr>
          <tr>
            <td><strong>Medical Requirements Deadline</strong></td>
            <td>June 30</td>
          </tr>
          <tr>
            <td><strong>Fall Tuition Bill Deadline</strong></td>
            <td>August 7</td>
          </tr>
          <tr>
            <td><strong>Move-In/Check-In Day</strong></td>
            <td>August 28</td>
          </tr>
          <tr>
            <td><strong>Term Start (Classes Begin)</strong></td>
            <td>August 31</td>
          </tr>
        </table>
      </div>

    </div>
  </div>
</section>`,
    notes:
      "pattern-blue-bg and bg-container are both required together. Add or remove <tr> rows as needed. Table border color inherits from --color-border.",
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
    id: "icon-todo-arrow",
    name: "Todo Arrow Icon",
    group: "icons",
    description: "An arrow icon used to indicate tasks or progression.",
    previewImageUrl:
      "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/3f7963aa-5c25-44d5-8331-e9e66d150ae2.png",
    tags: ["icon", "arrow", "todo"],
    markup: `<div class="todo-icon arrow"></div>`,
    notes: "Used for directional cues or task flows.",
  },
  {
    id: "icon-todo-star",
    name: "Todo Star Icon",
    group: "icons",
    description: "A star icon used to highlight important or featured items.",
    previewImageUrl:
      "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/9c877441-c2ff-48a8-bea6-aa09e963a5c9.png",
    tags: ["icon", "star", "todo"],
    markup: `<div class="todo-icon star"></div>`,
    notes: "Used for favorites or priority items.",
  },

  {
    id: "icon-number-1",
    name: "Number 1 Icon",
    group: "icons",
    description: "Represents step one in a sequence.",
    previewImageUrl:
      "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/fd53a586-c4eb-4802-b02d-03974d4fe5a5.png",
    tags: ["icon", "number", "step"],
    markup: `<div class="number-icon one"></div>`,
    notes: "Used in step-by-step flows.",
  },
  {
    id: "icon-number-2",
    name: "Number 2 Icon",
    group: "icons",
    description: "Represents step two in a sequence.",
    previewImageUrl:
      "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/1a876df6-e827-4e49-9003-c92cf6694eae.png",
    tags: ["icon", "number", "step"],
    markup: `<div class="number-icon two"></div>`,
    notes: "Used in step-by-step flows.",
  },
  {
    id: "icon-number-3",
    name: "Number 3 Icon",
    group: "icons",
    description: "Represents step three in a sequence.",
    previewImageUrl:
      "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/b7eae9a1-435e-4b97-90f0-415d56a14592.png",
    tags: ["icon", "number", "step"],
    markup: `<div class="number-icon three"></div>`,
    notes: "Used in step-based UI.",
  },
  {
    id: "icon-number-4",
    name: "Number 4 Icon",
    group: "icons",
    description: "Represents step four in a sequence.",
    previewImageUrl:
      "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/fcec9366-c4e8-432a-b34f-fa329f36cdce.png",
    tags: ["icon", "number", "step"],
    markup: `<div class="number-icon four"></div>`,
    notes: "Used in step-based UI.",
  },
  {
    id: "icon-number-5",
    name: "Number 5 Icon",
    group: "icons",
    description: "Represents step five in a sequence.",
    previewImageUrl:
      "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/0f9cd4be-8a69-48a4-846d-aa50aa2f7b21.png",
    tags: ["icon", "number", "step"],
    markup: `<div class="number-icon five"></div>`,
    notes: "Used in step-based UI.",
  },

  {
    id: "icon-academic",
    name: "Academic Icon",
    group: "icons",
    description: "Represents academic services and resources.",
    previewImageUrl:
      "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/f4083947-7a2e-476a-b060-6b7438d68d55.png",
    tags: ["icon", "academic"],
    markup: `<div class="info-icon academic"></div>`,
    notes: "Used for academic-related sections.",
  },
  {
    id: "icon-campus-accessibility",
    name: "Campus Accessibility Icon",
    group: "icons",
    description: "Represents accessibility services for students.",
    previewImageUrl:
      "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/07a70c02-8b3f-4949-a10e-25c1ec76aa92.png",
    tags: ["icon", "accessibility"],
    markup: `<div class="info-icon campus"></div>`,
    notes: "Used for accessibility and accommodations.",
  },
  {
    id: "icon-wellness",
    name: "Wellness Icon",
    group: "icons",
    description: "Represents health and wellness services.",
    previewImageUrl:
      "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/0884faa4-48d0-476f-b182-8cdc75c171b3.png",
    tags: ["icon", "wellness"],
    markup: `<div class="info-icon wellness"></div>`,
    notes: "Used for health-related content.",
  },
  {
    id: "icon-career",
    name: "Career Icon",
    group: "icons",
    description: "Represents career and professional services.",
    previewImageUrl:
      "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/7798b2b4-b8e4-4ee9-bdae-c630f4bce131.png",
    tags: ["icon", "career"],
    markup: `<div class="info-icon career"></div>`,
    notes: "Used for career development content.",
  },
  {
    id: "icon-wolak",
    name: "Wolak Icon",
    group: "icons",
    description: "Represents tutoring and learning center services.",
    previewImageUrl:
      "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/4af941a3-dd8a-4a72-8651-2db292673915.png",
    tags: ["icon", "learning"],
    markup: `<div class="info-icon wolak"></div>`,
    notes: "Used for tutoring services.",
  },
  {
    id: "icon-public-safety",
    name: "Public Safety Icon",
    group: "icons",
    description: "Represents campus safety and security.",
    previewImageUrl:
      "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/23d4f835-f47b-4a38-b7b0-fde7c4433fa6.png",
    tags: ["icon", "safety"],
    markup: `<div class="info-icon public"></div>`,
    notes: "Used for safety-related content.",
  },
  {
    id: "icon-residence-life",
    name: "Residence Life Icon",
    group: "icons",
    description: "Represents housing and student living.",
    previewImageUrl:
      "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/91a1861d-3c22-4806-b6a3-3b1014a05959.png",
    tags: ["icon", "housing"],
    markup: `<div class="info-icon residence"></div>`,
    notes: "Used for housing resources.",
  },
  {
    id: "icon-employment",
    name: "Employment Icon",
    group: "icons",
    description: "Represents student employment opportunities.",
    previewImageUrl:
      "https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/dafa583c-7367-4fd3-902b-337c6fc76d75.png",
    tags: ["icon", "employment"],
    markup: `<div class="info-icon employment"></div>`,
    notes: "Used for job-related content.",
  },

  //Accordions
  {
    id: "accordion-flush",
    name: "Flush Accordion",
    group: "components",
    description:
      "A stacked accordion pattern with bordered items and expandable content sections.",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Component Images/accordion-flush.png`,
    tags: ["accordion", "collapse", "content", "faq"],
    markup: `<div class="accordion accordion-flush">
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button collapsed" type="button">
        Accordion Item Title
      </button>
    </h3>
    <div class="accordion-collapse collapse">
      <div class="accordion-body">
        Accordion content goes here. Add supporting text, links, or other content as needed.
      </div>
    </div>
  </div>
</div>`,
    notes:
      "Best used for FAQs, grouped information, or expandable content blocks.",
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

  // Layouts
  {
    id: "col-md-1",
    name: "Column md-1",
    group: "layouts",
    description:
      "A column that spans 1 of 12 columns at the medium breakpoint (≥768px).",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Component Images/col-md-1.png`,
    tags: ["grid", "column", "md", "1/12"],
    markup: `<section>
  <div class="container">
  <div class="row">
  <div class="col-md-1">{add component here}</div>
  <div class="col-md-1">{add component here}</div>
  <div class="col-md-1">{add component here}</div>
  <div class="col-md-1">{add component here}</div>
  <div class="col-md-1">{add component here}</div>
  <div class="col-md-1">{add component here}</div>
  <div class="col-md-1">{add component here}</div>
  <div class="col-md-1">{add component here}</div>
  <div class="col-md-1">{add component here}</div>
  <div class="col-md-1">{add component here}</div>
  <div class="col-md-1">{add component here}</div>
  <div class="col-md-1">{add component here}</div>
  </div>
</div>
</section>`,
    notes: "Takes up 8.33% width at medium screens and above.",
  },
  {
    id: "col-md-2",
    name: "Column md-2",
    group: "layout",
    description:
      "A column that spans 2 of 12 columns at the medium breakpoint (≥768px).",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Component Images/col-md-2.png`,
    tags: ["grid", "column", "md", "2/12"],
    markup: `<section>
  <div class="container">
  <div class="row">
  <div class="col-md-2">{add component here}</div>
  <div class="col-md-2">{add component here}</div>
  <div class="col-md-2">{add component here}</div>
  <div class="col-md-2">{add component here}</div>
  <div class="col-md-2">{add component here}</div>
  <div class="col-md-2">{add component here}</div>
  </div>
</div>
</section>`,
    notes: "Takes up 16.66% width at medium screens and above.",
  },
  {
    id: "col-md-3",
    name: "Column md-3",
    group: "layouts",
    description:
      "A column that spans 3 of 12 columns at the medium breakpoint (≥768px).",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Component Images/col-md-3.png`,
    tags: ["grid", "column", "md", "3/12"],
    markup: `<section>
  <div class="container">
  <div class="row">
  <div class="col-md-3">{add component here}</div>
  <div class="col-md-3">{add component here}</div>
  <div class="col-md-3">{add component here}</div>
  <div class="col-md-3">{add component here}</div>
  </div>
</div>
</section>`,
    notes: "Takes up 25% width at medium screens and above.",
  },
  {
    id: "col-md-4",
    name: "Column md-4",
    group: "layouts",
    description:
      "A column that spans 4 of 12 columns at the medium breakpoint (≥768px).",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Component Images/col-md-4.png`,
    tags: ["grid", "column", "md", "4/12"],
    markup: `<section>
  <div class="container">
  <div class="row">
  <div class="col-md-4">{add component here}</div>
  <div class="col-md-4">{add component here}</div>
  <div class="col-md-4">{add component here}</div>
  </div>
</div>
</section>`,
    notes: "Takes up 33.33% width at medium screens and above.",
  },
  {
    id: "col-md-5",
    name: "Column md-5",
    group: "layouts",
    description:
      "A column that spans 5 of 12 columns at the medium breakpoint (≥768px).",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Component Images/col-md-5.png`,
    tags: ["grid", "column", "md", "5/12"],
    markup: `<section>
  <div class="container">
  <div class="row">
  <div class="col-md-5">{add component here}</div>
  <div class="col-md-5">{add component here}</div>
  <div class="col-md-2">{add component here}</div>
  </div>
</div>
</section>`,
    notes: "Takes up 41.66% width at medium screens and above.",
  },
  {
    id: "col-md-6",
    name: "Column md-6",
    group: "layouts",
    description:
      "A column that spans 6 of 12 columns at the medium breakpoint (≥768px).",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Component Images/col-md-6.png`,
    tags: ["grid", "column", "md", "6/12"],
    markup: `<section>
  <div class="container">
  <div class="row">
  <div class="col-md-6">{add component here}</div>
  <div class="col-md-6">{add component here}</div>
  </div>
</div>
</section>`,
    notes: "Takes up 50% width at medium screens and above.",
  },
  {
    id: "col-md-7",
    name: "Column md-7",
    group: "layouts",
    description:
      "A column that spans 7 of 12 columns at the medium breakpoint (≥768px).",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Component Images/col-md-7.png`,
    tags: ["grid", "column", "md", "7/12"],
    markup: `<section>
  <div class="container">
  <div class="row">
  <div class="col-md-7">{add component here}</div>
  <div class="col-md-5">{add component here}</div>
  </div>
</div>
</section>`,
    notes: "Takes up 58.33% width at medium screens and above.",
  },
  {
    id: "col-md-8",
    name: "Column md-8",
    group: "layouts",
    description:
      "A column that spans 8 of 12 columns at the medium breakpoint (≥768px).",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Component Images/col-md-8.png`,
    tags: ["grid", "column", "md", "8/12"],
    markup: `<section>
  <div class="container">
  <div class="row">
  <div class="col-md-8">{add component here}</div>
  <div class="col-md-4">{add component here}</div>
  </div>
</div>
</section>`,
    notes: "Takes up 66.66% width at medium screens and above.",
  },
  {
    id: "col-md-9",
    name: "Column md-9",
    group: "layouts",
    description:
      "A column that spans 9 of 12 columns at the medium breakpoint (≥768px).",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Component Images/col-md-9.png`,
    tags: ["grid", "column", "md", "9/12"],
    markup: `<section>
  <div class="container">
  <div class="row">
  <div class="col-md-9">{add component here}</div>
  <div class="col-md-3">{add component here}</div>
  </div>
</div>
</section>`,
    notes: "Takes up 75% width at medium screens and above.",
  },
  {
    id: "col-md-10",
    name: "Column md-10",
    group: "layouts",
    description:
      "A column that spans 10 of 12 columns at the medium breakpoint (≥768px).",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Component Images/col-md-10.png`,
    tags: ["grid", "column", "md", "10/12"],
    markup: `<section>
  <div class="container">
  <div class="row">
  <div class="col-md-10">{add component here}</div>
  <div class="col-md-2">{add component here}</div>
  </div>
</div>
</section>`,
    notes: "Takes up 83.33% width at medium screens and above.",
  },
  {
    id: "col-md-11",
    name: "Column md-11",
    group: "layouts",
    description:
      "A column that spans 11 of 12 columns at the medium breakpoint (≥768px).",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Component Images/col-md-11.png`,
    tags: ["grid", "column", "md", "11/12"],
    markup: `<section>
  <div class="container">
  <div class="row">
  <div class="col-md-11">{add component here}</div>
  <div class="col-md-1">{add component here}</div>
  </div>
</div>
</section>`,
    notes: "Takes up 91.66% width at medium screens and above.",
  },
  {
    id: "col-md-12",
    name: "Column md-12",
    group: "layouts",
    description:
      "A column that spans all 12 columns at the medium breakpoint (≥768px).",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Component Images/col-md-12.png`,
    tags: ["grid", "column", "md", "12/12"],
    markup: `<section>
  <div class="container">
  <div class="row">
  <div class="col-md-12">{add component here}</div>
  </div>
</div>
</section>`,
    notes: "Full-width column.",
  },

  //Footer

  {
    id: "footer-three-column",
    name: "Footer (Three Column) w/ Heritage Blue BG",
    group: "footers",
    description:
      "A responsive three-column footer with contact information, centered logo, and legal links. Stacks on smaller screens and aligns horizontally at the medium breakpoint.",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/Footer/3-col-footer.png`,
    tags: ["footer", "layout", "three-column", "branding"],
    markup: `<footer class="py-5 bg-ink-blue">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 d-flex justify-content-center align-items-center">
        <p class="text-white">
          <strong>SNHU Admission</strong><br>
          2500 North River Road<br>
          Manchester, NH 03106<br>
          <a href="tel:8006681249" class="text-link">800.668.1249</a><br>
          <a href="mailto:admissions@snhu.edu" class="text-link">admissions@snhu.edu</a>
        </p>
      </div>

      <div class="col-md-4 d-flex justify-content-center align-items-center my-3">
        <a href="https://www.snhu.edu/" target="_blank" class="text-decoration-none">
          <img src="https://client-data.knak.io/production/email_assets/5fd10b569d941/Y9PaAR4BN1uvwQSeUR37Jtdwa2YUrN1By1RZIsk8.png" height="80" alt="SNHU logo">
        </a>
      </div>

      <div class="col-md-4 d-flex justify-content-center align-items-center">
        <p class="text-white">
          © 2026<br>
          Southern New Hampshire University<br>
          View our 
          <a href="https://www.snhu.edu/privacy-policy" class="text-link">Privacy Policy</a> | 
          <a href="https://www.snhu.edu/about-us/accessibility" class="text-link">Accessibility at SNHU</a>
        </p>
      </div>
    </div>
  </div>
</footer>`,
    notes:
      "Uses the grid system with medium columns. Content is centered vertically and horizontally using flex utilities.",
  },

  // Content Sections

  {
    id: "program-info-bar",
    name: "Program Info Bar",
    group: "content-sections",
    description:
      "Top-of-page info bar displaying program, advisor, and term end date.",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/section/gold-bar-section.png`,
    tags: ["info", "program", "advisor", "summary", "header"],
    markup: `  <section class="program-section bg-gold py-3">
      <div class="container">
        <div class="row text-center">

          <div class="col-md-4">
            <div class="program-info-item">
              <p class="text-uppercase fw-bold mb-1 small">Your Program</p>
              <p class="mb-0">%%=v(@Program)=%%</p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="program-info-item">
              <p class="text-uppercase fw-bold mb-1 small">Your Advisor</p>
              <p class="mb-0">%%=v(@AdvisorName)=%%</p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="program-info-item">
              <p class="text-uppercase fw-bold mb-1 small">Term Ends</p>
              <p class="mb-0">%%=FormatDate(@nextterm_enddate,"MMMM d")=%%</p>
            </div>
          </div>

        </div>
      </div>
    </section>
`,
    notes:
      "Use as a top-level summary bar for student dashboards or planner pages. Displays key contextual information like program, advisor, and term timeline using AMPscript.",
  },
  {
    id: "video-todo-split",
    name: "Video + To-Do List – Side by Side",
    group: "content-sections",
    description:
      "Vidyard embed left, to-do checklist right. Todo items have arrow (incomplete) or star (complete) icon states.",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/section/todo-video-combo.png`,
    tags: ["video", "todo", "checklist", "split"],
    markup: `<section>
  <div class="container">
    <div class="row fdr-gap-5 justify-content-center">

      <div class="mb-5">
        <iframe
          class="vidyard_iframe brdr-rad-20 gold-shadow vidyard-frame-w"
          title="Welcome to Southern New Hampshire University!"
          src="//play.vidyard.com/fewd14nzQoVZBFMiH1xPmt.html?"
          width="640" height="360"
          scrolling="no" frameborder="0"
          allowtransparency="true" allowfullscreen
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <div class="flex-1">
        <h2>Your To-Dos:</h2>

        <!-- Incomplete state: arrow icon + gold CTA button -->
        <div class="todo-wrapper mb-4">
          <div class="todo-icon arrow"></div>
          <h3>Submit Enrollment Deposit</h3>
          <button class="btn btn-primary" type="button">Not Completed Yet</button>
        </div>

        <!-- Complete state: add class d-none to hide entirely -->
        <div class="todo-wrapper">
          <div class="todo-icon star"></div>
          <h3>Register for Courses</h3>
          <button class="btn btn-no-outline" type="button">Completed</button>
        </div>

        <!-- Incomplete state -->
        <div class="todo-wrapper mb-4">
          <div class="todo-icon arrow"></div>
          <h3>Orientation</h3>
          <button class="btn btn-primary" type="button">Not Completed Yet</button>
        </div>

      </div>
    </div>
  </div>
</section>`,
    notes:
      "Swap the Vidyard src for your video URL. Toggle d-none on the todo-wrapper to show/hide items. btn-no-outline disables pointer events — use it for completed states only.",
  },

  {
    id: "hero-split-banner-image",
    name: "Hero – Banner Image BG, Split Cards",
    group: "content-sections",
    description:
      "Full-width banner image background. Left: dark blue card with personalized headline. Right: stacked white info card + gold hashtag card.",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/section/hero-split-cards.png`,
    tags: ["hero", "banner", "split", "personalization"],
    markup: `<section class="bg-container img-1">
  <div class="container py-5">
    <div class="row">

      <div class="col-md-6 mb-m-5">
        <div class="card rad-tr-bl bg-ink-blue min-h-100">
          <h1 class="text-break text-white">Congratulations on committing to SNHU, [First Name]!</h1>
          <p class="text-lg text-white">We recommend you bookmark this page and use it to connect to the resources needed to complete your enrollment.</p>
        </div>
      </div>

      <div class="col-md-5 offset-md-1">
        <div class="fdc-gap-5">

          <div class="card rad-tl-br bg-white">
            <p class="fw-bold text-uppercase text-md">Academic Program
              <br><span class="fw-normal">Bachelor of Science in Business</span>
            </p>
            <p class="fw-bold text-uppercase text-md">Campus Housing Status
              <br><span class="fw-normal">Resident Student</span>
            </p>
          </div>

          <div class="card rad-tr-bl bg-sky">
            <p class="fw-bold text-5xl text-center text-white">#SNHUBOUND</p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>`,
    notes:
      "Replace [First Name], program name, and housing status with your personalization tokens. img-1 pulls the animated GIF banner via CSS variable.",
  },

  {
    id: "confirmation-checkmark",
    name: "Confirmation – Centered Checkmark with Message",
    group: "content-sections",
    description:
      "Centered confirmation message with checkmark image, headline, and contact links. Gold background with large bold text.",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/section/confirmation.png`,
    tags: ["confirmation", "checkmark", "centered", "success"],
    markup: `<section class="bg-gold py-5">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center position-relative pt-5">
        <img
          src="https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/b72ff5a6-b22e-4166-9422-a8d37c2a7fa0.png"
          alt="Green checkmark icon indicating successful completion"
          class="position-absolute top-0 start-50 translate-middle"
          height="112"
        />
        <p class="text-5xl fw-bold text-ink-blue">
          You're in!<br>
          Your payment request has been submitted.<br><br>
          Now call <a href="tel:8883870864" class="link-unset">888.387.0864</a> or
          text <a href="sms:21216" class="link-unset">21216</a> to let us know you're ready to register!
        </p>
      </div>
    </div>
  </div>
</section>`,
    notes:
      "bg-gold matches the original gold background. text-5xl + fw-bold + text-ink-blue replicates the you-in-text style (2.5rem, bold, #00244e). The checkmark is absolutely positioned above the section using position-absolute, top-0, start-50, and translate-middle — all defined in your source CSS. pt-5 on the column creates clearance so the text doesn't overlap the image.",
  },

  {
    id: "free-app-checkmark-cards",
    name: "Feature Cards – 2x2 Checkmark Grid with CTA Headline",
    group: "content-sections",
    description:
      "Left headline with CTA, right 2x2 grid of benefit cards each with a checkmark icon badge.",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/section/feature-card-2x2.png`,
    tags: ["cards", "checklist", "benefits", "grid", "cta"],
    markup: `<section class="py-5 mb-5">
  <div class="container">
    <div class="row align-items-center">

      <div class="col-md-4 d-flex align-items-center justify-content-center mb-4">
        <h2>Want to learn more? <br> Finish your free application!</h2>
      </div>

      <div class="col-md-8">
        <div class="row">

          <div class="col-md-12 col-lg-6 mb-3">
            <div class="card position-relative pt-4 ps-4">
              <img
                src="https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/53e90517-7f80-4b95-a591-baf5d0992eaa.png"
                alt="checkmark icon"
                class="position-absolute top-0 start-0 translate-middle"
                width="60" height="60"
              />
              <p class="mb-0">A <strong>dedicated admission counselor</strong> will answer questions and guide you every step.</p>
            </div>
          </div>

          <div class="col-md-12 col-lg-6 mb-3">
            <div class="card position-relative pt-4 ps-4">
              <img
                src="https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/53e90517-7f80-4b95-a591-baf5d0992eaa.png"
                alt="checkmark icon"
                class="position-absolute top-0 start-0 translate-middle"
                width="60" height="60"
              />
              <p class="mb-0">Your <strong>free transfer credit evaluation</strong> will let you see how prior school, work and military experiences can help you graduate faster and for less money.</p>
            </div>
          </div>

          <div class="col-md-12 col-lg-6 mb-3">
            <div class="card position-relative pt-4 ps-4">
              <img
                src="https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/53e90517-7f80-4b95-a591-baf5d0992eaa.png"
                alt="checkmark icon"
                class="position-absolute top-0 start-0 translate-middle"
                width="60" height="60"
              />
              <p class="mb-0">You'll receive a <strong>personalized plan</strong> to show you exactly which courses you'll need to complete your degree.</p>
            </div>
          </div>

          <div class="col-md-12 col-lg-6 mb-3">
            <div class="card position-relative pt-4 ps-4">
              <img
                src="https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/53e90517-7f80-4b95-a591-baf5d0992eaa.png"
                alt="checkmark icon"
                class="position-absolute top-0 start-0 translate-middle"
                width="60" height="60"
              />
              <p class="mb-0">A <strong>student financial services team</strong> will help you create the right tuition funding plan for your budget and timeline.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>`,
    notes:
      "card is defined in your source CSS and provides the white background and shadow. position-relative on the card combined with position-absolute top-0 start-0 translate-middle on the img places the checkmark badge at the top-left corner of each card. pt-4 and ps-4 create clearance so the card text doesn't sit behind the icon. The checkmark image src is hardcoded from the SNHU CDN.",
  },

  {
    id: "hero-bg-image-blue-card",
    name: "Hero – Background Image with Blue Rounded Card",
    group: "content-sections",
    description:
      "Full-width background image with a heritage blue card overlaid on the left. Card has asymmetric border radius, padding, and white text.",
    previewImageUrl: `${import.meta.env.BASE_URL}Images/section/hero-rounded-card.png`,
    tags: ["hero", "banner", "blue", "card", "personalization"],
    markup: `<section class="py-5 position-relative bg-container min-h-100"
  style="background-image: url('https://image.dream.snhu.edu/lib/fe9213737461067576/m/1/6a06c6f7-32cd-41f1-af14-b3c11f00c3d8.png'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 500px;">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-sm-12">
        <div class="card bg-heritage rad-tl-br p-5">
          <h1 class="text-white">Dear Future Kevin,</h1>
          <p class="text-white text-lg fw-normal">Aren't you glad you earned your degree?</p>
        </div>
      </div>
    </div>
  </div>
</section>`,
    notes:
      "bg-container and the inline background-image style replicate hero-section since your CSS variable --banner-image-1 points to a different image — swap the URL to your own. bg-heritage matches the #0a3370 card background. rad-tl-br replicates the border-radius: 0 60px asymmetric shape defined in brdr-theme-bg-blue. p-5 matches the 4rem padding. text-white on both h1 and p replaces the brdr-theme-bg-blue > * { color: #ffffff } rule. text-lg fw-normal on the p replicates p-head at 1.5rem/400 weight — the closest available in your type scale.",
  },

  //Typography
  {
    id: "h1-default",
    name: "H1 – Default",
    group: "typography",
    description: "Default h1 heading in heritage blue.",
    previewImageUrl: ``,
    tags: ["heading", "h1", "typography"],
    markup: `<h1>Your Heading Here</h1>`,
    notes:
      "Renders at 3rem (--fs-5xl), font-weight 600, color --color-ink-blue. Defined globally on the h1 selector in your source CSS.",
  },

  {
    id: "h1-white",
    name: "H1 – White",
    group: "typography",
    description: "H1 heading in white for use on dark backgrounds.",
    previewImageUrl: ``,
    tags: ["heading", "h1", "typography", "white"],
    markup: `<h1 class="text-white">Your Heading Here</h1>`,
    notes: "Use on bg-heritage, bg-ink-blue, bg-sky sections.",
  },

  {
    id: "h2-default",
    name: "H2 – Default",
    group: "typography",
    description: "Default h2 heading in heritage blue, bold.",
    previewImageUrl: ``,
    tags: ["heading", "h2", "typography"],
    markup: `<h2>Your Heading Here</h2>`,
    notes:
      "Renders at 2.5rem (--fs-4xl), font-weight 700, color --color-ink-blue.",
  },

  {
    id: "h2-white",
    name: "H2 – White",
    group: "typography",
    description: "H2 heading in white for use on dark or colored backgrounds.",
    previewImageUrl: ``,
    tags: ["heading", "h2", "typography", "white"],
    markup: `<h2 class="text-white">Your Heading Here</h2>`,
    notes: "Use on bg-heritage, bg-ink-blue, bg-sky, bg-gold sections.",
  },

  {
    id: "h2-centered",
    name: "H2 – Centered",
    group: "typography",
    description: "Centered h2 heading, commonly used as a section headline.",
    previewImageUrl: ``,
    tags: ["heading", "h2", "typography", "centered"],
    markup: `<h2 class="text-center">Your Heading Here</h2>`,
    notes: "Pair with mb-4 or mb-5 when used above a grid or content block.",
  },

  {
    id: "h3-default",
    name: "H3 – Default",
    group: "typography",
    description: "Default h3 subheading in ink blue.",
    previewImageUrl: ``,
    tags: ["heading", "h3", "typography"],
    markup: `<h3>Your Subheading Here</h3>`,
    notes:
      "Renders at 1.5rem (--fs-xl), font-weight 600, color --color-ink-blue.",
  },

  {
    id: "h3-white",
    name: "H3 – White",
    group: "typography",
    description: "H3 subheading in white for use on dark backgrounds.",
    previewImageUrl: ``,
    tags: ["heading", "h3", "typography", "white"],
    markup: `<h3 class="text-white">Your Subheading Here</h3>`,
    notes: "Use inside card components with bg-heritage or bg-ink-blue.",
  },

  {
    id: "h4-default",
    name: "H4 – Default",
    group: "typography",
    description: "Default h4 label heading in ink blue.",
    previewImageUrl: ``,
    tags: ["heading", "h4", "typography"],
    markup: `<h4>Your Label Here</h4>`,
    notes: "Renders at 1.25rem (--fs-lg), font-weight 600.",
  },

  {
    id: "h4-uppercase",
    name: "H4 – Uppercase Label",
    group: "typography",
    description: "H4 as an uppercase label, commonly used in info cards.",
    previewImageUrl: ``,
    tags: ["heading", "h4", "typography", "uppercase", "label"],
    markup: `<h4 class="text-uppercase fw-bold">Your Label Here</h4>`,
    notes:
      "Matches the uppercase label pattern used in the hero info card (Academic Program, Campus Housing Status).",
  },

  {
    id: "h5-default",
    name: "H5 – Default",
    group: "typography",
    description: "Default h5 used for sub-labels or accordion body headings.",
    previewImageUrl: ``,
    tags: ["heading", "h5", "typography"],
    markup: `<h5>Your Sub-Label Here</h5>`,
    notes:
      "Renders at 1.125rem (--fs-md), font-weight 600. Commonly used inside accordion body content.",
  },

  //Scripts

  {
    id: "countdown-js-script",
    name: "Countdown JS Script",
    group: "scripts",
    description: "JavaScript snippet for creating a countdown timer.",
    previewImageUrl: ``,
    tags: ["js", "countdown", "timer"],
    markup: ` <script>
    function calculateCountdown(targetDate) {
      // This will give us the current date and time as of right now
      var currentDate = new Date();
      // Calculate the time difference between the target date that is ref in ampscript and current date
      var timeDifference = targetDate - currentDate;
      // Calculate days, hours, minutes, and seconds
      var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      // Return the countdown as an object to make it easier for us to use in other functions
      return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    }
    function updateCountdownDisplay() {
      var dateElement = document.getElementById('nextTermStartDate');
      var dateString = dateElement.innerText;
      var targetDate = new Date(dateString);
      var countdown = calculateCountdown(targetDate);
      // Update the inner HTML of elements with respective ids
      document.getElementById('days').innerHTML = countdown.days;
      document.getElementById('hours').innerHTML = countdown.hours;
      document.getElementById('minutes').innerHTML = countdown.minutes;
      document.getElementById('seconds').innerHTML = countdown.seconds;
      // Check if the target date is reached
      if (countdown.days <= 0 && countdown.hours <= 0 && countdown.minutes <= 0 && countdown.seconds <= 0) {
        document.getElementById('countdown-headline').innerHTML = "You’re on your way!";
        document.getElementById("countdown").style.display = "none";
      }
    }
    // Call the updateCountdownDisplay function to update the display initially
    updateCountdownDisplay();
    // Update the display every second (1000 milliseconds)
    setInterval(updateCountdownDisplay, 1000);
  </script>`,
    notes: "JavaScript snippet for creating a countdown timer.",
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
