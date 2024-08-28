import style from './SectionTwoTrend.module.css';

export function SectionTwoTrend() {
    return (
        <>
            <section className={style.container}>
                <div className={style.sectionTwoTrending}>
                    <h2 className={style.trendNow}>Trending Now</h2>
                    <div className={style.trendingBoxContainer}>
                        <p className={style.trendingBox}>Lithuania <span>&#10597;</span></p>
                        <p className={style.trendingBox}>Movies <span>&#10597;</span></p>
                    </div>
                </div>
             </section>
        </>
    )
  
    

}


export default SectionTwoTrend;