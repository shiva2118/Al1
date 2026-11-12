// Your active Google Colab ngrok backend URL
const BACKEND_URL = "https://enjoying-playing-amused.ngrok-free.dev"; 

async function generateVideo() {
    const promptInput = document.getElementById("videoPrompt");
    const promptText = promptInput ? promptInput.value.trim() : "";

    if (!promptText) {
        alert("Please type a video prompt first!");
        return;
    }

    const btn = document.getElementById("generateBtn");
    if (btn) {
        btn.innerText = "Generating...";
        btn.disabled = true;
    }

    try {
        const response = await fetch(`${BACKEND_URL}/generate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": "true"
            },
            body: JSON.stringify({ prompt: promptText })
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();
        console.log("Success:", data);
        alert("Response from Colab: " + (data.message || "Video generation started!"));

    } catch (error) {
        console.error("Connection failed:", error);
        alert("Failed to connect to the Colab backend. Make sure your Colab notebook is running!");
    } finally {
        if (btn) {
            btn.innerText = "Generate AI Video";
            btn.disabled = false;
        }
    }
}
