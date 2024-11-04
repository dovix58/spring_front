import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import {Box, Paper, Typography} from "@mui/material";
import { getPosts } from './api/postApi';
import PostTable from './postTable';
import {Post} from "./Types/Post";
import {getAllPhotoIds, getThumbnail} from "./api/photosApi";
import {Thumbnail} from "./Types/Thumbnail";
import MUIImageList from "./MUIImageList";





function Layout() {
    const [posts, setPosts] = useState<Post[]>([]); // Assuming posts are of type 'any[]', you can change this type if necessary
    const [currentPost, setCurrentPost] = useState<Post | null>(null);
    const [photoIds, setPhotoIds] = useState<number[]>([]);
    const [thumbnails, setThumbnails] = useState<Thumbnail[]>([]);
    const [error, setError] = useState<string | null>(null);



    useEffect(() =>{
        getPosts(setPosts);
    },[])

    const fetchPhotoIds = async () => {
        if (currentPost?.id) { // Check if currentPost is defined
            try {
                const gotIds = await getAllPhotoIds(currentPost.id);
                setPhotoIds(gotIds); // Set the resolved photo IDs
                console.log(photoIds);
            } catch (error) {
                console.error("Error fetching photo IDs:", error);
            }
        }
    };
    const fetchThumbnails = async (ids: number[]) => {
        if (!currentPost || ids.length === 0) return ;
        try {
            const thumbnailPromises = ids.map((photoId) => getThumbnail(photoId, currentPost.id));
            const fetchedThumbnails = await Promise.all(thumbnailPromises);
            setThumbnails(fetchedThumbnails);
        } catch (err) {
            console.error('Error fetching thumbnails:', err);
            setError('Failed to load thumbnails');
        }
    }
    useEffect(() => {
        fetchPhotoIds();
        fetchThumbnails(photoIds);

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
                            <MUIImageList images={thumbnails}/>
                    </Box>
                    </Paper>
            </Grid>
        </Grid>
    );
}

export default Layout;
