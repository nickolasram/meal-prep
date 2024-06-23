import readProjects from './functions';

export default async function Page() {
    const aaa = await readProjects();
    // return ( <p>{aaa[0].title}</p>);
    return ( <p>{process.env.NEXT_PUBLIC_MONGODB}</p>);
}
