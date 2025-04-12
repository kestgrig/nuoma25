import style from './SectionTwoCard.module.css';

import sectionTwoImage1 from '/src/img/1.png';
import sectionTwoImage2 from '/src/img/2.png';
import sectionTwoImage3 from '/src/img/3.png';
import sectionTwoImage4 from '/src/img/4.png';
import sectionTwoImage5 from '/src/img/5.png';

export function SectionTwoCard() {
    return (
        <>
            <div className={style.sectionTwoCards}>
                <img className={style.cardImage} src={sectionTwoImage1} alt="image"/>
                <img className={style.cardImage} src={sectionTwoImage2} alt="image"/>
                <img className={style.cardImage} src={sectionTwoImage3} alt="image"/>
                <img className={style.cardImage} src={sectionTwoImage4} alt="image"/>
                <img className={style.cardImage} src={sectionTwoImage5} alt="image"/>
            </div> 
        </>
    )
}

