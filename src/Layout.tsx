import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import {Box, Paper, Typography} from "@mui/material";
import { getPosts } from './api/postApi';
import PostTable from './postTable';


function Layout() {
    const [posts, setPosts] = useState([]);


    useEffect(() =>{
        getPosts(setPosts);
    })
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Paper>
                    <Box display="flex" justifyContent="center">
                        <PostTable posts={posts} />
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={8}>
                <Paper>
                    <Box display="flex" justifyContent="center">
                        Full posts with author comments and photos :D
                    </Box>
                    </Paper>
            </Grid>
        </Grid>
    );
}

export default Layout;
