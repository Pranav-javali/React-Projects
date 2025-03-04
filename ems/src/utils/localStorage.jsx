const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Prepare monthly report",
          "description": "Compile data for the monthly performance report.",
          "date": "2025-02-26",
          "category": "Reporting",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Update client database",
          "description": "Ensure all client details are up to date.",
          "date": "2025-02-27",
          "category": "Database Management",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Conduct team meeting",
          "description": "Host the weekly progress review meeting.",
          "date": "2025-02-28",
          "category": "Meetings",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Client follow-up",
          "description": "Check in with clients for feedback on recent projects.",
          "date": "2025-02-29",
          "category": "Client Relations",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Code review",
          "description": "Review and optimize the recent code submissions.",
          "date": "2025-03-01",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Write technical documentation",
          "description": "Prepare documentation for the new API release.",
          "date": "2025-03-02",
          "category": "Documentation",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Customer Support Tickets",
          "description": "Resolve pending customer complaints and inquiries.",
          "date": "2025-03-03",
          "category": "Support",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Product Testing",
          "description": "Test the new software update for bugs and performance issues.",
          "date": "2025-03-04",
          "category": "Quality Assurance",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Market Research",
          "description": "Analyze competitor strategies and market trends.",
          "date": "2025-03-05",
          "category": "Marketing",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Social Media Updates",
          "description": "Schedule and publish posts on company social media accounts.",
          "date": "2025-03-06",
          "category": "Social Media",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    }
];

const admin = [
    {
        "id": 1, 
        "email": "admin@example.com", 
        "password": "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    //console.log(employees,admin)
    return {employees,admin}

}
