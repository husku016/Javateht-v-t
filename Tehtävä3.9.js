document.getElementById("calcBtn").addEventListener("click", function () {

    const input = document.getElementById("calcInput").value;
    let result;

    if (input.includes("+")) {
        const parts = input.split("+");
        result = Number(parts[0]) + Number(parts[1]);

    } else if (input.includes("-")) {
        const parts = input.split("-");
        result = Number(parts[0]) - Number(parts[1]);

    } else if (input.includes("*")) {
        const parts = input.split("*");
        result = Number(parts[0]) * Number(parts[1]);

    } else if (input.includes("/")) {
        const parts = input.split("/");
        result = Number(parts[0]) / Number(parts[1]);

    } else {
        result = "Invalid input";
    }

    document.getElementById("result").textContent = "Result: " + result;
});