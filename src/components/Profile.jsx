import React, { useEffect, useState } from 'react';
import './Profile.css';
import { FaUser, FaBlog, FaCog, FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import MyBlog from './MyBlogs';
import { Navigate, useNavigate } from 'react-router-dom';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    bio: '',
    profileImage: '',
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setFormData(prev => ({
        ...prev,
        name: storedUser.username || '',
        email: storedUser.email || '',
        profileImage: storedUser.profileImage || ''
      }));
    }
  }, []);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user');
    alert('Logging out...');
    navigate('/');

  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {

    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      alert("Email is required to update profile.");
      return;
    }

    try {
      console.log("Sending data to backend...");

      const response = await fetch('http://localhost:5000/profile/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          location: formData.location,
          bio: formData.bio,
        }),
      });

      const text = await response.text();  // ❗use .text() to debug

      console.log("Raw backend response:", text);

      let result;
      try {
        result = JSON.parse(text); // convert text to JSON
      } catch (jsonError) {
        console.error("JSON parse error:", jsonError);
        alert("Invalid response from server.");
        return;
      }

      if (!response.ok) {
        alert('Failed to update: ' + result.message);
        return;
      }

      alert('Profile updated successfully!');

    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Something went wrong during update.');
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="tab-content">
            <h2>My Profile</h2>
            { }
            <img
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage) : formData.profileImage
                    ? `http://localhost:5000/${formData.profileImage}` : "/profile.jpg"
              }
              alt="Avatar"
              className="avatar"
            />
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Location:</strong> {formData.location}</p>
            <p><strong>Bio:</strong> {formData.bio}</p>
          </div>
        );
      case 'blogs':
        return (
          <div className="tab-content">
            <MyBlog />
          </div>
        );
      case 'settings':
        return (
          <div className="tab-content">
            <h2>Settings</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="updateName">Update Name</label>
                <input
                  type="text"
                  id="updateName"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="updateEmail">Update Email</label>
                <input
                  type="email"
                  id="updateEmail"
                  name="email"
                  placeholder="email"
                  value={formData.email}
                  readOnly
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="updateLocation">Update Location</label>
                <input
                  type="text"
                  id="updateLocation"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="updateBio">Update Bio</label>
                <textarea
                  id="updateBio"
                  name="bio"
                  placeholder="Type your bio..."
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows="4"
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="updateImage">Update Image</label>
                <input
                  type="file"
                  id="updateImage"
                  name="profileImage"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>

              <button type="submit">Save Changes</button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile-container">
      <div className={`drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="drawer-toggle" onClick={() => setDrawerOpen(!drawerOpen)}>
          {drawerOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className="tab-buttons">
          <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>
            <FaUser /> Profile
          </button>
          <button className={activeTab === 'blogs' ? 'active' : ''} onClick={() => setActiveTab('blogs')}>
            <FaBlog /> My Blogs
          </button>
          <button className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>
            <FaCog /> Settings
          </button>
          <button className="logout-button" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      <div className="content-area">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Profile;