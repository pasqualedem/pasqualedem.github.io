---
title: "Weed mapping in multispectral drone imagery using lightweight vision transformers"
authors:
- Giovanna Castellano
- admin
- Gennaro Vessio

date: "2023-10-10T00:00:00Z"
doi: "https://doi.org/10.1016/j.neucom.2023.126914"

# Schedule page publish date (NOT publication's date).
publishDate: "2023-10-10T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "Neurocomputing"
publication_short: "NEUCOM"

abstract: In precision agriculture, noninvasive remote sensing can be used to observe crops and weeds in visible and non-visible spectra. This paper proposes a novel approach for weed mapping using lightweight Vision Transformers. The method uses a lightweight Transformer architecture to process high-resolution aerial images obtained from drones and performs semantic segmentation to distinguish between crops and weeds. The method also employs specific architectural designs to enable transfer learning from RGB weights in a multispectral setting. For this purpose, the WeedMap dataset, acquired by drones equipped with multispectral cameras, was used. The experimental results demonstrate the effectiveness of the proposed method, exceeding the state-of-the-art. Our approach also enables more efficient mapping, allowing farmers to quickly and easily identify infested areas and prioritize their control efforts. These results encourage using drones as versatile computer vision flying devices for herbicide management, thereby improving crop yields. The code is available at https://github.com/pasqualedem/LWViTs-for-weedmapping.

# Summary. An optional shortened abstract.
summary: The paper introduces a novel deep learning approach using lightweight Vision Transformers for agricultural applications. Specifically, it proposes weed mapping in precision agriculture by processing high-resolution aerial images from drones. The key idea of the paper is the adaptation of RGB pre-trained weights in a multispectal setting.

tags: [deep learning, drone vision, computer vision, precision agriculture]
featured: true

links:
- name: "HTML"
  url: 'https://www.sciencedirect.com/science/article/pii/S0925231223010378'
url_pdf: https://www.sciencedirect.com/science/article/pii/S0925231223010378/pdfft?md5=3071db71b79da60a24788c6f1e60d6d7&pid=1-s2.0-S0925231223010378-main.pdf
url_code: 'https://github.com/pasqualedem/LWViTs-for-weedmapping'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'The proposed weight loading strategy. In this example, the RGB weights are adapted for the (R, G, B, NIR, RE) input reusing the green related weights. The weights refer to a convolution layer and are represented as a 3D tensor collapsing width and height into a single dimension for visualization purposes.'
  focal_point: ""
  preview_only: false


---
