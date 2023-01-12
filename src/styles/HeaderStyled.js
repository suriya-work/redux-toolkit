import { styled } from "@mui/material/styles";
import { Box, colors, Typography } from "@mui/material";
export const MyHeader = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 60,
    backgroundColor: '#000',
    padding: '0 4rem',
})

export const Span = styled(Box)({
    display: 'flex',
    alignItems: 'center',
})

export const Number = styled(Typography)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '25px',
    width: '25px',
    borderRadius: '50%',
    backgroundColor: 'yellow',
    color: '#000',
    fontSize:'14px',
    fontWeight:'700',
    marginRight:'5px'
})





