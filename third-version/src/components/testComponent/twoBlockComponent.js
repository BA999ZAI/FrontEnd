import border_orange from 'C:/Users/BA9ZAI/Desktop/Путь во FrontEnd/third-version/src/assets/img/border_orange.png';
import strelka_vpravo from 'C:/Users/BA9ZAI/Desktop/Путь во FrontEnd/third-version/src/assets/img/strelka_vpravo.png';

const TwoBlockComponent = ({text_1, num, text_2}) => {
    return <>
        <div className="block_b_4 d-flex flex-column">
            <div className="d-flex align-items-center justify-content-between">
                <img src={border_orange} className="bord_orange" />
                <p className="txt_top_block">
                    {text_1}
                </p>
                <p className="zero">
                    {num}
                </p>
            </div>

            <p className="txt_b_4 m-0">
                {text_2}
            </p>

            <div className="d-inline-flex m-0 mt-auto align-content-center">
                <p className="baca">
                    Baca lebih Lanjut
                </p>
                <img src={strelka_vpravo} style={{ width: '24px', height: '24px', marginLeft: '8px' }} />
            </div>
        </div>
    </>
}

export default TwoBlockComponent;