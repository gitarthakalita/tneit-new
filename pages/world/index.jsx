import CommonHeader from "../../components/common/CommonHeader"
import Layout from "../../components/layout/Layout"



const WorldPage = () => {
    return (
        <Layout>
            <CommonHeader
                headerTitle="World News"
                headerCategories= { [ "Asia", "Africa", "Australia", "Europe", "North America", "South America"]}
            />
        </Layout>
    )
}

export default WorldPage
