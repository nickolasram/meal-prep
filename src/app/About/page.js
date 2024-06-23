import readProjects from './functions';

export default async function Page() {
    const aaa = await readProjects();
    return ( <p>{aaa[0].title}</p>);
}
