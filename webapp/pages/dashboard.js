import React, { useState } from "react";
import './dashboard.css';

export default function DashBoard() {
    const [activeTab, setActiveTab] = useState("Profile");

    // Define the tabComponents object here
    const tabComponents = {
        Profile: <Profile />,
        Settings: <Settings />,
        Theme: <Theme />,
    };

    return (
        <>
            <div className="container justify-center">
                <nav className="navbar-bg fixed top-0 left-0 w-full transition-all">
                    <div className="navbar mx-auto flex items-center justify-between pt-1 pb-1">
                        <div>
                            <img
                                className="logo"
                                src="/e-draw_logo.png"
                                alt="e-Draw Logo"
                            />
                            My account
                        </div>
                    </div>
                </nav>
                <div className="flex h-screen">
                    <div className="w-64 tab-left  p-4">
                        <div className="flex">
                            <div>
                                <h2>
                                    NS
                                </h2>
                            </div>
                            <div>
                                <div className="px-4 font-bold text-lg">Nirmit Shah</div>
                                <div className="px-4 ">nshah@enlabel.com</div>
                            </div>
                        </div>
                        <nav className="mt-4">
                            <ul>
                                {Object.keys(tabComponents).map((tab) => (
                                    <li
                                        key={tab}
                                        className={`px-4 py-3 my-4 inactive-tab ${activeTab === tab ? "active-tab decoration-none" : ""}`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab === "Profile" && <i class="fa-regular fa-user"></i>}
                                        {tab === "Settings" && <i class="fa-regular fa-user"></i>}
                                        {tab === "Theme" && <i class="fa-regular fa-user"></i>}
                                        {tab}
                                    </li>
                                ))}
                            </ul>

                        </nav>
                    </div>
                    <div className="flex-1 bg-gray-100 p-6 tab-width">
                        <h1 className="text-2xl font-bold">{activeTab} Page</h1>
                        <div className="mt-4">{tabComponents[activeTab]}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

const Profile = () => (
    <div>
        <h2 className="text-xl font-bold">Profile</h2>
        <p>Manage your personal information and details here.</p>
    </div>
);

// Settings Component
const Settings = () => (
    <div>
        <h2 className="text-xl font-bold">Settings</h2>
        <p>Update your preferences, privacy, and configurations.</p>
    </div>
);

// Theme Component
const Theme = () => (
    <div>
        <h2 className="text-xl font-bold">Theme</h2>
        <p>Customize the look and feel of your dashboard.</p>
    </div>
);
