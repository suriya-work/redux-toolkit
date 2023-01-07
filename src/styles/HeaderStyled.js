import { styled } from "@mui/material/styles";
import { Box, List, ListItem, Typography } from "@mui/material";
export const MyHeader = styled(Box)({
    display: 'flex',
    height: 50,
    backgroundColor: '#000',
})
export const Text = styled(Typography)({
    display: 'flex',
    color: '#fff',
    alignItems: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    padding: 25
})

export const Lists = styled(List)({
    display: 'flex',
    margin: '5rem'

})

export const ListItems = styled(ListItem)({
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',



})


