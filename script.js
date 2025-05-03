document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".otp-box input");

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            if (e.inputType !== 'deleteContentBackward' && input.value) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && !input.value && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });

    // Optional: Gather OTP value
    const getOTP = () => {
        return Array.from(inputs).map(input => input.value).join('');
    };

    // Example usage: log the OTP when all fields are filled
    inputs[inputs.length - 1].addEventListener("input", () => {
        const otp = getOTP();
        if (otp.length === inputs.length) {
            console.log("OTP entered:", otp); // Replace this with submission code
        }
    });
});
