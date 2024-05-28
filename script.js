document.addEventListener("DOMContentLoaded", () => {
    const codes = document.querySelectorAll(".code");

    codes.forEach((code, index) => {
        code.addEventListener("input", (e) => {
            const value = e.target.value;
            if (value) {
                if (index < codes.length - 1) {
                    // Move focus to the next input
                    codes[index + 1].focus();
                } else {
                    // If last input, submit or trigger next action
                    console.log("Last input reached. Implement next action here.");
                }
            }
        });

        code.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && !e.target.value) {
                if (index > 0) {
                    // Move focus to the previous input
                    codes[index - 1].focus();
                } else {
                    // If first input, do nothing or trigger previous action
                    console.log("First input reached. Implement previous action here.");
                }
            }
        });
    });
});
