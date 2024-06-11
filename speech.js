document.addEventListener('DOMContentLoaded', function() {
    const speechBubble = document.getElementById('speechBubble');
    if (speechBubble) {
        console.log('Speech bubble element found:', speechBubble);

        const texts = [
            "Hello! I'm Harry", "Welcome to my Portfolio!!",
            "It's still a work in progress",
            "But explore my project files.",
            "Any queries, EMAIL ME!",
            "I'm so happy you're here",
            "& as your here, why not hire me?"
        ];
        const colors = [
            "rgba(104, 142, 38, 1)", "rgba(231, 29, 54, 1)",
            "rgba(255, 203, 5, 1)", "rgba(0, 114, 188, 1)", "rgba(57, 181, 74, 1)",
            "rgba(242, 101, 34, 1)", "rgba(146, 39, 143, 1)"
        ];
        let index = 0;

        function changeTextAndColor() {
            console.log('Changing text to:', texts[index]);
            speechBubble.textContent = texts[index];
            speechBubble.style.backgroundColor = colors[index];
            index = (index + 1) % texts.length; // Cycle through the texts and colors
        }

        // Call the changeTextAndColor function every 3 seconds (3000 milliseconds)
        setInterval(changeTextAndColor, 3000);
    } else {
        console.error('Speech bubble element not found.');
    }
});