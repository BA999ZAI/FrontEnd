const FourBlockComponent = ({img, min_text, big_text}) => {
    return <>
        <div className="d-flex flex-column">
            <img src={img} className="pikcha" />
            <p className="big_txt_0">
                {min_text}
            </p>
            <p className="txt_3">
                {big_text}
            </p>
        </div>
    </>
}

export default FourBlockComponent;