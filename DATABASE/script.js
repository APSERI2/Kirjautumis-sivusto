
async function getData() {
    try {
        const response = await fetch("http://localhost:3000/users");

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        const db = document.querySelector(".db");

        users.forEach(user => {
            const values = [
                user.ID,
                user.NAME,
                user.AGE,
                user.INFO,
                user.VALUE
            ];

            values.forEach(value => {
                const div = document.createElement("div");
                div.textContent = value ?? "";
                db.appendChild(div);
            });
        });

    } catch (error) {
        console.error("Error:", error);
    }
}

getData();

setInterval(getData, 5000);
