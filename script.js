const BACKEND_URL = "https://enjoying-playing-amused.ngrok-free.dev";

async function generateVideo() {
    const promptInput = document.getElementById("videoPrompt");
    const promptText = promptInput ? promptInput.value.trim() : "";

    if (!promptText) {
        alert("Please type a video prompt first!");
        return;
    }

    const btn = document.getElementById("generateBtn");
    const loadingDiv = document.getElementById("loading");
    const videoElement = document.getElementById("videoResult");

    if (btn) btn.style.display = "none";
    if (loadingDiv) loadingDiv.style.display = "block";
    if (videoElement) videoElement.style.display = "none";

    try {
        // Step 1: Send prompt to Colab to generate the video
        const response = await fetch(`${BACKEND_URL}/generate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": "true"
            },
            body: JSON.stringify({ prompt: promptText })
        });

        if (!response.ok) throw new Error("Video generation failed on server.");

        // Step 2: Automatically download and play the generated video file
        const videoResponse = await fetch(`${BACKEND_URL}/download-video`, {
            headers: { "ngrok-skip-browser-warning": "true" }
        });
        
        if (!videoResponse.ok) throw new Error("Failed to download video file.");

        const videoBlob = await videoResponse.blob();
        const videoUrl = URL.createObjectURL(videoBlob);

        if (videoElement) {
            videoElement.src = videoUrl;
            videoElement.style.display = "block";
            videoElement.play();
        }

    } catch (error) {
        console.error(error);
        alert("Failed to generate video. Make sure your Google Colab cell is still running!");
    } finally {
        if (btn) btn.style.display = "block";
        if (loadingDiv) loadingDiv.style.display = "none";
    }
          }
