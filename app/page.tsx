import Component from "@/app/components/Component";

const Home = () => {
        console.log('server side component')
    return (
        <main>
            <Component />
            <div className={'text-4xl underline'}>Home</div>
        </main>
    )
}
export default Home
