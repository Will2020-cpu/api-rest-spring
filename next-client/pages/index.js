import Layout from "../components/Layout"

const Index = (props) => {
    return (
        <>
            <Layout>
                <main>
                    <div className="grid grid-cols-2 m-10 gap-4">
                        {
                            props.books.map(item => (
                                <div className="p-2 border shadow-sm">
                                    <div className="flex space-x-8">
                                        <div className="flex-none">
                                            <img className="h-60" src={item.url_picture} alt={item.name} />
                                        </div>
                                        <div className="flex flex-col justify-between">
                                            <div className="">
                                                <h1 className="text-2xl">{item.name}</h1>
                                                <span className="text-xs text-gray-500">Publicado 20-01-2000</span>
                                            </div>
                                            <p className="text-justify">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci assumenda omnis quae! Corrupti aliquid distinctio nam ipsam ipsum! Magni aspernatur vitae tenetur soluta, dolorum rerum a est consequatur placeat?
                                            </p>
                                            <div className="flex items-center justify-end">
                                                <span className="text-xs text-gray-500">Author: Stephen King</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </main>
            </Layout>
        </>
    )
}

Index.getInitialProps = async function () {
    const resBooks = await fetch(
        "http://localhost:8080/api/books"
    )

    const dataBooks = await resBooks.json();

    return {
        books: dataBooks,
    }
}

export default Index
