<script>
    // Your active Google Colab ngrok backend URL
    const BACKEND_URL = "https://enjoying-playing-amused.ngrok-free.dev"; 

    async function generateVideo() {
        const promptInput = document.getElementById("videoPrompt") || document.querySelector("input");
        const promptText = promptInput ? promptInput.value : "A cinematic shot of a cybernetic tiger walking in a neon city";
        
        console.log("Sending prompt to backend:", promptText);

        try {
            const response = await fetch(`${BACKEND_URL}/generate`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ prompt: promptText })
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            const data = await response.json();
            console.log("Success:", data);
            alert("Video generation started successfully!");

        } catch (error) {
            console.error("Connection failed:", error);
            alert("Failed to connect to the Colab backend. Make sure your Colab notebook cell is still running!");
        }
    }

    // Automatically connect this function to your generate button when the page loads
    document.addEventListener("DOMContentLoaded", () => {
        const generateBtn = document.querySelector("button") || document.getElementById("generateBtn");
        if (generateBtn) {
            generateBtn.onclick = generateVideo;
        }
    });
</script>
