import React from 'react';
import SEO from '../common/seo';
import Team from '../components/bantuan/';
import Wrapper from '../layout/wrapper';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Support Center"}  />
            <Team />            
        </Wrapper>
    );
};

export default index;