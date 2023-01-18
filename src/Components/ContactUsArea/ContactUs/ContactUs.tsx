import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';
import "./ContactUs.css";


// To get assets install the following: npm i @mui/material @emotion/react @emotion/styled @mui/icons-material

function ContactUs(): JSX.Element {
    return (
        <div className="ContactUs Box">

            <form>
                <Typography variant="h3">
                    Contact Us
                    &nbsp;
                    <ContactMailIcon fontSize="large" />

                    <TextField label="Name" variant="outlined" className="TextBox" />

                    <TextField label="Email" type="email" variant="outlined" className="TextBox" />

                    <TextField label="Message" variant="outlined" className="TextBox" />
                    
                    <FormControlLabel label="Send me promotional emails" control={<Checkbox />} className="leftAlign" />

                    <ButtonGroup variant="contained" fullWidth>
                        <Button color="success">
                            Send 
                            &nbsp;
                            <SendIcon />
                        </Button>
                        <Button type="reset" color="error">
                            Clear 
                            &nbsp;
                            <ClearIcon />
                        </Button>
                    </ButtonGroup>

                </Typography>
            </form>

        </div>
    );
}

export default ContactUs;
