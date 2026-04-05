Project: Brian's Portfolio (A3)
By: Brian Bui (B01043369)
Course: CSCI 1170

Note: Code is reused and expanded from A1 and A2 submissions.

============================================================
1. FILE STRUCTURE
============================================================

A3_wl969576/
|-- index.html              Home page (Hero, About Me, Social Life, Contact Form)
|-- education.html          Education page (Secondary, Post-Secondary, Course Table)
|-- gym.html                Gym Progress page (Day 1, Day 500, Videos)
|-- style.css               External CSS stylesheet (all styling)
|-- script.js               External JavaScript file (all interactivity)
|-- README.txt              This file
|-- images/
|   |-- logow.png           Site logo / favicon
|   |-- index/
|   |   |-- index1.jpeg     Graduation photo
|   |   |-- index2.jpeg     Portrait photo
|   |   |-- sclogo1.png     Instagram social media icon
|   |   |-- sclogo2.png     LinkedIn social media icon
|   |   |-- sclogo3.png     Facebook social media icon
|   |   |-- slogo1.jpg      Dal Hackers Society logo
|   |   |-- slogo2.png      AWS Cloud Club logo
|   |   |-- slogo3.jpg      Dal Language Exchange Society logo
|   |
|   |-- education/
|   |   |-- woodlawn.jpg     Woodlawn High School photo
|   |   |-- highschool1.jpg  Last day at Woodlawn
|   |   |-- highschool2.jpg  Teacher-Student day
|   |   |-- highschool3.jpeg Friend and teacher photo
|   |   |-- dalhousie.jpeg   Dalhousie University campus
|   |   |-- uni1.PNG         Job Fair day
|   |   |-- uni2.jpg         Codechella week
|   |   |-- uni3.jpg         CS building
|   |
|   |-- gym/
|       |-- gym1.JPG        Gym photo (bros at 12am)
|       |-- gym2.jpg        Day 1 progress
|       |-- gym3.JPG        Day 500 progress
|
|-- music/
|   |-- music.m4a           Background audio file
|
|-- video/
    |-- hero.mp4            Hero section background video (looping)
    |-- pr.mp4              Bench press personal record video

============================================================
2. HOW THE SITE IS ORGANIZED
============================================================

The site has three pages linked together via a top navigation bar and an optional collapsible sidebar:

  index.html      -->  education.html
  index.html      -->  gym.html
  education.html  -->  index.html, gym.html
  gym.html        -->  index.html, education.html

Each page includes the same topnav and sidebar for consistent navigation across the site. All links are relative.

============================================================
3. PART 1 — CSS STYLING
============================================================

All CSS is in a single external file: style.css

a) Three Web Pages
   - index.html, education.html, gym.html
   All three are styled via the shared style.css file.

b) Navigation Structure
   - Top navigation bar (#topnav): sticky bar with logo, page links, and theme toggle buttons. Styled with flexbox.
   - Sidebar (#sidebar): collapsible side panel with logo, name, ordered/unordered navigation list, and footer.
   Location: style.css — #topnav, #sidebar, .sidebar-inner, etc.

c) Style 3 Images with Border, Padding, Margins
   Class "styled-img" is applied to images across all three pages:
     - index.html: graduation photo (index1.jpeg), portrait (index2.jpeg)
     - education.html: Woodlawn school (woodlawn.jpg), Dalhousie (dalhousie.jpeg)
     - gym.html: gym1.JPG, gym2.jpg, gym3.JPG
   Location: style.css — .styled-img { border: 3px ...; padding: 6px; margin: 12px; }

d) Style URLs
   All links are styled with colour transitions and hover underline.
   Location: style.css — a { ... } and a:hover { ... }

e) Style Lists (Ordered and Unordered)
   - Ordered list: sidebar navigation uses decimal numbering.
     Location: style.css — .sidebar-nav ol { list-style-type: decimal; }
   - Unordered list: sidebar sub-items use disc; interest list uses square.
     Location: style.css — .sidebar-nav ul li { list-style-type: disc; } and .interest-list { list-style-type: square; }

f) Table
   Course table on education.html is styled with themed borders, header background, hover effects, and uppercase headers.
   Location: style.css — .course-table, .course-table th, .course-table td

============================================================
4. PART 2 — ADDITIONAL CSS (Selectors & Features)
============================================================

a) Form
   A contact form with text inputs, email input, and textarea is on index.html (#contact-section). Styled with themed colours, focus states, and a submit button.
   Location: style.css — .contact-form, .form-group, .form-submit-btn

b) Flexbox
   Flexbox is used for the overall page layout (#page-body), content rows (.content-row), top navigation (#topnav), sidebar inner layout (.sidebar-inner), social media row, society row, greeting section, and form layout.
   Location: style.css — #page-body { display: flex; }, .content-row, etc.

c) CSS Grid
   The photo gallery on education.html uses CSS Grid with 3 columns on desktop that collapses to 1 column on mobile.
   Location: style.css — .photo-gallery { display: grid; grid-template-columns: repeat(3, 1fr); }

d) Required CSS Selectors (7 total):

   1. Universal Selector
      Location: style.css, line 86 — *, *::before, *::after { ... }
      Purpose: Resets box-sizing, margin, and padding for all elements.

   2. Multiple Selector
      Location: style.css, line 651 — .course-table th, .course-table td { ... }
      Purpose: Applies shared padding and border to both table header and table data cells in a single rule.

   3. Child Selector
      Location: style.css, line 387 — .sidebar-nav > ol > li { ... }
      Purpose: Targets only direct <li> children of the sidebar's
      ordered list, not nested list items.

   4. Sibling Selector (General ~)
      Location: style.css, line 671 — #main-content section ~ section { ... }
      Purpose: Adds top margin to any <section> that follows another <section> inside main content, for consistent spacing.

   5. Adjacent Sibling Selector (+)
      Location: style.css, line 439 — .sidebar-nav ol + ul { ... }
      Purpose: Adds extra top margin to a <ul> that directly follows an <ol> inside the sidebar navigation.

   6. Attribute Selector
      Location: style.css, line 293 — button[data-theme="dark"] { ... }
      Also: button[data-theme="light"], button[data-theme="ocean"]
      Purpose: Selects theme buttons by their data-theme attribute to control display ordering.

   7. Pseudo-element Selector
      Location: style.css, line 125 — a[href^="https://"]::after { ... }
      Also: style.css, line 946 — .section-text::first-letter { ... }
      Purpose: (1) Adds an arrow icon after external links to indicate they open off-site. (2) Enlarges and bolds the first letter of section paragraphs for a decorative drop-cap effect.

============================================================
5. PART 3 — RESPONSIVE DESIGN (Desktop, Tablet, Mobile)
============================================================

Three layout tiers are implemented via CSS media queries:

a) Desktop (above 1024px)
   - Full sidebar visible on the left, sticky below the topnav.
   - Side-by-side content rows using flexbox.
   - 3-column CSS Grid photo gallery.
   - Full navigation links and theme buttons in topnav.
   - Hero section at full height (380px min).

b) Tablet (601px to 1024px)
   Breakpoint: @media (max-width: 1024px)
   - Sidebar hidden by default, opens as a fixed overlay when toggled.
   - Content rows maintain side-by-side layout where space permits.
   - Photo gallery stays 3 columns but with reduced gap.
   - Font sizes and heading sizes reduced.
   - Hero section reduced to 300px min height.

c) Mobile (600px and below)
   Breakpoint: @media (max-width: 600px)
   - Sidebar overlays full viewport width when toggled open.
   - Top navigation page links hidden (theme buttons remain).
   - Content rows stack vertically (flex-direction: column).
   - Photo gallery collapses to single column.
   - Hero section reduced to 220px, smaller text.
   - Course table scrolls horizontally.
   - Form and images stretch to full width.

Required Part 3 elements:
   - Three webpages: index.html, education.html, gym.html
   - Table: .course-table on education.html
   - Text area: <textarea> in contact form on index.html
   - Photo gallery: .photo-gallery (CSS Grid) on education.html
   - Hero Image/Splash: #hero section with looping background video (video/hero.mp4) on index.html

============================================================
6. PART 4 — ACCESSIBILITY
============================================================

   - All images have descriptive alt text.
   - ARIA labels on navigation landmarks: <nav aria-label="Main navigation">, <aside aria-label="Sidebar navigation">, <section aria-label="...">.
   - aria-live="polite" and role="alert" on notification banner for screen reader announcements.
   - Screen-reader-only class (.sr-only) used for hidden labels (e.g., the name input label on index.html).
   - All form inputs have associated <label> elements.
   - Semantic HTML elements used throughout: <nav>, <main>, <aside>, <section>, <figure>, <figcaption>, <thead>, <tbody>.
   - Good colour contrast maintained across all three themes (Dark: light text on dark background; Light: dark text on light background; Ocean: light blue text on navy background).
   - Focus states on interactive elements (inputs, buttons).
   - Keyboard-navigable interface with visible focus indicators.
   - No broken or empty links; all links use relative paths.

============================================================
7. JAVASCRIPT FUNCTIONS
============================================================

All JS is in a single external file: script.js
Reused from A2 with the addition of handleFormSubmit().

a) setTheme(scheme)
   Purpose: Changes the website colour scheme.
   Input:   scheme (string) — "dark", "light", or "ocean"
   Output:  Removes existing theme classes from <body>, applies the new class, updates active button highlighting, and saves the preference to localStorage under key "brianTheme".
   Example: setTheme("ocean") adds class "ocean" to <body>.

b) restoreTheme()
   Purpose: Loads the saved theme preference on page load.
   Input:   None (reads "brianTheme" from localStorage).
   Output:  Calls setTheme() with the saved value, defaults to "dark".

c) showNotification(message)
   Purpose: Displays a slide-down notification banner at the top.
   Input:   message (string) — the text to display.
   Output:  Adds "show" class to #notification-banner, which triggers a CSS transition sliding it into view. Auto-dismisses after 4 seconds via setTimeout.
   Dependent: #notification-banner and #notification-msg in HTML.

d) dismissNotification()
   Purpose: Hides the notification banner immediately.
   Input:   None.
   Output:  Removes "show" class from #notification-banner.

e) greetVisitor()
   Purpose: Shows different welcome notifications for first-time versus returning visitors using a conditional (if/else).
   Input:   None (reads "brianPortfolioVisited" from localStorage).
   Output:  First visit: shows "Welcome to Brian Bui's Portfolio!" and sets the localStorage flag. Return visit: shows "Welcome back to Brian's Portfolio!"

f) toggleSidebar()
   Purpose: Collapses or expands the sidebar navigation.
   Input:   None (reads current CSS class state).
   Output:  Toggles the "collapsed" class on #sidebar. Saves state to localStorage under key "brianSidebar".

g) restoreSidebar()
   Purpose: Restores sidebar open/collapsed state on page load.
   Input:   None (reads "brianSidebar" from localStorage).
   Output:  Adds "collapsed" class to #sidebar if it was previously collapsed.

h) initBackToTop()
   Purpose: Initialises the back-to-top scroll button.
   Input:   None (event-driven via scroll and click listeners).
   Output:  Shows #back-to-top button after scrolling 300px down. Clicking the button smooth-scrolls to the top of the page.
   Dependent: #back-to-top element in HTML; window scroll and click event listeners.

i) updateGreeting()
   Purpose: Responds to user text input to display a personalised greeting (event handler).
   Input:   User types into #name-input (triggered by oninput event).
   Output:  Updates #greeting-text with "Hello, [name]!" or clears it if the input is empty.

j) handleFormSubmit(event)
   Purpose: Validates and handles the contact form submission.
   Input:   event (Event object) — the form submit event.
   Output:  Prevents default form submission. Uses a conditional to check if required fields (name, email, message) are filled. If empty: shows error notification. If valid: shows success notification with the user's name and resets the form.
   Dependent: showNotification(), #contact-form, #contact-name, #contact-email, #contact-message elements.

k) DOMContentLoaded listener
   Purpose: Runs all setup functions once the page DOM is ready.
   Calls:   restoreTheme(), restoreSidebar(), greetVisitor() (on index.html only), initBackToTop().

============================================================
8. CREDITS & REFERENCES
============================================================

All content is either personally created or belongs to the respective organisations listed below:

- Personal Photos: All photos of me, friends, high school, university, and gym progress are my own.
- Society Logos: Belong to their respective organisations: Dalhousie Hackers Society, AWS Cloud Club at Dalhousie, Dalhousie Language Exchange Society.
- Social Media Icons: Standard platform logos for Instagram, LinkedIn, and Facebook.
- YouTube Embed: Workout motivation/guide video. Credit to Noel Deyzel (embedded via YouTube).
- Audio: music.m4a is my own file.
- Video: pr.mp4 (bench press recording) is my own; hero.mp4 (hero background video) is sourced from a free stock video site (motionbgs.com).
- Site Logo: logow.png is my own design.