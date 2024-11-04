import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import {useState} from "react";
import {Post} from "./Types/Post";

function PostTable(props: { posts: Post[], setCurrentPost: any }){

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
                            onClick={() => props.setCurrentPost(row)}
                            key={row.id}
                        >
                            <TableCell align="justify">{row.author}</TableCell>
                            <TableCell align="justify">{row.title}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default PostTable;