import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import {Box, Paper, Typography} from "@mui/material";
import { getPosts } from './api/postApi';
import PostTable from './postTable';
import {Post} from "./Types/Post";
import {getAllPhotoIds} from "./api/photosApi";
import {Thumbnail} from "./Types/Thumbnail";





function Layout() {
    const [posts, setPosts] = useState<Post[]>([]); // Assuming posts are of type 'any[]', you can change this type if necessary
    const [currentPost, setCurrentPost] = useState<Post>();
    const [photoIds, setPhotoIds] = useState<number[]>();
    const [thumbnail, setThumbnail] = useState<Thumbnail>();



    useEffect(() =>{
        getPosts(setPosts);
    },[])

    const fetchPhotoIds = async () => {
        if (currentPost?.id) { // Check if currentPost is defined
            try {
                const photoIds = await getAllPhotoIds(currentPost.id);
                setPhotoIds(photoIds); // Set the resolved photo IDs
                console.log(photoIds);
            } catch (error) {
                console.error("Error fetching photo IDs:", error);
            }
        }
    };
    const fetchThumbnails = async (ids: number[]) => {
        const requests = ids.map(async (id) => {
            try {
                const response = await
            }
            catch (error){
                console.error("Error fetching photo detail:" ,error)
                return null;
            }
        })
    }
    useEffect(() => {
        fetchPhotoIds();

    }, [currentPost]);

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
                    <Box>

                        duxas
                    </Box>
                    </Paper>
            </Grid>
        </Grid>
    );
}

export default Layout;
