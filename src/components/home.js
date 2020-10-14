import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import  * as actions  from '../Redux/actions';
import { Input, Button , Alert} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import shortid from "shortid";

function Home() {
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogs)
    useEffect(()=>{
       dispatch(actions.UserLoaded())
    }, [])
    const [newBlog, setBlog] = useState({
        title:"",
        content: ""
    })
    const handleChange = (e)=>{
        setBlog({...newBlog, [e.target.name] : e.target.value});
    }
    const handleClick=(e)=>{
        let x = newBlog;
        x.id = shortid.generate();
        dispatch(actions.BlogAdded(newBlog));
    }
    useEffect(()=>{
            console.log(blogs)
    }, [blogs])
    const hanldeRemove=(id)=>{
        dispatch(actions.BlogRemove(id));
    }
    return (
        <div>
            
            <h2>Title</h2>
            <Input placeholder="Basic usage" style={{width:"50%"}} onChange={handleChange} name="title"/>
            <h2>Content</h2>
            <Input.TextArea placeholder="Basic usage" style={{width:"50%"}} onChange={handleChange} name="content" />
            <Button type="primary" onClick = {handleClick}>Submit Blog</Button>
            {blogs.map((blog)=>(
                <div>{blog.title}<br />{blog.content} <button onClick = {()=>{hanldeRemove(blog.id)}}><DeleteOutlined /></button></div>
            ))}
        </div>
    )
}

export default Home
