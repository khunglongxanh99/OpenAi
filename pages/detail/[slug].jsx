
import { GetStaticPathsContext, GetStaticPropsContext } from 'next';
import TheoryDetail from '../../src/components/modules/theory/TheoryDetail/TheoryDetail';
import { COURSE_DATA_TEST } from '../../src/utils/demo-data';
import { Layout } from "../../src/components/common";


export default function Slug({value}) {
  return <div className="page-recipe-detail">
     <Layout>
        <TheoryDetail item={value}/>
      </Layout>
  </div>
}


export async function getStaticProps({
  params,
  locale,
  locales,
  preview,
}) {
  
  const value = COURSE_DATA_TEST.find(value=>value.id == params.slug);

  return { props: { value: value } }
}

export async function getStaticPaths({ locales }) {
    const path = COURSE_DATA_TEST.map(value=>value.id);
    return {
        paths:locales ? locales.reduce((arr, locale) => {
          path.forEach((item) => {
            arr.push(`/${locale}/detail/${item}`)
          })
          return arr
        }, [])
        : path.map((item) => `/detail/${item}`),
        fallback:'blocking',
      };
}


