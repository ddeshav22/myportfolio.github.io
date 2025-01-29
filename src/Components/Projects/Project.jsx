import React from "react";
import ProjectCard from "./ProjectCard";
import ecommImg from "../../assets/ecommerce.png";
import plantImg from "../../assets/plantleaf.png";
import jobImg from "../../assets/jobseeker.png";
import restroImg from "../../assets/resturent.png";
import studentImg from "../../assets/studentsManage.png";
import hospitalImg from "../../assets/hospitalMange.png";
import empImg from "../../assets/employeeImg.png";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Job Seeker",
    main: "Built a job-seeking platform using Reactjs, Nodejs, and MongoDB, featuring secure user authentication with distinct roles for job seekers and employers. Job seekers can apply for jobs and manage applications, while employers can post jobs, view applicants, and perform CRUD operations. Leveraged MongoDB for efficient data management and platform integrity.",
    image: jobImg,
    link: "https://github.com/ddeshav222/Job_seeker", // Replace with your actual link
  },

  {
    title: "Plant-leaf-Disease-detection",
    main: "Developed a Mask R-CNN model for plant disease detection and classification, achieving pixel-level segmentation accuracy Created a custom dataset class to manage plant disease images and masks. Utilized TensorFlow, NumPy, and Mask R-CNN for deep learning tasks, with potential applications in early disease detection and crop management.",
    image: plantImg,
    link: "https://github.com/ddeshav222/Plant-leaf-Disease-detection", // Replace with your actual link
  },
  {
    title: "E-Commerce Website",
    main: "Developed a comprehensive e-commerce platform using the MERN stack, incorporating secure user authentication with distinct roles for customers and admins. Customers can browse products, place orders, and view order history, while admins manage product listings, inventory, and orders. Leveraged MongoDB for flexible data storage and React.js for a dynamic, user-friendly frontend.",
    image: ecommImg,
    link: "https://655deb6d20c21319700f79a6--e-commercebydd.netlify.app/", // Replace with your actual link
  },
  {
    title: "Employee Management System",
    main: "The Employee Management System is a full-stack CRUD application using Spring Boot (backend) and React (frontend) to manage employee information. It allows users to create, read, update, and delete employee records with details like name, email, phone, and department. The backend is built with Spring Boot, Spring Data JPA, and RESTful APIs, while the frontend uses React, React Router, and Fetch for API calls. Data is persistently stored in MySQL, ensuring scalability and efficiency.",
    image: empImg,
    link: "https://github.com/ddeshav222/Employee-Management-System", // Replace with your actual link
  },
  {
    title: "Restaurant Website",
    main: "Developed a restaurant website using the MERN stack, featuring a dynamic menu, reservation system, and user authentication for secure login and sign-up. The platform allows users to browse menu items, make reservations, and securely access their accounts. Utilized MongoDB for data storage, React.js for the frontend, and Node.js for the backend.",
    image: restroImg,
    link: "https://65bb7981ff3d1e68f45138e7--brilliant-marshmallow-02afbb.netlify.app/", // Replace with your actual link
  },
 /* {
    title: "Student Result Managment",
    main: "Developed a Student Management System to automate student result management and streamline the handling of student information. The system is designed to replace manual processes in schools and universities with a user-friendly, efficient, and cost-effective solution. It simplifies tasks like student data management, result tracking, and academic performance monitoring.",
    image: studentImg,
    link: "https://github.com/ddeshav222/Student_Result_Managment", // Replace with your actual link
  },*/
  /*{
    title: "Hospital Management System",
    main: "Developed a Hospital Management System using Java, JDBC, and MySQL, enabling users to add and view patient records, view doctor information, and book appointments. Integrated MySQL for database management and utilized JDBC for smooth communication between the system and the database. The platform streamlines hospital operations, improving efficiency in managing patient and appointment data.",
    image: hospitalImg,
    link: "https://github.com/ddeshav222/HospitalManagementSystem", // Replace with your actual link
  },*/
];

const Project = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-4xl text-white font-bold"
      >
        Projects
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="mb-8 flex flex-col gap-6 p-1 lg:justify-start"
      >
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
