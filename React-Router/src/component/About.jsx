import React from "react";

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8">

                {/* Header Section */}
                <h1 className="text-3xl font-bold text-blue-700 mb-2 text-center">
                    About Me
                </h1>
                <p className="text-gray-600 text-center mb-6">
                    Learn more about who I am, what I do, and what drives me.
                </p>

                {/* Profile Info Section */}
                <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Profile Image */}
                    <img
                        src="https://i.ibb.co/3sZbxtR/profile-placeholder.png"
                        alt="Aditya Anand Mishra"
                        className="w-40 h-40 rounded-full object-cover border-4 border-blue-100 shadow-md"
                    />

                    {/* Bio Section */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            Aditya Anand Mishra
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            I’m a passionate <span className="text-blue-600 font-medium">React & Java Full Stack Developer</span>
                            with 3.9 years of experience building scalable, high-performance web applications.
                            I’ve worked on projects like IVIO and Pearson at Cognizant, focusing on
                            <strong> React, Material UI, Java, and Spring Boot</strong>.
                        </p>
                    </div>
                </div>

                {/* Details Section */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                    <div>
                        <h3 className="text-lg font-semibold text-blue-600 mb-1">Education</h3>
                        <p>MA in English, B.Ed in Social Sciences</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-blue-600 mb-1">Experience</h3>
                        <p>3.9+ Years in React.js, Java, and Spring Boot</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-blue-600 mb-1">Certifications</h3>
                        <p>Azure Fundamentals, Responsive Web Design, React (Meta)</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-blue-600 mb-1">Languages</h3>
                        <p>English, Hindi</p>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "React.js",
                            "Java",
                            "Spring Boot",
                            "MySQL",
                            "Material UI",
                            "Redux",
                            "RESTful APIs",
                            "Responsive Design",
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                {skill}
              </span>
                        ))}
                    </div>
                </div>

                {/* Contact Section */}
                <div className="mt-10 text-center border-t pt-6">
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">Get in Touch</h3>
                    <p className="text-gray-600 mb-3">
                        I love discussing new projects, innovative ideas, or teaching React and Java.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="mailto:adityaanandmishra@example.com"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Email Me
                        </a>
                        <a
                            href="https://github.com/adityaanandmishra"
                            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
