---
layout: page
---

## Review policy for content

- Only public GitHub repositories should be added as projects.
- Project content should only be updated by related individuals.
- All content mmust go through an offline gateway (since creating a branch is still public) ***before*** publishing work to GitHub.
  - This is to be conducted using a folder in MS Teams within the ESA Team folder.
  - Add content as a Markdown or Word document.
  - Content review is required (see below) by another member of the team before progressing the content to GitHub.
- When the branch is published, create a pull request with another member of the team as a reviewer to conduct a technical review, focussed on the interaction with the website.

### Content review

This focuses in ensuring that the content is accurate, appropriate, and clear. Where appropriate, subject-matter experts should be consulted.

- No non-public insights.
- If an opinion/experience piece, this need to be made clear at the start.
- Clear references to other work, and contributions?
- Are there any sensitive issues or potential fallout?
- Are any statements likely to reflect badly on the NHS, or impact public trust?
- Is the content focussed on the topic?
- Are there other stakeholders who neeed to be informed, or included?
- Are any statements incorrect?
- Are statements backed up with evidence?

### Technical review

This focuses on appearance on the website.

- No data unless public (in which case, reference data rather than copying), or fake/synthetic, or sensitive strings.
- Working links?
- Content appearing as expected?
- Content in line with the Digital Service Manual where possible?
- Is Markdown formatting correct?
- Assets added and linked?

## Update this website

1. Install Ruby, Jekyll, and Bundle on your system.
1. Clone https://github.com/nhsengland/EconomicStrategicAnalysis
1. Create a new branch.
1. In terminal, navigate to the repository folder, and execute `bundle`
1. Execute `bundle exec jekyll serve`
1. The website will be available locally on http://localhost:4000, or on the server address provided on the terminal.
1. Make changes to your code using your IDE. Save and refresh to see the changes locally.
1. If required, submit content to internal gateway, and await content review.
1. Once happy, commit your code, and publish your branch.
1. On GitHub, make a new `Pull Request`.
1. Ask another team member to review the pull request, and merge into the live website.

### Add projects

To add/edit projects, define them in `_data/projects.yml`. The `status` field must be defined as one of `Scoping`, `Development`, and `Completed` (case-sensitive).

### Add posts

To add/edit posts, create a new markdown file in the `_posts` directory.

### Add guides

To add/edit projects, define them in `data/guides.yml`.

### Add team members

To add/edit team members, define them in `_data/people.yml`. Any images need to be stored in the `assets` directory. To move a current team member to a former team member, set `active` to `0`.