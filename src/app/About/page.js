// import readProjects from './functions';

export default async function Page() {
    // const aaa = await readProjects();
    // return ( <p>{aaa[0].title}</p>);
    console.log(process.env.NEXT_PUBLIC_MONGODB);
    return ( <p>env variable: {process.env.NEXT_PUBLIC_MONGODB}</p>);
}
