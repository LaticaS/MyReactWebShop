function Page({title, description}) {
    
    const title = "Some Page title";
    const description = "Some description";    

// const title=fakeProps.title;
// const description=fakeProps.description;

// const {title, description} = fakeProps;


    return(
        <>
        <h1>{title}</h1>
        <p>{description}</p>
        </>
    )
}

export {Page}