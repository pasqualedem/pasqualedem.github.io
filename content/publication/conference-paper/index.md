---
title: 'Applying Knowledge Distillation to Improve Weed Mapping With Drones'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Giovanna Castellano
  - admin
  - Gennaro Vessio

# date: '2013-07-01T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
# publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *18th Conference on Computer Science and Intelligence Systems*
publication_short: In *FEDCSIS*

abstract: In precision agriculture, non-invasive remote sensing using UAVs can be employed to observe crops in visible and nonvisible spectra. This paper investigates the effectiveness of stateof-the-art knowledge distillation techniques for mapping weeds with drones, an essential component of precision agriculture that employs remote sensing to monitor crops and weeds. The study introduces a lightweight Vision Transformer-based model that achieves optimal weed mapping capabilities while maintaining minimal computation time. The research shows that the student model effectively learns from the teacher model using the WeedMap dataset, achieving accurate results suitable for mobile platforms such as drones, with only 0.5 GMacs compared to 42.5 GMacs of the teacher model. The trained models obtained an F1 score of 0.863 and 0.631 on two data subsets, with a performance improvement of 2 and 7 points, respectively, over the undistilled model. The study results suggest that developing efficient computer vision algorithms on drones can significantly improve agricultural management practices, leading to greater profitability and environmental sustainability.

# Summary. An optional shortened abstract.
summary: This paper explores using knowledge distillation techniques to develop lightweight transformer models for weed mapping with drones for precision agriculture. A student Vision Transformer model was trained to mimic an accurate but computationally expensive teacher model using a weed mapping dataset.

tags: [deep learning, drone vision, computer vision, precision agriculture]

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://annals-csis.org/proceedings/2023/pliks/960.pdf'
url_code: 'https://github.com/pasqualedem/KD-for-WeedMapping'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
#   - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---

<!-- {{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://wowchemy.com/docs/content/writing-markdown-latex/). -->
