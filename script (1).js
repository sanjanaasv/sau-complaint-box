let complaints = {};

document.getElementById("complaintForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const id = "SAU-2026-" + Math.floor(1000 + Math.random() * 9000);

    complaints[id] = {
        name: document.getElementById("name").value,
        category: document.getElementById("category").value,
        subject: document.getElementById("subject").value,
        priority: document.getElementById("priority").value,
        status: "Submitted"
    };

    document.getElementById("success").innerHTML = `
        <div class="success-box">
            <h3>Complaint Submitted Successfully!</h3>
            <p>Your Complaint ID is:</p>
            <strong>${id}</strong>
            <p>Save this ID to track your complaint.</p>
        </div>
    `;

    this.reset();
});

function trackComplaint() {
    const id = document.getElementById("trackId").value.trim();
    const result = document.getElementById("result");

    if (complaints[id]) {
        const complaint = complaints[id];

        result.innerHTML = `
            <div class="status">
                <h3>${complaint.subject}</h3>
                <p><strong>Complaint ID:</strong> ${id}</p>
                <p><strong>Category:</strong> ${complaint.category}</p>
                <p><strong>Priority:</strong> ${complaint.priority}</p>
                <p><strong>Status:</strong> ${complaint.status}</p>
            </div>
        `;
    } else {
        result.innerHTML = `
            <div class="status">
                <p>Complaint not found.</p>
                <p>Please check your Complaint ID.</p>
            </div>
        `;
    }
}