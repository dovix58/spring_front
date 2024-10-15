import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import {Box, Paper, Typography} from "@mui/material";
import { getPosts } from './api/postApi';
import PostTable from './postTable';
import {Post} from "./Types/Post";





function Layout() {
    const [posts, setPosts] = useState<Post[]>([]); // Assuming posts are of type 'any[]', you can change this type if necessary
    const [currentPost, setCurrentPost] = useState<Post>();


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
                    <Box display="flex" justifyContent="center"
                         sx={{
                             width: 100,
                             height: '50vh',
                             borderRadius: 1,

                         }}>
                        {currentPost?.id}
                        {currentPost?.author}
                        {currentPost?.title}
                    </Box>
                    </Paper>
            </Grid>
        </Grid>
    );
}

export default Layout;
