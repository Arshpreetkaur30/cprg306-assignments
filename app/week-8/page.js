"use client";

import { useUserAuth } from "./utils/auth-context";
import Link from 'next/link';

export default function Page() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => await gitHubSignIn();

    const handleSignOut = async () => await firebaseSignOut();

    return (
        <main>
            <h1 className="flex justify-center items-center text-xl font-bold m-10 text-purple-300 h-full">
             <div className="m-3">
                 <p className="m-3">{user ? "Hi there!":"Please sign in:"}</p>
                 <p className="m-3">{user?.email}</p>
                 <p className="m-3">{user?.displayName}</p>
             </div>
            </h1>
            <div className="flex justify-center">
            {user ? (
                <div>
                    <button className="bg-blue-800 text-white font-semibold py-3 px-3 rounded m-3 p-2" onClick={handleSignOut}>Sign Out</button>
                    <p className='text-black font-semibold hover:text-blue-500'>
                        <Link href="/week-8/shopingList">Shopping List</Link>
                    </p>
                </div>
                ) : (
                <button className="bg-blue-800 text-white font-semibold py-3 px-3 rounded m-3 p-2" onClick={handleSignIn}>Sign In</button>
            )}
            </div>
        </main>
    );
}
 