import styles from './Container3.module.css'
import descriptions from '../../assets/photos-descriptions.json'
import Image from 'next/image'

const Container3 = ({ id }) => {

    // Filter container specific descriptions
    const description = descriptions.filter( desc => desc.id === id)

    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'normal_container' : 'normal_container grey'

    return ( 
        <div className={background}>
            <div className={styles.container}>
                <div className={`${styles.main} lg:pl-32 lg:py-16`}>
                    <h1 className={`${styles.title} leading-12 lg:text-5xl lg:max-w-none lg:w-104`}>
                        {description[0].title}
                    </h1>

                    <p className={`${styles.subtitle} lg:text-xl lg:w-100`}>
                        {description[0].subtitle}
                    </p>

                    <p className={`${styles.subtitle} lg:text-xl lg:w-100 `}>
                        {description[0].subtitle2}
                    </p>
                </div>
                
                <div className={`${styles.image} lg:w-2/6 lg:ml-12 lg:pt-12`}>
                    <Image src="/images/1440/Photos/Section 3/box and apps graphic.png" width={442} height={608} />
                </div>
            </div>
        </div>
    );
}
 
export default Container3;