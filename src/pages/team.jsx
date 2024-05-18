import React from 'react';
import SEO from '../common/seo';
import Team from '../components/team_center/team';
import Wrapper from '../layout/wrapper';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Pendiri"}  />
            <Team />            
        </Wrapper>
    );
};

export default index;