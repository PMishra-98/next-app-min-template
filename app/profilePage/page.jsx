"use client"
import { useState, useEffect } from "react";
import ShowCard from '../components/card/page';

const Profile = () => {
    const [profileData, setProfileData] = useState([])

    useEffect(() => {
        getProfileData();
    }, []);

// Calling this function to fetch profileData from Get API   
    const getProfileData=async()=> {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/users")
            response = await response.json()
            response.map((obj) => {
                if (!obj.avatarImg && !obj.follow) {
                    obj.avatarImg = `https://api.dicebear.com/7.x/initials/svg?seed=${obj.name}`;
                    obj.follow = false;
                }
            })
            setProfileData(response)

        } catch (error) {
            console.error('Database Error:', error);
            throw new Error('Failed to fetch invoice.');
        }
    }

// Update profileData after delete/follow data
    const updatedData = (data) => {
        setProfileData(data);
    }

    return (
        <div>
            <ShowCard profileData={profileData} updatedProfile={updatedData} />
        </div>
    )
}

export default Profile;