# AGENTS.md

## Project Overview

HairTreat is a static website project built from a customized version of the Glowix HTML template. The site is primarily a collection of standalone `.html` pages styled with Bootstrap plus a large custom stylesheet in `css/custom.css`. Most tasks in this repo involve careful content edits, small layout adjustments, image accessibility updates, or page-specific refinements without disturbing the shared template structure.

This project is not a component-based app. Repeated sections such as the header, navigation, footer, hero blocks, and sidebars are duplicated across individual HTML files, so changes must be made carefully and intentionally page by page.

## Folder/File Structure

- Root `*.html`: Main site pages. Important examples:
- `index.html`: Primary homepage currently customized for HairTreat.
- `index-image.html`, `index-slider.html`, `index-video.html`: Alternate homepage/template variants.
- `about.html`, `services.html`, `service-single.html`, `contact.html`, `book-appointment.html`, `pricing.html`, `reviews.html`, `case-study.html`, `blog.html`, `faqs.html`: Core marketing pages.
- Treatment pages such as `hair-prp.html`, `hair-transplant.html`, `beard-transplant.html`, `laser-treatment.html`, etc.: Individual service/treatment landing pages.
- `form.html`, `form-process.php`, `form-appointment.php`: Form-related pages and processing scripts.
- `css/`: Stylesheets.
- `css/bootstrap.min.css`: Bootstrap framework. Treat as vendor code.
- `css/custom.css`: Main custom site styling. Most approved styling edits should go here.
- Other CSS files such as `animate.css`, `magnific-popup.css`, `slicknav.min.css`, `swiper-bundle.min.css`, `mousecursor.css`, `all.min.css`: Third-party/vendor styles.
- `js/`: JavaScript libraries and theme behavior scripts such as Bootstrap, jQuery, sliders, animation helpers, popup logic, and `function.js`.
- `images/`: All site images, icons, SVGs, page headers, doctor photos, galleries, testimonials, and treatment assets.
- `webfonts/`: Font Awesome webfont assets.
- `documentation/`: Upstream template documentation/reference. Do not edit unless explicitly asked.
- `Read-Me.txt`: Basic upstream template notes.
- `AGENTS.md`: This guide for future Codex tasks.

## HTML Editing Rules

- Treat each HTML page as a hand-edited static document. Make small changes one file at a time.
- Never rewrite full sections unless explicitly asked.
- For text update tasks, edit only visible text unless the request specifically includes metadata, links, attributes, schema, or scripts.
- Preserve existing Bootstrap structure and custom template classes.
- Keep existing indentation/style reasonably consistent with the surrounding file.
- Reuse the current section wrappers, row/column structure, and utility classes instead of inventing new wrappers.
- Do not remove comments that help identify template sections unless they become inaccurate because of the requested change.
- Do not change header, footer, sidebar, or shared/global content unless explicitly asked.
- If the task is limited to a single page, avoid mirroring the same change across other pages unless the user requests a sitewide update.
- If adding `alt` text, never delete `img` tags while doing so.
- Never change image `src` unless explicitly asked.

## CSS Editing Rules

- Prefer editing `css/custom.css` for approved style changes.
- Do not edit `css/bootstrap.min.css` or other minified vendor CSS unless explicitly asked.
- Scope CSS changes as narrowly as possible to the affected page/section.
- Reuse existing color variables, spacing patterns, typography rules, and class naming conventions before adding new CSS.
- Avoid large visual refactors when the request only needs minor alignment, spacing, or text styling adjustments.
- Do not change global CSS, foundational selectors, or theme-wide variables unless explicitly asked.
- Before adding a new class, check whether an existing section or utility class already solves the issue.

## Image Handling Rules

- Never delete `img` tags while adding or fixing `alt` text.
- Never change image `src` unless explicitly asked.
- Preserve existing image dimensions, wrappers, figure elements, and animation/helper classes such as `image-anime` and `reveal` unless the task requires otherwise.
- Prefer improving accessibility through `alt` text and nearby visible captions rather than replacing image assets.
- Keep image paths relative and consistent with the current folder structure.
- Do not rename, move, recompress, or replace image assets unless the user explicitly requests asset work.

## Bootstrap Usage Rules

- Preserve the existing Bootstrap grid and container structure.
- Do not break `container`, `container-fluid`, `row`, or `col-*` nesting.
- Keep Bootstrap classes already used by the template, especially in navigation, responsive layout, spacing, and buttons.
- Do not replace Bootstrap layout patterns with custom CSS-only structures unless explicitly asked.
- When adjusting layout, prefer minimal class changes over large HTML reshuffles.
- Preserve the template's custom classes layered on top of Bootstrap, such as section wrappers and theme-specific button/content classes.

## Page Layout Rules

- Header, footer, sidebar, and major repeated layout blocks are considered sensitive shared structure. Do not change them unless explicitly asked.
- For layout tasks, show the intended diff before applying changes.
- Keep page sections in the current order unless the user explicitly asks to reorder them.
- Avoid changing animation hooks, sliders, popup bindings, or JS-dependent classes unless the task requires it.
- Maintain page-specific hero/banner, breadcrumb, and CTA structures as currently implemented.
- For pages with alternating image/text sections, prefer local adjustments instead of restructuring the entire page.

## Git Safety Rules

- Check `git status --short` before editing when possible.
- Never overwrite or revert user changes you did not make.
- Do not run destructive commands such as `git reset --hard` or `git checkout --` unless explicitly requested.
- Keep changes tightly scoped to the requested task.
- When a task could affect multiple files, complete and verify one file at a time.
- If unrelated files are dirty, leave them alone.

## Before-Edit Checklist

- Confirm which page or file is in scope.
- Inspect the surrounding section before editing so the change matches existing structure and style.
- Check whether the request is text-only, layout-only, image-related, or style-related.
- If it is a text update task, change only visible text unless told otherwise.
- If it is a layout task, prepare and show a diff before applying.
- Verify that the requested change does not require touching header, footer, sidebar, or global CSS.
- Verify that no image `src` will be changed unless explicitly requested.
- Verify that no `img` tag will be removed while working on accessibility or copy updates.

## After-Edit Checklist

- Review the edited file for accidental section rewrites or unrelated changes.
- Confirm Bootstrap structure and custom template classes were preserved.
- Confirm image `src` values were not changed unless explicitly requested.
- Confirm no `img` tags were removed during `alt` text or content work.
- Confirm header, footer, sidebar, and global CSS were untouched unless explicitly requested.
- Confirm the change is limited to the intended page/file.
- Check `git diff --stat` or `git diff --check` when useful to catch unintended edits or formatting issues.
- Summarize exactly what changed and note any areas that were intentionally left untouched.

## Default Working Style For Future Codex Tasks

- Start small.
- Read the target file first.
- Make the minimum safe edit.
- Preserve template structure.
- Avoid global ripple effects.
- If the request implies a broader redesign, pause and confirm scope before touching shared layout or sitewide styling.
