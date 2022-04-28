const TestComponent = ({num, symbol, text, sty}) => {
    return <>
        <div className="d-flex flex-column" style={{ width: '150px' }}>
            <div className="d-flex">
                <p className="num m-0">
                    {num}
                </p>
                <p className="plus m-0 align-self-center" style={sty}>
                    {symbol}
                </p>
            </div>
            <p className="txt_b_5 m-0">
                {text}
            </p>
        </div>
    </>
}

export default TestComponent;