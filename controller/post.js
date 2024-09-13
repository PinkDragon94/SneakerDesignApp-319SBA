import db from '../db.js'
import { ObjectId } from 'mongodb'



const getRecentPosts = async (req, res) => {
    try {
        const collection = await db.collection('posts');
        const recentPosts = await collection.find().limit(5).toArray();
        res.json(recentPosts).status(200);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const getPostById = async (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).json({ message: 'Missing post ID' });
    }

    const postId = new ObjectId(id);
    const collection = await db.collection('posts');

    try {
        const post = await collection.findOne({ _id: postId });

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.json(post).status(200);
    } catch (error) {
        console.error(`Error getting post by ID: ${error.message}`);
        res.status(500).json({ message: 'Internal server error' });
    }
}


const deletePostById = async (req, res) => {
    const postId = new ObjectId(req.params.id);

    try {
        const collection = await db.collection('posts');
        const result = await collection.deleteOne({ _id: postId });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.status(200).json({ message: 'Post deleted' });
    } catch (error) {
        console.error(`Error deleting post by ID: ${error.message}`);
        res.status(400).json({ message: 'Error deleting post' });
    }
};

const addCommentToPost = async (req, res) => {
    const postId = new ObjectId(req.params.id);
    const comment = req.body;

    try {
        const postsCollection = await db.collection("posts");
        const updateResult = await postsCollection.updateOne(
            { _id: postId },
            { $push: { comments: comment } }
        );

        if (updateResult.modifiedCount === 0) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.status(201).json({ message: 'Comment added' });
    } catch (error) {
        console.error(`Error adding comment to post: ${error.message}`);
        res.status(500).json({ message: 'Internal server error' });
    }
}


const addPost = async (req, res) => {
    try {
        let collection = await db.collection("posts")   
        let newDocument = req.body
        newDocument.date = new Date()
        let result = await collection.insertOne(newDocument)
        console.log(result)
        res.send(result).status(300)
    } catch(e) {
        res.send(e).status(400)
    }
}


const returnHello= async (req,res)=>{
    console.log("hello world")
    res.send("hello world")
}

const addUser =async(req,res)=>{
    console.log(req.body)
    console.log("hello post")

    res.send("post")
}
export default {getAllPosts,getPost,deletePost,addComment,addPost,returnHello,addUser}