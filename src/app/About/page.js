'use client';

import { useState,useEffect } from 'react';
import readProjects from './functions';

export default function Page() {
    const [loaded, setLoaded] = useState(null);
    useEffect(() => {
        const asyncFn = async () => { 
            const projects = await readProjects();
            setLoaded(projects[0].title);
        //   try {
        //     const response = await fetch(url);
        //     const body = await response.json();
        //     setclasses(body.classes);
        //     setComplete(body.completed);
        //     return {allClasses: body.classes,
        //             completedClasses: body.completed};
        //   } catch (error) {
        //     alert(error);
        //   }
         };
        asyncFn();
      }, []);
    return ( <p>{loaded ? loaded : "Loading"}</p>);
}
