import React from 'react';

import PageTemplate from 'components/common/PageTemplate';
import Profile from 'components/user/Profile';

const UserPage = () => {
    return (
        <PageTemplate>
            <Profile />
        </PageTemplate>
    );
};

export default UserPage;
