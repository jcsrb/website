import styles from './PublishedArticle.module.css'
import Image from 'next/image'
import moment from 'moment';

const PublishedArticle = ({ article, image, descriptions}) => {

    const description = descriptions.filter( desc => desc.id === "PublishedArticle")

    return ( 
        <div className={`${styles.card} col-span-2 overflow-hidden h-auto sm:w-84`}>
            { image ? <img className="h-full w-full object-contain" src={image} /> : <p>There's no image available</p> }

            <div className={`${styles.description} sm:pl-6 sm:pt-2 lg:pl-4 lg:pt-4 xl:pl-6 xl:pt-6 relative`}>
                <p className={`${styles.date} sm:text-xs lg:text-xxs`}>
                    {moment(article.created).format('MMM DD YYYY')}
                </p>

                <h1 className={`${styles.title} sm:text-lg sm:w-80 sm:pr-4 sm:pb-16 lg:text-sm lg:mb-10 lg:mr-10 xl:mb-16 xl:mr-8`}>
                    {article.title}
                </h1>

                <a href={article.link} target="_blank" className={`${styles.link} absolute bottom-0 mb-6 sm:text-xss lg:text-xxxs mr-1`}>{description[0].link}</a>
            </div>
        </div>
    );
}
 
export default PublishedArticle;