import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import {useState} from "react";

function PostTable(props: { posts: any[], setCurrentPost?: (value: (((prevState: any[]) => any[]) | any[])) => void }){

    const[chosenPost, setPost] = useState([]);
    console.log(chosenPost);
    return (
        <TableContainer component={Paper}>
            <Table sx={{
                "& .MuiTableRow-root:hover": {
                backgroundColor: "primary.light"
            }
            }}>
                <TableBody>
                    {props.posts.map((row) => (
                        <TableRow
                            onClick={() => setPost(row.id)}
                            key={row.id}
                        >
                            <TableCell align="justify">{row.title}</TableCell>
                            <TableCell align="justify">{row.author}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default PostTable;