import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
export const MyHeader = styled('div')({
    backgroundColor: '#000',
    with: '100%',
    height: '50px',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    padding: '25px'
})
export const Text = styled(Typography)({
    color: '#fff',
    fontSize: '26px',
    fontWeight: 'bold',
})