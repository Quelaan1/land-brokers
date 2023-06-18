'use client';

import Image from 'next/image';
import React from 'react';

interface Props {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: string | null;
  image: string | null;
  hashedPassword: string | null;
  createdAt: string;
  updatedAt: string;
  favoriteIds: string[] | null;
}

interface UserProps {
  currentUser: Props;
}

const Profile: React.FC<UserProps> = ({ currentUser }) => {
  return (
    <div className="text-center flex justify-center flex-col max-w-sm m-auto mt-11 py-8 border-[1px] md:w-auto rounded-[6px] shadow-sm hover:shadow-md transition cursor-pointer">
      <h1 className="font-bold">User information</h1>

      <div className="flex flex-col justify-center items-center mt-4 gap-2">
        {currentUser.image && (
          <Image
            className="rounded-full"
            src={currentUser.image}
            width={120}
            height={120}
            alt="User ProfilePicture"
          />
        )}

        <div className="flex justify-center text-center gap-2">
          <h3>Name:</h3>
          <p>{currentUser.name}</p>
        </div>

        <div className="flex justify-center text-center gap-2">
          <h3>Email:</h3>
          <p>{currentUser.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
