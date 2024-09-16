export const adminSidebarJSON = [
    {
        name: "Dashboard",
        route: "/admin/dashboard",
        icons: ''
    },
    {
        name: "Admission Management",
        route: "",
        subLinks: [
            {
                name: "Admit Student",
                route: "admission-management/admit-student",
            },
            {
                name: "Admit Bulk Student",
                route: "admission-management/admit-bulk-students",
            },
            {
                name: "Admission Requests",
                route: "admission-management/admission-requests",
            },
            {
                name: "Admission Inquiries",
                route: "",
                subLinks: [
                    {
                        name: "Manage Inquires",
                        route: "admission-management/manage-inquiries",
                    },
                    {
                        name: "Send SMS To Inquiries",
                        route: "admission-management/send-sms-to-inquiries",
                    },
                ]
            },
            {
                name: "Print Admission Forms",
                route: "admission-management/print-admission-forms",
            },
        ]
    },
    {
        name: "Student Management",
        route: "",
        subLinks: [
            {
                name: "Student Information",
                route: "student-management/student-information",
            },
            {
                name: "Student Promotion",
                route: "student-management/student-promotion",
            },
            {
                name: "Student Birthdays",
                route: "student-management/students-birthday",
            },
            {
                name: "Student Transfer",
                route: "student-management/student-transfer",
            },
        ]
    },
    {
        name: "Parent Accounts",
        route: "",
        subLinks: [
            {
                name: "Manage Accounts",
                route: "",
            },
            {
                name: "Account Requests",
                route: "",
            },
        ]
    },
    {
        name: "Staff Management",
        route: "",
    },
    {
        name: "ID Card Printing",
        route: "",
        subLinks: [
            {
                name: "Print Student Cards",
                route: "",
            },
            {
                name: "Print Staff Cards",
                route: "",
            },
            {
                name: "ID Card Settings",
                route: "",
            },
        ]
    },
    {
        name: "Accountants",
        route: "",
    },
    {
        name: "Public Messages",
        route: "",
    },
    {
        name: "Classes",
        route: "",
        subLinks: [
            {
                name: "Manage Classes",
                route: "",
            },
            {
                name: "Manage Sections",
                route: "",
            },
        ]
    },
    {
        name: "Subjects",
        route: "",
    },
    {
        name: "Manage Attendance",
        route: "",
        subLinks: [
            {
                name: "Students Attandance",
                route: "",
            },
            {
                name: "Staff Attandance",
                route: "",
            },
        ]
    },
    {
        name: "Online Classes",
        route: "",
    },
    {
        name: "TimeTable Management",
        route: "",
    },
    {
        name: "Fee Payment",
        route: "",
    },
    {
        name: "Accounting",
        route: "",
        subLinks: [
            {
                name: "Generate Monthly Fee",
                route: "",
            },
            {
                name: "Generate Custom Fee",
                route: "",
            },
            {
                name: "Generate Transport Fee",
                route: "",
            },
            {
                name: "Fee Types",
                route: "",
            },
            {
                name: "Family Fee Calculator",
                route: "",
            },
            {
                name: "Family Credit System",
                route: "",
            },
            {
                name: "Direct Payment",
                route: "",
                subLinks: [
                    {
                        name: "Student Payment",
                        route: "",
                    },
                    {
                        name: "Custom Payment",
                        route: "",
                    },
                ]
            },
            {
                name: "SMS to Fee Defaulters",
                route: "",
            },
            {
                name: "Balance Sheet",
                route: "",
            },
            {
                name: "Deleted Fees",
                route: "",
            },
            {
                name: "Generate Fee Increment",
                route: "",
                subLinks: [
                    {
                        name: "Increment By Precentage",
                        route: "",
                    },
                    {
                        name: "Increment By Amount",
                        route: "",
                    },
                ]
            },
            {
                name: "Generate Fee Decrement",
                route: "",
                subLinks: [
                    {
                        name: "Decrement By Precentage",
                        route: "",
                    },
                    {
                        name: "Decrement By Amount",
                        route: "",
                    },
                ]
            },
            {
                name: "Discounted Students",
                route: "",
            }, {
                name: "Print Fee Vaouchers",
                route: "",
            },
        ]
    },
    {
        name: "Expense Management",
        route: "",
        subLinks: [
            {
                name: "Add / Manage Expense",
                route: "",
            },
            {
                name: "Expense Categories",
                route: "",
            },
        ]
    },
    {
        name: "Staff Salary Management",
        route: "",
        subLinks: [
            {
                name: "Generate Salary",
                route: "",
            },
            {
                name: "manage Salaries",
                route: "",
            },
            {
                name: "Loan Management",
                route: "",
            },
            {
                name: "Salary Settings",
                route: "",
            },
        ]
    },
    {
        name: "Reporting Area",
        route: "",
        subLinks: [
            {
                name: "Fee Defaulters Report",
                route: "",
            },
            {
                name: "Income & Expense Report",
                route: "",
            },
            {
                name: "List Of Unpaid Inoices",
                route: "",
            },
            {
                name: "Fee Discount Report",
                route: "",
            },
            {
                name: "Accounts Summary Report",
                route: "",
            },
            {
                name: "Detailed Income Report",
                route: "",
            },
            {
                name: "Detailed Expense Report",
                route: "",
            },
            {
                name: "Staff Salary Report",
                route: "",
            },
            {
                name: "Admission Date Report",
                route: "",
            },
            {
                name: "Student Information Report",
                route: "",
            },
            {
                name: "Attendance Report",
                route: "",
                subLinks: [
                    {
                        name: "Student Attendance",
                        route: "",
                    },
                    {
                        name: "Staff Attendance",
                        route: "",
                    },
                ]
            },
            {
                name: "Find a Balance Sheet",
                route: "",
            },

        ]

    },
    {
        name: "Stock & Inventory",
        route: "",
        subLinks: [
            {
                name: "Point Of Sale",
                route: "",
            },
            {
                name: "Manage Categories",
                route: "",
            },
            {
                name: "Product & Stock",
                route: "",
            },
            {
                name: "Add Bulk Products",
                route: "",
            },
        ]
    },
    {
        name: "Exam Management",
        route: "",
        subLinks: [
            {
                name: "Exam Term/Semester List",
                route: "",
            },
            {
                name: "Assign Exam Grades",
                route: "",
                subLinks: [
                    {
                        name: "",
                        route: "",
                    },
                ]
            },
            {
                name: "Marks Entry",
                route: "",
            },
            {
                name: "Teacher Remarks",
                route: "",
                subLinks: [
                    {
                        name: "",
                        route: "",
                    },
                ]
            },
            {
                name: "Exam Timetable",
                route: "",
            },
            {
                name: "Tabulation Sheet",
                route: "",
                subLinks: [
                    {
                        name: "For Particular Test",
                        route: "",
                    },
                    {
                        name: "For Combined Result",
                        route: "",
                    },
                ]
            },
            {
                name: "Position Holders",
                route: "",
                subLinks: [
                    {
                        name: "Term/Semester Wise",
                        route: "",
                    },
                    {
                        name: "Final Result",
                        route: "",
                    },
                ]
            },
            {
                name: "Print Admit Cards / Slips",
                route: "",
            },
            {
                name: "Send Marks By SMS",
                route: "",
                subLinks: [
                    {
                        name: "Term/Semester Wise",
                        route: "",
                    },
                    {
                        name: "Final Result",
                        route: "",
                    },
                ]
            },
            {
                name: "Print Marksheet",
                route: "",
                subLinks: [
                    {
                        name: "Term/Semester Wise",
                        route: "",
                    },
                    {
                        name: "Final Result",
                        route: "",
                    },
                ]
            },
        ]
    },
    {
        name: "Certification",
        route: "",
        subLinks: [
            {
                name: "Certification Printing",
                route: "",
            },
            {
                name: "Certification Templates",
                route: "",
            },
        ]
    },
    {
        name: "Daijly Homework Diary",
        route: "",
        subLinks: [
            {
                name: "Add & Manage Biares",
                route: "",
            },
            {
                name: "Send Diary Via SMS",
                route: "",
            },
        ]
    },
    {
        name: "Study Material - LMS",
        route: "",
    },
    {
        name: "Leave Management",
        route: "",
    },
    {
        name: "SMS Management",
        route: "",
        subLinks: [
            {
                name: "SMS To Parents",
                route: "",
            },
            {
                name: "SMS To Staff",
                route: "",
            },
            {
                name: "SMS To Specific Number",
                route: "",
            },
            {
                name: "SMS Templates",
                route: "",
            },
            {
                name: "Sent SMS History",
                route: "",
            },
        ]
    },
    {
        name: "Mobile App Notification",
        route: "",
        subLinks: [
            {
                name: "Notification To Parents",
                route: "",
            },
            {
                name: "Notification To Staff",
                route: "",
            },
            {
                name: "Notification To Students",
                route: "",
            },
        ]
    },
    {
        name: "Emails Alerts",
        route: "",
        subLinks: [
            {
                name: "Message to Specific Email",
                route: "",
            },
            {
                name: "Sent Email History",
                route: "",
            },
        ]
    },
    {
        name: "School Noticeboard",
        route: "",
    },
    {
        name: "Manage Computers",
        route: "",
    },
    {
        name: "Admin Roles Management",
        route: "",
    },
    {
        name: "Transport",
        route: "",
    },
    {
        name: "Manage Biometric Devices",
        route: "",
    },
    {
        name: "Website Management",
        route: "",
        subLinks: [
            {
                name: "General & Garllary Setting",
                route: "",
            },
            {
                name: "Classes To Show",
                route: "",
            },
        ]
    },
    {
        name: "Setting",
        route: "",
        subLinks: [
            {
                name: "General Setting",
                route: "",
            },
            {
                name: "SMS Settings",
                route: "",
            },
            {
                name: "Email Setting",
                route: "",
            },
            {
                name: "Payment Settings",
                route: "",
            },
        ]
    },
]