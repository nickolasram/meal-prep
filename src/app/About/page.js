// import readProjects from './functions';

export default async function Page() {
    // const aaa = await readProjects();
    // return ( <p>{aaa[0].title}</p>);
    const a = process.env.NEXT_PUBLIC_MONGODB ? process.env.NEXT_PUBLIC_MONGODB : "bb"
    return ( <p>env variable: {a}</p>);
}
