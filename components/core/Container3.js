import styles from './Container3.module.css'
import descriptions from '../../assets/core-descriptions.json'
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
                <div className={`${styles.main} items-center`}>
                    <h1 className={`${styles.title1} sm:text-center sm:w-84 sm:text-4xl sm:mt-12 lg:text-5xl xl:mt-24`}>
                        {description[0].title}
                    </h1>

                    <p className={`${styles.subtitle1} sm:text-center sm:w-10/12 sm:text-xl sm:mt-4 lg:text-lg lg:w-10/12 lg:pt-2`}>
                        {description[0].subtitle}
                    </p>
                </div>
                
                <div className={`sm:mt-4`}>
                    <Image src="/images/1440/Core/Section 3/Core interface.png" width={1008} height={658} />
                </div>
            </div>

            <div className={`grid grid-cols-2 gap-x-24 sm:flex sm:flex-col sm:mb-24 lg:py-16 xl:mb-40`}>
                <div className="flex flex-col items-center">
                    <h1 className={`${styles.title2} sm:text-3xl lg:text-5xl lg:w-84 lg:leading-tight`}>
                        {description[0].title2}
                    </h1>

                    <p className={`${styles.subtitle2} sm:text-lg sm:w-10/12 lg:text-lg lg:w-96`}>
                        {description[0].subtitle3}
                    </p>
                    <div className={`${styles.line}`}></div>
                </div>

                <div className="flex flex-col items-center sm:mt-12">
                    <h1 className={`${styles.title2} sm:text-3xl lg:text-5xl lg:w-84 lg:leading-tight`}>
                        {description[0].title3}
                    </h1>

                    <p className={`${styles.subtitle2} sm:text-lg sm:w-10/12 lg:text-lg lg:w-96`}>
                        {description[0].subtitle4}
                    </p>
                    <div className={`${styles.line}`}></div>
                </div>
            </div>
        </div>
    );
}
 
export default Container3;