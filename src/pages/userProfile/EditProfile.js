import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ChangePassword from '../../components/changePassword/ChangePassword';
import Loader from '../../components/loader/Loader';
import { selectUserInfo } from '../../redux/features/auth/authSlice';
import { updateUser } from '../../services/authService';
import './EditProfile.css';

const EditProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { user } = useSelector(selectUserInfo);
  const { email } = user;

  useEffect(() => {
    // So that we can go bac to the profile page a fetch the state data again
    if (!email) {
      navigate('/user/profile');
    }
  }, [email, navigate]);

  const initialState = {
    name: user?.name,
    email: user?.email,
    phone: user?.phone,
    bio: user?.bio,
    photo: user?.photo,
  };

  const [profile, setProfile] = useState(initialState);
  const [profileImage, setProfileImage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Handle Image upload
      let imageURL;
      if (
        profileImage &&
        (profileImage.type === 'image/jpeg' ||
          profileImage.type === 'image/jpg' ||
          profileImage.type === 'image/png')
      ) {
        const image = new FormData();
        image.append('file', profileImage);
        image.append('cloud_name', 'dsabcrvkr');
        image.append('upload_preset', 'pqjc07po');

        // First save image to cloudinary
        const response = await fetch(
          'https://api.cloudinary.com/v1_1/dsabcrvkr/image/upload',
          { method: 'POST', body: image }
        );
        const imgData = await response.json();
        console.log(imgData);
        imageURL = imgData.url.toString();
      }
      // Save Profile
      const formData = {
        name: profile.name,
        phone: profile.phone,
        bio: profile.bio,
        photo: profileImage ? imageURL : profile.photo,
      };
      const data = await updateUser(formData);
      console.log(data);
      toast.success('User updated');
      navigate('/user/profile');
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <div>
      {isLoading && <Loader />}
      <div className='edit-profile-container row'>
        <div className='user-image-container col-lg-4'>
          <img src={profile?.photo} alt='profile' />
        </div>
        <div className='edit-form-container col-lg-8'>
          <form className='edit-profile-form' onSubmit={saveProfile}>
            <label htmlFor='name'>Name</label> <br />
            <input
              type='text'
              name='name'
              value={profile?.name}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor='email'>Email</label>
            <br />
            <input
              type='text'
              name='email'
              value={profile?.email}
              disabled
            />{' '}
            <code>Email can not be changed</code>
            <br />
            <label htmlFor='phone'>Phone</label>
            <br />
            <input
              type='text'
              name='phone'
              value={profile?.phone}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor=''>Bio</label>
            <br />
            <textarea
              type='text'
              name='bio'
              value={profile.bio}
              cols='50'
              rows='5'
              onChange={handleInputChange}
            />{' '}
            <br />
            <label htmlFor='image'>Photo</label> <br />
            <input type='file' name='image' onChange={handleImageChange} />
            <br />
            <button className='btn btn-info edit-profile-btn'>
              Save Changes
            </button>
          </form>
          <ChangePassword />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
