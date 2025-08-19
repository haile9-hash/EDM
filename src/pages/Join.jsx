import React, { useState, useMemo } from "react";
import "../styles/Join.css";
import { FaBirthdayCake, FaGraduationCap, FaHeart } from "react-icons/fa";
import { FaChalkboardUser, FaBroom } from "react-icons/fa6";
import { FaPalette } from "react-icons/fa";

// Activity list
const communityActivities = [
  {
    id: 1,
    title: "Children's Birthday Parties",
    icon: FaBirthdayCake,
    category: "Community Event",
    description: "Help us organize and fund joyful birthday parties for the children in our programs.",
    details: "Monthly planning & on-site help",
  },
  {
    id: 2,
    title: "KG Graduation Programs",
    icon: FaGraduationCap,
    category: "Community Event",
    description: "Volunteer to coordinate our annual kindergarten graduation.",
    details: "Seasonal (May-June)",
  },
  {
    id: 3,
    title: "Community Fund Drive",
    icon: FaHeart,
    category: "Fundraiser",
    description: "Join our team to collect funds for school supplies and facility improvements.",
    details: "Ongoing activity",
  },
  {
    id: 4,
    title: "KG Classroom Assistant",
    icon: FaChalkboardUser,
    category: "School Support",
    description: "Volunteer in KG classrooms to help teachers with daily activities.",
    details: "Ongoing, flexible hours",
  },
  {
    id: 5,
    title: "Campus & Building Cleanup",
    icon: FaBroom,
    category: "Environmental",
    description: "Join weekly cleanup efforts to maintain a clean environment.",
    details: "Ongoing, every Saturday",
  },
  {
    id: 6,
    title: "Local Arts & Crafts Fair",
    icon: FaPalette,
    category: "Fundraiser",
    description: "Help run our annual arts and crafts fair to raise project funds.",
    details: "Annual event (October)",
  },
];

// Activity card component
const ActivityCard = ({ activity }) => {
  const Icon = activity.icon;
  return (
    <div className="activity-card">
      <div className="card-header">
        <span className="icon-emoji">
          <Icon />
        </span>
        <span className="category-tag">{activity.category}</span>
      </div>
      <h3>{activity.title}</h3>
      <p>{activity.description}</p>
      <div className="activity-details">
        <span>Details: {activity.details}</span>
      </div>
    </div>
  );
};

// Join form component
const JoinForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    activity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for joining, ${formData.fullName}! You selected: ${formData.activity}`);
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <div className="form-overlay" onClick={onClose}>
      <div className="join-form-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Become a Part of the Journey</h2>
        <p>Fill out your details below to get started.</p>
        <form onSubmit={handleSubmit} className="join-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="activity">Select Activity to Join</label>
            <select
              id="activity"
              name="activity"
              value={formData.activity}
              onChange={handleChange}
              required
            >
              <option value="">Select an Activity</option>
              <option value="Children's Birthday Parties">Children's Birthday Parties</option>
              <option value="KG Graduation Programs">KG Graduation Programs</option>
              <option value="Community Fund Drive">Community Fund Drive</option>
              <option value="KG Classroom Assistant">KG Classroom Assistant</option>
              <option value="Campus & Building Cleanup">Campus & Building Cleanup</option>
              <option value="Local Arts & Crafts Fair">Local Arts & Crafts Fair</option>
            </select>
          </div>

          <button type="submit" className="primary-button form-submit-button">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

// Main component
function Join() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() =>
    ["All", ...new Set(communityActivities.map(a => a.category))], []);

  const filteredActivities = communityActivities.filter(activity =>
    selectedCategory === "All" || activity.category === selectedCategory
  );

  return (
    <div className="join-container">
      {isFormVisible && <JoinForm onClose={() => setIsFormVisible(false)} />}

      <div className="join-header-simple">
        <h1>Join Our Remarkable Journey</h1>
      </div>

      <nav className="category-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>

      <main className="activities-grid">
        {filteredActivities.map(activity => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </main>

      <section className="join-cta">
        <h2>Ready to Make a Difference?</h2>
        <p>Your participation helps create memorable experiences for our community.</p>
        <button onClick={() => setIsFormVisible(true)} className="primary-button">
          Join Now
        </button>
      </section>
    </div>
  );
}

export default Join;