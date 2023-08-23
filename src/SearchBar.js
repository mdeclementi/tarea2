import { InputText } from 'primereact/inputtext';

function SearchBar(props) {

    const test = (event) => {
        console.log(props.posts);
        console.log(event.target.value);
        const filteredPosts = props.posts.filter(post =>
            post.texto.toLowerCase().includes(event.target.value.toLowerCase())
        );

        console.log(filteredPosts);
        props.setPostsFiltrados(filteredPosts);
        
    };

    return (
        <div className="grid mt-2">
            <div className="col-12">
                <div className="text-center">
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText placeholder="Search" className="p-inputtext-lg" onInput={test} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;