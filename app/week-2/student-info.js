// student-info.js

import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <p>Name: Arshpreet Kaur</p>
      <p>
        GitHub Repository:{' '}
        <Link href="https://github.com/Arshpreetkaur30">
            Your GitHub Repository
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
