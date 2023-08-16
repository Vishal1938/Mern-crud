import { LinearProgress, Typography } from "@mui/material"

import {Github,Instagram,Email} from '@mui/icon-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

 const Text = styled(Typography)`
    color: #878787;
`;


export const Contact=()=>{
    return (
        <Box>
        <Banner>
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy</Typography>
                <Text variant="h5">
                    Reach out to me on
                    <Link href="" color="inherit" target="_blank"></Link>
                    or send me an Email
                    <Link href="?Subject=This is a subject" target="_blank" color="inherit">
                        <Instagram/>
                    <Email/>
                    </Link>
                </Text>
            </Wrapper>
        </Banner>
        </Box>
    );
}

export default Contact;