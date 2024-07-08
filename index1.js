const venues = [
    "ROB ROOM 1 -100",
    "ROB ROOM 2 -100",
    "ROB ROOM 3-100",
    "ROB ROOM 4-100",
    "ROB ROOM 5-100",
    "ROB ROOM 6-100",
    "ROB ROOM 7-100",
    "ROB ROOM 8-100",
    "ROB ROOM 9-100",
    "ROB ROOM 10-15",
    "ROB ROOM 17-100",
    "ROB ROOM 18-100",
    "ROB ROOM 19-100",
    "ROB ROOM 20-100",
    "ROB ROOM 21-100",
    "ROB ROOM 22-100",
    "ROB ROOM 23-100",
    "ROB ROOM 24-200",
    "ROB ROOM 25-200",
    "ROB LEFT WING -70",
    "ROB RIGHT WING - 70",
    "COMPUTER LAB 1 -70",
    "COMPUTER LAB 2 -90",
    "ROB COMPUTER LAB- 67",
    "CBT COMPUTER LAB -80",
    "CATERING LAB",
    "CBT FASHION UPSTAIRS ROOM 22 - 40",
    "CBT FASHION UPSTAIRS ROOM 2 -40",
    "CBT CONSTRUCTION LAB 30",
    "UBS GF 3 - 30",
    "UBS GF 4 - 30",
    "UBS GF 5 - 30",
    "UBS GF 6 - 30"
];

const courses = [
    { code: "ACC 231", name: "Accounting Basics", lecturer: "Prof. John Doe", color: "#FFD700" },
    { code: "MAT 112", name: "Mathematics II", lecturer: "Dr. Jane Smith", color: "#ADFF2F" },
    { code: "ITC 354", name: "Information Tech.", lecturer: "Dr. Emily Brown", color: "#FF69B4" },
    { code: "MED 1 A", name: "Medical Basics I", lecturer: "Dr. Alan Walker", color: "#87CEEB" },
    { code: "ECN 322", name: "Economics II", lecturer: "Dr. Sarah Lee", color: "#FFA07A" },
    // Add more course data as needed
];

function getRandomCourse() {
    const randomIndex = Math.floor(Math.random() * courses.length);
    return courses[randomIndex];
}

function generateTimetable() {
    const tbody = document.querySelector("#timetable tbody");
    tbody.innerHTML = ""; // Clear existing rows

    const rowspan = venues.length;

    venues.forEach((venue, index) => {
        const row = document.createElement("tr");

        const venueCell = document.createElement("td");
        venueCell.textContent = venue;
        row.appendChild(venueCell);

        const times = [
            3, // colspan for 7:00 - 10:00
            3, // colspan for 10:00 - 1:00
            1, // single cell for 1:00 - 2:00
            3, // colspan for 2:00 - 5:00
            3  // colspan for 5:00 - 8:00
        ];

        times.forEach((colspan, timeIndex) => {
            if (timeIndex === 2 && index === 0) {
                const cell = document.createElement("td");
                cell.rowSpan = rowspan;
                cell.classList.add('colorful');
                row.appendChild(cell);
            } else if (timeIndex !== 2) {
                const cell = document.createElement("td");
                if (colspan > 1) {
                    cell.colSpan = colspan;
                }
                const course = getRandomCourse();
                cell.textContent = course.code;
                cell.style.backgroundColor = course.color;

                const tooltip = document.createElement("div");
                tooltip.classList.add("tooltip");
                tooltip.innerHTML = `<strong>${course.name}</strong><br>${course.lecturer}`;
                cell.appendChild(tooltip);

                row.appendChild(cell);
            }
        });

        tbody.appendChild(row);
    });
}

generateTimetable();
