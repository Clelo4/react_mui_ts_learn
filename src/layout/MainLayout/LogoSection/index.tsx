import { Link } from 'react-router-dom';
import { ButtonBase } from '@mui/material';

import Logo from 'components/Logo';

const LogoSection = () => {
    return (
        <ButtonBase disableRipple component={Link} to={'/'}>
            <Logo />
        </ButtonBase>
    );
};

export default LogoSection;
