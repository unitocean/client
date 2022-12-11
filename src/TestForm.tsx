import { FC,useState,useEffect } from "react";
import axios from "axios";
import qs from "qs";


const TestForm : FC = ()=>{

    let [get , setget] = useState(null);
    let [post , setpost] = useState(null);



    useEffect(()=>{
        axios.get('http://localhost:3000/get')
        .then(get=>{setget(get.data);console.log(get)});
    },[]);

    const params = new URLSearchParams();

    params.append('1','1')

    useEffect(()=>{
        axios.post('http://localhost:3000/post','1:1321331241343434')
        .then(post=>{setpost(post.data);console.log(post)})
        .then(()=>{console.log(post)})
        // fetch(
        //     'http://localhost:3000/post',
        //     {
        //         method: 'post',
        //         body: JSON.stringify({1:1}),
        //         headers: {'Content-Type':'application/json'}
        //     }
        // ).then(data=>{console.log(data)});
    },[]);



    // if (!get) return null;



    return <>{get} {post}</>


};

export default TestForm;