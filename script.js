document.addEventListener("DOMContentLoaded", () => {
    const codes = document.querySelectorAll(".code");

    codes.forEach((code, index) => {
        // Assign id to each input element dynamically
        code.id = `code-${index + 1}`;

        code.addEventListener("input", (e) => {
            const value = e.target.value;
            if (value) {
                if (index < codes.length - 1) {
                    codes[index + 1].focus();
                } else {
                    console.log("Last input reached. Implement next action here.");
                }
            }
        });

        code.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && !e.target.value) {
                if (index > 0) {
                    codes[index - 1].focus();
                } else {
                    console.log("First input reached. Implement previous action here.");
                }
            }
        });
    });
});
