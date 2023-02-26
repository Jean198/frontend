import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import useRedirectUsers from '../../customHook/useRedirectUsers';
import { setName, setUser } from '../../redux/features/auth/authSlice';
import { getUser } from '../../services/authService';
import './UserProfile.css';

const UserProfile = () => {
  useRedirectUsers('/login');
  const dispatch = useDispatch();

  const [profile, setProfile] = useState(null);
  const [isLoding, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function getUserData() {
      const data = await getUser();
      setIsLoading(false);
      setProfile(data);
      dispatch(setUser(data));
      dispatch(setName(data.name));
    }

    getUserData();
  }, [dispatch]);

  return (
    <>
      {isLoding && <Loader />}
      <div className='profile-container row'>
        <div className='user-image-container col-lg-4'>
          <img src={profile?.photo} alt='' />
        </div>

        <div className='user-info col-lg-8'>
          <p>
            <span className='props'>Name:</span> {profile?.name}
          </p>
          <hr />
          <p>
            <span className='props'>Email:</span> {profile?.email}
          </p>
          <hr />
          <p>
            <span className='props'>Phone:</span> {profile?.phone}
          </p>
          <hr />
          <p>
            <span className='props'>Bio:</span> {profile?.bio}
          </p>
          <hr />
          <div>
            <Link to='/user/editprofile'>
              <button className='btn btn-info edit-profile-btn'>
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
