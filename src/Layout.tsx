import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import {Box, Paper, Typography} from "@mui/material";
import { getPosts } from './api/postApi';
import PostTable from './postTable';


function Layout() {
    const [posts, setPosts] = useState([]); // Assuming posts are of type 'any[]', you can change this type if necessary
    const [currentPost, setCurrentPost] = useState<any | null>(null);


    useEffect(() =>{
        getPosts(setPosts);
    },[])
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Paper>
                    <Box display="flex" justifyContent="center">
                        <PostTable posts={posts} setCurrentPost={setCurrentPost}  />
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
