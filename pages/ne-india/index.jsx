import CommonHeader from "../../components/common/CommonHeader"
import Layout from "../../components/layout/Layout"



const NEIndiaPage = () => {
    return (
        <Layout>
                 <CommonHeader
                headerTitle="Northeast India News"
                headerCategories= { [
                    "Arunachal Pradesh",
                    "Assam",
                    "Manipur",
                    "Meghalaya",
                    "Mizoram",
                    "Nagaland",
                    "Sikkim",
                    "Tripura"
                ]}
            />

            
        </Layout>
    )
}

export default NEIndiaPage
