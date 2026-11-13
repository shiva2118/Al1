# Open AI Video Studio

A personal starter project for an open-source AI video-generation interface.

## Included
- `index.html`: static GitHub Pages frontend prototype.
- `colab_hardware_check.ipynb`: notebook to inspect the current Colab GPU and memory.

## Important
The frontend is intentionally not connected to a backend yet. Free Google Colab managed runtimes have restrictions on web-service/media-serving workloads. Use Colab interactively for model experiments; use a separately permitted GPU host for a public website backend.

## Publish the frontend with GitHub Pages
1. Create a GitHub repository, for example `open-ai-video-studio`.
2. Upload `index.html` to the repository root.
3. Open Settings → Pages.
4. Choose Deploy from a branch, select `main` and `/ (root)`, then Save.
5. Wait for the published Pages URL.

Do not commit API keys, ngrok tokens, Hugging Face tokens, or other secrets.
