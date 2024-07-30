# StudyNotion

**StudyNotion** is an ed-tech platform that enables users to create, consume, and rate educational content. Built with the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS), it aims to provide an immersive and interactive learning experience.

## Features

### For Students
- **Homepage:** Introduction to the platform, course listings.
- **Course List:** View all available courses with descriptions and ratings.
- **Wishlist:** Save courses for later viewing.
- **Cart Checkout:** Purchase and enroll in courses.
- **Course Content:** Access videos and other materials for enrolled courses.
- **User Details:** Manage personal account information.
- **User Edit Details:** Update account details.

### For Instructors
- **Dashboard:** Overview of courses, ratings, and feedback.
- **Insights:** Detailed course analytics.
- **Course Management:** Create, update, delete courses, manage content and pricing.
- **Profile Management:** Edit account details.

## Technologies Used

- **Frontend:** ReactJS, Tailwind CSS, Redux
- **Backend:** NodeJS, ExpressJS
- **Database:** MongoDB
- **Media Management:** Cloudinary
- **Payment Integration:** Razorpay

## API Overview

The platform uses a RESTful API design. Key endpoints include:

- **Auth:** User signup, login, OTP verification, and password reset.
- **Courses:** CRUD operations on courses, rating functionality.

## Deployment

- **Frontend:** Hosted on Vercel
- **Backend:** Hosted on Render or Railway
- **Database:** MongoDB Atlas
- **Media Files:** Stored on Cloudinary

## Future Enhancements

- Gamification features (badges, points, leaderboards)
- Personalized learning paths
- Social learning features (group discussions, peer feedback)
- Mobile app development
- Machine learning-powered recommendations
- VR/AR integration for immersive learning experiences

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

This starter pack includes a basic setup for using **Tailwind CSS with React**. To start building your own components and styles, follow these steps:

1. Clone the repository to your local machine.
    ```sh
    git clone https://github.com/thepranaygupta/react-tailwind-css-starter-pack.git
    ```

1. Install the required packages.
    ```sh
    cd react-tailwind-css-starter-pack
    npm install
    ```

1. Start the development server.
    ```sh
    npm start
    ```
1. Open the project in your browser at [`http://localhost:3000`](http://localhost:3000) to view your project.
1. Create your React components and add your styles using Tailwind classes. You can also create new CSS files and import them into your components.

The project is set up to use `postcss-cli` to process your CSS files. You can add your own `tailwind.config.js` file to customize your Tailwind setup.

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please feel free to open an issue or a pull request.
